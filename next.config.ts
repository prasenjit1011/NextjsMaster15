// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
//////////////////////////////////////////////////////////////////////////
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Helps detect potential problems in React

  swcMinify: true,       // Use SWC for faster builds & minification (default: true)

  experimental: {
    serverActions: true, // Enables server actions inside server components
    appDir: true,        // Enables the new App Router with `app/` directory
  },

  images: {
    domains: ['your-domain.com'], // Allow images from these domains
  },

  eslint: {
    // Allow production builds to complete even if ESLint errors are present
    ignoreDuringBuilds: true,
  },

  typescript: {
    // Allow production builds to complete even if there are type errors
    ignoreBuildErrors: false,
  },

  // Optional: Custom headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
