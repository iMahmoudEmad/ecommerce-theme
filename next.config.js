/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig = withPWA({
  env:{
    apiUrl:"https://api.manasa-staging.shop/api/v1"
  },
  reactStrictMode: true,
});

module.exports = nextConfig;
