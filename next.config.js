/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,  // Ensures all routes work properly
  images: {
    unoptimized: true, // Prevents image build errors on Netlify
  },
};

module.exports = nextConfig;
