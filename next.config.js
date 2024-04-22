/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cs.copart.com",
        port: "",
        pathname: "/v1/AUTH_svc.pdoc00001/**",
      },
      {
        protocol: "https",
        hostname: "anvis.iaai.com",
        port: "",
        pathname: "/resizer/**",
      },
      {
        protocol: "https",
        hostname: "vis.iaai.com",
        port: "",
        pathname: "/resizer/**",
      },
      {
        protocol: "https",
        hostname:
          "https://cleanmyvin-production.fra1.cdn.digitaloceanspaces.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
