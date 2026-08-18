'use client';

import { useEffect, useState } from 'react';
import { MenuIcon } from 'lucide-react';
import { LANGS, PAGES, SITE, pagePath } from '../lib/site-data';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from './ui/sheet';

export default function Header({ lang, page }) {
  const t = SITE[lang];
  const isSubPage = page !== 'index';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solid = isSubPage || scrolled;

  useEffect(() => {
    if (isSubPage) return;
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isSubPage]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-300 ${
        solid
          ? 'bg-white/98 py-3 shadow-[0_2px_20px_rgba(1,42,61,.09)] backdrop-blur-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="wrap flex items-center justify-between">
        <a href={pagePath(lang, 'index')} className="flex items-center gap-3">
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
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {PAGES.map((p) => {
            const active = p === page;
            return (
              <a
                key={p}
                href={pagePath(lang, p)}
                className={`group relative py-1.5 text-[14.5px] font-semibold transition-colors duration-300 ${
                  active ? (solid ? 'text-brand' : 'text-[#8fd3ee]') : solid ? 'text-ink' : 'text-white'
                }`}
              >
                {t.nav[p]}
                <span
                  className={`absolute inset-x-0 bottom-0 h-0.5 bg-current transition-all duration-250 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            );
          })}
          <div
            className={`ms-4 flex items-center gap-3.5 border-s ps-6 ${
              solid ? 'border-hairline' : 'border-white/28'
            }`}
          >
            {LANGS.map((l) => {
              const active = l === lang;
              return (
                <a
                  key={l}
                  href={pagePath(l, page)}
                  className={`text-[12.5px] font-bold transition-colors duration-300 ${
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
                </a>
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
            <nav className="mt-16 flex flex-col gap-7 px-8">
              {PAGES.map((p) => (
                <a
                  key={p}
                  href={pagePath(lang, p)}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-semibold ${p === page ? 'text-[#8fd3ee]' : 'text-white'}`}
                >
                  {t.nav[p]}
                </a>
              ))}
              <div className="flex items-center gap-3.5 pt-2">
                {LANGS.map((l) => (
                  <a
                    key={l}
                    href={pagePath(l, page)}
                    onClick={() => setOpen(false)}
                    className={`text-sm font-bold ${l === lang ? 'text-white' : 'text-white/70 hover:text-white'}`}
                  >
                    {SITE[l].langName}
                  </a>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
