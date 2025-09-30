import { NextResponse } from "next/server";
import { workoutSchedules, WORKOUT_API_URLS } from "@/data/scheduleData";
import {
  transformApiDataToWorkout,
  mergeWorkoutData,
  type CompetitionCornerHeat,
} from "@/lib/scheduleUtils";
import type { WorkoutSchedule } from "@/types/schedule";

export const dynamic = "force-dynamic";

async function fetchWorkoutData(
  workoutId: number,
): Promise<Partial<WorkoutSchedule> | null> {
  const url = WORKOUT_API_URLS[workoutId as keyof typeof WORKOUT_API_URLS];
  if (!url) {
    console.warn(`No API URL found for workout ${workoutId}`);
    return null;
  }

  try {
    const response = await fetch(url, {
      next: { revalidate: 300 },
      headers: {
        "User-Agent": "MWFC-Schedule-Bot/1.0",
      },
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch workout ${workoutId}: ${response.status} ${response.statusText}`,
      );
      return null;
    }

    const apiData: CompetitionCornerHeat[] = await response.json();
    return transformApiDataToWorkout(apiData, workoutId);
  } catch (error) {
    console.error(`Error fetching workout ${workoutId}:`, error);
    return null;
  }
}

export async function GET() {
  try {
    // Fetch all workouts in parallel
    const results = await Promise.allSettled(
      workoutSchedules.map(async (workout) => {
        try {
          const freshData = await fetchWorkoutData(workout.id);
          if (freshData) {
            return mergeWorkoutData(workout, freshData);
          }
          return workout;
        } catch (error) {
          console.error(`Error processing workout ${workout.id}:`, error);
          return workout; // Return static data on error
        }
      }),
    );

    // Extract successful results or fall back to static data
    const workouts = results.map((result, index) => {
      if (result.status === "fulfilled") {
        return result.value;
      }
      console.warn(
        `Failed to fetch workout ${workoutSchedules[index].id}, using static data`,
      );
      return workoutSchedules[index];
    });

    return NextResponse.json(
      { workouts },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      },
    );
  } catch (error) {
    console.error("Critical error in schedule API:", error);
    // Always return static data as ultimate fallback
    return NextResponse.json(
      { workouts: workoutSchedules },
      {
        status: 200, // Return 200 with static data instead of 500
        headers: {
          "Cache-Control": "public, s-maxage=60",
        },
      },
    );
  }
}
