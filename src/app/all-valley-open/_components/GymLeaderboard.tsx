"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { LeaderboardGym } from "@/types/leaderboard";

interface GymLeaderboardProps {
  gyms: LeaderboardGym[];
}

function divisionTag(division: string, rank: number) {
  const letter = division.toLowerCase().includes("women") ? "F" : "M";
  return `${letter}${rank}`;
}

export default function GymLeaderboard({ gyms }: GymLeaderboardProps) {
  const [expandedGym, setExpandedGym] = useState<string | null>(null);

  // Derive event names from first gym's first athlete
  const eventNames =
    gyms[0]?.athletes[0]?.events.map((e) => e.eventName) ?? [];

  return (
    <div>
      {/* Scoring explainer */}
      <div className="bg-stone-900 border border-gray-700 rounded p-4 mb-6">
        <p className="text-sm text-gray-300">
          <span className="text-sunrise-gold font-bold">How it works:</span>{" "}
          For each event, the top 6 men and top 6 women per gym contribute
          their event points. Different athletes can contribute for different
          events. Gym score = sum of all contributing points across events.
        </p>
      </div>

      {/* Gym table */}
      <div className="space-y-2">
        {gyms.map((gym) => {
          const isExpanded = expandedGym === gym.name;
          return (
            <div
              key={gym.name}
              className="border border-gray-800 rounded overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setExpandedGym(isExpanded ? null : gym.name)}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-stone-900 transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={cn(
                      "inline-flex items-center justify-center w-8 h-8 rounded text-sm font-bold",
                      gym.rank <= 3
                        ? "bg-sunrise-gold text-pitch-black"
                        : "bg-stone-800 text-gray-300",
                    )}
                  >
                    {gym.rank}
                  </span>
                  <div>
                    <span className="text-white font-medium block">
                      {gym.name}
                    </span>
                    <span className="text-xs text-gray-400">
                      {gym.athleteCount} athlete
                      {gym.athleteCount !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sunrise-gold font-bold text-lg">
                    {gym.totalScore}
                  </span>
                  <svg
                    aria-hidden="true"
                    className={cn(
                      "w-5 h-5 text-gray-400 transition-transform",
                      isExpanded && "rotate-180",
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {isExpanded && (
                <div className="border-t border-gray-800 bg-stone-950 px-4 py-3 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-xs uppercase text-gray-500">
                        <th className="text-left py-1 px-2">Athlete</th>
                        <th className="text-center py-1 px-2">Div</th>
                        {eventNames.map((name) => (
                          <th key={name} className="text-right py-1 px-2">
                            {name}
                          </th>
                        ))}
                        <th className="text-right py-1 px-2">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gym.athletes.map((athlete) => (
                        <tr
                          key={athlete.name}
                          className="border-t border-gray-800/50"
                        >
                          <td className="py-2 px-2 text-gray-300">
                            {athlete.name}
                          </td>
                          <td className="py-2 px-2 text-center">
                            <span
                              className={cn(
                                "text-xs font-mono px-1.5 py-0.5 rounded",
                                athlete.division.toLowerCase().includes("women")
                                  ? "bg-pink-900/30 text-pink-300"
                                  : "bg-blue-900/30 text-blue-300",
                              )}
                            >
                              {divisionTag(athlete.division, athlete.divisionRank)}
                            </span>
                          </td>
                          {athlete.events.map((ev) => (
                            <td
                              key={ev.eventId}
                              className={cn(
                                "py-2 px-2 text-right",
                                ev.contributing
                                  ? "text-forest-green-light font-medium"
                                  : "text-gray-500",
                              )}
                            >
                              {ev.points}
                            </td>
                          ))}
                          <td className="py-2 px-2 text-right font-medium text-gray-300">
                            {athlete.contributingTotal > 0
                              ? athlete.contributingTotal
                              : "--"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {gyms.length === 0 && (
        <p className="text-gray-400 text-center py-12">
          No gym data available yet.
        </p>
      )}
    </div>
  );
}
