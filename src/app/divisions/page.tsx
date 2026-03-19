import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Division Breakdown | MWFC",
  description:
    "Movement standards and expectations for Elite, RX, Intermediate, and Rookie divisions at the MWFC Championship.",
};

const divisions = [
  { id: "elite", label: "Elite" },
  { id: "rx", label: "RX" },
  { id: "intermediate", label: "Intermediate" },
  { id: "rookie", label: "Rookie" },
  { id: "event-programming", label: "Event Programming" },
];

function MovementTable({
  rows,
}: {
  rows: { movement: string; values: string }[];
}) {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="py-3 pr-4 text-sm font-semibold text-sunrise-gold uppercase tracking-wider">
              Movement
            </th>
            <th className="py-3 text-sm font-semibold text-sunrise-gold uppercase tracking-wider">
              Standard / Expectation
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.movement}
              className="border-b border-gray-700/50 hover:bg-stone-800/50 transition-colors"
            >
              <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">
                {row.movement}
              </td>
              <td className="py-3 text-gray-300">{row.values}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DivisionSection({
  id,
  title,
  description,
  profile,
  movements,
}: {
  id: string;
  title: string;
  description: string;
  profile: string[];
  movements: { movement: string; values: string }[];
}) {
  return (
    <section id={id} className="scroll-mt-28 mb-16">
      <h2 className="text-4xl md:text-5xl font-bebas text-white mb-4">
        {title}
      </h2>

      <div className="bg-stone-900 border border-gray-700 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bebas text-sunrise-gold mb-2">
          Who This Division Is For
        </h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>

      <div className="bg-stone-900 border border-gray-700 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bebas text-sunrise-gold mb-2">
          Typical Athlete Profile
        </h3>
        <ul className="space-y-2">
          {profile.map((item) => (
            <li key={item} className="text-gray-300 flex items-center gap-2">
              <span className="text-sunrise-gold shrink-0">&#9656;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-stone-900 border border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-bebas text-sunrise-gold mb-2">
          Movement Standards &amp; Expectations
        </h3>
        <MovementTable rows={movements} />
      </div>
    </section>
  );
}

export default function DivisionsPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-pitch-black mt-24">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-bebas text-white mb-2">
              DIVISION BREAKDOWN
              <span className="block text-sunrise-gold text-4xl mt-2">
                WHAT TO EXPECT AT EACH LEVEL
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Each division is designed to provide a challenging, competitive
              experience appropriate to the athlete&rsquo;s skill and strength
              level. Review the movement standards below to find the right fit.
            </p>
          </div>

          {/* Mobile ToC — horizontal scroll */}
          <nav className="lg:hidden mb-10 -mx-4 px-4 overflow-x-auto">
            <div className="flex gap-3 min-w-max pb-2">
              {divisions.map((d) => (
                <a
                  key={d.id}
                  href={`#${d.id}`}
                  className="whitespace-nowrap px-4 py-2 rounded-full bg-stone-900 border border-gray-700 text-sm text-gray-300 hover:border-sunrise-gold hover:text-white transition-colors"
                >
                  {d.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Desktop: sidebar + content */}
          <div className="flex gap-12">
            {/* Sticky sidebar ToC — desktop only */}
            <aside className="hidden lg:block w-56 shrink-0">
              <nav className="sticky top-28">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Divisions
                </h3>
                <ul className="space-y-2">
                  {divisions.map((d) => (
                    <li key={d.id}>
                      <a
                        href={`#${d.id}`}
                        className="block px-3 py-2 rounded text-gray-400 hover:text-white hover:bg-stone-900 transition-colors text-sm"
                      >
                        {d.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0">
              <DivisionSection
                id="elite"
                title="ELITE DIVISION"
                description="The Elite Division is for high-level competitive CrossFit athletes capable of performing advanced skills under fatigue and moving heavy loads at speed. These athletes typically place near the top of Quarterfinals or have Semifinal-level capacity. Workouts will include complex gymnastics, heavy Olympic lifts, and demanding odd-object work. Athletes should be confident performing advanced movements such as legless rope climbs, strict handstand push-ups, unbroken handstand walking, and high-rep muscle-ups in competition."
                profile={[
                  "Competitive athletes training 5\u20136 days per week",
                  "Advanced gymnastics capacity and high strength numbers",
                  "Comfortable with heavy barbell cycling and large unbroken sets",
                  "Often top competitors at local competitions or Open/Quarterfinal/Semi-Final athletes",
                ]}
                movements={[
                  {
                    movement: "Snatch",
                    values: "Top End: 225+/155+ | Metcon: 185/125",
                  },
                  {
                    movement: "Clean & Jerk",
                    values: "Top End: 275+/205+ | Metcon: 225/145",
                  },
                  {
                    movement: "Dumbbells",
                    values: "Single: 70/50 | Double: 50s/35s",
                  },
                  { movement: "Muscle Ups", values: "10+" },
                  { movement: "HSW", values: "25 ft unbroken" },
                  { movement: "HSPU", values: "Strict, wall-facing" },
                  { movement: "Rope Climbs", values: "12 ft legless" },
                  {
                    movement: "Odd Objects",
                    values: "Sandbags up to 150/125 for any movement",
                  },
                  { movement: "Double Unders", values: "100+" },
                ]}
              />

              <DivisionSection
                id="rx"
                title="RX DIVISION"
                description="The RX Division is designed for experienced CrossFit athletes who regularly complete workouts as prescribed in daily classes and competitive events. Athletes in this division possess all standard CrossFit skills, including muscle-ups, handstand walking, and rope climbs, but may not yet have the strength or high-volume capacity seen in Elite athletes. This division typically represents athletes with top ~10% regional fitness capacity."
                profile={[
                  "Consistently completes workouts RX in class",
                  "Has all core gymnastics skills but at slightly lower volume",
                  "Solid barbell strength and good conditioning",
                  "Competitive local/regional athletes who consistently place in the top 10% of CF Open & Quarterfinals",
                ]}
                movements={[
                  {
                    movement: "Snatch",
                    values: "Top End: 205+/135+ | Metcon: 165/105",
                  },
                  {
                    movement: "Clean & Jerk",
                    values: "Top End: 255+/175+ | Metcon: 185/125",
                  },
                  {
                    movement: "Dumbbells",
                    values: "Single: 70/50 | Double: 50s/35s",
                  },
                  { movement: "Muscle Ups", values: "5+" },
                  {
                    movement: "HSW",
                    values: "25 ft (repeatable, not necessarily unbroken)",
                  },
                  {
                    movement: "HSPU",
                    values: "Strict or kipping, competition standard",
                  },
                  {
                    movement: "Rope Climbs",
                    values:
                      "12 ft low volume legless and/or higher volume feet",
                  },
                  {
                    movement: "Odd Objects",
                    values: "Sandbags up to 125/100",
                  },
                  { movement: "Double Unders", values: "50+" },
                ]}
              />

              <DivisionSection
                id="intermediate"
                title="INTERMEDIATE DIVISION"
                description="The Intermediate Division is for athletes who have begun developing higher-level skills but may not yet perform them consistently or at high volume. Athletes in this division can handle moderately heavy weights and some advanced movements, but workouts will include reduced loading and lower skill volume compared to RX. This division is ideal for athletes transitioning from scaled competition toward RX-level performance."
                profile={[
                  "Comfortable with most CrossFit movements but still building consistency",
                  "May have limited muscle-ups or short handstand walk capability",
                  "Moderate strength levels",
                  "Regular CrossFit participants beginning to compete",
                ]}
                movements={[
                  {
                    movement: "Snatch",
                    values: "Top End: 165+/105+ | Metcon: 135/95",
                  },
                  {
                    movement: "Clean & Jerk",
                    values: "Top End: 205+/145+ | Metcon: 165/115",
                  },
                  {
                    movement: "Dumbbells",
                    values: "Single: 50/35 | Double: 35s/25s",
                  },
                  {
                    movement: "Muscle Ups",
                    values: "1\u20133 or reduced volume standard",
                  },
                  { movement: "HSW", values: "5 ft+ sections" },
                  {
                    movement: "HSPU",
                    values: "Reduced volume 5+ kipping",
                  },
                  {
                    movement: "Rope Climbs",
                    values: "12 ft standard (leg assist allowed)",
                  },
                  {
                    movement: "Odd Objects",
                    values: "Sandbags up to 125/100",
                  },
                  { movement: "Double Unders", values: "25+" },
                ]}
              />

              <DivisionSection
                id="rookie"
                title="ROOKIE DIVISION"
                description="The Rookie Division is for newer competitors and developing CrossFit athletes who have foundational strength and basic gymnastics skills. Advanced movements are either scaled or replaced with simpler alternatives, and weights are kept moderate to allow athletes to move safely and consistently through workouts. This division provides a fun, competitive entry point for athletes new to competing or those who haven't developed higher skill gymnastics movements yet."
                profile={[
                  "Newer CrossFit athletes or first-time competitors",
                  "Still developing gymnastics skills such as pull-ups and double unders",
                  "Moderate barbell strength",
                  "Can complete some workouts RX but needs to scale some movements in regular classes such as heavier loading and/or higher volume/skill gymnastics movements",
                ]}
                movements={[
                  {
                    movement: "Snatch",
                    values: "Top End: 135+/85+ | Metcon: 95/65",
                  },
                  {
                    movement: "Clean & Jerk",
                    values: "Top End: 185+/125 | Metcon: 115/85",
                  },
                  {
                    movement: "Dumbbells",
                    values: "Single: 50/35 | Double: 35s/20s",
                  },
                  {
                    movement: "Muscle Ups",
                    values: "Not required (Pull Ups 1\u20133+)",
                  },
                  {
                    movement: "HSW",
                    values: "Not required (wall walk)",
                  },
                  {
                    movement: "HSPU",
                    values: "Lower volume kipping w/ ab mat",
                  },
                  {
                    movement: "Rope Climbs",
                    values: "12 ft less volume (leg assist allowed)",
                  },
                  {
                    movement: "Odd Objects",
                    values: "Sandbags up to 100/75",
                  },
                  { movement: "Double Unders", values: "5\u201310+" },
                ]}
              />

              {/* Event Programming Note */}
              <section id="event-programming" className="scroll-mt-28 mb-16">
                <h2 className="text-4xl md:text-5xl font-bebas text-white mb-6">
                  EVENT PROGRAMMING NOTE
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Championship */}
                  <div className="bg-stone-900 border border-sunrise-gold rounded-lg p-6">
                    <h3 className="text-xl font-bebas text-sunrise-gold mb-3">
                      Championship Event
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      At the Championship Event, all listed movements across
                      divisions are eligible to appear in workouts. This
                      includes advanced gymnastics, odd-object implements, rope
                      climbs, wall-based movements, and other skills that
                      require standardized equipment and floor layout.
                    </p>
                  </div>

                  {/* Throwdowns */}
                  <div className="bg-stone-900 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-bebas text-sunrise-gold mb-3">
                      Throwdown Events
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Throwdown competitions will focus on movements that are
                      easier to standardize across multiple venues and
                      competition floors. Athletes can expect to see:
                    </p>
                    <ul className="space-y-1 mb-6">
                      {[
                        "Barbell Movements",
                        "Dumbbell Movements",
                        "Jump Rope (Double Unders, etc.)",
                        "Plyometric Box Movements",
                        "Rig-Based Gymnastics: Pull-Ups, Toes-to-Bar, Bar Muscle-Ups",
                      ].map((item) => (
                        <li
                          key={item}
                          className="text-gray-300 flex items-start gap-2"
                        >
                          <span className="text-forest-green-light mt-1">
                            &#10003;
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Not at Throwdowns (Championship only)
                    </h4>
                    <ul className="space-y-1">
                      {[
                        "Odd Object Movements (e.g., Sandbags)",
                        "Ring Muscle-Ups",
                        "Wall-Based Movements (Handstand Push-Ups, Wall Walks)",
                        "Wall Balls",
                        "Rope Climbs",
                      ].map((item) => (
                        <li
                          key={item}
                          className="text-gray-400 flex items-start gap-2"
                        >
                          <span className="text-red-500 mt-1">&#10007;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
