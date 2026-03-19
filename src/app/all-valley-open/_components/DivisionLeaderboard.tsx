"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { LeaderboardDivision } from "@/types/leaderboard";

interface DivisionLeaderboardProps {
  divisions: LeaderboardDivision[];
}

export default function DivisionLeaderboard({
  divisions,
}: DivisionLeaderboardProps) {
  const [selectedDivision, setSelectedDivision] = useState(
    divisions[0]?.id ?? "",
  );

  const division = divisions.find((d) => d.id === selectedDivision);
  const eventNames =
    division?.athletes[0]?.events.map((e) => e.eventName) ?? [];

  return (
    <div>
      {/* Division selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {divisions.map((d) => (
          <button
            type="button"
            key={d.id}
            onClick={() => setSelectedDivision(d.id)}
            className={cn(
              "px-4 py-2 text-sm font-bold transition-colors rounded",
              selectedDivision === d.id
                ? "bg-sunrise-gold text-pitch-black"
                : "bg-stone-800 text-gray-300 hover:bg-stone-700",
            )}
          >
            {d.name}
          </button>
        ))}
      </div>

      {/* Athlete table */}
      {division && (
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700 text-xs uppercase text-gray-400">
                <th className="py-3 px-3 w-16">Rank</th>
                <th className="py-3 px-3">Name</th>
                <th className="py-3 px-3 hidden md:table-cell">Affiliate</th>
                {eventNames.map((name) => (
                  <th
                    key={name}
                    className="py-3 px-3 text-center hidden sm:table-cell"
                  >
                    {name}
                  </th>
                ))}
                <th className="py-3 px-3 text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {division.athletes.map((athlete) => (
                <tr
                  key={athlete.userId}
                  className="border-b border-gray-800 hover:bg-stone-900 transition-colors"
                >
                  <td className="py-3 px-3">
                    <span
                      className={cn(
                        "inline-flex items-center justify-center w-8 h-8 rounded text-sm font-bold",
                        athlete.rank <= 3
                          ? "bg-sunrise-gold text-pitch-black"
                          : "bg-stone-800 text-gray-300",
                      )}
                    >
                      {athlete.rank}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <span className="text-white font-medium">
                      {athlete.name}
                    </span>
                    <span className="block text-xs text-gray-400 md:hidden">
                      {athlete.affiliateName}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-gray-400 text-sm hidden md:table-cell">
                    {athlete.affiliateName}
                  </td>
                  {athlete.events.map((event) => (
                    <td
                      key={event.eventId}
                      className="py-3 px-3 text-center hidden sm:table-cell"
                    >
                      <span className="text-gray-300 text-sm">
                        {event.points}
                      </span>
                      <span className="block text-xs text-gray-500">
                        {event.score}
                      </span>
                    </td>
                  ))}
                  <td className="py-3 px-3 text-center">
                    <span className="text-sunrise-gold font-bold">
                      {athlete.totalPoints}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {division && division.athletes.length === 0 && (
        <p className="text-gray-400 text-center py-12">
          No scores submitted yet.
        </p>
      )}
    </div>
  );
}
