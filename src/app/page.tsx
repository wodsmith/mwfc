import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThrowdownMap from "@/components/ThrowdownMap";

export default function Timeline2026() {
  return (
    <>
    <Navigation />
    <div className="min-h-screen bg-pitch-black mt-24">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4">
          <div className="inline-block bg-sunrise-gold text-pitch-black px-6 py-2 font-bold text-sm mb-6">
            ⚡ OCTOBER 9-10, 2026 ⚡
          </div>
          <h1 className="text-7xl md:text-8xl font-bebas text-white mb-4">
            MOUNTAIN WEST
            <span className="block text-sunrise-gold">
              FITNESS CHAMPIONSHIP
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-2">
            The ultimate fitness competition in the Mountain West region.
            Qualify through online workouts or local throwdowns.
          </p>
          <p className="text-lg text-sunrise-gold font-bold mb-8">
            Championship Weekend: October 9-10, 2026 • Caldwell, Idaho
          </p>
          <a
            href="#qualify"
            className="inline-block bg-sunrise-gold text-pitch-black px-8 py-4 font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg"
          >
            SEE HOW TO QUALIFY →
          </a>
        </div>
      </div>

      {/* Main Timeline Container */}
      <main className="relative container mx-auto px-4 py-20">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bebas text-white mb-6">
            THE ROAD TO CHAMPIONSHIP
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Your path to the 2026 Championship starts here. Compete in the online
            qualifier, battle at local throwdowns, and prove you belong on the
            biggest stage in the Mountain West.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative timeline-container">
          {/* Timeline Line - Left Side */}
          <div className="absolute left-0 md:left-32 top-0 bottom-0 w-1 bg-sunrise-gold hidden md:block timeline-line"></div>

          {/* Phase 1: Online Qualifier */}
          <div className="relative flex items-start mb-32">
            <div className="hidden md:block w-32 flex-shrink-0">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-forest-green/90 to-forest-green/60 backdrop-blur-sm border border-forest-green/30 text-white px-4 py-2 font-bold text-sm">
                  APR 10-20
                </div>
              </div>
            </div>

            <div className="md:ml-16 flex-grow">
              <div className="mb-8">
                <div className="flex flex-col gap-2 mb-4">
                  <span className="inline-block bg-gradient-to-br from-forest-green/90 to-forest-green/60 backdrop-blur-sm border border-forest-green/30 text-white px-4 py-2 text-sm font-bold w-fit">
                    PHASE 1
                  </span>
                  <span className="md:hidden inline-block bg-gradient-to-br from-forest-green/90 to-forest-green/60 backdrop-blur-sm border border-forest-green/30 text-white px-4 py-2 text-xs font-bold w-fit">
                    APR 10-20, 2026
                  </span>
                </div>
                <h3 className="text-5xl font-bebas text-white mb-6">
                  ONLINE QUALIFIER
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    The online qualifier opens the door to every athlete in the
                    Mountain West region and beyond. Over 10 days in April,
                    athletes will complete a series of workouts designed to test
                    every aspect of functional fitness and secure their spot
                    directly to the Championship.
                  </p>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Submit your scores, upload your videos, and join hundreds of
                    athletes vying for their chance to compete.
                  </p>
                  <div className="bg-pitch-black/50 border-l-4 border-forest-green p-6">
                    <h4 className="text-2xl font-bebas text-forest-green-light mb-4">
                      QUALIFIER DETAILS
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-forest-green-light mr-3 text-xl">
                          ▸
                        </span>
                        <span>10-day qualifying window: April 10-20, 2026</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-forest-green-light mr-3 text-xl">
                          ▸
                        </span>
                        <span>Video submission required for validation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-forest-green-light mr-3 text-xl">
                          ▸
                        </span>
                        <span>Top finishers advance to the Championship</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-forest-green/20 to-sunrise-gold/20 border border-sunrise-gold/30 p-4 md:p-8">
                    <h4 className="text-xl md:text-2xl font-bebas text-sunrise-gold mb-3 md:mb-4">
                      QUALIFICATION PATHS TO CHAMPIONSHIP
                    </h4>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                      Multiple paths lead to the MWFC 2026 Championship. Different qualification rules apply for individuals vs. teams:
                    </p>
                    <div className="space-y-3 md:space-y-4 text-sm">
                      <div className="bg-pitch-black/40 p-3 md:p-4 rounded border border-sunrise-gold/20">
                        <p className="text-white font-bold mb-2 md:mb-3 text-sm md:text-base">
                          INDIVIDUAL ATHLETES (RX & Intermediate):
                        </p>
                        <div className="space-y-1 md:space-y-2 ml-2 md:ml-4">
                          <p className="text-gray-300 text-xs md:text-sm">
                            <span className="text-sunrise-gold font-bold">1. Online Qualifier:</span> Top 8 Athletes per division qualify
                          </p>
                          <p className="text-gray-300 text-xs md:text-sm">
                            <span className="text-sunrise-gold font-bold">2. In-Person Throwdowns:</span> 4 qualify as 1st place winners (4 host gyms)
                          </p>
                          <p className="text-gray-300 text-xs md:text-sm">
                            <span className="text-sunrise-gold font-bold">3. Global Throwdown Leaderboard:</span> Next Top 4 individuals qualify
                          </p>
                          <p className="text-gray-400 text-xs mt-2 md:mt-3 italic">
                            = 16 total spots per division (Men's RX, Men's INT, Women's RX, Women's INT + Masters 35+ divisions)
                          </p>
                        </div>
                      </div>
                      <div className="bg-pitch-black/40 p-3 md:p-4 rounded border border-forest-green/20">
                        <p className="text-white font-bold mb-2 md:mb-3 text-sm md:text-base">TEAMS (RX, Intermediate, Rookie):</p>
                        <div className="space-y-1 md:space-y-2 ml-2 md:ml-4">
                          <p className="text-gray-300 text-xs md:text-sm">
                            <span className="text-forest-green-light font-bold">1. Team Online Qualifier:</span> Top 5 Teams per division qualify
                          </p>
                          <p className="text-gray-300 text-xs md:text-sm">
                            <span className="text-forest-green-light font-bold">2. In-Person Throwdowns:</span> 8 qualify as 1st place winners (8 host gyms)
                          </p>
                          <p className="text-gray-300 text-xs md:text-sm">
                            <span className="text-forest-green-light font-bold">3. Global Throwdown Leaderboard:</span> Next Top 3 teams qualify
                          </p>
                          <p className="text-gray-400 text-xs mt-2 md:mt-3 italic">
                            = 16 total spots per division across all team divisions
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="bg-forest-green/10 border border-forest-green/30 p-8 h-64 flex items-center justify-center">
                    <p className="text-forest-green-light text-center">
                      [Image: Athletes recording qualifier workouts]
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2: Throwdowns */}
          <div className="relative flex items-start mb-32">
            <div className="hidden md:block w-32 flex-shrink-0">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-forest-green/90 to-forest-green/60 backdrop-blur-sm border border-forest-green/30 text-white px-4 py-2 font-bold text-sm">
                  JULY 2026
                </div>
              </div>
            </div>

            <div className="md:ml-16 flex-grow">
              <div className="mb-8">
                <div className="flex flex-col gap-2 mb-4">
                  <span className="inline-block bg-gradient-to-br from-sunrise-gold/90 to-sunrise-gold/60 backdrop-blur-sm border border-sunrise-gold/30 text-pitch-black px-4 py-2 text-sm font-bold w-fit">
                    PHASE 2
                  </span>
                  <span className="md:hidden inline-block bg-gradient-to-br from-sunrise-gold/90 to-sunrise-gold/60 backdrop-blur-sm border border-sunrise-gold/30 text-pitch-black px-4 py-2 text-xs font-bold w-fit">
                    JULY 2026
                  </span>
                </div>
                <h3 className="text-5xl font-bebas text-white mb-6">
                  MWFC THROWDOWNS
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    One-day, team-based fitness competitions hosted by gyms
                    across the Mountain West. Three competition weekends in
                    July, each featuring different partner divisions. Teams of 2
                    will compete in 4 programmed workouts with full support from
                    the MWFC team.
                  </p>

                  <div className="bg-pitch-black/50 border-l-4 border-sunrise-gold p-6 mb-6">
                    <h4 className="text-2xl font-bebas text-sunrise-gold mb-4">
                      COMPETITION DATES
                    </h4>
                    <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start flex-col">
                        <div className="flex items-center mb-2">
                          <span className="text-sunrise-gold mr-3 text-xl">
                            ▸
                          </span>
                          <span className="font-bold text-white">
                            July 11th - Individual Competition
                          </span>
                        </div>
                        <span className="ml-8 text-sm">
                          4 Divisions: Men's RX, Men's Intermediate, Women's RX, Women's Intermediate (60 Athlete Cap)
                        </span>
                        <span className="ml-8 text-xs text-gray-400 mt-1">
                          4 Gym Hosts
                        </span>
                      </li>
                      <li className="flex items-start flex-col">
                        <div className="flex items-center mb-2">
                          <span className="text-sunrise-gold mr-3 text-xl">
                            ▸
                          </span>
                          <span className="font-bold text-white">
                            July 11th - Individual Masters 35+ Competition
                          </span>
                        </div>
                        <span className="ml-8 text-sm">
                          4 Divisions: Masters 35+ Men's RX, Men's Intermediate, Women's RX, Women's Intermediate (60 Athlete Cap)
                        </span>
                        <span className="ml-8 text-xs text-gray-400 mt-1">
                          4 Gym Hosts
                        </span>
                      </li>
                      <li className="flex items-start flex-col">
                        <div className="flex items-center mb-2">
                          <span className="text-sunrise-gold mr-3 text-xl">
                            ▸
                          </span>
                          <span className="font-bold text-white">
                            July 18th - Masters Team Competition
                          </span>
                        </div>
                        <span className="ml-8 text-sm">
                          6 Divisions: Men's Masters 35+ (M/M) RX, INT, Rookie & Women's Masters 35+ (F/F) RX, INT, Rookie (60 Team Cap)
                        </span>
                        <span className="ml-8 text-xs text-gray-400 mt-1">
                          8 Gym Hosts
                        </span>
                      </li>
                      <li className="flex items-start flex-col">
                        <div className="flex items-center mb-2">
                          <span className="text-sunrise-gold mr-3 text-xl">
                            ▸
                          </span>
                          <span className="font-bold text-white">
                            August 1st- Team Competition
                          </span>
                        </div>
                        <span className="ml-8 text-sm">
                          6 Divisions: Men's (M/M) RX, INT, Rookie & Women's (F/F) RX, INT, Rookie (60 Team Cap)
                        </span>
                        <span className="ml-8 text-xs text-gray-400 mt-1">
                          8 Gym Hosts
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-pitch-black/50 border-l-4 border-forest-green p-6">
                    <h4 className="text-2xl font-bebas text-forest-green-light mb-4">
                      EVENT STRUCTURE
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-forest-green-light mr-3 text-xl">
                          ▸
                        </span>
                        <span>10 Heats of 6 Lanes (60 Team Max Capacity)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-forest-green-light mr-3 text-xl">
                          ▸
                        </span>
                        <span>
                          7:00am Check-In, 8:00am Briefing, 9:00am Start
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-forest-green-light mr-3 text-xl">
                          ▸
                        </span>
                        <span>4 Workouts: 9:00am-6:00pm (if sold out)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-forest-green-light mr-3 text-xl">
                          ▸
                        </span>
                        <span>Podium Ceremony @ 6:15pm</span>
                      </li>
                      {/* <li className="flex items-start">
                        <span className="text-forest-green-light mr-3 text-xl">▸</span>
                        <span>Team Registration: $149/Team (includes athlete shirts)</span>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-forest-green/20 to-sunrise-gold/20 border border-sunrise-gold/30 p-8">
                    <h4 className="text-2xl font-bebas text-sunrise-gold mb-4">
                      WHAT IS A THROWDOWN?
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Think of MWFC Throwdowns as your first step on the Road to
                      the Championship. These are one-day, team-based fitness
                      competitions designed to give beginner and intermediate
                      athletes a taste of the adrenaline, camaraderie, and
                      challenge that come with competition—without the pressure
                      of a full-scale event.
                    </p>
                    <div className="bg-sunrise-gold/10 border border-sunrise-gold/30 p-4 rounded mb-4">
                      <p className="text-white font-bold mb-1">Registration Costs:</p>
                      <p className="text-gray-300 text-sm">
                        <span className="text-sunrise-gold font-bold">Team Competitions:</span> $199/Team (includes athlete t-shirts)
                      </p>
                      <p className="text-gray-300 text-sm">
                        <span className="text-sunrise-gold font-bold">Individual Competitions:</span> $149/Athlete (includes athlete t-shirt)
                      </p>
                    </div>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start">
                        <span className="text-sunrise-gold mr-2">•</span>
                        <span>Train and compete with your gym fam</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sunrise-gold mr-2">•</span>
                        <span>Athlete t-shirts included with registration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sunrise-gold mr-2">•</span>
                        <span>Earn your shot at the MWFC Championship</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sunrise-gold mr-2">•</span>
                        <span>
                          See how you stack up on the Global Throwdown Leaderboard
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-sunrise-gold/20 to-forest-green/20 border border-sunrise-gold/30 p-8">
                    <h4 className="text-2xl font-bebas text-sunrise-gold mb-4">
                      MULTIPLE PATHS TO THE CHAMPIONSHIP
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      All scores from every Throwdown are added to a Global Throwdown
                      Leaderboard. Multiple qualification paths exist:
                    </p>

                    <div className="mb-6">
                      <p className="text-white font-bold mb-3 uppercase text-sm tracking-wide">For Team Divisions:</p>
                      <ul className="space-y-2 text-gray-300 text-sm ml-4">
                        <li className="flex items-start">
                          <span className="text-sunrise-gold mr-2">1.</span>
                          <span>
                            <strong className="text-white">Online Qualifier:</strong> Top 5 teams per division qualify
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-sunrise-gold mr-2">2.</span>
                          <span>
                            <strong className="text-white">Win your Throwdown:</strong> 8 teams qualify (1st place from each of 8 host gyms)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-sunrise-gold mr-2">3.</span>
                          <span>
                            <strong className="text-white">Global Throwdown Leaderboard:</strong> Next Top 3 teams qualify
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <p className="text-white font-bold mb-3 uppercase text-sm tracking-wide">For Individual Divisions:</p>
                      <ul className="space-y-2 text-gray-300 text-sm ml-4">
                        <li className="flex items-start">
                          <span className="text-sunrise-gold mr-2">1.</span>
                          <span>
                            <strong className="text-white">Online Qualifier:</strong> Top 8 athletes per division qualify
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-sunrise-gold mr-2">2.</span>
                          <span>
                            <strong className="text-white">Win your Throwdown:</strong> 4 athletes qualify (1st place from each of 4 host gyms)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-sunrise-gold mr-2">3.</span>
                          <span>
                            <strong className="text-white">Global Throwdown Leaderboard:</strong> Next Top 4 individuals qualify
                          </span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-xs text-gray-400 mt-4 italic">
                      = 16 total qualification spots per division. Even if you don't win your local Throwdown, a strong
                      performance can still earn you a Championship invite through the Global Throwdown Leaderboard!
                    </p>
                  </div>

                  {/* <div className="bg-forest-green/10 border border-forest-green/30 p-8 h-64 flex items-center justify-center">
                    <p className="text-forest-green-light text-center">
                      [Image: Athletes competing at regional throwdowns]
                    </p>
                  </div> */}
                </div>
              </div>

              {/* Throwdown Map */}
              <div className="mt-12">
                <ThrowdownMap />
              </div>
            </div>
          </div>

          {/* Phase 3: Championship */}
          <div className="relative flex items-start mb-32">
            <div className="hidden md:block w-32 flex-shrink-0">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-sunrise-gold/90 to-forest-green/60 backdrop-blur-sm border border-sunrise-gold/30 text-white px-4 py-2 font-bold text-sm">
                  OCT 9-10
                </div>
              </div>
            </div>

            <div className="md:ml-16 flex-grow">
              <div className="mb-8">
                <div className="flex flex-col gap-2 mb-4">
                  <span className="inline-block bg-gradient-to-br from-sunrise-gold/90 to-forest-green/60 backdrop-blur-sm border border-sunrise-gold/30 text-white px-4 py-2 text-sm font-bold w-fit">
                    PHASE 3
                  </span>
                  <span className="md:hidden inline-block bg-gradient-to-br from-sunrise-gold/90 to-forest-green/60 backdrop-blur-sm border border-sunrise-gold/30 text-white px-4 py-2 text-xs font-bold w-fit">
                    OCT 9-10, 2026
                  </span>
                </div>
                <h3 className="text-5xl font-bebas text-white mb-6">
                  2026 CHAMPIONSHIP
                  <span className="block text-sunrise-gold text-3xl mt-2">
                    OCTOBER 9-10TH, 2026
                  </span>
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Everything leads to this. Two days of elite competition at
                    the Canyon County Event Center in Caldwell, Idaho. The best
                    athletes from throwdowns across the region and online
                    qualifier will converge to crown the 2026 Mountain West
                    Fitness Champions.
                  </p>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Experience the energy of 400+ athletes pushing their limits,
                    the roar of the crowd, and the thrill of victory. With live
                    streaming, professional commentary, and a festival
                    atmosphere, the championship weekend is more than a
                    competition - it's a celebration of the Mountain West
                    fitness community.
                  </p>
                  <div className="bg-pitch-black/50 border-l-4 border-sunrise-gold p-6">
                    <h4 className="text-2xl font-bebas text-sunrise-gold mb-4">
                      CHAMPIONSHIP FEATURES
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-sunrise-gold mr-3 text-xl">
                          ▸
                        </span>
                        <span>42,000 sq ft climate-controlled venue</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sunrise-gold mr-3 text-xl">
                          ▸
                        </span>
                        <span>Elite, RX, Scaled, and Team divisions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sunrise-gold mr-3 text-xl">
                          ▸
                        </span>
                        <span>Live streaming and professional coverage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sunrise-gold mr-3 text-xl">
                          ▸
                        </span>
                        <span>$50,000+ in prizes and awards</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="bg-gradient-to-br from-forest-green/20 to-sunrise-gold/20 border border-sunrise-gold/30 p-8 h-96 flex items-center justify-center">
                  <p className="text-sunrise-gold text-center">
                    [Image: Championship podium celebration]
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* How to Qualify Section */}
        <section id="qualify" className="mt-32 relative">
          <div className="bg-gradient-to-br from-sunrise-gold/10 to-forest-green/10 border-2 border-sunrise-gold/40 p-4 md:p-8 rounded-lg">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-4xl md:text-5xl font-bebas text-white mb-3 md:mb-4">
                HOW TO QUALIFY FOR THE CHAMPIONSHIP
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
                Three different paths lead to the October Championship. Here's exactly how to earn your spot.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              {/* Individual Path */}
              <div className="bg-pitch-black/60 border-2 border-sunrise-gold/30 p-4 md:p-8 rounded-lg">
                <h3 className="text-2xl md:text-3xl font-bebas text-sunrise-gold mb-3 md:mb-6 text-center">
                  INDIVIDUAL ATHLETES
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6 text-center px-2">
                  Men's & Women's: RX, Intermediate (+ Masters 35+)
                </p>

                <div className="space-y-4 md:space-y-6">
                  <div className="border-l-4 border-sunrise-gold pl-3 md:pl-4">
                    <p className="text-white font-bold text-base md:text-lg mb-1 md:mb-2">
                      PATH 1: Online Qualifier
                    </p>
                    <p className="text-gray-300 text-sm md:text-base mb-1">
                      <span className="text-sunrise-gold font-bold">Top 8 Athletes</span> per division
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm">April 10-20, 2026</p>
                  </div>

                  <div className="border-l-4 border-sunrise-gold pl-3 md:pl-4">
                    <p className="text-white font-bold text-base md:text-lg mb-1 md:mb-2">
                      PATH 2: Win Your Throwdown
                    </p>
                    <p className="text-gray-300 text-sm md:text-base mb-1">
                      <span className="text-sunrise-gold font-bold">4 Athletes</span> qualify (1st place at each host gym)
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm">July 11th - Individual Competitions</p>
                  </div>

                  <div className="border-l-4 border-sunrise-gold pl-3 md:pl-4">
                    <p className="text-white font-bold text-base md:text-lg mb-1 md:mb-2">
                      PATH 3: Global Throwdown Leaderboard
                    </p>
                    <p className="text-gray-300 text-sm md:text-base mb-1">
                      <span className="text-sunrise-gold font-bold">Next Top 4</span> individuals from all throwdowns
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm">Aggregate scores across all events</p>
                  </div>
                </div>

                <div className="mt-6 md:mt-8 bg-sunrise-gold/20 border border-sunrise-gold/40 p-3 md:p-4 rounded text-center">
                  <p className="text-white font-bold text-xl md:text-2xl">16 TOTAL SPOTS</p>
                  <p className="text-gray-300 text-xs md:text-sm">per division</p>
                </div>
              </div>

              {/* Team Path */}
              <div className="bg-pitch-black/60 border-2 border-forest-green/30 p-4 md:p-8 rounded-lg">
                <h3 className="text-2xl md:text-3xl font-bebas text-forest-green-light mb-3 md:mb-6 text-center">
                  TEAM DIVISIONS
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6 text-center px-2">
                  Men's (M/M), Women's (F/F), Masters 35+ (M/M & F/F): RX, INT, Rookie
                </p>

                <div className="space-y-4 md:space-y-6">
                  <div className="border-l-4 border-forest-green pl-3 md:pl-4">
                    <p className="text-white font-bold text-base md:text-lg mb-1 md:mb-2">
                      PATH 1: Team Online Qualifier
                    </p>
                    <p className="text-gray-300 text-sm md:text-base mb-1">
                      <span className="text-forest-green-light font-bold">Top 5 Teams</span> per division
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm">April 10-20, 2026</p>
                  </div>

                  <div className="border-l-4 border-forest-green pl-3 md:pl-4">
                    <p className="text-white font-bold text-base md:text-lg mb-1 md:mb-2">
                      PATH 2: Win Your Throwdown
                    </p>
                    <p className="text-gray-300 text-sm md:text-base mb-1">
                      <span className="text-forest-green-light font-bold">8 Teams</span> qualify (1st place at each host gym)
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm">July 18th & August 1st - Team Competitions</p>
                  </div>

                  <div className="border-l-4 border-forest-green pl-3 md:pl-4">
                    <p className="text-white font-bold text-base md:text-lg mb-1 md:mb-2">
                      PATH 3: Global Throwdown Leaderboard
                    </p>
                    <p className="text-gray-300 text-sm md:text-base mb-1">
                      <span className="text-forest-green-light font-bold">Next Top 3</span> teams from all throwdowns
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm">Aggregate scores across all events</p>
                  </div>
                </div>

                <div className="mt-6 md:mt-8 bg-forest-green/20 border border-forest-green/40 p-3 md:p-4 rounded text-center">
                  <p className="text-white font-bold text-xl md:text-2xl">16 TOTAL SPOTS</p>
                  <p className="text-gray-300 text-xs md:text-sm">per division</p>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-12 text-center px-2">
              <p className="text-gray-300 text-base md:text-lg max-w-4xl mx-auto">
                <span className="text-sunrise-gold font-bold">Key Takeaway:</span> Multiple chances to qualify!
                Compete in the Online Qualifier in April, attend in-person Throwdowns in July, or rank high on the
                Global Throwdown Leaderboard across all events to secure your spot at the October Championship.
              </p>
            </div>
          </div>
        </section>

        {/* Host Gym Section */}
        <section id="apply" className="mt-32 relative">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-bebas text-white mb-6">
              HOST A THROWDOWN
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Bring the MWFC experience to your community. Host an official throwdown
              and be part of the Road to Championship.
            </p>
          </div>

          {/* Host Applications */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-pitch-black/50 border border-sunrise-gold/30 p-8 rounded-lg">
              <div className="inline-block bg-sunrise-gold text-pitch-black px-4 py-2 text-sm font-bold mb-4">
                APPLICATIONS OPEN NOW
              </div>
              <h3 className="text-4xl font-bebas text-white mb-2">
                HOST GYM APPLICATIONS
              </h3>
              <p className="text-sunrise-gold font-bold mb-6">Apply by March 1st, 2026</p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Gyms across the Mountain West and beyond can become official hosts
                of MWFC 2026 throwdowns. Bring world-class competition to your community
                with comprehensive support from the MWFC team.
              </p>
              <div className="bg-pitch-black/50 border-l-4 border-sunrise-gold p-4 mb-6">
                <h4 className="text-xl font-bebas text-sunrise-gold mb-3">KEY REQUIREMENTS</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-sunrise-gold mr-2">▸</span>
                    <span>6-lanes with 15ft lane length and 6 rig stations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-gold mr-2">▸</span>
                    <span>Capacity for 60-120 athletes and spectators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-gold mr-2">▸</span>
                    <span>Application deadline: March 1, 2026</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-pitch-black/50 border border-forest-green/30 p-8 rounded-lg">
              <div className="inline-block bg-forest-green text-white px-4 py-2 text-sm font-bold mb-4">
                MARCH 15, 2026
              </div>
              <h3 className="text-4xl font-bebas text-white mb-6">
                HOST SELECTION & PREPARATION
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Selected host gyms will be announced and begin working with the MWFC team.
                Each host receives the official MWFC Throwdown Kit with everything needed
                for a successful event.
              </p>
              <div className="bg-pitch-black/50 border-l-4 border-forest-green p-4">
                <h4 className="text-xl font-bebas text-forest-green-light mb-3">WHAT YOU'LL RECEIVE</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-forest-green-light mr-2">▸</span>
                    <span>Marketing templates and social media campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-forest-green-light mr-2">▸</span>
                    <span>Equipment checklist and setup guides</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-forest-green-light mr-2">▸</span>
                    <span>Direct access to MWFC support team</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Revenue CTA */}
          <div className="bg-gradient-to-br from-forest-green/20 to-sunrise-gold/20 border border-sunrise-gold/30 p-12 backdrop-blur-sm rounded-lg">
            <div className="text-center">
              <h3 className="text-5xl font-bebas mb-6 text-white">
                BRING A MWFC THROWDOWN TO YOUR GYM
              </h3>
              <div className="max-w-6xl mx-auto mb-12">
                {/* Key Highlights */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-pitch-black/40 backdrop-blur-sm p-6 rounded-lg border border-sunrise-gold/20">
                    <p className="text-4xl font-bebas text-sunrise-gold mb-2">
                      50/50
                    </p>
                    <p className="text-sm uppercase tracking-wide text-gray-200">
                      Revenue Share
                    </p>
                    <p className="text-xs mt-2 text-gray-400">
                      Make up to $6K for hosting
                    </p>
                  </div>
                  <div className="bg-pitch-black/40 backdrop-blur-sm p-6 rounded-lg border border-sunrise-gold/20">
                    <p className="text-4xl font-bebas text-sunrise-gold mb-2">
                      4
                    </p>
                    <p className="text-sm uppercase tracking-wide text-gray-200">
                      Programmed Workouts
                    </p>
                    <p className="text-xs mt-2 text-gray-400">
                      Event support from MWFC Team
                    </p>
                  </div>
                  <div className="bg-pitch-black/40 backdrop-blur-sm p-6 rounded-lg border border-sunrise-gold/20">
                    <p className="text-4xl font-bebas text-sunrise-gold mb-2">
                      60
                    </p>
                    <p className="text-sm uppercase tracking-wide text-gray-200">
                      Max Capacity
                    </p>
                    <p className="text-xs mt-2 text-gray-400">
                      10 Heats of 6 Lanes
                    </p>
                  </div>
                </div>

                {/* Revenue Breakdown Section */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Team Competition Revenue */}
                  <div className="bg-pitch-black/60 border border-sunrise-gold/30 p-6 rounded-lg text-left">
                    <h3 className="text-2xl font-bebas text-sunrise-gold mb-4">
                      TEAM COMPETITION REVENUE
                    </h3>
                    <div className="mb-4">
                      <p className="text-gray-300 mb-2">
                        <span className="text-white font-bold">Registration:</span> $199/Team
                      </p>
                      <p className="text-gray-300 mb-4">
                        <span className="text-white font-bold">Host Receives:</span> $100 per Team
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400 mb-3 uppercase tracking-wide font-bold">
                        Potential Revenue:
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="bg-pitch-black/40 p-2 rounded">
                          <span className="text-gray-300">30 Teams:</span>
                          <span className="text-sunrise-gold font-bold ml-2">$3,000</span>
                        </div>
                        <div className="bg-pitch-black/40 p-2 rounded">
                          <span className="text-gray-300">40 Teams:</span>
                          <span className="text-sunrise-gold font-bold ml-2">$4,000</span>
                        </div>
                        <div className="bg-pitch-black/40 p-2 rounded">
                          <span className="text-gray-300">50 Teams:</span>
                          <span className="text-sunrise-gold font-bold ml-2">$5,000</span>
                        </div>
                        <div className="bg-sunrise-gold/20 border border-sunrise-gold p-2 rounded">
                          <span className="text-white font-bold">60 Teams:</span>
                          <span className="text-sunrise-gold font-bold ml-2">$6,000</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-3 italic">
                      July 18th & August 1st - Team Competitions
                    </p>
                  </div>

                  {/* Individual Competition Revenue */}
                  <div className="bg-pitch-black/60 border border-forest-green/30 p-6 rounded-lg text-left">
                    <h3 className="text-2xl font-bebas text-forest-green-light mb-4">
                      INDIVIDUAL COMPETITION REVENUE
                    </h3>
                    <div className="mb-4">
                      <p className="text-gray-300 mb-2">
                        <span className="text-white font-bold">Registration:</span> $149/Athlete
                      </p>
                      <p className="text-gray-300 mb-4">
                        <span className="text-white font-bold">Host Receives:</span> $75 per Athlete
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400 mb-3 uppercase tracking-wide font-bold">
                        Potential Revenue:
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="bg-pitch-black/40 p-2 rounded">
                          <span className="text-gray-300">30 Athletes:</span>
                          <span className="text-forest-green-light font-bold ml-2">$2,250</span>
                        </div>
                        <div className="bg-pitch-black/40 p-2 rounded">
                          <span className="text-gray-300">40 Athletes:</span>
                          <span className="text-forest-green-light font-bold ml-2">$3,000</span>
                        </div>
                        <div className="bg-pitch-black/40 p-2 rounded">
                          <span className="text-gray-300">50 Athletes:</span>
                          <span className="text-forest-green-light font-bold ml-2">$3,750</span>
                        </div>
                        <div className="bg-forest-green/20 border border-forest-green p-2 rounded">
                          <span className="text-white font-bold">60 Athletes:</span>
                          <span className="text-forest-green-light font-bold ml-2">$4,500</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-3 italic">
                      July 11th - Individual & Masters Individual Competitions
                    </p>
                  </div>
                </div>

                {/* Additional Revenue Opportunities */}
                <div className="bg-pitch-black/40 border border-sunrise-gold/20 p-6 rounded-lg mb-8">
                  <h3 className="text-2xl font-bebas text-sunrise-gold mb-4">
                    ADDITIONAL REVENUE OPPORTUNITIES
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4 text-sm">
                    <div className="text-center">
                      <p className="text-sunrise-gold font-bold text-lg">$100</p>
                      <p className="text-gray-300">Booth Spaces</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sunrise-gold font-bold text-lg">$500-1,000</p>
                      <p className="text-gray-300">Competition Sponsors</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sunrise-gold font-bold text-lg">$250-500</p>
                      <p className="text-gray-300">Workout Sponsors</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sunrise-gold font-bold text-lg">Variable</p>
                      <p className="text-gray-300">MWFC Apparel Sales</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg mb-6 text-gray-300">
                  Host a one-day competition with everything you need for a
                  successful event. Choose from July 11th, July 18th, or August 1st, 2026.
                </p>
                <p className="text-sm text-gray-400">
                  Fill out the application below and we will reach out to
                  schedule a call to discuss and answer any questions you might
                  have.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdoBX3eX-YB7FmYX0CgBYu4Rsh7XG911AApBRsel8rnVHhxNg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sunrise-gold text-pitch-black px-8 py-4 font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg"
                >
                  APPLY TO HOST A THROWDOWN →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}
