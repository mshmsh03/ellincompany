import PageShell from '../../components/PageShell';
import { buildMetadata, BASE, OG_IMAGE, pageUrl } from '../../lib/metadata';
import { SITE, PAGE_META } from '../../lib/site-data';
import IndexEn from './_content/index.en';
import IndexAr from './_content/index.ar';
import IndexKu from './_content/index.ku';

const CONTENT = { en: IndexEn, ar: IndexAr, ku: IndexKu };

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return buildMetadata(lang, 'index');
}

function jsonLd(lang) {
  const t = SITE[lang];
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: 'Ellin Company for General Contracting & Trading Ltd.',
    alternateName: 'Ellin Company',
    url: pageUrl(lang, 'index'),
    logo: `${BASE}/assets/img/logo_blue.png`,
    image: OG_IMAGE,
    description: PAGE_META[lang].index.description,
    foundingDate: '2006',
    email: 'info@ellincompany.com',
    telephone: '+9647701541677',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Azadi Building, Azadi Park Road',
      addressLocality: 'Sulaymaniyah',
      addressCountry: 'IQ',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Iraq',
    },
    inLanguage: t.hreflang,
  };
}

export default async function HomePage({ params }) {
  const { lang } = await params;
  const Content = CONTENT[lang];
  return (
    <PageShell lang={lang} page="index">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(lang)) }}
      />
      <Content />
    </PageShell>
  );
}
