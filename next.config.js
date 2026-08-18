/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next 16 auto-writes AGENTS.md/CLAUDE.md on every dev/build run; this repo
  // doesn't want those generated files.
  agentRules: false,

  // Canonical URLs (set up during the earlier SEO pass) use a trailing
  // slash for the homepage of each language (e.g. /en/). Next.js strips
  // trailing slashes by default, which would otherwise fight the redirect
  // rules below and loop.
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/', destination: '/en/', permanent: true },

      // Pages used to live as flat, suffixed files at the site root
      // (e.g. /about-ar.html). Redirect the old URLs so bookmarks and
      // search engine links keep working.
      { source: '/index.html', destination: '/en/', permanent: true },
      { source: '/index-ar.html', destination: '/ar/', permanent: true },
      { source: '/index-ku.html', destination: '/ku/', permanent: true },
      {
        source: '/:page(about|services|projects|contact).html',
        destination: '/en/:page.html',
        permanent: true,
      },
      {
        source: '/:page(about|services|projects|contact)-ar.html',
        destination: '/ar/:page.html',
        permanent: true,
      },
      {
        source: '/:page(about|services|projects|contact)-ku.html',
        destination: '/ku/:page.html',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      // Keep public URLs ending in .html (matching the previous static
      // site and everything already indexed by search engines) while
      // routing internally to the clean App Router paths.
      { source: '/:lang(en|ar|ku)/index.html', destination: '/:lang' },
      {
        source: '/:lang(en|ar|ku)/:page(about|services|projects|contact).html',
        destination: '/:lang/:page',
      },
    ];
  },
};

module.exports = nextConfig;
