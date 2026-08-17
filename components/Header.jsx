import { LANGS, PAGES, SITE, pagePath } from '../lib/site-data';

export default function Header({ lang, page }) {
  const t = SITE[lang];

  return (
    <header id="siteHeader" data-solid={page !== 'index' ? 'true' : undefined}>
      <div className="navwrap">
        <a href={pagePath(lang, 'index')} className="brand">
          <img className="mark" src="/assets/img/mark_blue.png" alt={t.brandAlt} />
          <span className="word">ELLIN<small>GENERAL CONTRACTING &amp; TRADING</small></span>
        </a>
        <nav className="mainnav" id="mainNav">
          {PAGES.map((p) => {
            const classes = [];
            if (p === 'contact') classes.push('nav-cta');
            if (p === page) classes.push('active');
            return (
              <a key={p} href={pagePath(lang, p)} className={classes.length ? classes.join(' ') : undefined}>
                {t.nav[p]}
              </a>
            );
          })}
          <div className="langsw">
            {LANGS.map((l) => (
              <a key={l} href={pagePath(l, page)} className={l === lang ? 'active' : undefined}>
                {SITE[l].langName}
              </a>
            ))}
          </div>
        </nav>
        <button className="burger" id="burgerBtn" aria-label={t.burgerLabel}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
