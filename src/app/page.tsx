import Header from "@/components/Header";
import SponsorBanner from "@/components/SponsorBanner";
import Schedule from "@/components/Schedule";
import Partners from "@/components/Partners";
import Workouts from "@/components/Workouts";
import AthleteCarousel from "@/components/AthleteCarousel";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Header />
			<SponsorBanner />

			<main className="container mx-auto px-4 py-16">
				<section className="text-center mb-24">
					<h2 className="text-5xl font-bebas text-center mb-12 text-white">
						WHERE EVERYDAY ATHLETES BECOME MOUNTAIN WARRIORS
					</h2>
					<p className="text-xl text-white mb-12 max-w-3xl mx-auto">
						Join 400+ athletes from across the Mountain West for two days of
						intense competition at the Canyon County Event Center in Caldwell,
						Idaho.
					</p>

					<div className="mb-16">
						<AthleteCarousel />
					</div>

					<div className="flex flex-wrap justify-center gap-6 text-lg font-bold">
						<div className="bg-[#e0f2f1] px-6 py-3 rounded text-black w-64 text-center">
							360 Athletes in 2024
						</div>
						<div className="bg-[#e0f2f1] px-6 py-3 rounded text-black w-64 text-center">
							83 Gyms Represented
						</div>
						<div className="bg-[#e0f2f1] px-6 py-3 rounded text-black w-64 text-center">
							18 States Competed
						</div>
					</div>
				</section>

				<section className="grid md:grid-cols-2 gap-12 mb-16">
					<div>
						<h3 className="text-3xl font-bebas text-[#FFB700] mb-4">
							Professional Programming
						</h3>
						<p className="text-lg text-white mb-4">
							Programmed by 2x CrossFit Games Champion Justin Medeiros and his
							team, MWFC delivers world-class competition standards for athletes
							at every level.
						</p>
						<p className="text-lg text-white">
							From Intermediate to RX divisions, find your level and test
							yourself against the best in the Mountain West region.
						</p>
					</div>
					<div>
						<h3 className="text-3xl font-bebas text-[#FFB700] mb-4">
							Conquer the Mountain
						</h3>
						<p className="text-lg text-white">
							The Mountain West Fitness Competition gives "Everyday" CrossFit
							Athletes of all experience & fitness levels their chance to
							challenge themselves, while showing off their hard work and have a
							great time with their friends and the fitness community.
						</p>
					</div>
				</section>

				<section id="location" className="mb-16">
					<h2 className="text-5xl font-bebas text-center mb-12 text-white">
						EVENT LOCATION
					</h2>

					<div className="bg-gray-50 rounded-lg overflow-hidden">
						<img
							src="/canyon-county-drone-shot.jpg"
							alt="Canyon County Event Center aerial view"
							className="w-full h-[400px] object-cover"
						/>

						<div className="p-8">
							<div className="grid md:grid-cols-2 gap-8">
								<div>
									<h3 className="text-3xl font-bebas text-[#326549] mb-4">
										CANYON COUNTY EVENT CENTER
									</h3>
									<p className="text-2xl font-bold text-gray-800 mb-1">
										110 County Fair Ave
									</p>
									<p className="text-2xl font-bold text-gray-800 mb-6">
										Caldwell, ID 83605
									</p>
									<a
										href="https://maps.google.com/?q=110+County+Fair+Ave+Caldwell+ID+83605"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-block bg-[#326549] text-white px-6 py-3 font-bold rounded hover:bg-[#326549]/90 transition-colors mb-6"
									>
										GET DIRECTIONS
									</a>

									<h4 className="text-xl font-bold text-[#326549] mb-4">
										Venue Features
									</h4>
									<ul className="space-y-2 text-black">
										<li className="flex items-start">
											<span className="text-[#FFB700] mr-2">▸</span>
											42,000 square feet of climate-controlled competition space
										</li>
										<li className="flex items-start">
											<span className="text-[#FFB700] mr-2">▸</span>
											Professional equipment and setup
										</li>
										<li className="flex items-start">
											<span className="text-[#FFB700] mr-2">▸</span>
											Ample spectator seating
										</li>
										<li className="flex items-start">
											<span className="text-[#FFB700] mr-2">▸</span>
											Convenient parking and easy highway access
										</li>
										<li className="flex items-start">
											<span className="text-[#FFB700] mr-2">▸</span>
											Located near hotels, restaurants, and amenities
										</li>
									</ul>
								</div>

								<div className="relative">
									<img
										src="/canyon-county-maps-screenshot.png"
										alt="Map to Canyon County Event Center"
										className="w-full rounded-lg shadow-lg"
									/>
									<div className="absolute top-4 left-4 bg-white/95 px-3 py-2 rounded shadow-md">
										<p className="text-sm font-bold text-gray-800">
											Easy to Find!
										</p>
										<p className="text-xs text-gray-600">
											Off I-84 in Caldwell
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Schedule with Coming Soon Overlay */}
				<div className="relative">
					{/* Coming Soon Overlay */}
					<div className="absolute inset-0 z-20 flex items-center justify-center">
						<div className="absolute inset-0 bg-black/60"></div>
						<div className="relative z-30 text-center">
							<h3 className="text-5xl font-bebas text-[#FFB700] mb-2">
								SCHEDULE COMING SOON
							</h3>
							<p className="text-gray-400 text-lg">
								Check back for the full competition schedule
							</p>
						</div>
					</div>

					{/* Blurred Schedule Component */}
					<div className="filter blur-sm pointer-events-none select-none">
						<Schedule />
					</div>
				</div>

				

				<Partners />

				<Workouts />

				{/* <section className="bg-[#326549] text-white rounded-lg p-12 text-center">
					<h3 className="text-3xl font-bebas mb-4">
						Presented by ProPath Financial
					</h3>
					<p className="text-xl mb-8">
						Individual Registration: $199 | Team Registration: $499
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="/register"
							className="bg-[#FFB700] text-black px-8 py-4 font-bold text-lg rounded hover:bg-[#FFB700]/90 transition-colors"
						>
							REGISTER NOW
						</a>
						<a
							href="/divisions"
							className="bg-white text-[#326549] px-8 py-4 font-bold text-lg rounded hover:bg-white/90 transition-colors"
						>
							VIEW DIVISIONS
						</a>
					</div>
				</section> */}
			</main>

			<footer className="bg-black text-white py-8 mt-16">
				<div className="container mx-auto px-4 text-center">
					<p className="mb-2">Mountain West Fitness Championship 2025</p>
					<p className="text-sm text-gray-400">
						Contact: mountainwestchampionship@gmail.com | (208) 899-7649
					</p>
					<p className="text-sm text-gray-400 mt-2">
						Follow us @mountainwestchampionship
					</p>
				</div>
			</footer>
		</div>
	);
}
