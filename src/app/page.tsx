import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const divisions = [
  {
    name: "Elite",
    eyebrow: "Invite only",
    description:
      "High-level athletes selected for the top championship field. Expect advanced gymnastics, heavy loads, and high-output tests across the weekend.",
  },
  {
    name: "RX",
    eyebrow: "Experienced competitors",
    description:
      "For athletes who regularly compete as prescribed and are ready for demanding barbell, gymnastics, and conditioning tests.",
  },
  {
    name: "Intermediate",
    eyebrow: "Competitive and developing",
    description:
      "A strong fit for athletes building toward RX who want a serious competition experience with adjusted loading and skill volume.",
  },
  {
    name: "Rookie",
    eyebrow: "First-time friendly",
    description:
      "Built for newer competitors who want the energy of championship weekend with approachable standards and smart scaling.",
  },
];

const eventPhotos = [
  {
    src: "/athlete-photos/muscle-up.jpg",
    alt: "Athlete performing ring muscle-ups at the Mountain West Fitness Championship",
  },
  {
    src: "/athlete-photos/sandbag-lunge.jpg",
    alt: "Athlete carrying a sandbag during last year's championship",
  },
  {
    src: "/athlete-photos/sled-push.PNG",
    alt: "Athlete pushing a sled during the Mountain West Fitness Championship",
  },
  {
    src: "/athlete-photos/ropeclimb.jpg",
    alt: "Athlete climbing a rope in competition",
  },
];

const weekendDetails = [
  "Two days of championship competition in Caldwell, Idaho",
  "Individual and team divisions across multiple skill levels",
  "Elite divisions are invite only",
  "Professional event floor, vendors, spectators, and community energy",
];

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-pitch-black mt-24 text-white">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/header-background.png"
              alt="Mountain West Fitness Championship event floor"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-pitch-black" />
          </div>

          <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 md:pt-28 md:pb-24">
            <div className="max-w-5xl">
              <div className="inline-flex bg-sunrise-gold text-pitch-black px-5 py-2 font-bold text-sm uppercase tracking-wide mb-8">
                October 9-10, 2026 | Caldwell, Idaho
              </div>

              <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl leading-none mb-6">
                Mountain West
                <span className="block text-sunrise-gold">
                  Fitness Championship
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed mb-8">
                The Mountain West Championship is back for a full weekend of
                competition, community, and high-energy tests for athletes
                across the region.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#registration"
                  className="inline-flex items-center justify-center bg-sunrise-gold text-pitch-black px-8 py-4 font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg"
                >
                  Registration Details
                </a>
                <Link
                  href="/divisions"
                  className="inline-flex items-center justify-center border border-white/40 text-white px-8 py-4 font-bold text-lg hover:border-sunrise-gold hover:text-sunrise-gold transition-colors"
                >
                  View Divisions
                </Link>
              </div>
            </div>
          </div>
        </section>

        <main>
          <section
            id="registration"
            className="border-y border-sunrise-gold/30 bg-gradient-to-r from-sunrise-gold/20 via-forest-green/20 to-sunrise-gold/10"
          >
            <div className="container mx-auto px-4 py-10 md:py-12">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-sunrise-gold mb-3">
                    Registration opens soon
                  </p>
                  <h2 className="font-bebas text-5xl md:text-6xl text-white mb-4">
                    June 14 at 12:00 PM MST
                  </h2>
                  <p className="text-lg text-gray-200 max-w-3xl leading-relaxed">
                    Registration for the 2026 Mountain West Fitness Championship
                    opens Sunday, June 14, 2026 at 12:00 PM MST. Spots will be
                    available for RX, Intermediate, and Rookie divisions. Elite
                    divisions are invite only.
                  </p>
                </div>

                <div className="bg-pitch-black/70 border border-sunrise-gold/40 p-6">
                  <p className="text-sunrise-gold font-bold uppercase tracking-wide mb-2">
                    Championship Weekend
                  </p>
                  <p className="font-bebas text-4xl text-white mb-1">
                    October 9-10, 2026
                  </p>
                  <p className="text-gray-300">
                    Canyon County Event Center | Caldwell, Idaho
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 py-20 md:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-forest-green-light mb-3">
                  The competition
                </p>
                <h2 className="font-bebas text-5xl md:text-6xl text-white mb-6">
                  Built for the Championship Stage
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  This season is focused on the championship itself. Athletes
                  will come together in Caldwell for a polished, high-energy
                  event that showcases the depth of the Mountain West fitness
                  community.
                </p>

                <div className="grid gap-4">
                  {weekendDetails.map((detail) => (
                    <div
                      key={detail}
                      className="flex gap-4 border border-white/10 bg-stone-900/80 p-4"
                    >
                      <span className="text-sunrise-gold text-xl leading-none">
                        &#9656;
                      </span>
                      <p className="text-gray-200">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {eventPhotos.map((photo, index) => (
                  <div
                    key={photo.src}
                    className={`relative overflow-hidden border border-white/10 bg-stone-900 ${
                      index === 0 || index === 3
                        ? "aspect-[4/5]"
                        : "aspect-[4/4]"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      loading="eager"
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 28vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-stone-950 border-y border-white/10">
            <div className="container mx-auto px-4 py-20 md:py-28">
              <div className="max-w-3xl mb-12">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-sunrise-gold mb-3">
                  Divisions
                </p>
                <h2 className="font-bebas text-5xl md:text-6xl text-white mb-4">
                  Find the Right Floor
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Choose the division that matches your current capacity and
                  competition goals. The Elite field will be selected by invite,
                  while the other championship divisions open with registration
                  on June 14.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {divisions.map((division) => (
                  <article
                    key={division.name}
                    className="border border-white/10 bg-pitch-black p-6"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-forest-green-light mb-3">
                      {division.eyebrow}
                    </p>
                    <h3 className="font-bebas text-4xl text-sunrise-gold mb-4">
                      {division.name}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {division.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/divisions"
                  className="inline-flex bg-sunrise-gold text-pitch-black px-8 py-4 font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg"
                >
                  View Full Division Breakdown
                </Link>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 py-20 md:py-28">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="relative aspect-[16/11] overflow-hidden border border-white/10 bg-stone-900">
                <Image
                  src="/athlete-photos/fan-high-five.png"
                  alt="Athlete celebrating with spectators at last year's Mountain West Fitness Championship"
                  fill
                  loading="eager"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-forest-green-light mb-3">
                  Last year's energy
                </p>
                <h2 className="font-bebas text-5xl md:text-6xl text-white mb-6">
                  Athletes, Vendors, Spectators, and a Packed Floor
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  The championship weekend brings together the region's athletes
                  and supporters for a competition that feels big, organized,
                  and worth training for.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Expect a professional venue, multiple workouts, a crowd that
                  knows the stakes, and divisions designed to make every heat
                  competitive.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-sunrise-gold text-pitch-black">
            <div className="container mx-auto px-4 py-12 md:py-16">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] mb-3">
                    Mark your calendar
                  </p>
                  <h2 className="font-bebas text-5xl md:text-6xl mb-3">
                    Registration opens June 14 at noon MST
                  </h2>
                  <p className="text-lg font-medium max-w-3xl">
                    RX, Intermediate, and Rookie athletes can register when
                    spots open. Elite divisions are invite only.
                  </p>
                </div>
                <Link
                  href="/divisions"
                  className="inline-flex justify-center border-2 border-pitch-black px-8 py-4 font-bold text-lg hover:bg-pitch-black hover:text-sunrise-gold transition-colors"
                >
                  Check Division Standards
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
