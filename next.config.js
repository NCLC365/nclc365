/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Remove 'appDir' if you're not using the new app directory
  },
  compiler: {
    styledComponents: true, // If using styled-components
  },
};

module.exports = nextConfig;
