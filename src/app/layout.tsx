import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { QueryProvider } from "@/components/QueryProvider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
	variable: "--font-bebas-neue",
	weight: "400",
	subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_URL || "https://mwfc.pages.dev";

export const metadata: Metadata = {
	title: "Mountain West Fitness Championship",
	description: "The official website of the Mountain West Fitness Championship",
	openGraph: {
		title: "Mountain West Fitness Championship",
		description:
			"The official website of the Mountain West Fitness Championship",
		images: [`${siteUrl}/og-mwfc-2026.png`],
	},
	twitter: {
		card: "summary_large_image",
		title: "Mountain West Fitness Championship",
		description:
			"The official website of the Mountain West Fitness Championship",
		images: [`${siteUrl}/og-mwfc-2026.png`],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased bg-black`}
			>
				<QueryProvider>
					{children}
				</QueryProvider>
			</body>
		</html>
	);
}

