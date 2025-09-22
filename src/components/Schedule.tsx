"use client";

import { useState, useMemo } from "react";
import { scheduleData } from "@/data/scheduleData";
import type { Location, Workout, Day } from "@/types/schedule";

export default function Schedule() {
	const [selectedTab, setSelectedTab] = useState<"All Days" | Day>("All Days");
	const [selectedLocation, setSelectedLocation] = useState<
		Location | "All Locations"
	>("All Locations");
	const [selectedWorkout, setSelectedWorkout] = useState<
		Workout | "All Workouts"
	>("All Workouts");
	const [searchTerm, setSearchTerm] = useState("");

	const locations: Location[] = ["Main Stage", "Side Stage"];
	const workouts: Workout[] = [
		"Sawtooth",
		"Steelhead",
		"Spud Nation",
		"BRONCO",
		"VANDAL",
		"TOMMY V.",
	];

	const filteredEvents = useMemo(() => {
		let events = [...scheduleData];

		// Filter by tab
		if (selectedTab !== "All Days") {
			events = events.filter((event) => event.day === selectedTab);
		}

		// Filter by location
		if (selectedLocation !== "All Locations") {
			events = events.filter((event) => event.location === selectedLocation);
		}

		// Filter by workout
		if (selectedWorkout !== "All Workouts") {
			events = events.filter((event) => event.workout === selectedWorkout);
		}

		// Filter by search term
		if (searchTerm) {
			const term = searchTerm.toLowerCase();
			events = events.filter(
				(event) =>
					event.division.toLowerCase().includes(term) ||
					event.workout.toLowerCase().includes(term) ||
					event.location.toLowerCase().includes(term)
			);
		}

		// Sort by day and time
		events.sort((a, b) => {
			if (a.day !== b.day) {
				return a.day === "Friday" ? -1 : 1;
			}
			const timeA = convertTo24Hour(a.time);
			const timeB = convertTo24Hour(b.time);
			return timeA.localeCompare(timeB);
		});

		return events;
	}, [selectedTab, selectedLocation, selectedWorkout, searchTerm]);

	function convertTo24Hour(time: string): string {
		const [timePart, period] = time.split(" ");
		let [hours, minutes] = timePart.split(":").map(Number);

		if (period === "PM" && hours !== 12) {
			hours += 12;
		} else if (period === "AM" && hours === 12) {
			hours = 0;
		}

		return `${hours.toString().padStart(2, "0")}:${minutes
			.toString()
			.padStart(2, "0")}`;
	}

	return (
		<section id="schedule" className="py-16 bg-black">
			<div className="w-full px-4">
				<h2 className="text-5xl font-bebas text-center mb-12 text-white">
					Competition Schedule
				</h2>

				{/* Tabs */}
				<div className="flex justify-center mb-8 border-b border-gray-700">
					{(["All Days", "Friday", "Saturday"] as const).map((tab) => (
						<button
							key={tab}
							onClick={() => setSelectedTab(tab)}
							className={`px-6 py-3 text-sm font-medium transition-colors ${
								selectedTab === tab
									? "border-b-2 border-[#FFB700] text-[#FFB700]"
									: "text-gray-400 hover:text-gray-300"
							}`}
						>
							{tab === "All Days"
								? "ALL DAYS"
								: `${tab.toUpperCase()}, SEPT ${
										tab === "Friday" ? "19" : "20"
								  }`}
						</button>
					))}
				</div>

				{/* Filters */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
					<div>
						<label className="block text-sm font-medium text-gray-400 mb-2">
							Location
						</label>
						<select
							value={selectedLocation}
							onChange={(e) =>
								setSelectedLocation(
									e.target.value as Location | "All Locations"
								)
							}
							className="w-full px-4 py-2 bg-black border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-[#FFB700] focus:border-transparent"
						>
							<option value="All Locations">All Locations</option>
							{locations.map((location) => (
								<option key={location} value={location}>
									{location}
								</option>
							))}
						</select>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-400 mb-2">
							Workout
						</label>
						<select
							value={selectedWorkout}
							onChange={(e) =>
								setSelectedWorkout(e.target.value as Workout | "All Workouts")
							}
							className="w-full px-4 py-2 bg-black border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-[#FFB700] focus:border-transparent"
						>
							<option value="All Workouts">All Workouts</option>
							{workouts.map((workout) => (
								<option key={workout} value={workout}>
									{workout}
								</option>
							))}
						</select>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-400 mb-2">
							Search
						</label>
						<input
							type="text"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							placeholder="Search divisions, workouts..."
							className="w-full px-4 py-2 bg-black border border-gray-800 text-white placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-[#FFB700] focus:border-transparent"
						/>
					</div>
				</div>

				{/* Schedule Table */}
				<div className="bg-black rounded-lg shadow-lg overflow-hidden max-h-[600px]">
					<div className="h-[600px] overflow-y-auto overflow-x-hidden">
						{selectedTab === "All Days" && (
							<>
								{/* Friday Section */}
								<div>
									<h3 className="text-2xl font-bebas px-6 py-4 bg-stone-800 border-b border-stone-700 text-white sticky top-0 z-10">
										FRIDAY, SEPT 19
									</h3>
									<ScheduleTable
										events={filteredEvents.filter((e) => e.day === "Friday")}
									/>
								</div>

								{/* Saturday Section */}
								<div>
									<h3 className="text-2xl font-bebas px-6 py-4 bg-stone-800 border-b border-stone-700 text-white sticky top-0 z-10">
										SATURDAY, SEPT 20
									</h3>
									<ScheduleTable
										events={filteredEvents.filter((e) => e.day === "Saturday")}
									/>
								</div>
							</>
						)}

						{selectedTab !== "All Days" && (
							<ScheduleTable events={filteredEvents} />
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

function ScheduleTable({ events }: { events: typeof scheduleData }) {
	if (events.length === 0) {
		return (
			<div className="px-6 py-12 text-center text-gray-400">
				No events found matching your filters.
			</div>
		);
	}

	return (
		<div className="overflow-x-auto">
			<table className="w-full">
				<tbody>
					{events.map((event, index) => (
						<tr
							key={event.id}
							className={index % 2 === 0 ? "bg-black" : "bg-stone-900"}
						>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 w-24">
								{event.time}
							</td>
							<td className="px-6 py-4">
								<div className="flex items-start gap-4">
									<div className="hidden sm:flex flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#326549] to-[#4a8060] rounded-lg items-center justify-center">
										<span className="text-white text-xs font-bold text-center leading-tight">
											{event.workout.split(" ").slice(0, 2).join(" ")}
										</span>
									</div>
									<div>
										<h4 className="text-lg font-bebas uppercase tracking-wide text-white">
											{event.division}: {event.workout}
										</h4>
										<div className="flex items-center gap-2 mt-1">
											<svg
												className="w-4 h-4 text-[#FFB700]"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
											<span className="text-sm text-gray-300">
												{event.location}
											</span>
										</div>
										<div className="flex items-center gap-2 mt-1">
											<svg
												className="w-4 h-4 text-[#FFB700]"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
												/>
											</svg>
											<span className="text-sm text-gray-300">
												{event.division}
											</span>
										</div>
									</div>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
