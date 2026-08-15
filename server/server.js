const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// The site's static files (en/, ar/, ku/, assets/, etc.) live in the repo
// root, one level up from this file.
const SITE_ROOT = path.join(__dirname, '..');

// Pages used to live as flat, suffixed files at the site root
// (e.g. /about-ar.html). They now live under /en, /ar, /ku. Redirect the
// old URLs so bookmarks and search engine links keep working.
const PAGES = ['index', 'about', 'services', 'projects', 'contact'];
const LEGACY_LANGS = { '': 'en', '-ar': 'ar', '-ku': 'ku' };

app.get('/', (req, res) => res.redirect(301, '/en/'));

for (const page of PAGES) {
  for (const [suffix, lang] of Object.entries(LEGACY_LANGS)) {
    app.get(`/${page}${suffix}.html`, (req, res) => {
      res.redirect(301, `/${lang}/${page}.html`);
    });
  }
}

app.use(express.static(SITE_ROOT));

app.listen(PORT, () => {
  console.log(`Ellin Company site listening on port ${PORT}`);
});
