"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Scheme = "FOR TIME" | "FOR LOAD" | "AMRAP";

type TierKey = "elite" | "rx" | "int" | "rookie";

type PartVariant = { body: string; highlight?: string };

type Part = {
  ord: string;
  label: string;
  scheme: Scheme;
  body: string;
  highlight?: string;
  variants?: Partial<Record<TierKey, PartVariant>>;
};

type Tier = { key: TierKey; label: string };

type WodMeta = { k: string; v: string; gold?: boolean };

type Workout = {
  num: string;
  title: string;
  sub: string;
  tags: { label: string; variant: "prime" | "default" | "time" }[];
  rightMeta: { kicker: string; value: string };
  parts: Part[];
  tiers?: Tier[];
  defaultTier?: TierKey;
  meta: WodMeta[];
  eligibility: string;
};

// Helper bodies — keep in sync with workout_scaling_descriptions in PlanetScale.
// Source: comp_jzelryr8d9p5uubg8wd5iobz · 6 events · 22 scaling levels.
const wod1PartA = (men: string, women: string) =>
  `4 Rounds For Time
12 Bar-Facing Burpees
10 Front Squats (${men}/${women})
8 Shoulder-to-Overhead (${men}/${women})`;

const wod2Body = (
  wb: number,
  row: string,
  hspu: number,
  dl: string,
  finisher: string,
) =>
  `${wb} Wall Balls (20/14) · 10'/9'
${row} Calorie Row
${hspu} Handstand Push-Ups
${dl}
${finisher}`;

const wod3Body = (lunges: number, t2b: number, dus: number) =>
  `${lunges} DB Walking Lunge Steps (2x50/2x35)
${t2b} Toes-to-Bar
${dus} Double Unders`;

const WORKOUTS: Workout[] = [
  {
    num: "01",
    title: "MWFC OQ Workout #1",
    sub: "Two Parts",
    tags: [
      { label: "FOR TIME", variant: "prime" },
      { label: "FOR LOAD", variant: "prime" },
      { label: "15:00 CAP", variant: "time" },
    ],
    rightMeta: { kicker: "", value: "" },
    tiers: [
      { key: "elite", label: "Elite" },
      { key: "rx", label: "RX" },
      { key: "int", label: "INT" },
      { key: "rookie", label: "Rookie (Team)" },
    ],
    defaultTier: "elite",
    parts: [
      {
        ord: "A.",
        label: "BURPEES & BARBELL",
        scheme: "FOR TIME",
        body: wod1PartA("155", "105"),
        highlight: "*Time Cap 10:00 · Teams: 2 rounds (one per athlete)",
        variants: {
          elite: {
            body: wod1PartA("155", "105"),
            highlight: "*Time Cap 10:00",
          },
          rx: {
            body: wod1PartA("135", "95"),
            highlight: "*Time Cap 10:00 · Teams: 2 rounds (one per athlete)",
          },
          int: {
            body: wod1PartA("115", "85"),
            highlight: "*Time Cap 10:00 · Teams: 2 rounds (one per athlete)",
          },
          rookie: {
            body: wod1PartA("115", "85"),
            highlight: "*Time Cap 10:00 · Team Rookie only · 2 rounds",
          },
        },
      },
      {
        ord: "B.",
        label: "1RM CLEAN & JERK",
        scheme: "FOR LOAD",
        body: `Begins immediately following completion of Part A.
Build to 1RM Clean and Jerk in remaining time.`,
        highlight:
          "*15:00 total time cap · Teams: each athlete builds, score = sum",
      },
    ],
    meta: [
      { k: "Format", v: "Time + Load" },
      { k: "Total Cap", v: "15:00", gold: true },
      { k: "Score A", v: "Time (min)" },
      { k: "Score B", v: "Load (max)" },
      { k: "Submissions", v: "Apr 10–20" },
    ],
    eligibility:
      "10 INDIV + 12 TEAM DIVISIONS · Teams complete 2 rounds (one per athlete) and sum scores",
  },
  {
    num: "02",
    title: "MWFC OQ Workout #2",
    sub: "The Chipper",
    tags: [
      { label: "FOR TIME", variant: "prime" },
      { label: "18:00 CAP", variant: "time" },
      { label: "CHIPPER", variant: "default" },
    ],
    rightMeta: { kicker: "", value: "" },
    tiers: [
      { key: "elite", label: "Elite" },
      { key: "rx", label: "RX" },
      { key: "int", label: "INT" },
      { key: "rookie", label: "Rookie (Team)" },
    ],
    defaultTier: "elite",
    parts: [
      {
        ord: "●",
        label: "CHIPPER",
        scheme: "FOR TIME",
        body: wod2Body(
          100,
          "80/64",
          60,
          "40 Deadlifts (245/175)",
          "20 Bar Muscle-Ups",
        ),
        highlight: "*Time CAP 18:00 · Teams complete 2 rounds, share work",
        variants: {
          elite: {
            body: wod2Body(
              100,
              "80/64",
              60,
              "40 Deadlifts (245/175)",
              "20 Bar Muscle-Ups",
            ),
            highlight: "*Time CAP 18:00",
          },
          rx: {
            body: wod2Body(
              100,
              "80/64",
              50,
              "40 Deadlifts (225/155)",
              "20 Bar Muscle-Ups",
            ),
            highlight:
              "*Time CAP 18:00 · also 35+ Masters RX · Teams = 2 rounds",
          },
          int: {
            body: wod2Body(
              80,
              "70/56",
              40,
              "40 Deadlifts (185/125)",
              "15 Bar Muscle-Ups",
            ),
            highlight:
              "*Time CAP 18:00 · also 35+ Masters INT · Teams = 2 rounds",
          },
          rookie: {
            body: wod2Body(
              70,
              "60/48",
              30,
              "30 Deadlifts (155/105)",
              "30 Pull-Ups",
            ),
            highlight:
              "*Time CAP 18:00 · Team Rookie only · Pull-Ups sub for Bar MU",
          },
        },
      },
    ],
    meta: [
      { k: "Format", v: "Time" },
      { k: "Time Cap", v: "18:00", gold: true },
      { k: "Score", v: "Time / reps" },
      { k: "Movements", v: "5" },
      { k: "Submissions", v: "Apr 10–20" },
    ],
    eligibility:
      "10 INDIV + 12 TEAM DIVISIONS · Teams complete 2 rounds and share work",
  },
  {
    num: "03",
    title: "MWFC OQ Workout #3",
    sub: "Grip Triplet",
    tags: [
      { label: "AMRAP", variant: "prime" },
      { label: "12:00", variant: "time" },
      { label: "DUMBBELL", variant: "default" },
    ],
    rightMeta: { kicker: "", value: "" },
    tiers: [
      { key: "elite", label: "Elite / RX" },
      { key: "int", label: "INT" },
      { key: "rookie", label: "Rookie (Team)" },
    ],
    defaultTier: "elite",
    parts: [
      {
        ord: "●",
        label: "LUNGE · T2B · DUs",
        scheme: "AMRAP",
        body: wod3Body(12, 16, 40),
        highlight: "*Score = total reps in 12:00",
        variants: {
          elite: {
            body: wod3Body(12, 16, 40),
            highlight: "*Score = total reps in 12:00",
          },
          int: {
            body: wod3Body(8, 12, 24),
            highlight: "*Score = total reps · also 35+ Masters INT",
          },
          rookie: {
            body: wod3Body(8, 8, 16),
            highlight: "*Score = total reps · Team Rookie only",
          },
        },
      },
    ],
    meta: [
      { k: "Format", v: "AMRAP 12:00" },
      { k: "Score", v: "Total reps" },
      { k: "DB Weight", v: "2×50 / 2×35", gold: true },
      { k: "Movements", v: "3" },
      { k: "Submissions", v: "Apr 10–20" },
    ],
    eligibility: "ALL DIVISIONS · DB held however",
  },
  {
    num: "04",
    title: "MWFC OQ Workout #4",
    sub: "Snatch / Shuttle Climb",
    tags: [
      { label: "AMRAP", variant: "prime" },
      { label: "8:00", variant: "time" },
      { label: "ASCENDING", variant: "default" },
    ],
    rightMeta: { kicker: "", value: "" },
    parts: [
      {
        ord: "●",
        label: "SNATCH + SHUTTLE LADDER",
        scheme: "AMRAP",
        body: `2 - 4 - 6 - 8 - 10 …
Dumbbell Snatch (50/35)

1 - 2 - 3 - 4 - 5 …
Shuttle Run (25 ft down + 25 ft back = 1)`,
        highlight: "*All divisions same dumbbell weights",
      },
    ],
    meta: [
      { k: "Format", v: "AMRAP 8:00" },
      { k: "Score", v: "Total reps" },
      { k: "DB Weight", v: "50 / 35", gold: true },
      { k: "Style", v: "Couplet, ascending" },
      { k: "Submissions", v: "Apr 10–20" },
    ],
    eligibility: "ALL DIVISIONS · SAME LOADS",
  },
];

function tagClass(variant: "prime" | "default" | "time") {
  if (variant === "prime")
    return "bg-sunrise-gold text-pitch-black border-sunrise-gold font-bold";
  if (variant === "time")
    return "text-sunrise-gold border-sunrise-gold/40 bg-transparent";
  return "text-gray-300 border-gray-700 bg-transparent";
}

function PartBlock({ part, activeTier }: { part: Part; activeTier?: TierKey }) {
  const variant = activeTier ? part.variants?.[activeTier] : undefined;
  const body = variant?.body ?? part.body;
  const highlight = variant?.highlight ?? part.highlight;
  const hasVariant = !!variant;

  return (
    <div className="bg-pitch-black/50 border-l-4 border-sunrise-gold p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-sunrise-gold/20">
        <div className="font-bebas text-2xl sm:text-3xl tracking-wide text-white leading-none">
          <span className="text-sunrise-gold mr-2">{part.ord}</span>
          {part.label}
        </div>
        <div className="text-[10px] tracking-wider uppercase text-pitch-black bg-sunrise-gold px-2 py-1 font-bold whitespace-nowrap">
          {part.scheme}
        </div>
      </div>
      <pre className="font-mono text-[13px] leading-relaxed text-gray-200 whitespace-pre-wrap m-0">
        {body}
      </pre>
      {highlight && (
        <div className="flex items-start mt-4 text-sunrise-gold">
          <span className="mr-3 text-xl leading-none">▸</span>
          <span className="font-bold text-sm leading-relaxed">{highlight}</span>
        </div>
      )}
      {!hasVariant && activeTier && part.variants && (
        <div className="mt-3 text-[11px] tracking-wider uppercase text-gray-400 italic">
          No tier-specific scaling — same for all divisions.
        </div>
      )}
    </div>
  );
}

function WorkoutRow({
  workout,
  isOpen,
  onToggle,
}: {
  workout: Workout;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const [activeTier, setActiveTier] = useState<TierKey | undefined>(
    workout.defaultTier,
  );

  return (
    <div className="border-b border-sunrise-gold/20 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`w-full text-left grid grid-cols-[56px_1fr_28px] md:grid-cols-[72px_1.4fr_1.6fr_1fr_36px] items-center gap-3 md:gap-4 px-4 py-4 md:px-6 md:py-5 transition-colors relative cursor-pointer ${
          isOpen
            ? "bg-gradient-to-r from-sunrise-gold/10 to-transparent"
            : "hover:bg-sunrise-gold/5"
        }`}
      >
        <span
          className={`absolute left-0 top-0 bottom-0 w-1 transition-colors ${
            isOpen ? "bg-sunrise-gold" : "bg-transparent"
          }`}
          aria-hidden
        />
        <div className="font-bebas text-3xl md:text-5xl text-sunrise-gold leading-none tracking-wide">
          {workout.num}
          <span className="block text-[10px] tracking-widest text-gray-500 mt-1.5 uppercase font-sans">
            WOD
          </span>
        </div>
        <div>
          <div className="font-bebas text-xl md:text-3xl text-white tracking-wide leading-none">
            {workout.title}
          </div>
          <div className="text-[11px] tracking-widest text-gray-400 mt-2 uppercase">
            {workout.sub}
          </div>
        </div>
        <div className="hidden md:flex flex-wrap gap-1.5">
          {workout.tags.map((t) => (
            <span
              key={t.label}
              className={`inline-flex items-center text-[10px] tracking-wider uppercase px-2 py-1 border ${tagClass(t.variant)}`}
            >
              {t.label}
            </span>
          ))}
        </div>
        <div className="hidden md:block text-[11px] text-right text-gray-400 leading-tight">
          <span className="block text-white font-bold uppercase tracking-wider text-[10px] mb-0.5">
            {workout.rightMeta.kicker}
          </span>
          {workout.rightMeta.value}
        </div>
        <div
          className={`text-center transition-all ${
            isOpen ? "text-sunrise-gold rotate-180" : "text-gray-500"
          }`}
          aria-hidden
        >
          <ChevronDown className="w-4 h-4 mx-auto" />
        </div>
      </button>

      {isOpen && (
        <div className="bg-pitch-black/60 border-t border-sunrise-gold/30 relative">
          <span
            className="absolute left-0 top-0 bottom-0 w-1 bg-sunrise-gold"
            aria-hidden
          />
          <div className="px-4 py-6 md:pl-[75px] md:pr-6 md:py-8 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6 md:gap-10">
            <div className="flex flex-col gap-5">
              {workout.tiers && workout.tiers.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pb-1">
                  <span className="text-[11px] tracking-wider uppercase text-gray-400 mr-1 font-bold">
                    Division Tier
                  </span>
                  {workout.tiers.map((t) => (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => setActiveTier(t.key)}
                      className={`text-[11px] tracking-wide uppercase px-3 py-1.5 border transition-all cursor-pointer ${
                        activeTier === t.key
                          ? "bg-sunrise-gold text-pitch-black border-sunrise-gold font-bold"
                          : "bg-transparent text-gray-300 border-gray-700 hover:border-sunrise-gold hover:text-white"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              )}
              {workout.parts.map((p) => (
                <PartBlock
                  key={`${workout.num}-${p.ord}-${p.label}`}
                  part={p}
                  activeTier={activeTier}
                />
              ))}
            </div>
            <aside className="bg-gradient-to-br from-forest-green/20 to-sunrise-gold/20 border border-sunrise-gold/30 p-5 self-start">
              <h4 className="font-bebas text-2xl tracking-wide text-sunrise-gold mb-4 pb-3 border-b border-sunrise-gold/30">
                EVENT META
              </h4>
              <dl className="m-0">
                {workout.meta.map((m, i) => (
                  <div
                    key={m.k}
                    className={`flex justify-between items-baseline gap-3 py-2 text-[12px] ${
                      i < workout.meta.length - 1
                        ? "border-b border-dashed border-sunrise-gold/20"
                        : ""
                    }`}
                  >
                    <dt className="text-gray-400 uppercase tracking-wider">
                      {m.k}
                    </dt>
                    <dd
                      className={`m-0 font-bold text-right ${
                        m.gold ? "text-sunrise-gold" : "text-white"
                      }`}
                    >
                      {m.v}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-4 pt-3 border-t border-sunrise-gold/20 text-[10px] tracking-wide text-gray-400 uppercase leading-relaxed">
                <span className="text-sunrise-gold font-bold">Eligible — </span>
                <span className="text-gray-200 font-semibold normal-case tracking-normal">
                  {workout.eligibility}
                </span>
              </div>
            </aside>
          </div>
        </div>
      )}
    </div>
  );
}

export default function QualifierWorkouts() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mt-16">
      <div className="mb-8">
        <span className="inline-block bg-sunrise-gold text-pitch-black px-4 py-1.5 text-xs font-bold tracking-wider uppercase mb-4">
          Online Qualifier — Programming
        </span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 pb-4 border-b border-sunrise-gold/30">
          <h4 className="font-bebas text-4xl md:text-5xl text-white tracking-wide leading-none m-0">
            THE WORKOUTS
          </h4>
          <div className="text-[11px] uppercase tracking-widest text-gray-400 md:text-right leading-relaxed">
            <span className="text-sunrise-gold font-bold">
              4 Events · 22 Scaling Levels
            </span>
            <br />
            <span>Apr 10 → Apr 20, 2026</span>
          </div>
        </div>
      </div>

      <div className="bg-pitch-black/50 border border-sunrise-gold/30">
        {WORKOUTS.map((w, i) => (
          <WorkoutRow
            key={w.num}
            workout={w}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))}
          />
        ))}
      </div>

      <p className="mt-5 text-sm text-gray-400 leading-relaxed">
        Tap a workout to expand. Pick a Division Tier (Elite / RX / INT /
        Rookie) to see the prescription for that division. View standards and
        submit scores on{" "}
        <a
          href="https://wodsmith.com/compete/mwfc-mountain-west-fitness-championship-online-qualifier-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sunrise-gold font-bold hover:underline"
        >
          wodsmith.com →
        </a>
      </p>
    </section>
  );
}
