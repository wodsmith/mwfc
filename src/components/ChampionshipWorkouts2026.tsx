"use client";

import { Dumbbell, Map as MapIcon, Mountain, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  type ChampionshipWorkout,
  championshipWorkoutGroups,
} from "@/data/workouts2026";

type CardView = "workout" | "layout";

const sponsorLogos: Partial<Record<string, string>> = {
  "Reign Total Body Fuel": "/brands/reign.svg",
  Gymreapers: "/brands/gymreapers.svg",
  RXSG: "/brands/rxsg.svg",
};

function WorkoutCard({
  workout,
  groupId,
}: {
  workout: ChampionshipWorkout;
  groupId: "individual" | "team";
}) {
  const [view, setView] = useState<CardView>("workout");
  const [division, setDivision] = useState(workout.variants[0].division);
  const activeVariant =
    workout.variants.find((variant) => variant.division === division) ??
    workout.variants[0];
  const lineCounts = new globalThis.Map<string, number>();
  const numberedLines = activeVariant.lines.map((line) => {
    const occurrence = (lineCounts.get(line) ?? 0) + 1;
    lineCounts.set(line, occurrence);
    return { key: `${line}-${occurrence}`, line };
  });
  const sponsorLogo = sponsorLogos[workout.sponsor];

  return (
    <article
      id={`${groupId}-event-${workout.event}`}
      className="relative overflow-hidden border border-white/10 bg-stone-950 shadow-2xl shadow-black/30"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sunrise-gold to-transparent" />
      <div className="grid lg:grid-cols-[20rem_1fr]">
        <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-forest-green/35 via-stone-950 to-black p-6 lg:border-r lg:border-b-0 lg:p-8">
          <div className="pointer-events-none absolute -right-8 -bottom-8 font-bebas text-[13rem] leading-none text-white/[0.025]">
            {workout.event}
          </div>

          <div className="relative flex h-full flex-col">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-forest-green-light">
              2026 Championship
            </p>
            <h3 className="font-bebas text-5xl leading-none text-white">
              Event {workout.event}
            </h3>
            <p className="mt-3 font-bebas text-3xl leading-none text-sunrise-gold">
              {workout.scheme}
            </p>
            {workout.timing && (
              <p className="mt-4 inline-flex w-fit border border-sunrise-gold/40 bg-sunrise-gold/10 px-3 py-2 text-sm font-bold uppercase tracking-[0.12em] text-sunrise-gold">
                {workout.timing}
              </p>
            )}

            <div className="mt-6 border-l-2 border-sunrise-gold bg-black/45 px-4 py-3">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gray-500">
                Event sponsor
              </p>
              {sponsorLogo ? (
                <div className="mt-2 flex h-12 items-center">
                  <Image
                    src={sponsorLogo}
                    alt={workout.sponsor}
                    width={180}
                    height={60}
                    className="h-full w-auto max-w-[11rem] object-contain object-left brightness-0 invert"
                  />
                </div>
              ) : (
                <p className="mt-1 font-bebas text-3xl tracking-wide text-white">
                  {workout.sponsor}
                </p>
              )}
            </div>

            <fieldset
              className="mt-7 grid min-w-0 grid-cols-2 gap-1 border border-white/10 bg-black/40 p-1"
              aria-label={`Event ${workout.event} view`}
            >
              <button
                type="button"
                onClick={() => setView("workout")}
                aria-pressed={view === "workout"}
                className={`flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  view === "workout"
                    ? "bg-sunrise-gold text-black"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Dumbbell aria-hidden="true" className="size-4" />
                Workout
              </button>
              <button
                type="button"
                onClick={() => setView("layout")}
                aria-pressed={view === "layout"}
                className={`flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  view === "layout"
                    ? "bg-sunrise-gold text-black"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <MapIcon aria-hidden="true" className="size-4" />
                Layout
              </button>
            </fieldset>
          </div>
        </div>

        <div className="min-w-0 p-6 md:p-8 lg:p-10">
          {view === "workout" ? (
            <>
              <fieldset
                className="mb-8 flex min-w-0 flex-wrap gap-2"
                aria-label={`Event ${workout.event} divisions`}
              >
                {workout.variants.map((variant) => (
                  <button
                    key={variant.division}
                    type="button"
                    onClick={() => setDivision(variant.division)}
                    aria-pressed={division === variant.division}
                    className={`border px-4 py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
                      division === variant.division
                        ? "border-sunrise-gold bg-sunrise-gold text-black"
                        : "border-white/15 bg-white/[0.03] text-gray-300 hover:border-sunrise-gold/60 hover:text-white"
                    }`}
                  >
                    {variant.label}
                  </button>
                ))}
              </fieldset>

              <div aria-live="polite">
                <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-b border-white/10 pb-5">
                  <h4 className="font-bebas text-4xl text-white">
                    {activeVariant.label} division
                  </h4>
                  {activeVariant.detail && (
                    <p className="text-sm font-bold uppercase tracking-wide text-sunrise-gold">
                      {activeVariant.detail}
                    </p>
                  )}
                </div>

                <div className="grid gap-2">
                  {numberedLines.map(({ key, line }, index) => (
                    <div
                      key={key}
                      className="flex min-h-11 items-start gap-3 border-l-2 border-forest-green bg-white/[0.025] px-4 py-3 text-gray-100"
                    >
                      <span className="mt-0.5 font-mono text-xs font-bold text-sunrise-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-medium leading-snug">{line}</span>
                    </div>
                  ))}
                </div>

                {(workout.sharedNotes?.length ||
                  activeVariant.notes?.length) && (
                  <div className="mt-7 border-t border-white/10 pt-5">
                    {[
                      ...(workout.sharedNotes ?? []),
                      ...(activeVariant.notes ?? []),
                    ].map((note) => (
                      <p
                        key={note}
                        className="mt-2 flex gap-2 text-sm leading-relaxed text-gray-400 first:mt-0"
                      >
                        <span className="text-sunrise-gold">*</span>
                        {note}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="space-y-6">
              {workout.layouts.map((layout) => (
                <figure key={layout.src}>
                  <div className="overflow-hidden border border-white/10 bg-black">
                    <Image
                      src={layout.src}
                      alt={layout.label}
                      width={1426}
                      height={1103}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                  <figcaption className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-gray-500">
                    {layout.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ChampionshipWorkouts2026() {
  const [groupId, setGroupId] = useState<"individual" | "team">("individual");
  const activeGroup =
    championshipWorkoutGroups.find((group) => group.id === groupId) ??
    championshipWorkoutGroups[0];

  return (
    <section
      id="workouts"
      className="relative overflow-hidden border-y border-white/10 bg-stone-900"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_10%,rgba(50,101,73,0.5),transparent_35%),radial-gradient(circle_at_85%_30%,rgba(255,183,0,0.12),transparent_25%)]" />

      <div className="relative container mx-auto px-4 py-20 md:py-28">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 border border-forest-green-light/40 bg-forest-green/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-forest-green-light">
            <Mountain aria-hidden="true" className="size-4" />
            Championship programming
          </div>
          <h2 className="font-bebas text-6xl leading-none text-white md:text-7xl">
            2026 Workouts
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-300">
            Six events. Two competition formats. Select a division to see every
            prescribed test, then open the layout view to study the floor.
          </p>
        </div>

        <div className="mx-auto mb-5 grid max-w-2xl grid-cols-2 border border-white/10 bg-black/50 p-1">
          {championshipWorkoutGroups.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setGroupId(group.id)}
              aria-pressed={groupId === group.id}
              className={`flex items-center justify-center gap-2 px-4 py-4 font-bold uppercase tracking-[0.12em] transition-colors ${
                groupId === group.id
                  ? "bg-sunrise-gold text-black"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {group.id === "individual" ? (
                <Dumbbell aria-hidden="true" className="size-5" />
              ) : (
                <Users aria-hidden="true" className="size-5" />
              )}
              {group.label}
            </button>
          ))}
        </div>

        <p className="mb-10 text-center text-sm text-gray-400">
          {activeGroup.description}
        </p>

        <div className="space-y-7">
          {activeGroup.workouts.map((workout) => (
            <WorkoutCard
              key={`${activeGroup.id}-${workout.event}`}
              workout={workout}
              groupId={activeGroup.id}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-5 border border-white/10 bg-black/50 p-5 sm:grid-cols-[1fr_auto] sm:items-center md:p-7">
          <div>
            <p className="font-bebas text-3xl text-white">Plan your weekend</p>
            <p className="mt-1 text-sm text-gray-400">
              Review athlete flow, warm-up areas, vendors, and spectator access
              on the complete venue map.
            </p>
          </div>
          <a
            href="/2026/Venue%20Layout.png"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-sunrise-gold px-5 py-3 text-sm font-bold uppercase tracking-wide text-sunrise-gold transition-colors hover:bg-sunrise-gold hover:text-black"
          >
            <MapIcon aria-hidden="true" className="size-4" />
            View venue layout
          </a>
        </div>
      </div>
    </section>
  );
}
