export type ChampionshipDivision = "elite" | "rx" | "intermediate" | "rookie";

export type ChampionshipWorkoutVariant = {
  division: ChampionshipDivision;
  label: string;
  lines: string[];
  detail?: string;
  notes?: string[];
};

export type ChampionshipWorkout = {
  event: number;
  scheme: string;
  timing?: string;
  sponsor: string;
  variants: ChampionshipWorkoutVariant[];
  sharedNotes?: string[];
  layouts: { src: string; label: string }[];
};

export type ChampionshipWorkoutGroup = {
  id: "individual" | "team";
  label: string;
  description: string;
  workouts: ChampionshipWorkout[];
};

const layouts = {
  event1: [{ src: "/2026/Event%20%231.png", label: "Event 1 floor layout" }],
  events2And3: [
    {
      src: "/2026/Event%20%232%20%26%20%233.png",
      label: "Events 2 and 3 floor layout",
    },
  ],
  event4: [
    { src: "/2026/Event%20%234.png", label: "Event 4 floor layout" },
    {
      src: "/2026/Full%20Running%20Route%20Event%20%234.png",
      label: "Event 4 full running route",
    },
  ],
  events5And6: [
    {
      src: "/2026/Event%20%235%20%26%20%236.png",
      label: "Events 5 and 6 floor layout",
    },
  ],
};

const divisions = {
  elite: { division: "elite" as const, label: "Elite" },
  rx: { division: "rx" as const, label: "RX" },
  intermediate: {
    division: "intermediate" as const,
    label: "Intermediate",
  },
  rookie: { division: "rookie" as const, label: "Rookie" },
};

export const championshipWorkoutGroups: ChampionshipWorkoutGroup[] = [
  {
    id: "individual",
    label: "Individual",
    description:
      "Elite, RX, and Intermediate tests for the 2026 championship field.",
    workouts: [
      {
        event: 1,
        scheme: "5 × 2:00 intervals",
        timing: "2:00 work · 1:00 rest",
        sponsor: "Reign Total Body Fuel",
        layouts: layouts.event1,
        variants: [
          {
            ...divisions.elite,
            detail: "150/125 lb sandbag · 130/100 cal target",
            lines: [
              "100 ft. sandbag bearhug carry",
              "6 burpee barricade get-overs",
              "Max calorie row in remaining time",
            ],
          },
          {
            ...divisions.rx,
            detail: "150/125 lb sandbag · 115/90 cal target",
            lines: [
              "100 ft. sandbag bearhug carry",
              "6 burpee barricade get-overs",
              "Max calorie row in remaining time",
            ],
          },
          {
            ...divisions.intermediate,
            detail: "125/100 lb sandbag · 100/80 cal target",
            lines: [
              "100 ft. sandbag bearhug carry",
              "6 burpee barricade get-overs",
              "Max calorie row in remaining time",
            ],
          },
        ],
        sharedNotes: [
          "Five 2-minute intervals with 1 minute of rest after each.",
          "The workout ends when the athlete reaches the division calorie target.",
        ],
      },
      {
        event: 2,
        scheme: "For load",
        timing: "7:00",
        sponsor: "LMNT",
        layouts: layouts.events2And3,
        variants: [divisions.elite, divisions.rx, divisions.intermediate].map(
          (division) => ({
            ...division,
            lines: [
              "3-2-1 rope climbs (12 ft.)",
              "5-3-1 snatches (touch and go)",
            ],
          }),
        ),
        sharedNotes: [
          "Score is the total combined load on the snatches.",
          "1:00 transition after 7:00 into Event 3.",
        ],
      },
      {
        event: 3,
        scheme: "For time",
        timing: "7:00 cap",
        sponsor: "RXSG",
        layouts: layouts.events2And3,
        variants: [
          {
            ...divisions.elite,
            lines: [
              "25 beaded rope double-unders",
              "25 toes to bar",
              "25 beaded rope double-unders",
              "25 DB bench press (70/50)",
              "25 beaded rope double-unders",
              "25 DB snatches (70/50)",
              "25 beaded rope double-unders",
              "25 chest to bar pull-ups",
              "25 beaded rope double-unders",
            ],
          },
          {
            ...divisions.rx,
            lines: [
              "25 beaded rope double-unders",
              "20 toes to bar",
              "25 beaded rope double-unders",
              "20 DB bench press (70/50)",
              "25 beaded rope double-unders",
              "20 DB snatches (70/50)",
              "25 beaded rope double-unders",
              "20 chest to bar pull-ups",
              "25 beaded rope double-unders",
            ],
          },
          {
            ...divisions.intermediate,
            lines: [
              "20 beaded rope double-unders",
              "20 toes to bar",
              "20 beaded rope double-unders",
              "20 DB bench press (50/35)",
              "20 beaded rope double-unders",
              "20 DB snatches (50/35)",
              "20 beaded rope double-unders",
              "20 pull-ups",
              "20 beaded rope double-unders",
            ],
          },
        ],
      },
      {
        event: 4,
        scheme: "4 rounds for time",
        timing: "15:00 cap",
        sponsor: "Gymreapers",
        layouts: layouts.event4,
        variants: [
          {
            ...divisions.elite,
            detail: "Hang squat cleans: 200/135 lb",
            lines: ["550 m run", "10 hang squat cleans"],
          },
          {
            ...divisions.rx,
            detail: "Hang squat cleans: 155/105 lb",
            lines: ["550 m run", "10 hang squat cleans"],
          },
          {
            ...divisions.intermediate,
            detail: "Hang squat cleans: 135/85 lb",
            lines: ["550 m run", "10 hang squat cleans"],
          },
        ],
      },
      {
        event: 5,
        scheme: "For time",
        timing: "6:00 cap",
        sponsor: "Victory Grips",
        layouts: layouts.events5And6,
        variants: [
          {
            ...divisions.elite,
            lines: [
              "Ring muscle-ups — Men: 7-6-5-4-3 · Women: 6-5-4-3-2",
              "30 ft. handstand walk (15 ft. + 15 ft. unbroken)",
            ],
          },
          {
            ...divisions.rx,
            lines: [
              "Bar muscle-ups — Men: 7-6-5-4-3 · Women: 6-5-4-3-2",
              "30 ft. handstand walk (15 ft. + 15 ft.)",
            ],
          },
          {
            ...divisions.intermediate,
            lines: [
              "Bar muscle-ups — Men: 6-5-4-3-2 · Women: 5-4-3-2-1",
              "15 ft. handstand walk",
            ],
          },
        ],
        sharedNotes: ["2:00 transition into Event 6."],
      },
      {
        event: 6,
        scheme: "For time",
        timing: "7:00 cap",
        sponsor: "YETI",
        layouts: layouts.events5And6,
        variants: [
          {
            ...divisions.elite,
            lines: [
              "15/12 calorie Echo bike",
              "15 bar-facing burpees",
              "30 thrusters (95/65)",
              "15 bar-facing burpees",
              "15/12 calorie Echo bike",
            ],
          },
          {
            ...divisions.rx,
            lines: [
              "15/12 calorie Echo bike",
              "12 bar-facing burpees",
              "24 thrusters (95/65)",
              "12 bar-facing burpees",
              "15/12 calorie Echo bike",
            ],
          },
          {
            ...divisions.intermediate,
            lines: [
              "12/9 calorie Echo bike",
              "12 bar-facing burpees",
              "24 thrusters (95/65)",
              "12 bar-facing burpees",
              "12/9 calorie Echo bike",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "team",
    label: "Teams of 2",
    description:
      "RX, Intermediate, and Rookie tests built for two-athlete teams.",
    workouts: [
      {
        event: 1,
        scheme: "8 × 2:00 intervals",
        timing: "4 each partner",
        sponsor: "Reign Total Body Fuel",
        layouts: layouts.event1,
        variants: [
          {
            ...divisions.rx,
            detail: "150/125 lb sandbag · 230/175 cal target",
            lines: [
              "100 ft. sandbag bearhug carry",
              "6 burpee barricade get-overs",
              "Max calorie row in remaining time",
            ],
          },
          {
            ...divisions.intermediate,
            detail: "125/100 lb sandbag · 200/150 cal target",
            lines: [
              "100 ft. sandbag bearhug carry",
              "6 burpee barricade get-overs",
              "Max calorie row in remaining time",
            ],
          },
          {
            ...divisions.rookie,
            detail: "100/75 lb sandbag · 180/135 cal target",
            lines: [
              "100 ft. sandbag bearhug carry",
              "6 burpee barricade get-overs",
              "Max calorie row in remaining time",
            ],
          },
        ],
        sharedNotes: [
          "Partners alternate every 2-minute interval; each partner completes 4 intervals.",
          "The workout ends when the team reaches its division calorie target.",
        ],
      },
      {
        event: 2,
        scheme: "For load",
        timing: "7:00",
        sponsor: "LMNT",
        layouts: layouts.events2And3,
        variants: [
          {
            ...divisions.rx,
            lines: [
              "4-3-2 rope climbs, split (12 ft.)",
              "5-3-1 snatches each (touch and go)",
            ],
          },
          {
            ...divisions.intermediate,
            lines: [
              "4-3-2 rope climbs, split (12 ft.)",
              "5-3-1 snatches each (touch and go)",
            ],
          },
          {
            ...divisions.rookie,
            lines: [
              "3-2-1 rope climbs, split (12 ft.)",
              "5-3-1 snatches each (touch and go)",
            ],
          },
        ],
        sharedNotes: [
          "Score is the total combined load on the snatches.",
          "1:00 transition after 7:00 into Event 3.",
        ],
      },
      {
        event: 3,
        scheme: "For time",
        timing: "7:00 cap",
        sponsor: "RXSG",
        layouts: layouts.events2And3,
        variants: [
          {
            ...divisions.rx,
            lines: [
              "30 beaded rope double-unders",
              "30 synchro toes to bar",
              "30 beaded rope double-unders",
              "30 DB bench press, split (70/50)",
              "30 beaded rope double-unders",
              "30 synchro DB snatches (70/50)",
              "30 beaded rope double-unders",
              "30 chest to bar pull-ups, split",
              "30 beaded rope double-unders",
            ],
          },
          {
            ...divisions.intermediate,
            lines: [
              "30 beaded rope double-unders",
              "25 synchro toes to bar",
              "30 beaded rope double-unders",
              "25 DB bench press, split (50/35)",
              "30 beaded rope double-unders",
              "25 synchro DB snatches (50/35)",
              "30 beaded rope double-unders",
              "25 chest to bar pull-ups, split",
              "30 beaded rope double-unders",
            ],
          },
          {
            ...divisions.rookie,
            lines: [
              "20 beaded rope double-unders",
              "15 synchro toes to bar",
              "20 beaded rope double-unders",
              "20 synchro DB snatches (50/35)",
              "20 beaded rope double-unders",
              "20 synchro DB snatches (50/35)",
              "20 beaded rope double-unders",
              "15 synchro toes to bar",
              "20 beaded rope double-unders",
            ],
          },
        ],
        sharedNotes: [
          "One works while one rests; partition any way during non-synchro movements.",
        ],
      },
      {
        event: 4,
        scheme: "4 rounds for time",
        timing: "15:00 cap",
        sponsor: "Gymreapers",
        layouts: layouts.event4,
        variants: [
          {
            ...divisions.rx,
            detail: "Hang squat cleans: 185/125 lb",
            lines: ["550 m run together", "10 hang squat cleans, split"],
          },
          {
            ...divisions.intermediate,
            detail: "Hang squat cleans: 155/105 lb",
            lines: ["550 m run together", "10 hang squat cleans, split"],
          },
          {
            ...divisions.rookie,
            detail: "Hang squat cleans: 135/85 lb",
            lines: ["550 m run together", "10 hang squat cleans, split"],
          },
        ],
      },
      {
        event: 5,
        scheme: "For time",
        timing: "6:00 cap",
        sponsor: "Victory Grips",
        layouts: layouts.events5And6,
        variants: [
          {
            ...divisions.rx,
            lines: [
              "Synchro bar muscle-ups — Men: 7-6-5-4-3 · Women: 6-5-4-3-2",
              "30 ft. handstand walk (15 ft. + 15 ft. unbroken)",
            ],
          },
          {
            ...divisions.intermediate,
            lines: [
              "Bar muscle-ups, split — Men: 7-6-5-4-3 · Women: 6-5-4-3-2",
              "30 ft. handstand walk (15 ft. + 15 ft.)",
            ],
          },
          {
            ...divisions.rookie,
            detail: "AMRAP 6:00",
            lines: [
              "5-10-15-20-25… synchro pull-ups",
              "5-10-15-20-25… DB bench press (50s/35s), split",
            ],
          },
        ],
        sharedNotes: ["2:00 transition into Event 6."],
      },
      {
        event: 6,
        scheme: "For time",
        timing: "7:00 cap",
        sponsor: "YETI",
        layouts: layouts.events5And6,
        variants: [
          {
            ...divisions.rx,
            lines: [
              "25/20 calorie Echo bike — one works, one rests",
              "15 synchro bar-facing burpees",
              "20 synchro thrusters (95/65)",
              "15 synchro bar-facing burpees",
              "25/20 calorie Echo bike — one works, one rests",
            ],
          },
          {
            ...divisions.intermediate,
            lines: [
              "25/20 calorie Echo bike — one works, one rests",
              "15 synchro bar-facing burpees",
              "15 synchro thrusters (95/65)",
              "15 synchro bar-facing burpees",
              "25/20 calorie Echo bike — one works, one rests",
            ],
          },
          {
            ...divisions.rookie,
            lines: [
              "20/15 calorie Echo bike — one works, one rests",
              "15 synchro bar-facing burpees",
              "15 synchro thrusters (95/65)",
              "15 synchro bar-facing burpees",
              "20/15 calorie Echo bike — one works, one rests",
            ],
          },
        ],
      },
    ],
  },
];
