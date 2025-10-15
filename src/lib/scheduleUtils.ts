import type { WorkoutSchedule, Heat, LaneAssignment } from "@/types/schedule";

// Type for the Competition Corner API response
export interface CompetitionCornerHeat {
  title: string; // e.g., "Heat 1"
  time: string;
  stations: Array<{
    station: number;
    participantName: string;
    affiliate: string;
    division: string;
    teammates: string;
  }>;
}

/**
 * Transform Competition Corner API data to our WorkoutSchedule format
 */
export function transformApiDataToWorkout(
  apiData: CompetitionCornerHeat[],
  workoutId: number,
): Partial<WorkoutSchedule> {
  const heats: Heat[] = apiData.map((heat) => ({
    heatNumber: Number.parseInt(heat.title.replace("Heat ", "")),
    time: heat.time,
    lanes: heat.stations.map(
      (station): LaneAssignment => ({
        lane: station.station,
        competitor: station.participantName,
        affiliate: station.affiliate,
        division: station.division,
        teammates: station.teammates,
      }),
    ),
  }));

  return {
    heats,
  };
}

/**
 * Merge fresh API data with static workout data
 */
export function mergeWorkoutData(
  staticWorkout: WorkoutSchedule,
  apiData: Partial<WorkoutSchedule>,
): WorkoutSchedule {
  return {
    ...staticWorkout,
    ...apiData,
  };
}
