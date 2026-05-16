/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.1.155"],
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "192.168.1.155" },
      { protocol: "http", hostname: "localhost" },
    ],
  },
};

export default nextConfig;
