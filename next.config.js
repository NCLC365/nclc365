/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // Ensures URLs work correctly
  output: "export", // Generates static files for Netlify

  experimental: {
    // Remove 'appDir' if not using the new app directory
  },
  compiler: {
    styledComponents: true, // If using styled-components
  },
};

module.exports = nextConfig;
