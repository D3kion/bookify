import type { NextConfig } from "next";

const IS_PROD = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(!IS_PROD
    ? {
        async rewrites() {
          return [
            {
              source: "/api/:path*",
              destination: "http://localhost:4000/api/:path*",
            },
          ];
        },
      }
    : {}),
};

export default nextConfig;
