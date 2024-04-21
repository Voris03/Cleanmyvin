/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cs.copart.com",
        port: "",
        pathname: "/v1/AUTH_svc.pdoc00001/**",
      },
    ],
  },
};

module.exports = nextConfig;
