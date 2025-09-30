export interface Round {
  movements: string[];
}

export interface WorkoutDivision {
  rounds?: Round[];
  movements?: string[];
  deadlifts?: {
    reps: number;
    weight: string;
  };
  burpees?: {
    reps: number;
    type: string;
  };
  wallBalls?: {
    reps: number;
    weight: string;
    height: string;
  };
  barbellHold?: {
    men: string;
    women: string;
    coed: string;
  };
  dumbbellWeight?: string;
  notes?: string[];
  sandbagReps?: number;
  sandbagWeight?: string;
  barbellCleanReps?: number;
  barrierHeight?: string;
  instructions?: string[];
  setBreakdown?: {
    sets123: string[];
    transition: string;
    sets456: string[];
  };
}

export interface Workout {
  id: string;
  title: string;
  subtitle?: string;
  duration: string;
  workoutType: string;
  format?: "partner" | "individual";
  description?: string;
  rx: WorkoutDivision;
  intermediate: WorkoutDivision;
  rookie: WorkoutDivision;
  athlete2Instructions?: string;
  switchInstructions?: string;
  additionalNotes?: string[];
  scoring?: string;
  videoUrl?: string;
  flow?: string[];
  flowNotes?: string[];
  movementStandards?: {
    movement: string;
    description: string;
    points?: string[];
  }[];
  sponsor: {
    name: string;
    logo?: string;
    secondaryLogo?: string;
  };
}
