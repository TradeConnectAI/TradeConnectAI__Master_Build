/** @type {import('next').NextConfig} */

// Old SaaS marketing/demo pages were removed when the site moved to being
// all about the TradeConnectAI app. Permanent redirects keep old links working.
const retired = [
  ["/operations-demo", "/"],
  ["/operations", "/"],
  ["/ai-receptionist", "/"],
  ["/ai-receptionist-for-trades", "/"],
  ["/ai-call-demo", "/"],
  ["/ai-call-beta", "/"],
  ["/ai-tools", "/"],
  ["/customer-demo", "/"],
  ["/customer-portal", "/"],
  ["/missed-call-software", "/"],
  ["/customer-updates-for-trades", "/#how-it-works"],
  ["/quote-generator-for-trades", "/#photos-and-quotes"],
  ["/trade-business-ai", "/#extra-help"],
  ["/trade-job-management", "/#how-it-works"],
  ["/demo", "/"],
  ["/complete-options", "/"],
  ["/complete-options-demo", "/"],
  ["/job-quoter", "/#photos-and-quotes"],
  ["/quote-creator", "/#photos-and-quotes"],
  ["/book-skip", "/"],
  ["/test-ai", "/"],
  ["/install-jobs-demo", "/"],
];

const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.1.155"],
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "192.168.1.155" },
      { protocol: "http", hostname: "localhost" },
    ],
  },
  async redirects() {
    return [
      // Temporary (307) so it is easy to undo: the old /login page now goes to the app's sign-in.
      { source: "/login", destination: "https://tradeconnectai-beta.lovable.app/auth", permanent: false },
      ...retired.flatMap(([source, destination]) => [
        { source, destination, permanent: true },
        { source: `${source}/:path*`, destination, permanent: true },
      ]),
    ];
  },
};

export default nextConfig;
