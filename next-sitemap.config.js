module.exports = {
  siteUrl: 'https://cloghala.ie',
  changefreq: 'daily',
  priority: 0.7,
  generateRobotsTxt: true, // optional
  // ...other configs
  sitemapSize: 7000, // the maximum number of URLs you want in each sitemap file. The library will split urls into multiple sitemaps if the number of urls exceeds this number.
  generateSitemapIndex: true // set this to true so that the library generates a sitemap index file too.
}