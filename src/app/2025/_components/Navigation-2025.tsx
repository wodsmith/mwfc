"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import WorkoutDropdown from "@/components/WorkoutDropdown";

export default function Navigation2025() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm w-full py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/mwfc-logo-new.svg"
            alt="Mountain West Fitness Championship 2025"
            width={243}
            height={243}
            className="h-16 w-auto"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          <Link
            href="/2025/#location"
            className="text-white font-semibold text-lg hover:text-sunrise-gold transition-colors"
          >
            LOCATION
          </Link>
          <Link
            href="/2025/#schedule"
            className="text-white font-semibold text-lg hover:text-sunrise-gold transition-colors"
          >
            SCHEDULE
          </Link>
          <Link
            href="/2025/#partners"
            className="text-white font-semibold text-lg hover:text-sunrise-gold transition-colors"
          >
            PARTNERS
          </Link>
          <WorkoutDropdown />
          <Link
            href="https://competitioncorner.net/ff/15905/results#team_101884"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sunrise-gold text-black px-6 py-3 font-bold text-lg rounded hover:bg-sunrise-gold/90 transition-colors"
          >
            View Leaderboard
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden mt-6 bg-black/90 rounded-lg p-6 mx-4">
          <div className="flex flex-col space-y-4">
            <Link
              href="/#location"
              onClick={() => setIsMenuOpen(false)}
              className="text-white font-semibold text-lg hover:text-sunrise-gold transition-colors text-left"
            >
              LOCATION
            </Link>
            <Link
              href="/#schedule"
              onClick={() => setIsMenuOpen(false)}
              className="text-white font-semibold text-lg hover:text-sunrise-gold transition-colors text-left"
            >
              SCHEDULE
            </Link>
            <Link
              href="/#partners"
              onClick={() => setIsMenuOpen(false)}
              className="text-white font-semibold text-lg hover:text-sunrise-gold transition-colors text-left"
            >
              PARTNERS
            </Link>
            <WorkoutDropdown
              isMobile={true}
              onItemClick={() => setIsMenuOpen(false)}
            />
            <Link
              href="/2026"
              onClick={() => setIsMenuOpen(false)}
              className="text-white font-semibold text-lg hover:text-sunrise-gold transition-colors text-left"
            >
              2026
            </Link>
            <Link
              href="https://competitioncorner.net/ff/15905/results#team_101884"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sunrise-gold text-black px-6 py-3 font-bold text-lg rounded hover:bg-sunrise-gold/90 transition-colors"
            >
              View Leaderboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
