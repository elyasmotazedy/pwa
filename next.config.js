/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: ".",
    register: true,
    skipWaiting: true,
    runtimeCaching,
  },
});

module.exports = nextConfig;
