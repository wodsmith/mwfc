"use client";

import { useQuery } from "@tanstack/react-query";
import type { WorkoutSchedule } from "@/types/schedule";
import { workoutSchedules, WORKOUT_API_URLS } from "@/data/scheduleData";
import {
  transformApiDataToWorkout,
  mergeWorkoutData,
  type CompetitionCornerHeat,
} from "@/lib/scheduleUtils";

async function fetchWorkoutData(
  workoutId: number,
): Promise<Partial<WorkoutSchedule> | null> {
  const url = WORKOUT_API_URLS[workoutId as keyof typeof WORKOUT_API_URLS];
  if (!url) {
    console.warn(`No API URL found for workout ${workoutId}`);
    return null;
  }

  try {
    const response = await fetch(url);

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

async function fetchSchedule(): Promise<WorkoutSchedule[]> {
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

    return workouts;
  } catch (error) {
    console.error("Critical error in schedule fetch:", error);
    // Always return static data as ultimate fallback
    return workoutSchedules;
  }
}

export function useScheduleData() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["schedule"],
    queryFn: fetchSchedule,
    placeholderData: workoutSchedules, // Use placeholder instead of initialData to avoid caching static data
    staleTime: 1 * 60 * 1000, // 1 minute - reduced to refetch more frequently
    refetchInterval: 1 * 60 * 1000, // Auto-refetch every 1 minute
    gcTime: 0, // Don't cache failed results
  });

  return {
    workouts: data ?? workoutSchedules, // Fallback to static if no data
    isValidating: isLoading,
    error: error as Error | null,
    mutate: refetch,
  };
}
