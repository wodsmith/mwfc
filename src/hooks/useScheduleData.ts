"use client";

import { useQuery } from "@tanstack/react-query";
import type { WorkoutSchedule } from "@/types/schedule";
import { workoutSchedules } from "@/data/scheduleData";

interface ScheduleResponse {
  workouts: WorkoutSchedule[];
}

async function fetchSchedule(): Promise<WorkoutSchedule[]> {
  const response = await fetch("/api/schedule");

  if (!response.ok) {
    throw new Error(`Failed to fetch schedule: ${response.status}`);
  }

  const data: ScheduleResponse = await response.json();
  return data.workouts;
}

export function useScheduleData() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["schedule"],
    queryFn: fetchSchedule,
    initialData: workoutSchedules, // Start with static data
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 5 * 60 * 1000, // Auto-refetch every 5 minutes
  });

  return {
    workouts: data,
    isValidating: isLoading,
    error: error as Error | null,
    mutate: refetch,
  };
}
