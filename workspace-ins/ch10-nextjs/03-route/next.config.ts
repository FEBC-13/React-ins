import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/community/:slug',
        destination: '/posts/:slug',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
