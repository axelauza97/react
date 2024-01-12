/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.dummyjson.com", "cdn.dummyjson.com"], // Add the domain where your images are hosted
  },
  reactStrictMode: false,
};
module.exports = nextConfig;
