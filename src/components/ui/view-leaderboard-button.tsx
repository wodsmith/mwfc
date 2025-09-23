"use client"
import { scrollToElementWithOffset } from "@/lib/scrollUtils";

export default function ViewLeaderboardButton() {
  return (
    <button
      onClick={() => scrollToElementWithOffset('schedule')}
      className="border-2 border-[#FFB700] text-[#FFB700] px-6 py-3 font-bold text-lg rounded hover:bg-[#FFB700]/90 hover:text-black transition-colors min-w-[205px]"
    >
      View Schedule
    </button>
  );
}