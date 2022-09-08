/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
  },
  compiler: {
    styledComponents: {
      cssProp: true,
    },
  },
};

module.exports = nextConfig;
