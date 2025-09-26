import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
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
