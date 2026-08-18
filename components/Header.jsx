'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon } from 'lucide-react';
import { LANGS, PAGES, SITE, pagePath } from '../lib/site-data';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from './ui/sheet';

// The header lives in the layout rather than in each page, so client-side
// navigation leaves it mounted: no re-paint, no re-running its entrance, and
// the transparent/solid state carries across pages instead of resetting. That
// means it reads the active page from the URL instead of a prop.
function pageFromPathname(pathname) {
  const match = /^\/[a-z]{2}\/([a-z]+)\.html/.exec(pathname);
  return match && PAGES.includes(match[1]) ? match[1] : 'index';
}

export default function Header({ lang }) {
  const t = SITE[lang];
  const pathname = usePathname();
  const page = pageFromPathname(pathname);
  const isSubPage = page !== 'index';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solid = isSubPage || scrolled;

  useEffect(() => {
    let frame = 0;

    const read = () => {
      frame = 0;
      // Two thresholds, not one: once solid it stays solid down to 24px, and
      // only goes transparent again below that. A single 40px line makes the
      // header flicker for anyone who parks the page right on it.
      setScrolled((wasScrolled) => window.scrollY > (wasScrolled ? 24 : 56));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(read);
    };

    // Re-read on navigation too — the router resets scroll to the top, and
    // this header did not unmount to find that out.
    read();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-300 ease-out-quart ${
        solid ? 'bg-white/98 py-3 shadow-[0_2px_20px_rgba(1,42,61,.09)]' : 'bg-transparent py-5'
      }`}
    >
      <div className="wrap flex items-center justify-between">
        <Link href={pagePath(lang, 'index')} className="flex items-center gap-3">
          <img
            className={`h-[46px] w-auto transition-[filter] duration-300 ${solid ? '' : 'brightness-0 invert'}`}
            src="/assets/img/mark_blue.png"
            alt={t.brandAlt}
          />
          <span
            className={`flex flex-col text-[25px] leading-none font-extrabold tracking-[.1em] transition-colors duration-300 ${
              solid ? 'text-brand-darker' : 'text-white'
            }`}
          >
            ELLIN
            <small
              className={`mt-[3px] text-[9.5px] font-semibold tracking-[.16em] transition-colors duration-300 ${
                solid ? 'text-ink-soft' : 'text-[#bcdcea]'
              }`}
            >
              GENERAL CONTRACTING &amp; TRADING
            </small>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {PAGES.map((p) => {
            const active = p === page;
            return (
              <Link
                key={p}
                href={pagePath(lang, p)}
                aria-current={active ? 'page' : undefined}
                className={`group relative py-1.5 text-[14.5px] font-semibold transition-colors duration-200 ${
                  active ? (solid ? 'text-brand' : 'text-[#8fd3ee]') : solid ? 'text-ink' : 'text-white'
                }`}
              >
                {t.nav[p]}
                {/* Scaled, not widened — the rule is always full width and just
                    gets drawn, which keeps it off the layout path and lets it
                    retract as smoothly as it arrives. */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-current transition-transform duration-300 ease-out-expo rtl:origin-right ${
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            );
          })}
          <div
            className={`ms-4 flex items-center gap-3.5 border-s ps-6 transition-colors duration-300 ${
              solid ? 'border-hairline' : 'border-white/28'
            }`}
          >
            {LANGS.map((l) => {
              const active = l === lang;
              return (
                <Link
                  key={l}
                  href={pagePath(l, page)}
                  lang={SITE[l].hreflang}
                  className={`text-[12.5px] font-bold transition-colors duration-200 ${
                    active
                      ? solid
                        ? 'text-brand'
                        : 'text-white'
                      : solid
                        ? 'text-ink-soft hover:text-brand'
                        : 'text-white/60 hover:text-white'
                  }`}
                >
                  {SITE[l].langName}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label={t.burgerLabel}
              className={`md:hidden ${solid ? 'text-ink hover:bg-surface-soft' : 'text-white hover:bg-white/10 hover:text-white'}`}
            >
              <MenuIcon className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side={t.dir === 'rtl' ? 'left' : 'right'}
            className="w-[80%] border-none bg-brand-darker text-white sm:max-w-[320px]"
          >
            <SheetTitle className="sr-only">{t.burgerLabel}</SheetTitle>
            {/* The panel slides in, then its contents register to it. Radix
                mounts this subtree on open, so the delays below run per open. */}
            <nav className="mt-16 flex flex-col gap-7 px-8">
              {PAGES.map((p, i) => (
                <Link
                  key={p}
                  href={pagePath(lang, p)}
                  onClick={() => setOpen(false)}
                  aria-current={p === page ? 'page' : undefined}
                  className={`m-register text-lg font-semibold transition-colors ${
                    p === page ? 'text-[#8fd3ee]' : 'text-white hover:text-[#8fd3ee]'
                  }`}
                  style={{ '--m-delay': `${140 + i * 45}ms`, '--m-dur': '440ms' }}
                >
                  {t.nav[p]}
                </Link>
              ))}
              <div
                className="m-register flex items-center gap-3.5 pt-2"
                style={{ '--m-delay': `${140 + PAGES.length * 45}ms`, '--m-dur': '440ms' }}
              >
                {LANGS.map((l) => (
                  <Link
                    key={l}
                    href={pagePath(l, page)}
                    lang={SITE[l].hreflang}
                    onClick={() => setOpen(false)}
                    className={`text-sm font-bold transition-colors ${
                      l === lang ? 'text-white' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {SITE[l].langName}
                  </Link>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
