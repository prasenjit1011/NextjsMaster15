import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/history', destination: '/cms/history' },
      { source: '/profile', destination: '/cms/profile' },
      { source: '/technology', destination: '/cms/technolgy' },
      { source: '/settings', destination: '/cms/settings' },
      { source: '/team', destination: '/cms/team' }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fastly.picsum.photos',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
