/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",

  basePath: "/Website_0",

  assetPrefix: "/Website_0/",

  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
    ],
  },
};

export default nextConfig;