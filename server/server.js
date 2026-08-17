const express = require('express');
const path = require('path');
const { LANGS, PAGES, SITE, PHONE_HREF, EMAIL } = require('./site-data');

const app = express();
const PORT = process.env.PORT || 3000;

// The site's static files (assets/, robots.txt, sitemap.xml) and view
// templates (views/) live in the repo root, one level up from this file.
const SITE_ROOT = path.join(__dirname, '..');

app.set('views', path.join(SITE_ROOT, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const langPattern = LANGS.join('|');
const pagePattern = PAGES.join('|');

function renderPage(lang, page, res) {
  res.render(`${lang}/${page}`, {
    lang,
    page,
    t: SITE[lang],
    SITE,
    LANGS,
    PAGES,
    PHONE_HREF,
    EMAIL,
  });
}

app.get('/', (req, res) => res.redirect(301, '/en/'));

// Pages used to live as flat, suffixed files at the site root
// (e.g. /about-ar.html). They now live under /en, /ar, /ku. Redirect the
// old URLs so bookmarks and search engine links keep working.
const LEGACY_LANGS = { '': 'en', '-ar': 'ar', '-ku': 'ku' };

for (const page of PAGES) {
  for (const [suffix, lang] of Object.entries(LEGACY_LANGS)) {
    app.get(`/${page}${suffix}.html`, (req, res) => {
      res.redirect(301, `/${lang}/${page}.html`);
    });
  }
}

app.get(new RegExp(`^/(${langPattern})$`), (req, res) => res.redirect(301, `${req.path}/`));
app.get(new RegExp(`^/(${langPattern})/$`), (req, res) => renderPage(req.params[0], 'index', res));
app.get(new RegExp(`^/(${langPattern})/(${pagePattern})\\.html$`), (req, res) => {
  renderPage(req.params[0], req.params[1], res);
});

app.use('/assets', express.static(path.join(SITE_ROOT, 'assets')));
app.get('/robots.txt', (req, res) => res.sendFile(path.join(SITE_ROOT, 'robots.txt')));
app.get('/sitemap.xml', (req, res) => res.sendFile(path.join(SITE_ROOT, 'sitemap.xml')));

app.listen(PORT, () => {
  console.log(`Ellin Company site listening on port ${PORT}`);
});
