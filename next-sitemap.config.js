/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://iambhvsh.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    }
  },
} 