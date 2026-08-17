import { notFound } from 'next/navigation';
import { LANGS, SITE } from '../../lib/site-data';
import { BASE } from '../../lib/metadata';

export const metadata = {
  metadataBase: new URL(BASE),
};

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  if (!LANGS.includes(lang)) notFound();
  const t = SITE[lang];

  return (
    <html lang={t.hreflang} dir={t.dir}>
      <head>
        <link rel="icon" type="image/png" href="/assets/img/mark_blue.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/styles.css" />
      </head>
      <body>
        {children}
        <script src="/assets/js/main.js" defer />
      </body>
    </html>
  );
}
