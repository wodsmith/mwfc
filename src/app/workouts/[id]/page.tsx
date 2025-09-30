import { workouts } from "@/data/workouts";
import { notFound } from "next/navigation";
import Link from "next/link";
import VerticalVideoPlayer from "@/components/VerticalVideoPlayer";
import MovementStandards from "@/components/MovementStandards";
import WorkoutCard from "@/components/WorkoutCard";

interface WorkoutPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return workouts.map((workout) => ({
    id: workout.id,
  }));
}

export default async function WorkoutPage({ params }: WorkoutPageProps) {
  const { id } = await params;
  const workout = workouts.find((w) => w.id === id);

  if (!workout) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-pitch-black pt-[116px]">
      {/* Header with back button */}
      <div className="fixed top-[76px] left-0 right-0 z-40 bg-gradient-to-br from-stone-900 to-stone-800 border-b border-stone-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/#workouts"
              className="inline-flex items-center text-sunrise-gold hover:text-yellow-400 transition-colors shrink-0"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to All Workouts
            </Link>
            <h1 className="text-2xl font-bebas text-white text-right">
              {workout.title}:{" "}
              <span className="text-sunrise-gold">{workout.subtitle}</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Video */}
          <div>
            <h2 className="text-3xl font-bebas text-white mb-6">
              WORKOUT DEMONSTRATION
            </h2>
            {workout.videoUrl ? (
              <VerticalVideoPlayer
                videoUrl={workout.videoUrl}
                title={`${workout.title} - ${workout.subtitle}`}
              />
            ) : (
              <div className="bg-stone-800 rounded-lg p-8 text-center">
                <p className="text-stone-400 text-lg">Video coming soon</p>
              </div>
            )}
          </div>

          {/* Right Column - Workout Details */}
          <div>
            <h2 className="text-3xl font-bebas text-white mb-6">
              WORKOUT DETAILS
            </h2>
            <WorkoutCard workout={workout} showViewStandardsButton={false} />
          </div>
        </div>

        {/* Flow Section */}
        {workout.flow && workout.flow.length > 0 && (
          <div className="mt-12 bg-gradient-to-br from-stone-900 to-stone-800 rounded-lg p-8">
            <h2 className="text-3xl font-bebas text-sunrise-gold mb-6">
              FLOW
            </h2>
            <div className="space-y-4">
              {workout.flow.map((step, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-sunrise-gold font-bold mr-4 mt-1">
                    •
                  </span>
                  <p className="text-stone-300 text-lg">{step}</p>
                </div>
              ))}
            </div>
            {workout.flowNotes && workout.flowNotes.length > 0 && (
              <div className="mt-6 pt-6 border-t border-stone-700">
                <h3 className="text-xl font-bebas text-white mb-4">NOTES:</h3>
                <div className="space-y-2">
                  {workout.flowNotes.map((note, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-sunrise-gold font-bold mr-4 mt-1">
                        •
                      </span>
                      <p className="text-stone-400">{note}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Scoring Section */}
        {workout.scoring && (
          <div className="mt-12 bg-gradient-to-br from-stone-900 to-stone-800 rounded-lg p-8">
            <h2 className="text-3xl font-bebas text-sunrise-gold mb-6">
              SCORE
            </h2>
            <p className="text-stone-300 text-lg">{workout.scoring}</p>
          </div>
        )}

        {/* Movement Standards Section */}
        {workout.movementStandards && workout.movementStandards.length > 0 && (
          <div className="mt-12">
            <MovementStandards standards={workout.movementStandards} />
          </div>
        )}

      </div>
    </div>
  );
}
