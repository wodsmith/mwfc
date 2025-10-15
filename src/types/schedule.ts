export type Division =
  | "Co-Ed - RX"
  | "Co-Ed - Intermediate"
  | "Co-Ed - Rookie"
  | "Men's - RX"
  | "Men's - Intermediate"
  | "Men's - Rookie"
  | "Women's - RX"
  | "Women's - Intermediate"
  | "Women's - Rookie"
  | "Masters Co-Ed - RX"
  | "Masters Co-Ed - Intermediate"
  | "Masters Men's - RX"
  | "Masters Men's - Intermediate"
  | "Masters Men's - Rookie"
  | "Masters Women's - Intermediate";

export type Day = "Friday" | "Saturday";

export interface LaneAssignment {
  lane: number;
  competitor: string;
  affiliate: string;
  division: string;
  teammates?: string;
}

export interface Heat {
  heatNumber: number;
  time: string;
  lanes: LaneAssignment[] | null; // null means "Lane Assignment Pending"
}

export interface WorkoutSchedule {
  id: number;
  day: Day;
  workoutNumber: number;
  workoutName: string;
  timeRange: string;
  location: string;
  heats: Heat[];
}

// Legacy type for backward compatibility
export type Workout =
  | "Sawtooth"
  | "Steelhead"
  | "Spud Nation"
  | "BRONCO"
  | "VANDAL"
  | "MOUNTAIN WEST"
  | "TOMMY V.";

export type Location = "Main Stage" | "Side Stage";

export interface ScheduleEvent {
  id: string;
  day: Day;
  time: string;
  division: Division;
  workout: Workout;
  location: Location;
}
