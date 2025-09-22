export type Division =
  | 'Co-Ed - RX'
  | 'Co-Ed - Intermediate'
  | 'Co-Ed - Rookie'
  | 'Men\'s - RX'
  | 'Men\'s - Intermediate'
  | 'Men\'s - Rookie'
  | 'Women\'s - RX'
  | 'Women\'s - Intermediate'
  | 'Women\'s - Rookie'
  | 'Masters Co-Ed - RX'
  | 'Masters Co-Ed - Intermediate'
  | 'Masters Men\'s - RX'
  | 'Masters Men\'s - Intermediate'
  | 'Masters Men\'s - Rookie'
  | 'Masters Women\'s - Intermediate';

export type Workout =
  | 'Sawtooth'
  | 'Steelhead'
  | 'Spud Nation'
  | 'BRONCO'
  | 'VANDAL'
  | 'MOUNTAIN WEST'
  | 'TOMMY V.';

export type Location =
  | 'Main Stage'
  | 'Side Stage';

export type Day = 'Friday' | 'Saturday';

export interface ScheduleEvent {
  id: string;
  day: Day;
  time: string;
  division: Division;
  workout: Workout;
  location: Location;
}