/** @type {import('next').NextConfig} */
// https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&layout=compact
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
