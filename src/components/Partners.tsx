import Image from "next/image";

const partners = [
	{
		name: "Advanced Mobile IV",
		logo: "/brands/advanced-mobile-iv.svg",
	},
	{
		name: "GYMREAPERS",
		logo: "/brands/gymreapers.svg",
	},
	{
		name: "Heavy Handed",
		logo: "/brands/heavy-handed.svg",
	},
	{
		name: "Rx Smart Gear",
		logo: "/brands/rxsg.svg",
	},
	{
		name: "HGR CBD",
		logo: "/brands/hgr-cbd.svg",
	},
	{
		name: "Linear",
		logo: "/brands/linear.svg",
	},
	{
		name: "Scheels",
		logo: "/brands/scheels.svg",
	},
	{
		name: "Nutrishop",
		logo: "/brands/nutrishop.svg",
	},
	{
		name: "REIGN",
		logo: "/brands/reign.svg",
	},
	{
		name: "Restore Hyper Wellness",
		logo: "/brands/restore-hyper-wellness.svg",
	},
	{
		name: "Strong Coffee",
		logo: "/brands/strong-coffee.svg",
	},
	{
		name: "TYR",
		logo: "/brands/tyr.svg",
	},
	{
		name: "US Army",
		logo: "/brands/us-army.svg",
	},
];

export default function Partners() {
	return (
		<section id="partners" className="mb-16 relative">
			{/* Background Image */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-0 left-0 right-0 h-80 opacity-15">
					<Image
						src="/vendor/tyr.jpg"
						alt=""
						fill
						className="object-cover"
						style={{ objectPosition: 'center 20%' }}
					/>
				</div>
			</div>

			{/* Content */}
			<div className="relative z-10">
				<h2 className="text-5xl font-bebas text-center pt-16 mb-8 text-white">
					OUR PARTNERS
				</h2>
				<p className="text-xl text-white text-center pb-16 max-w-3xl mx-auto">
					This competition wouldn't happen without the incredible support of our partners.
					Thank you for helping us bring the Mountain West fitness community together!
				</p>

				<div className="space-y-12">
					<div className="text-center">
						<p className="text-lg font-bold text-[#FFB700] mb-6">TITLE SPONSOR</p>
						<div className="flex justify-center">
							<div className="bg-white rounded-lg p-8 shadow-lg">
								<Image
									src="/brands/pro-path-financial.svg"
									alt="ProPath Financial"
									width={300}
									height={120}
									className="w-auto h-24"
								/>
							</div>
						</div>
					</div>

					<div>
						<p className="text-lg font-bold text-[#FFB700] text-center mb-8">
							OFFICIAL PARTNERS
						</p>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
							{partners.map((partner) => (
								<div
									key={partner.name}
									className="bg-white rounded-lg p-6 shadow-lg flex items-center justify-center h-32"
								>
									<Image
										src={partner.logo}
										alt={partner.name}
										width={200}
										height={80}
										className="w-auto h-16 max-w-full object-contain"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}