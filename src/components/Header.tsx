import Link from "next/link";
import Image from "next/image";
import { scrollToElementWithOffset } from "@/lib/scrollUtils";
import ViewLeaderboardButton from "./ui/view-leaderboard-button";

export default function Header() {
  return (
    <header className="relative w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/header-background.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 py-24 md:py-32 text-center">
          <div className="flex flex-col items-center mb-4">
            <p className="text-white text-sm md:text-base font-semibold -mb-2 uppercase tracking-wider">
              Presented by
            </p>
            <Image
              src="/brands/pro-path-financial.svg"
              alt="ProPath Financial"
              width={200}
              height={73}
              className="h-8 md:h-12 w-auto brightness-0 invert"
            />
          </div>
          <h1 className="font-bebas tracking-tight mb-8">
            <span className="block text-white text-5xl md:text-7xl mb-2">
              MOUNTAIN WEST
            </span>
            <span className="block text-[#FFB700] text-6xl md:text-8xl italic">
              FITNESS CHAMPIONSHIP
            </span>
          </h1>
         
          <p className="text-white text-2xl md:text-3xl font-bold mb-12">
            OCTOBER 10-11, 2025
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://competitioncorner.net/ff/15905/results#team_101884"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFB700] text-black px-6 py-3 font-bold text-lg rounded hover:bg-[#FFB700]/90 transition-colors min-w-[205px]"
            >
              View Leaderboard
            </Link>
            <ViewLeaderboardButton />
          </div>
          </div>
        </div>
      </header>
  );
}