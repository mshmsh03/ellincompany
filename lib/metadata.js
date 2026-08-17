import { LANGS, SITE, PAGE_META } from './site-data';

export const BASE = 'https://ellincompany.com';
export const OG_IMAGE = `${BASE}/assets/img/hero_infrastructure.jpg`;

export function pageUrl(lang, page) {
  return page === 'index' ? `${BASE}/${lang}/` : `${BASE}/${lang}/${page}.html`;
}

export function buildMetadata(lang, page) {
  const t = SITE[lang];
  const meta = PAGE_META[lang][page];
  const canonical = pageUrl(lang, page);

  const languages = {};
  for (const l of LANGS) languages[SITE[l].hreflang] = pageUrl(l, page);
  languages['x-default'] = pageUrl('en', page);

  const otherLocales = LANGS.filter((l) => l !== lang).map((l) => SITE[l].ogLocale);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: 'website',
      siteName: 'Ellin Company',
      title: meta.title,
      description: meta.description,
      url: canonical,
      images: [OG_IMAGE],
      locale: t.ogLocale,
      alternateLocale: otherLocales,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE],
    },
  };
}
