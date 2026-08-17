import { PAGES, SITE, PHONE_HREF, EMAIL, pagePath } from '../lib/site-data';

export default function Footer({ lang }) {
  const t = SITE[lang];

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">
              <img src="/assets/img/mark_white.png" alt={t.footerLogoAlt} />
              <span className="word">ELLIN<small>GENERAL CONTRACTING &amp; TRADING</small></span>
            </div>
            <p className="max-w-sm">{t.tagline}</p>
          </div>
          <div className="col">
            <h5>{t.footerNavHeading}</h5>
            {PAGES.map((p) => (
              <a key={p} href={pagePath(lang, p)}>{t.footerNav[p]}</a>
            ))}
          </div>
          <div className="col">
            <h5>{t.contactHeading}</h5>
            <p>{t.address}</p>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={PHONE_HREF}>{t.phoneDisplay}</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© <span className="footer-year">2026</span> {t.copyright}</span>
          <span>{t.cityLine}</span>
        </div>
      </div>
    </footer>
  );
}
