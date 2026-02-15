import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_URL || "https://mwfc.pages.dev";

export const metadata: Metadata = {
  title: "All Valley Open 2026 Leaderboard | Mountain West Fitness Championship",
  description:
    "Live leaderboard for The All Valley Open 2026. Division rankings and Fittest Gym in the Valley standings.",
  openGraph: {
    title: "All Valley Open 2026 Leaderboard",
    description:
      "Live division and gym leaderboard for The All Valley Open 2026.",
    images: [`${siteUrl}/og-all-valley-open-2026.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Valley Open 2026 Leaderboard",
    description:
      "Live division and gym leaderboard for The All Valley Open 2026.",
    images: [`${siteUrl}/og-all-valley-open-2026.png`],
  },
};

export default function AllValleyOpenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
