/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://checkusavin.com",
  generateRobotsTxt: true,
  sitemapSize: 50_000,
  exclude: ["/payment/*", "/server-sitemap-index.xml", "/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://checkusavin.com/server-sitemap-index.xml",
      "https://checkusavin.com/server-sitemap.xml",
    ],
  },
};
