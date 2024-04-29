/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://checkusavin.com",
  generateRobotsTxt: true,
  sitemapSize: 10_000,
  exclude: ["/payment/*"],
};
