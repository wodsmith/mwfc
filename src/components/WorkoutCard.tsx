"use client";

import { useState } from "react";
import { Workout, WorkoutDivision } from "@/types/workout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface WorkoutCardProps {
  workout: Workout;
}

function PartnerDivisionContent({
  division,
  athlete2Instructions,
  switchInstructions,
  scoring,
}: {
  division: WorkoutDivision;
  athlete2Instructions?: string;
  switchInstructions?: string;
  scoring?: string;
}) {
  return (
    <div className="flex flex-col gap-6 justify-around h-full">
      <div>
        <div className="flex flex-col sm:flex-row justify-between">
          <h4 className="text-xl font-bold text-white mb-4">ATHLETE 1</h4>
          <div className="space-y-2 text-white text-lg">
            {division.deadlifts && (
              <div>
                {division.deadlifts.reps} DEADLIFTS{" "}
                <span className="text-stone-300">
                  {division.deadlifts.weight}
                </span>
              </div>
            )}
            {division.burpees && (
              <div>
                {division.burpees.reps} {division.burpees.type}
              </div>
            )}
            {division.wallBalls && (
              <div>
                {division.wallBalls.reps} WALL BALLS{" "}
                <span className="text-stone-300">
                  {division.wallBalls.weight}
                  {division.wallBalls.height}
                </span>
              </div>
            )}
          </div>
          {athlete2Instructions && (
            <>
              <div className="text-3xl font-bold text-sunrise-gold text-center">
                +
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">ATHLETE 2</h4>
                <div className="text-white text-lg">{athlete2Instructions}</div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="border-t border-stone-600 pt-4">
        {switchInstructions && (
          <p className="text-stone-300 italic text-sm mb-4">
            -{switchInstructions}
          </p>
        )}
        {scoring && <p className="text-white font-bold">{scoring}</p>}
      </div>
    </div>
  );
}

function RoundsDivisionContent({
  division,
  switchInstructions,
  additionalNotes,
}: {
  division: WorkoutDivision;
  switchInstructions?: string;
  additionalNotes?: string[];
}) {
  return (
    <div className="space-y-6">
      {division.rounds?.map((round, index) => (
        <div key={index}>
          {division.notes?.[index] && (
            <h4 className="text-xl font-bold text-sunrise-gold mb-3">
              {division.notes[index]}
            </h4>
          )}
          <div className="space-y-2 text-white text-lg">
            {round.movements.map((movement, moveIndex) => (
              <div key={moveIndex}>{movement}</div>
            ))}
          </div>
        </div>
      ))}

      {division.dumbbellWeight && (
        <div className="text-white">
          <p className="font-bold">
            DUMBBELL WEIGHTS:{" "}
            <span className="text-stone-300">{division.dumbbellWeight}</span>
          </p>
        </div>
      )}

      {(switchInstructions || additionalNotes) && (
        <div className="border-t border-stone-600 pt-4 space-y-2">
          {switchInstructions && (
            <p className="text-stone-300 italic text-sm">
              -{switchInstructions}
            </p>
          )}
          {additionalNotes?.map((note, index) => (
            <p key={index} className="text-stone-300 italic text-sm">
              {note}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

function BarbellHoldDivisionContent({
  division,
  switchInstructions,
  additionalNotes,
}: {
  division: WorkoutDivision;
  switchInstructions?: string;
  additionalNotes?: string[];
}) {
  return (
    <div className="space-y-6">
      {division.movements && (
        <div className="space-y-2 text-white text-lg">
          {division.movements.map((movement, index) => (
            <div
              key={index}
              className={
                movement.startsWith("*")
                  ? "text-stone-300 italic text-base ml-4"
                  : ""
              }
            >
              {movement}
            </div>
          ))}
        </div>
      )}

      {division.barbellHold && (
        <div className="bg-stone-700/30 p-4 rounded-lg">
          <h4 className="text-lg font-bold text-sunrise-gold mb-3">
            *BARBELL HOLD:
          </h4>
          <div className="space-y-1 text-white">
            <div>
              MEN: <span className="font-bold">{division.barbellHold.men}</span>
            </div>
            <div>
              WOMEN:{" "}
              <span className="font-bold">{division.barbellHold.women}</span>
            </div>
            <div>
              CO-ED:{" "}
              <span className="font-bold">{division.barbellHold.coed}</span>
            </div>
          </div>
        </div>
      )}

      {switchInstructions && (
        <div className="bg-stone-700/20 p-4 rounded">
          <p className="text-stone-300 text-sm italic">*{switchInstructions}</p>
        </div>
      )}

      {additionalNotes && (
        <div className="text-center">
          {additionalNotes.map((note, index) => (
            <p key={index} className="text-white font-bold text-lg">
              {note}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

function getSponsorLogo(sponsorName: string): string {
  const logoMap: { [key: string]: string } = {
    "PROPATH FINANCIAL": "pro-path-financial.svg",
    SCHEELS: "scheels.svg",
    RXSG: "rxsg.svg",
    GYMREAPERS: "gymreapers.svg",
    REIGN: "reign.svg",
    "NUTRISHOP / RESTORE": "nutrishop.svg",
    "Advanced Mobile IV": "advanced-mobile-iv.svg",
    "Heavy Handed": "heavy-handed.svg",
    "HGR CBD": "hgr-cbd.svg",
    Linear: "linear.svg",
    "Strong Coffee": "strong-coffee.svg",
    TYR: "tyr.svg",
    "US Army": "us-army.svg",
  };

  return logoMap[sponsorName] || "";
}

function getWorkoutLayout(workoutId: string): string {
  const layoutMap: { [key: string]: string } = {
    sawtooth: "workout-1-layout.jpg",
    steelhead: "workout-2-layout.jpg",
    "spud-nation": "workout-3-layout.jpg",
    bronco: "workout-4-layout.jpg",
    vandal: "workout-5-layout.jpg",
    "mw-tommy-v": "workout-6-layout.jpg",
  };

  return layoutMap[workoutId] || "";
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  const [viewMode, setViewMode] = useState<"workout" | "layout">("workout");
  const hasRounds = workout.rx.rounds && workout.rx.rounds.length > 0;
  const hasBarbellHold = workout.rx.barbellHold !== undefined;
  const hasMovements = workout.rx.movements && workout.rx.movements.length > 0;

  const getDivisionContent = (division: WorkoutDivision) => {
    if (hasBarbellHold || (hasMovements && !hasRounds)) {
      return (
        <BarbellHoldDivisionContent
          division={division}
          switchInstructions={workout.switchInstructions}
          additionalNotes={workout.additionalNotes}
        />
      );
    } else if (hasRounds) {
      return (
        <RoundsDivisionContent
          division={division}
          switchInstructions={workout.switchInstructions}
          additionalNotes={workout.additionalNotes}
        />
      );
    } else {
      return (
        <PartnerDivisionContent
          division={division}
          athlete2Instructions={workout.athlete2Instructions}
          switchInstructions={workout.switchInstructions}
          scoring={workout.scoring}
        />
      );
    }
  };

  const sponsorLogo = getSponsorLogo(workout.sponsor.name);
  const workoutLayout = getWorkoutLayout(workout.id);

  return (
    <div
      id={workout.id}
      className="w-full bg-gradient-to-br from-stone-900 to-stone-800 rounded-lg overflow-hidden shadow-xl"
    >
      <Tabs defaultValue="rx" className="w-full">
        {/* Desktop Layout */}
        <div className="hidden lg:flex min-h-[400px]">
          {/* Left side - Title, Format, and Toggles */}
          <div className="flex flex-col w-1/3 p-8 relative">
            {/* Title and Format */}
            <div className="mb-8">
              <h3 className="text-4xl font-bebas text-white mb-4">
                {workout.title}:{" "}
                <span className="text-sunrise-gold">{workout.subtitle}</span>
              </h3>
              <div className="bg-sunrise-gold text-black px-6 py-3 rounded-lg inline-block">
                <span className="text-2xl font-bold">
                  {workout.duration} {workout.workoutType}
                </span>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-2 bg-stone-700/50 p-1 rounded-lg">
                <button
                  onClick={() => setViewMode("workout")}
                  className={`py-2 px-3 rounded font-bold text-sm transition-colors ${
                    viewMode === "workout"
                      ? "bg-[#FFB700] text-black"
                      : "text-white hover:bg-stone-600/50"
                  }`}
                >
                  WORKOUT
                </button>
                <button
                  onClick={() => setViewMode("layout")}
                  className={`py-2 px-3 rounded font-bold text-sm transition-colors ${
                    viewMode === "layout"
                      ? "bg-[#FFB700] text-black"
                      : "text-white hover:bg-stone-600/50"
                  }`}
                >
                  LAYOUT
                </button>
              </div>
            </div>

            {/* Division Toggles - Only show when in workout mode */}
            {viewMode === "workout" && (
              <div className="flex-1">
                <TabsList className="grid w-full grid-cols-1 gap-2 bg-transparent mb-6 h-auto">
                  <TabsTrigger
                    value="rx"
                    className="data-[state=active]:bg-[#FFB700] data-[state=active]:text-black font-bold bg-stone-700/50 text-white py-3"
                  >
                    RX DIVISION
                  </TabsTrigger>
                  <TabsTrigger
                    value="intermediate"
                    className="data-[state=active]:bg-[#FFB700] data-[state=active]:text-black font-bold bg-stone-700/50 text-white py-3"
                  >
                    INTERMEDIATE
                  </TabsTrigger>
                  <TabsTrigger
                    value="rookie"
                    className="data-[state=active]:bg-[#FFB700] data-[state=active]:text-black font-bold bg-stone-700/50 text-white py-3"
                  >
                    ROOKIE
                  </TabsTrigger>
                </TabsList>
              </div>
            )}

            {/* Sponsor Logo */}
            {workout.sponsor.name !== "TBD" && sponsorLogo && (
              <div className="mt-auto pt-6">
                <p className="text-stone-400 text-sm mb-3">PRESENTED BY</p>
                <div className="space-y-3">
                  <div className="w-32 h-16 flex items-center">
                    <img
                      src={`/brands/${sponsorLogo}`}
                      alt={workout.sponsor.name}
                      className="max-w-full max-h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                  {workout.sponsor.secondaryLogo && (
                    <div className="w-32 h-16 flex items-center">
                      <img
                        src={workout.sponsor.secondaryLogo}
                        alt="Secondary sponsor"
                        className="max-w-full max-h-full object-contain filter brightness-0 invert"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right side - Workout Content or Layout */}
          <div className="flex-1 p-8 border-l border-stone-700">
            {viewMode === "workout" ? (
              <>
                <TabsContent value="rx" className="mt-0 h-full">
                  {getDivisionContent(workout.rx)}
                </TabsContent>

                <TabsContent value="intermediate" className="mt-0 h-full">
                  {getDivisionContent(workout.intermediate)}
                </TabsContent>

                <TabsContent value="rookie" className="mt-0 h-full">
                  {getDivisionContent(workout.rookie)}
                </TabsContent>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                {workoutLayout ? (
                  <img
                    src={`/workout-layouts/${workoutLayout}`}
                    alt={`${workout.title} Layout`}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                ) : (
                  <div className="text-center text-stone-400">
                    <p className="text-lg">Layout not available</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Title and Format */}
          <div className="p-6 pb-4">
            <h3 className="text-3xl font-bebas text-white mb-4">
              {workout.title}:{" "}
              <span className="text-sunrise-gold">{workout.subtitle}</span>
            </h3>
            <div className="bg-sunrise-gold text-black px-6 py-3 rounded-lg inline-block mb-6">
              <span className="text-xl font-bold">
                {workout.duration} {workout.workoutType}
              </span>
            </div>

            {/* View Mode Toggle */}
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-2 bg-stone-700/50 p-1 rounded-lg">
                <button
                  onClick={() => setViewMode("workout")}
                  className={`py-2 px-3 rounded font-bold text-sm transition-colors ${
                    viewMode === "workout"
                      ? "bg-[#FFB700] text-black"
                      : "text-white hover:bg-stone-600/50"
                  }`}
                >
                  WORKOUT
                </button>
                <button
                  onClick={() => setViewMode("layout")}
                  className={`py-2 px-3 rounded font-bold text-sm transition-colors ${
                    viewMode === "layout"
                      ? "bg-[#FFB700] text-black"
                      : "text-white hover:bg-stone-600/50"
                  }`}
                >
                  LAYOUT
                </button>
              </div>
            </div>

            {viewMode === "workout" ? (
              <>
                {/* Division Toggles */}
                <TabsList className="grid w-full grid-cols-3 bg-stone-700/50 mb-6">
                  <TabsTrigger
                    value="rx"
                    className="data-[state=active]:bg-[#FFB700] data-[state=active]:text-black font-bold text-white"
                  >
                    RX
                  </TabsTrigger>
                  <TabsTrigger
                    value="intermediate"
                    className="data-[state=active]:bg-[#FFB700] data-[state=active]:text-black font-bold text-white"
                  >
                    INT
                  </TabsTrigger>
                  <TabsTrigger
                    value="rookie"
                    className="data-[state=active]:bg-[#FFB700] data-[state=active]:text-black font-bold text-white"
                  >
                    ROOKIE
                  </TabsTrigger>
                </TabsList>

                {/* Workout Content */}
                <TabsContent value="rx" className="mt-0">
                  {getDivisionContent(workout.rx)}
                </TabsContent>

                <TabsContent value="intermediate" className="mt-0">
                  {getDivisionContent(workout.intermediate)}
                </TabsContent>

                <TabsContent value="rookie" className="mt-0">
                  {getDivisionContent(workout.rookie)}
                </TabsContent>
              </>
            ) : (
              /* Layout View */
              <div className="flex items-center justify-center min-h-[300px]">
                {workoutLayout ? (
                  <img
                    src={`/workout-layouts/${workoutLayout}`}
                    alt={`${workout.title} Layout`}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                ) : (
                  <div className="text-center text-stone-400">
                    <p className="text-lg">Layout not available</p>
                  </div>
                )}
              </div>
            )}

            {/* Sponsor Logo */}
            {workout.sponsor.name !== "TBD" && sponsorLogo && (
              <div className="mt-8 pt-6 border-t border-stone-700 text-center">
                <p className="text-stone-400 text-sm mb-3">PRESENTED BY</p>
                <div className="flex justify-center">
                  <div className="space-y-3">
                    <div className="w-24 h-12 flex items-center justify-center">
                      <img
                        src={`/brands/${sponsorLogo}`}
                        alt={workout.sponsor.name}
                        className="max-w-full max-h-full object-contain filter brightness-0 invert"
                      />
                    </div>
                    {workout.sponsor.secondaryLogo && (
                      <div className="w-24 h-12 flex items-center justify-center">
                        <img
                          src={workout.sponsor.secondaryLogo}
                          alt="Secondary sponsor"
                          className="max-w-full max-h-full object-contain filter brightness-0 invert"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Tabs>
    </div>
  );
}
