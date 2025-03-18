/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "export",
  compiler: {
    styledComponents: true
  }
};

module.exports = nextConfig;