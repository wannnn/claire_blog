import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "claire-ciao.com",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
