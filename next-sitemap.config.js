const pattern = /^\/vin\/sitemap\/(\d+)\.xml$/;

const getPath = (path) => {
  const match = path.match(pattern);
  if (match) {
    const [, number] = match;
    return `/vin/sitemap.xml/${number}`;
  }
  return path;
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://checkusavin.com",
  generateRobotsTxt: true,
  sitemapSize: 10_000,
  exclude: ["/payment/*"],
  transform: (config, path) => {
    return {
      loc: getPath(path),
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
