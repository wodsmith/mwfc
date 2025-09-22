"use client";

import { useState, useRef, useEffect } from "react";
import { workouts } from "@/data/workouts";
import { scrollToElementWithOffset } from "@/lib/scrollUtils";

interface WorkoutDropdownProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export default function WorkoutDropdown({ isMobile = false, onItemClick }: WorkoutDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToWorkout = (workoutId: string) => {
    const element = document.getElementById(workoutId);
    if (element) {
      scrollToElementWithOffset(workoutId);
    } else {
      scrollToElementWithOffset('workouts');
    }
    setIsOpen(false);
    onItemClick?.();
  };

  const scrollToAllWorkouts = () => {
    scrollToElementWithOffset('workouts');
    setIsOpen(false);
    onItemClick?.();
  };

  if (isMobile) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white font-semibold text-lg hover:text-[#FFB700] transition-colors text-left w-full flex items-center justify-between"
        >
          WORKOUTS
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="mt-2 bg-stone-800 rounded-lg shadow-lg border border-stone-700">
            <button
              onClick={scrollToAllWorkouts}
              className="block w-full text-left px-4 py-2 text-white hover:text-[#FFB700] hover:bg-stone-700 transition-colors rounded-t-lg font-medium"
            >
              ALL WORKOUTS
            </button>
            {workouts.map((workout, i) => (
              <button
                key={workout.id}
                onClick={() => scrollToWorkout(workout.id)}
                className="block w-full text-left px-4 py-2 text-white hover:text-[#FFB700] hover:bg-stone-700 transition-colors last:rounded-b-lg text-sm"
              >
                {i + 1}. {workout.subtitle} 
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white font-semibold text-lg hover:text-[#FFB700] transition-colors flex items-center space-x-1"
      >
        <span>WORKOUTS</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-black/95 backdrop-blur-sm rounded-lg shadow-xl border border-stone-700 min-w-[200px] z-50">
          <button
            onClick={scrollToAllWorkouts}
            className="block w-full text-left px-4 py-3 text-white hover:text-[#FFB700] hover:bg-stone-800/50 transition-colors rounded-t-lg font-medium border-b border-stone-700"
          >
            ALL WORKOUTS
          </button>
          {workouts.map((workout, i) => (
            <button
              key={workout.id}
              onClick={() => scrollToWorkout(workout.id)}
              className="block w-full text-left px-4 py-2 text-white hover:text-[#FFB700] hover:bg-stone-800/50 transition-colors last:rounded-b-lg"
            >
              {i + 1}. {workout.subtitle} 
            </button>
          ))}
        </div>
      )}
    </div>
  );
}