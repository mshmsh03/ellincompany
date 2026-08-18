import { notFound } from 'next/navigation';
import Script from 'next/script';
import { LANGS, SITE } from '../../lib/site-data';
import { BASE } from '../../lib/metadata';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MotionRoot from '../../components/MotionRoot';
import '../globals.css';

export const metadata = {
  metadataBase: new URL(BASE),
};

// Arms motion before the first paint, so entrances never show their finished
// state for a frame and then start over. It has to run inline and blocking: a
// deferred script would paint first and cause exactly that flash.
//
// Delivered through next/script at beforeInteractive rather than as a bare
// <script> tag. A raw script element inside a component is server-rendered but
// never executed on the client, so React logs a console error for it on every
// render; beforeInteractive is the supported way to get the same inline code
// into the initial HTML without that.
//
// The timer is the failsafe. Every scroll reveal is hidden by CSS while
// data-motion is "on", so if the bundle never runs, MotionRoot never sets
// data-hydrated and motion is switched back off — leaving the page fully
// visible instead of stranding it at opacity 0.
const ARM_MOTION = `(function(){try{var d=document.documentElement;
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
d.dataset.motion='on';
setTimeout(function(){if(d.dataset.hydrated!=='1')d.dataset.motion='off';},3000);
}catch(e){}})();`;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

// Any [lang] outside generateStaticParams 404s instead of being rendered.
// Without this a URL like /about-fr.html matches this segment with
// lang="about-fr.html", and the page's generateMetadata — which runs before
// the notFound() guard below — throws on the missing lookup, turning what
// should be a 404 into a 500.
export const dynamicParams = false;

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
        <Script id="arm-motion" strategy="beforeInteractive">
          {ARM_MOTION}
        </Script>
      </head>
      <body>
        <MotionRoot />
        {/* Header and footer sit in the layout, not in the pages, so the router
            swaps only the page body between routes. The chrome stays mounted:
            no flash, no re-entrance, no scroll state lost. */}
        <Header lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
