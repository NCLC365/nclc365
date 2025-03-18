/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['your-image-hosting.com'], // Replace with actual domains if needed
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
