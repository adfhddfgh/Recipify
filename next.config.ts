import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "img.spoonacular.com",
    //     pathname: "/recipes/**",
    //   },
    // ],
    // domains: ["img.spoonacular.com", "spoonacular.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.spoonacular.com",
        pathname: "/**", // covers all paths
      },
      {
        protocol: "https",
        hostname: "spoonacular.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = {
  images: {
    domains: ["img.spoonacular.com", "spoonacular.com"],
  },
};
export default nextConfig;
