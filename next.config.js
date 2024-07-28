const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});
const { withSitemap } = require('next-sitemap');

module.exports = withSitemap(withNextra({
  reactStrictMode: true,
}));
