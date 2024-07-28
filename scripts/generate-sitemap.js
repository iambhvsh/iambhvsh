const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const baseURL = 'https://iambhvsh.vercel.app';

const crawlSite = async (url) => {
  const crawledUrls = new Set();
  const toCrawl = [url];

  while (toCrawl.length) {
    const currentUrl = toCrawl.pop();

    if (crawledUrls.has(currentUrl)) continue;

    try {
      const { data } = await axios.get(currentUrl);
      const $ = cheerio.load(data);

      $('a').each((_, element) => {
        const href = $(element).attr('href');
        if (href && href.startsWith('/') && !href.includes('#')) {
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

  return Array.from(crawledUrls);
};

const generateSitemap = (urls) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map((url) => `
    <url>
      <loc>${url}</loc>
    </url>
  `).join('')}
</urlset>`;

  const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log(`Sitemap saved to ${sitemapPath}`);
};

const main = async () => {
  const urls = await crawlSite(baseURL);
  generateSitemap(urls);
};

main().catch(console.error);
    
