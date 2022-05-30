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
    fallbacks: {
      image: "/no-internet-dinosaur.jpg",
      // document: '/other-offline',  // if you want to fallback to a custom page other than /_offline
      // font: '/static/font/fallback.woff2',
      // audio: ...,
      // video: ...,
    },
  },
});

module.exports = nextConfig;
