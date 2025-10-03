import Footer from "@/components/Footer";

export default function Timeline2026() {
  return (
    <div className="min-h-screen bg-pitch-black mt-24">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4">
          <div className="inline-block bg-sunrise-gold text-pitch-black px-6 py-2 font-bold text-sm mb-6">
            ⚡ APPLICATIONS NOW OPEN ⚡
          </div>
          <h1 className="text-7xl md:text-8xl font-bebas text-white mb-4">
            MOUNTAIN WEST
            <span className="block text-sunrise-gold">
              FITNESS CHAMPIONSHIP
            </span>
            {/* <span className="block text-9xl md:text-[10rem] mt-4 bg-gradient-to-r from-sunrise-gold via-yellow-300 to-sunrise-gold bg-clip-text text-transparent animate-pulse">
              2026
            </span> */}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-2">
            The journey to the ultimate fitness championship begins with local
            throwdowns across the Mountain West region
          </p>
          <p className="text-lg text-sunrise-gold font-bold mb-8">
            Host gym applications are open now through March 1st, 2026
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdoBX3eX-YB7FmYX0CgBYu4Rsh7XG911AApBRsel8rnVHhxNg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sunrise-gold text-pitch-black px-8 py-4 font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg"
          >
            APPLY TO HOST NOW →
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
            Follow the complete journey from gym applications to the ultimate
            championship event. Each phase builds toward creating the most
            competitive and exciting fitness championship in the Mountain West.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Left Side */}
          <div className="absolute left-0 md:left-32 top-0 bottom-0 w-1 bg-sunrise-gold hidden md:block"></div>

          {/* Phase 1: Applications */}
          <div className="relative flex items-start mb-32">
            <div className="hidden md:block w-32 flex-shrink-0">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-sunrise-gold/90 to-sunrise-gold/60 backdrop-blur-sm border border-sunrise-gold/30 text-pitch-black px-4 py-2 font-bold text-sm">
                  OPEN NOW
                </div>
              </div>
            </div>

            <div className="md:ml-16 flex-grow">
              <div className="mb-8">
                <div className="flex flex-col gap-2 mb-4">
                  <span className="inline-block bg-gradient-to-br from-sunrise-gold/90 to-sunrise-gold/60 backdrop-blur-sm border border-sunrise-gold/30 text-pitch-black px-4 py-2 text-sm font-bold w-fit">
                    PHASE 1 - APPLICATIONS OPEN NOW
                  </span>
                  <span className="md:hidden inline-block bg-gradient-to-br from-sunrise-gold/90 to-sunrise-gold/60 backdrop-blur-sm border border-sunrise-gold/30 text-pitch-black px-4 py-2 text-xs font-bold w-fit">
                    OPEN NOW
                  </span>
                </div>
                <h3 className="text-5xl font-bebas text-white mb-6">
                  HOST GYM APPLICATIONS
                  <span className="block text-sunrise-gold text-3xl mt-2">
                    Apply by March 1st, 2026
                  </span>
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    This is where the journey begins. Gyms across the Mountain
                    West region and beyond have the opportunity to become
                    official hosts of MWFC 2026 throwdowns. As a host gym,
                    you'll be at the forefront of bringing world-class
                    competition to your local community.
                  </p>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    We're looking for facilities that embody the spirit of MWFC
                    - passionate communities, dedicated athletes, and venues
                    ready to showcase the best of functional fitness. Host gyms
                    will receive comprehensive support including marketing
                    materials, complete programming, and official MWFC
                    certification.
                  </p>
                  <div className="bg-pitch-black/50 border-l-4 border-sunrise-gold p-6 mb-6">
                    <h4 className="text-2xl font-bebas text-sunrise-gold mb-4">
                      KEY REQUIREMENTS
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-sunrise-gold mr-3 text-xl">
                          ▸
                        </span>
                        <span>
                          Minimum 5,000 sq ft competition space with proper
                          equipment
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sunrise-gold mr-3 text-xl">
                          ▸
                        </span>
                        <span>Capacity for 100+ athletes and spectators</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sunrise-gold mr-3 text-xl">
                          ▸
                        </span>
                        <span>
                          Proven track record of hosting fitness events
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sunrise-gold mr-3 text-xl">
                          ▸
                        </span>
                        <span>Application deadline: March 1, 2026</span>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdoBX3eX-YB7FmYX0CgBYu4Rsh7XG911AApBRsel8rnVHhxNg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-sunrise-gold text-pitch-black px-8 py-4 font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg text-center"
                  >
                    APPLY TO HOST NOW →
                  </a>
                </div>
                {/* <div className="bg-forest-green/10 border border-forest-green/30 p-8 h-96 flex items-center justify-center">
                  <p className="text-forest-green-light text-center">
                    [Image: Gym application materials and excited gym owners]
                  </p>
                </div> */}
              </div>
            </div>
          </div>

          {/* Phase 2: Selection */}
          <div className="relative flex items-start mb-32">
            <div className="hidden md:block w-32 flex-shrink-0">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-forest-green/90 to-forest-green/60 backdrop-blur-sm border border-forest-green/30 text-white px-4 py-2 font-bold text-sm">
                  MAR 15, 2026
                </div>
              </div>
            </div>

            <div className="md:ml-16 flex-grow">
              <div className="mb-8">
                <div className="flex flex-col gap-2 mb-4">
                  <span className="inline-block bg-gradient-to-br from-forest-green/90 to-forest-green/60 backdrop-blur-sm border border-forest-green/30 text-white px-4 py-2 text-sm font-bold w-fit">
                    PHASE 2
                  </span>
                  <span className="md:hidden inline-block bg-gradient-to-br from-forest-green/90 to-forest-green/60 backdrop-blur-sm border border-forest-green/30 text-white px-4 py-2 text-xs font-bold w-fit">
                    MAR 15, 2026
                  </span>
                </div>
                <h3 className="text-5xl font-bebas text-white mb-6">
                  HOST SELECTION & PREPARATION
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* <div className="order-2 md:order-1 bg-forest-green/10 border border-forest-green/30 p-8 h-96 flex items-center justify-center">
                  <p className="text-forest-green-light text-center">
                    [Image: Selected gyms receiving their host packages]
                  </p>
                </div> */}
                <div className="order-1 md:order-2">
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    After careful review, selected host gyms will be announced.
                    This marks the beginning of an intensive preparation period
                    where hosts will work directly with the MWFC team to ensure
                    their events meet championship standards.
                  </p>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Each host will receive the official MWFC Throwdown Kit,
                    including competition standards, judging criteria, equipment
                    specifications, and exclusive branding materials. Our team
                    will provide ongoing support to ensure every throwdown
                    delivers an unforgettable experience for athletes and
                    spectators alike.
                  </p>
                  <div className="bg-pitch-black/50 border-l-4 border-forest-green p-6">
                    <h4 className="text-2xl font-bebas text-forest-green-light mb-4">
                      PREPARATION INCLUDES
                    </h4>
                    <ul className="space-y-3 text-gray-300">
                      {/* <li className="flex items-start">
                        <span className="text-forest-green-light mr-3 text-xl">▸</span>
                        <span>Virtual training sessions for staff and volunteers</span>
                      </li> */}
                      <li className="flex items-start">
                        <span className="text-forest-green-light mr-3 text-xl">
                          ▸
                        </span>
                        <span>
                          Marketing templates and social media campaigns
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-forest-green-light mr-3 text-xl">
                          ▸
                        </span>
                        <span>Equipment checklist and setup guides</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-forest-green-light mr-3 text-xl">
                          ▸
                        </span>
                        <span>Direct access to MWFC support team</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3: Online Qualifier */}
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
                    PHASE 3
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
                  <div className="bg-gradient-to-br from-forest-green/20 to-sunrise-gold/20 border border-sunrise-gold/30 p-8">
                    <h4 className="text-2xl font-bebas text-sunrise-gold mb-4">
                      QUALIFICATION PATHS
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      The Online Qualifier is your opportunity to secure a spot
                      at the Championship. Different qualification rules apply
                      for individuals vs. teams:
                    </p>
                    <div className="space-y-4 text-sm">
                      <div className="bg-pitch-black/40 p-4 rounded border border-sunrise-gold/20">
                        <p className="text-white font-bold mb-2">
                          INDIVIDUAL ATHLETES:
                        </p>
                        <p className="text-gray-300">
                          <span className="text-sunrise-gold">★</span> Must
                          compete in the Online Qualifier - this is the ONLY way
                          for individuals to qualify for the Championship
                        </p>
                      </div>
                      <div className="bg-pitch-black/40 p-4 rounded border border-forest-green/20">
                        <p className="text-white font-bold mb-2">TEAMS:</p>
                        <p className="text-gray-300">
                          <span className="text-sunrise-gold">★</span> Can
                          qualify through either the Online Qualifier OR MWFC
                          Throwdowns
                        </p>
                        <p className="text-gray-400 text-xs mt-2">
                          Top 3 teams in each division receive Championship
                          invites
                        </p>
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

          {/* Phase 4: Throwdowns */}
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
                    PHASE 4
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
                            July 11th - Co-Ed Competition
                          </span>
                        </div>
                        <span className="ml-8 text-sm">
                          6 Divisions: Co-Ed RX, INT, Rookie & Masters 35+ Co-Ed
                          RX, INT, Rookie
                        </span>
                      </li>
                      <li className="flex items-start flex-col">
                        <div className="flex items-center mb-2">
                          <span className="text-sunrise-gold mr-3 text-xl">
                            ▸
                          </span>
                          <span className="font-bold text-white">
                            July 18th - Masters Competition
                          </span>
                        </div>
                        <span className="ml-8 text-sm">
                          6 Divisions: Men's (M/M) RX, INT, Rookie & Women's
                          (F/F) RX, INT, Rookie
                        </span>
                      </li>
                      <li className="flex items-start flex-col">
                        <div className="flex items-center mb-2">
                          <span className="text-sunrise-gold mr-3 text-xl">
                            ▸
                          </span>
                          <span className="font-bold text-white">
                            July 25th - Partner Competition
                          </span>
                        </div>
                        <span className="ml-8 text-sm">
                          6 Divisions: Men's (M/M) RX, INT, Rookie & Women's
                          (F/F) RX, INT, Rookie
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
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start">
                        <span className="text-sunrise-gold mr-2">•</span>
                        <span>Train and compete with your gym fam</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sunrise-gold mr-2">•</span>
                        <span>Get athlete t-shirts included</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sunrise-gold mr-2">•</span>
                        <span>Earn your shot at the MWFC Championship</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sunrise-gold mr-2">•</span>
                        <span>
                          See how you stack up on the Global Leaderboard
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-sunrise-gold/20 to-forest-green/20 border border-sunrise-gold/30 p-8">
                    <h4 className="text-2xl font-bebas text-sunrise-gold mb-4">
                      MULTIPLE PATHS TO THE CHAMPIONSHIP
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      All team scores from every Throwdown are added to a Global
                      Leaderboard. This means you have multiple chances to
                      qualify for the Championship:
                    </p>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start">
                        <span className="text-sunrise-gold mr-2">1.</span>
                        <span>
                          <strong className="text-white">
                            Win your Throwdown
                          </strong>{" "}
                          - Top team at each event receives a direct invite
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-sunrise-gold mr-2">2.</span>
                        <span>
                          <strong className="text-white">
                            Global Leaderboard Top 5
                          </strong>{" "}
                          - The top 5 teams on the Global Leaderboard who didn't
                          win their event also qualify
                        </span>
                      </li>
                    </ul>
                    <p className="text-xs text-gray-400 mt-4 italic">
                      Even if you don't win your local Throwdown, a strong
                      performance can still earn you a Championship invite
                      through the Global Leaderboard!
                    </p>
                  </div>

                  {/* <div className="bg-forest-green/10 border border-forest-green/30 p-8 h-64 flex items-center justify-center">
                    <p className="text-forest-green-light text-center">
                      [Image: Athletes competing at regional throwdowns]
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Phase 5: Championship */}
          <div className="relative flex items-start mb-32">
            <div className="hidden md:block w-32 flex-shrink-0">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-sunrise-gold/90 to-forest-green/60 backdrop-blur-sm border border-sunrise-gold/30 text-white px-4 py-2 font-bold text-sm">
                  OCT 2026
                </div>
              </div>
            </div>

            <div className="md:ml-16 flex-grow">
              <div className="mb-8">
                <div className="flex flex-col gap-2 mb-4">
                  <span className="inline-block bg-gradient-to-br from-sunrise-gold/90 to-forest-green/60 backdrop-blur-sm border border-sunrise-gold/30 text-white px-4 py-2 text-sm font-bold w-fit">
                    PHASE 5
                  </span>
                  <span className="md:hidden inline-block bg-gradient-to-br from-sunrise-gold/90 to-forest-green/60 backdrop-blur-sm border border-sunrise-gold/30 text-white px-4 py-2 text-xs font-bold w-fit">
                    OCT 2026
                  </span>
                </div>
                <h3 className="text-5xl font-bebas text-white mb-6">
                  2026 CHAMPIONSHIP
                  <span className="block text-sunrise-gold text-3xl mt-2">
                    THE ULTIMATE PROVING GROUND
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

        {/* Call to Action Section */}
        <section id="apply" className="mt-32 relative">
          <div className="bg-gradient-to-br from-forest-green/20 to-sunrise-gold/20 border border-sunrise-gold/30 p-12 backdrop-blur-sm">
            <div className="text-center">
              <h2 className="text-6xl font-bebas mb-6 text-white">
                BRING AN MWFC THROWDOWN TO YOUR GYM
              </h2>
              <div className="max-w-4xl mx-auto mb-12">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-pitch-black/40 backdrop-blur-sm p-6 rounded-lg border border-sunrise-gold/20">
                    <p className="text-4xl font-bebas text-sunrise-gold mb-2">
                      50/50
                    </p>
                    <p className="text-sm uppercase tracking-wide text-gray-200">
                      Revenue Share
                    </p>
                    <p className="text-xs mt-2 text-gray-400">
                      Make up to $4-6k for hosting
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
                      Team Capacity
                    </p>
                    <p className="text-xs mt-2 text-gray-400">
                      10 Heats of 6 Lanes
                    </p>
                  </div>
                </div>
                <p className="text-lg mb-6 text-gray-300">
                  Host a one-day competition with everything you need for a
                  successful event. Choose from three July Saturdays: July 11th,
                  18th, or 25th, 2026.
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
  );
}
