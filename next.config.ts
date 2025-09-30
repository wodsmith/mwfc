import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/proven-30",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sponsorship",
        destination: "/#our-partners",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
