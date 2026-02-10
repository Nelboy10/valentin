import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // @ts-expect-error - turbopack might not be in the type definition yet
    turbopack: {
      root: process.cwd(),
    },
  },
};

export default nextConfig;
