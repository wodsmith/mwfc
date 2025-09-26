"use client";
import { scrollToElementWithOffset } from "@/lib/scrollUtils";

export default function ViewLeaderboardButton() {
  return (
    <button
      onClick={() => scrollToElementWithOffset("schedule")}
      className="border-2 border-sunrise-gold text-sunrise-gold px-6 py-3 font-bold text-lg rounded hover:bg-sunrise-gold/90 hover:text-black transition-colors min-w-[205px]"
    >
      View Schedule
    </button>
  );
}
