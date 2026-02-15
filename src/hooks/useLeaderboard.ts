"use client";

import { useQuery } from "@tanstack/react-query";
import type { LeaderboardData } from "@/types/leaderboard";

const API_URL = process.env.NEXT_PUBLIC_LEADERBOARD_API_URL ?? "";

async function fetchLeaderboard(
  competitionId: string,
): Promise<LeaderboardData> {
  const response = await fetch(`${API_URL}/leaderboard/${competitionId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch leaderboard: ${response.status}`);
  }
  return response.json();
}

export function useLeaderboard(competitionId: string) {
  return useQuery({
    queryKey: ["leaderboard", competitionId],
    queryFn: () => fetchLeaderboard(competitionId),
    refetchInterval: 60_000,
    staleTime: 60_000,
  });
}
