"use client";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLeaderboard } from "@/hooks/useLeaderboard";
import DivisionLeaderboard from "./_components/DivisionLeaderboard";
import GymLeaderboard from "./_components/GymLeaderboard";

const COMPETITION_ID = "comp_sfy558a952ov789d6x525pa3";

function formatUpdatedAt(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

export default function AllValleyOpenPage() {
  const { data, isLoading, error, dataUpdatedAt, refetch, isFetching } =
    useLeaderboard(COMPETITION_ID);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-pitch-black mt-24">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-6xl md:text-7xl font-bebas text-white mb-2">
              ALL VALLEY OPEN
              <span className="block text-sunrise-gold text-4xl mt-2">
                2026 LEADERBOARD
              </span>
            </h1>
            <p className="text-gray-400">Feb 28 &ndash; Mar 14, 2026</p>
          </div>

          {/* Last updated + refresh */}
          {dataUpdatedAt > 0 && (
            <div className="flex items-center justify-center gap-3 mb-6 text-sm text-gray-500">
              <span>Updated {formatUpdatedAt(dataUpdatedAt)}</span>
              <button
                type="button"
                onClick={() => refetch()}
                disabled={isFetching}
                className="inline-flex items-center gap-1 text-gray-400 hover:text-sunrise-gold transition-colors disabled:opacity-50"
              >
                <svg
                  aria-hidden="true"
                  className={`w-4 h-4 ${isFetching ? "animate-spin" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Refresh
              </button>
            </div>
          )}

          {/* Loading */}
          {isLoading && (
            <div className="flex items-center justify-center py-20">
              <svg
                aria-hidden="true"
                className="animate-spin h-8 w-8 text-sunrise-gold"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>
          )}

          {/* Error */}
          {error && !isLoading && (
            <div className="text-center py-20">
              <p className="text-red-400 mb-2">
                Failed to load leaderboard data.
              </p>
              <p className="text-gray-500 text-sm">Please try again later.</p>
            </div>
          )}

          {/* Leaderboard tabs */}
          {data && (
            <Tabs defaultValue="division">
              <TabsList className="mx-auto bg-stone-900 border border-gray-700 mb-8">
                <TabsTrigger
                  value="division"
                  className="data-[state=active]:bg-sunrise-gold data-[state=active]:text-pitch-black text-gray-300 px-6 py-2 font-bold"
                >
                  Division
                </TabsTrigger>
                <TabsTrigger
                  value="gym"
                  className="data-[state=active]:bg-sunrise-gold data-[state=active]:text-pitch-black text-gray-300 px-6 py-2 font-bold"
                >
                  Gym
                </TabsTrigger>
              </TabsList>

              <TabsContent value="division">
                <DivisionLeaderboard divisions={data.divisions} />
              </TabsContent>

              <TabsContent value="gym">
                <GymLeaderboard gyms={data.gyms} />
              </TabsContent>
            </Tabs>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}
