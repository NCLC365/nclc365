/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "export",
  experimental: {},
  compiler: {
    styledComponents: true
  }
};

module.exports = nextConfig;