/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/**",
      },
    ],
  },
  compiler: {
    styledComponents: {
      cssProp: true,
    },
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
