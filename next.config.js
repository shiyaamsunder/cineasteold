/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
  },
  experimental: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
