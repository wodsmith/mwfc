"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import WorkoutDropdown from "@/components/WorkoutDropdown";
import { scrollToElementWithOffset } from "@/lib/scrollUtils";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm w-full py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/mwfc-2025.png"
            alt="Mountain West Fitness Championship 2025"
            width={243}
            height={243}
            className="h-16 w-auto"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          <button
            onClick={() => scrollToElementWithOffset('location')}
            className="text-white font-semibold text-lg hover:text-[#FFB700] transition-colors"
          >
            LOCATION
          </button>
          <button
            onClick={() => scrollToElementWithOffset('schedule')}
            className="text-white font-semibold text-lg hover:text-[#FFB700] transition-colors"
          >
            SCHEDULE
          </button>
          <button
            onClick={() => scrollToElementWithOffset('partners')}
            className="text-white font-semibold text-lg hover:text-[#FFB700] transition-colors"
          >
            PARTNERS
          </button>
          <WorkoutDropdown />
          <Link
            href="/register"
            className="bg-[#FFB700] text-black px-6 py-3 font-bold text-lg rounded hover:bg-[#FFB700]/90 transition-colors"
          >
            REGISTER NOW
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
            <button
              onClick={() => {
                scrollToElementWithOffset('location');
                setIsMenuOpen(false);
              }}
              className="text-white font-semibold text-lg hover:text-[#FFB700] transition-colors text-left"
            >
              LOCATION
            </button>
            <button
              onClick={() => {
                scrollToElementWithOffset('schedule');
                setIsMenuOpen(false);
              }}
              className="text-white font-semibold text-lg hover:text-[#FFB700] transition-colors text-left"
            >
              SCHEDULE
            </button>
            <button
              onClick={() => {
                scrollToElementWithOffset('partners');
                setIsMenuOpen(false);
              }}
              className="text-white font-semibold text-lg hover:text-[#FFB700] transition-colors text-left"
            >
              PARTNERS
            </button>
            <WorkoutDropdown isMobile={true} onItemClick={() => setIsMenuOpen(false)} />
            <Link
              href="/register"
              className="bg-[#FFB700] text-black px-6 py-3 font-bold text-lg rounded hover:bg-[#FFB700]/90 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              REGISTER NOW
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}