import WorkoutCard from "@/components/WorkoutCard";
import { workouts } from "@/data/workouts";

export default function Workouts() {
  return (
    <section id="workouts" className="mb-16">
      <h2 className="text-5xl font-bebas text-center mb-12 text-white">
        WORKOUTS
      </h2>
      <p className="text-center text-white text-lg mb-12 max-w-3xl mx-auto text-balance">
        Test your limits with professionally programmed workouts designed to challenge athletes at every level
      </p>

      <div className="space-y-8">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
}