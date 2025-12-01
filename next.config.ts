import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/predict",
        destination: `${process.env.API_URI}/predict`,
      },
    ];
  },
  reactCompiler: true,
};

export default nextConfig;
