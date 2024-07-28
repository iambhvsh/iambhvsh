const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const baseURL = 'https://iambhvsh.vercel.app';

const crawlSite = async (url) => {
  const crawledUrls = new Set();
  const toCrawl = [url];
  const urlsData = [];

  while (toCrawl.length) {
    const currentUrl = toCrawl.pop();

    if (crawledUrls.has(currentUrl)) continue;

    try {
      const { data } = await axios.get(currentUrl);
      const $ = cheerio.load(data);

      const lastmod = new Date().toISOString();
      const changefreq = 'monthly';
      const priority = currentUrl === baseURL ? 1.0 : 0.8;

      urlsData.push({ loc: currentUrl, lastmod, changefreq, priority });

      $('a').each((_, element) => {
        const href = $(element).attr('href');
        if (href && href.startsWith('/') && !href.includes('#') && !href.startsWith('//')) {
          const absoluteUrl = baseURL + href;
          if (!crawledUrls.has(absoluteUrl)) {
            toCrawl.push(absoluteUrl);
          }
        }
      });

      crawledUrls.add(currentUrl);
    } catch (error) {
      console.error(`Failed to fetch ${currentUrl}: ${error.message}`);
    }
  }

  return urlsData;
};

const generateSitemap = (urls) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map((url) => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>
  `).join('')}
</urlset>`;

  const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log(`Sitemap saved to ${sitemapPath}`);
};

const generateSiteMapForNextBuild = async () => {
  const urls = await crawlSite(baseURL);
  generateSitemap(urls);
};

module.exports = generateSiteMapForNextBuild;
