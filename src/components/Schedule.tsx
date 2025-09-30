"use client";

import { useState, useMemo, useEffect } from "react";
import { useScheduleData } from "@/hooks/useScheduleData";
import type { Day, WorkoutSchedule, Heat } from "@/types/schedule";

export default function Schedule() {
  const [selectedTab, setSelectedTab] = useState<"All Days" | Day>("All Days");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedWorkouts, setExpandedWorkouts] = useState<Set<number>>(
    new Set(),
  );
  const [expandedHeats, setExpandedHeats] = useState<
    Set<string> // "workoutId-heatNumber"
  >(new Set());

  // Get fresh schedule data with SWR
  const { workouts: liveWorkouts, isValidating } = useScheduleData();

  // Filter workouts and heats based on search term
  const { filteredWorkouts, hasMatches } = useMemo(() => {
    const baseWorkouts =
      selectedTab === "All Days"
        ? liveWorkouts
        : liveWorkouts.filter((w) => w.day === selectedTab);

    if (!searchTerm.trim()) {
      return { filteredWorkouts: baseWorkouts, hasMatches: false };
    }

    const term = searchTerm.toLowerCase();
    const filtered = baseWorkouts
      .map((workout) => {
        // Filter heats to only include those with matching lanes
        const matchingHeats = workout.heats.filter((heat) => {
          if (!heat.lanes) return false;
          return heat.lanes.some(
            (lane) =>
              lane.competitor.toLowerCase().includes(term) ||
              lane.division.toLowerCase().includes(term) ||
              lane.affiliate.toLowerCase().includes(term),
          );
        });

        if (matchingHeats.length === 0) return null;

        return {
          ...workout,
          heats: matchingHeats,
        };
      })
      .filter((w) => w !== null) as WorkoutSchedule[];

    return { filteredWorkouts: filtered, hasMatches: true };
  }, [selectedTab, searchTerm, liveWorkouts]);

  // Auto-expand workouts and heats when searching
  useEffect(() => {
    if (searchTerm.trim() && hasMatches) {
      const workoutIds = new Set<number>();
      const heatKeys = new Set<string>();

      filteredWorkouts.forEach((workout) => {
        workoutIds.add(workout.id);
        workout.heats.forEach((heat) => {
          heatKeys.add(`${workout.id}-${heat.heatNumber}`);
        });
      });

      setExpandedWorkouts(workoutIds);
      setExpandedHeats(heatKeys);
    }
  }, [searchTerm, filteredWorkouts, hasMatches]);

  const fridayWorkouts = filteredWorkouts.filter((w) => w.day === "Friday");
  const saturdayWorkouts = filteredWorkouts.filter((w) => w.day === "Saturday");

  const toggleWorkout = (workoutId: number) => {
    setExpandedWorkouts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(workoutId)) {
        newSet.delete(workoutId);
        // Also collapse all heats for this workout
        setExpandedHeats((heatSet) => {
          const newHeatSet = new Set(heatSet);
          Array.from(newHeatSet).forEach((key) => {
            if (key.startsWith(`${workoutId}-`)) {
              newHeatSet.delete(key);
            }
          });
          return newHeatSet;
        });
      } else {
        newSet.add(workoutId);
      }
      return newSet;
    });
  };

  const toggleHeat = (workoutId: number, heatNumber: number) => {
    const key = `${workoutId}-${heatNumber}`;
    setExpandedHeats((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const checkMatch = (text: string) => {
    if (!searchTerm.trim()) return false;
    return text.toLowerCase().includes(searchTerm.toLowerCase());
  };

  return (
    <section id="schedule" className="py-16 bg-black">
      <div className="w-full px-4">
        <h2 className="text-5xl font-bebas text-center mb-8 text-white">
          Competition Schedule
        </h2>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for a team, division, or affiliate..."
              className="w-full pl-12 pr-4 py-3 bg-stone-900 border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-sunrise-gold focus:border-transparent"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className="flex items-center justify-between mt-2">
            <div>
              {searchTerm && filteredWorkouts.length === 0 && (
                <p className="text-gray-400 text-sm">
                  No matches found for "{searchTerm}"
                </p>
              )}
              {searchTerm && filteredWorkouts.length > 0 && (
                <p className="text-sunrise-gold text-sm">
                  Found matches in {filteredWorkouts.length} workout
                  {filteredWorkouts.length !== 1 ? "s" : ""}
                </p>
              )}
            </div>
            {isValidating && (
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <svg
                  className="animate-spin h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>Updating...</span>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 border-b border-gray-700">
          {(["All Days", "Friday", "Saturday"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                selectedTab === tab
                  ? "border-b-2 border-sunrise-gold text-sunrise-gold"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              {tab === "All Days"
                ? "ALL DAYS"
                : `${tab.toUpperCase()}, SEPT ${
                    tab === "Friday" ? "19" : "20"
                  }`}
            </button>
          ))}
        </div>

        {/* Schedule Content */}
        <div className="bg-black rounded-lg shadow-lg overflow-hidden max-h-[800px]">
          <div className="h-[800px] overflow-y-auto overflow-x-hidden">
            {selectedTab === "All Days" && (
              <>
                {/* Friday Section */}
                {fridayWorkouts.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bebas px-6 py-4 bg-stone-800 border-b border-stone-700 text-white sticky top-0 z-10">
                      FRIDAY, SEPT 19
                    </h3>
                    <WorkoutScheduleList
                      workouts={fridayWorkouts}
                      expandedWorkouts={expandedWorkouts}
                      expandedHeats={expandedHeats}
                      toggleWorkout={toggleWorkout}
                      toggleHeat={toggleHeat}
                      searchTerm={searchTerm}
                      checkMatch={checkMatch}
                    />
                  </div>
                )}

                {/* Saturday Section */}
                {saturdayWorkouts.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bebas px-6 py-4 bg-stone-800 border-b border-stone-700 text-white sticky top-0 z-10">
                      SATURDAY, SEPT 20
                    </h3>
                    <WorkoutScheduleList
                      workouts={saturdayWorkouts}
                      expandedWorkouts={expandedWorkouts}
                      expandedHeats={expandedHeats}
                      toggleWorkout={toggleWorkout}
                      toggleHeat={toggleHeat}
                      searchTerm={searchTerm}
                      checkMatch={checkMatch}
                    />
                  </div>
                )}
              </>
            )}

            {selectedTab !== "All Days" && (
              <div>
                <h3 className="text-2xl font-bebas px-6 py-4 bg-stone-800 border-b border-stone-700 text-white sticky top-0 z-10">
                  {selectedTab.toUpperCase()}, SEPT {selectedTab === "Friday" ? "19" : "20"}
                </h3>
                <WorkoutScheduleList
                  workouts={filteredWorkouts}
                  expandedWorkouts={expandedWorkouts}
                  expandedHeats={expandedHeats}
                  toggleWorkout={toggleWorkout}
                  toggleHeat={toggleHeat}
                  searchTerm={searchTerm}
                  checkMatch={checkMatch}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

interface WorkoutScheduleListProps {
  workouts: WorkoutSchedule[];
  expandedWorkouts: Set<number>;
  expandedHeats: Set<string>;
  toggleWorkout: (id: number) => void;
  toggleHeat: (workoutId: number, heatNumber: number) => void;
  searchTerm: string;
  checkMatch: (text: string) => boolean;
}

function WorkoutScheduleList({
  workouts,
  expandedWorkouts,
  expandedHeats,
  toggleWorkout,
  toggleHeat,
  searchTerm,
  checkMatch,
}: WorkoutScheduleListProps) {
  if (workouts.length === 0) {
    return (
      <div className="px-6 py-12 text-center text-gray-400">
        No workouts scheduled.
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-800">
      {workouts.map((workout) => {
        const isExpanded = expandedWorkouts.has(workout.id);
        const hasLaneAssignments = workout.heats[0]?.lanes !== null;

        return (
          <div key={workout.id} className="bg-black">
            {/* Workout Header - Clickable and Sticky */}
            <button
              onClick={() => toggleWorkout(workout.id)}
              className="sticky top-[57px] z-[8] w-full px-6 py-4 flex items-center justify-between bg-black hover:bg-stone-900 transition-colors text-left border-b border-gray-800"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-forest-green to-forest-green-light rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bebas">
                    WOD {workout.workoutNumber}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bebas uppercase tracking-wide text-white">
                    {workout.workoutName}
                  </h4>
                  <div className="flex items-center gap-4 mt-1 flex-wrap">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-sunrise-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm text-gray-300">
                        {workout.timeRange}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-sunrise-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-sm text-gray-300">
                        {workout.location}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 bg-stone-800 px-2 py-1 rounded">
                      {workout.heats.length} heat{workout.heats.length !== 1 ? "s" : ""}
                      {searchTerm ? " (filtered)" : ""}
                    </span>
                  </div>
                </div>
              </div>
              <svg
                className={`w-6 h-6 text-gray-400 transition-transform ${
                  isExpanded ? "rotate-180" : ""
                }`}
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
            </button>

            {/* Heats - Expandable */}
            {isExpanded && (
              <div className="bg-stone-900 border-t border-gray-800">
                {workout.heats.map((heat) => {
                  const heatKey = `${workout.id}-${heat.heatNumber}`;
                  const isHeatExpanded = expandedHeats.has(heatKey);

                  return (
                    <div
                      key={heat.heatNumber}
                      className="border-b border-gray-800 last:border-b-0"
                    >
                      {/* Heat Header */}
                      <button
                        onClick={() =>
                          hasLaneAssignments &&
                          toggleHeat(workout.id, heat.heatNumber)
                        }
                        disabled={!hasLaneAssignments}
                        className={`sticky top-[153px] z-[5] w-full px-8 py-3 flex items-center justify-between text-left bg-stone-900 border-b border-gray-800 ${
                          hasLaneAssignments
                            ? "hover:bg-stone-800 cursor-pointer"
                            : "cursor-not-allowed opacity-75"
                        } transition-colors`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-bebas text-gray-300">
                            Heat {heat.heatNumber}
                          </span>
                          <span className="text-sm text-gray-400">
                            {heat.time}
                          </span>
                          {!hasLaneAssignments && (
                            <span className="text-xs text-sunrise-gold bg-sunrise-gold/10 px-2 py-1 rounded">
                              Lane Assignment Pending
                            </span>
                          )}
                        </div>
                        {hasLaneAssignments && (
                          <svg
                            className={`w-5 h-5 text-gray-400 transition-transform ${
                              isHeatExpanded ? "rotate-180" : ""
                            }`}
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
                        )}
                      </button>

                      {/* Lane Assignments */}
                      {isHeatExpanded && hasLaneAssignments && heat.lanes && (
                        <div className="bg-stone-950">
                          {/* Lane List */}
                          <div className="px-8 py-3 space-y-2">
                            {heat.lanes.map((lane) => {
                              const isMatch =
                                checkMatch(lane.competitor) ||
                                checkMatch(lane.division) ||
                                checkMatch(lane.affiliate);

                              return (
                                <div
                                  key={lane.lane}
                                  className={`rounded p-2 transition-all ${
                                    isMatch
                                      ? "bg-sunrise-gold/20 border-2 border-sunrise-gold"
                                      : "bg-stone-900 border border-gray-800 hover:border-gray-700"
                                  }`}
                                >
                                  <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                      <div
                                        className={`flex-shrink-0 w-8 h-8 rounded flex items-center justify-center ${
                                          isMatch
                                            ? "bg-sunrise-gold"
                                            : "bg-forest-green"
                                        }`}
                                      >
                                        <span
                                          className={`font-bold text-sm ${
                                            isMatch ? "text-black" : "text-white"
                                          }`}
                                        >
                                          {lane.lane}
                                        </span>
                                      </div>
                                      <span className="text-xs text-gray-500 uppercase">Lane</span>
                                    </div>
                                    <div className="flex items-center gap-3 flex-1 justify-between min-w-0">
                                      <span
                                        className={`font-semibold text-sm min-w-[180px] max-w-[250px] ${
                                          isMatch ? "text-white" : "text-white"
                                        }`}
                                      >
                                        {lane.competitor}
                                      </span>
                                      <span
                                        className={`text-xs min-w-[200px] max-w-[300px] ${
                                          isMatch
                                            ? "text-gray-200"
                                            : "text-gray-400"
                                        }`}
                                      >
                                        {lane.affiliate}
                                      </span>
                                      <span
                                        className={`text-xs min-w-[140px] max-w-[180px] text-right ${
                                          isMatch
                                            ? "text-sunrise-gold font-semibold"
                                            : "text-sunrise-gold"
                                        }`}
                                      >
                                        {lane.division}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
