import Link from 'next/link';
import { PAGES, SITE, PHONE_HREF, EMAIL, pagePath } from '../lib/site-data';

export default function Footer({ lang }) {
  const t = SITE[lang];

  return (
    <footer className="bg-brand-darker py-[70px] pb-7 text-[#a9c6d3]">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-9 border-b border-white/10 pb-[46px] sm:grid-cols-[1.5fr_1fr_1fr] sm:gap-12">
          <div>
            <div className="mb-[18px] flex items-center gap-3">
              <img className="h-11" src="/assets/img/mark_white.png" alt={t.footerLogoAlt} />
              <span className="flex flex-col text-[22px] leading-none font-extrabold tracking-[.1em] text-white">
                ELLIN
                <small className="mt-1 text-[9.5px] font-semibold tracking-[.14em] text-[#7e9aa8]">
                  GENERAL CONTRACTING &amp; TRADING
                </small>
              </span>
            </div>
            <p className="max-w-sm">{t.tagline}</p>
          </div>
          <div>
            <h5 className="mb-[18px] text-sm tracking-[.06em] text-white uppercase">{t.footerNavHeading}</h5>
            {PAGES.map((p) => (
              <Link
                key={p}
                href={pagePath(lang, p)}
                className="mb-3 block w-fit text-sm transition-colors hover:text-white"
              >
                {t.footerNav[p]}
              </Link>
            ))}
          </div>
          <div>
            <h5 className="mb-[18px] text-sm tracking-[.06em] text-white uppercase">{t.contactHeading}</h5>
            <p className="mb-3 text-sm">{t.address}</p>
            <a href={`mailto:${EMAIL}`} className="mb-3 block w-fit text-sm transition-colors hover:text-white">
              {EMAIL}
            </a>
            <a href={PHONE_HREF} className="mb-3 block w-fit text-sm transition-colors hover:text-white">
              {t.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-6 text-[13px] text-[#7e9aa8]">
          <span>
            © <span>{new Date().getFullYear()}</span> {t.copyright}
          </span>
          <span>{t.cityLine}</span>
        </div>
      </div>
    </footer>
  );
}
