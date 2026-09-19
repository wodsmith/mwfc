import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <nav className="mb-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
          <Link
            href="/divisions"
            className="text-gray-400 hover:text-sunrise-gold transition-colors"
          >
            Divisions
          </Link>
          <Link
            href="/all-valley-open"
            className="text-gray-400 hover:text-sunrise-gold transition-colors"
          >
            All Valley Open 2026
          </Link>
          <Link
            href="/2025"
            className="text-gray-400 hover:text-sunrise-gold transition-colors"
          >
            2025 Competition
          </Link>
          <a
            href="https://competitioncorner.net/events/21483/details"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sunrise-gold transition-colors"
          >
            Register
          </a>
        </nav>
        <p className="mb-2">Mountain West Fitness Championship 2025</p>
        <p className="text-sm text-gray-400">
          Contact:{" "}
          <Link href="mailto:mountainwestchampionship@gmail.com">
            mountainwestchampionship@gmail.com
          </Link>{" "}
          | (208) 899-7649
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Follow us{" "}
          <Link
            href="instagram://user?username=mountainwestchampionship"
            target="_blank"
            rel="noopener noreferrer"
          >
            @mountainwestchampionship
          </Link>
        </p>
      </div>
    </footer>
  );
}
