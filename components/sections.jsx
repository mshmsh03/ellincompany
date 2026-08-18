import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from './ui/button';
import Reveal from './Reveal';

// Presentational building blocks shared by every page. Each one replaces a
// class from the old hand-written stylesheet (.eyebrow, .page-header,
// .svc-card, .why-item, .proj-card, .timeline, .cta-strip, …).

export function Eyebrow({ tone = 'brand', className = '', children }) {
  const color = tone === 'light' ? 'text-[#8fd3ee] before:bg-[#8fd3ee]' : 'text-brand before:bg-brand';
  return (
    <div
      className={`mb-4 inline-flex items-center gap-2.5 text-[12.5px] font-bold tracking-[.15em] uppercase before:block before:h-0.5 before:w-6 before:content-[''] rtl:tracking-normal ${color} ${className}`}
    >
      {children}
    </div>
  );
}

// Every subpage opens with this, and it deliberately runs the same entrance as
// the home hero at a shorter scale: the photograph settles, then the crumb,
// title, and lede register to it. Because it animates on mount and the router
// now swaps only the page body, this cascade *is* the page transition — arriving
// somewhere new looks like that place being set out, not like a document reload.
export function PageHeader({ bgImage, homeHref, homeLabel, crumb, title, children, tight = false }) {
  return (
    <section
      className={`relative isolate overflow-hidden pt-[220px] text-white ${tight ? 'pb-[76px]' : 'pb-[90px]'}`}
    >
      {/* The photograph is its own layer so it can settle without dragging the
          text along with it — and so the scrim is never scaled off its edges. */}
      <div
        aria-hidden="true"
        className="m-settle absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(1,42,61,.68) 0%, rgba(1,42,61,.86) 100%), url('${bgImage}')`,
        }}
      />
      <div className="wrap">
        <div
          className="m-register mb-4 flex items-center gap-2 text-[13px] font-semibold tracking-[.06em] text-[#a9d4e6]"
          style={{ '--m-delay': '90ms', '--m-dur': '520ms' }}
        >
          <Link href={homeHref} className="transition-colors hover:text-white">
            {homeLabel}
          </Link>{' '}
          / {crumb}
        </div>
        <h1 className="m-wipe max-w-[760px] text-[clamp(32px,4.6vw,52px)] text-white" style={{ '--m-delay': '170ms' }}>
          {title}
        </h1>
        {children ? (
          <p
            className="m-register mt-4 max-w-[560px] text-[16.5px] text-[#cfe3ec]"
            style={{ '--m-delay': '360ms' }}
          >
            {children}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, tone, title, align = 'center', children }) {
  const centered = align === 'center';
  return (
    <Reveal as="div" className={centered ? 'mx-auto mb-14 max-w-[660px] text-center' : 'mb-11'}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2 className={`text-[clamp(26px,3.4vw,38px)] ${children ? 'mb-3.5' : ''}`}>{title}</h2>
      {children ? <p className="text-base text-ink-soft">{children}</p> : null}
    </Reveal>
  );
}

// No longer a Reveal of its own. Nine of these in a grid meant nine independent
// fades firing at whatever moment each card happened to cross the fold — the
// grid now reveals as one staggered list, which is what it actually is.
export function ServiceCard({ num, icon, title, children }) {
  return (
    <div className="group rounded-lg border border-hairline bg-white p-8 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-brand-lg">
      {num ? <div className="mb-2.5 text-xs font-extrabold tracking-[.05em] text-hairline">{num}</div> : null}
      <div className="mb-[22px] flex size-[84px] items-center justify-center rounded-full bg-surface-soft transition-colors duration-300 group-hover:bg-brand">
        <img className="size-[50px] transition-[filter] duration-300 group-hover:brightness-0 group-hover:invert" src={icon} alt="" />
      </div>
      <h4 className="mb-[9px] text-lg">{title}</h4>
      <p className="text-[14.2px] text-ink-soft">{children}</p>
    </div>
  );
}

export function FeatureGrid({ children }) {
  return (
    <Reveal
      as="div"
      stagger
      className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4"
    >
      {children}
    </Reveal>
  );
}

export function FeatureItem({ icon, title, children }) {
  return (
    <div className="group bg-white px-[30px] py-[38px] transition-colors hover:bg-surface-soft">
      <div className="mb-5 flex size-[66px] items-center justify-center rounded-full bg-surface-soft transition-colors group-hover:bg-brand">
        <img className="size-[38px] transition-[filter] group-hover:brightness-0 group-hover:invert" src={icon} alt="" />
      </div>
      <h4 className="mb-2 text-[16.5px]">{title}</h4>
      <p className="text-[13.8px] text-ink-soft">{children}</p>
    </div>
  );
}

export function ProjectCard({ thumb, tag, title, meta, children }) {
  return (
    <div className="group overflow-hidden rounded-lg border border-hairline bg-white shadow-brand transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-brand-lg">
      {/* The thumbnail eases in a hair on hover — the card lifts, so the image
          inside it should read as being nearer too, not as a flat panel. */}
      <div
        className="h-[200px] bg-cover bg-center transition-transform duration-500 ease-out-quart group-hover:scale-[1.04]"
        style={{ backgroundImage: `url('${thumb}')` }}
      />
      <div className="px-7 py-[26px]">
        <div className="mb-[9px] text-[11.5px] font-bold tracking-[.1em] text-brand uppercase">{tag}</div>
        <h4 className="mb-[9px] text-[18.5px]">{title}</h4>
        <p className="mb-4 text-sm text-ink-soft">{children}</p>
        {meta ? (
          <div className="flex justify-between border-t border-hairline pt-3 text-[12.5px] text-ink-soft">
            <span>{meta.period}</span>
            <b className="text-ink">{meta.value}</b>
          </div>
        ) : null}
      </div>
    </div>
  );
}

// A full-bleed photograph panel: uncovered by the level line passing over it
// rather than nudged upward, which is what separates media entrances from text
// entrances across the site.
export function ProjectFeature({ image, tag, title, stats, children, action }) {
  return (
    <Reveal
      as="div"
      variant="wipe"
      className="grid grid-cols-1 overflow-hidden rounded-lg shadow-brand-lg md:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="min-h-[380px] bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }} />
      <div className="flex flex-col justify-center bg-brand-darker p-12 text-white">
        <div className="mb-3 text-[12.5px] font-bold tracking-[.12em] text-[#8fd3ee] uppercase">{tag}</div>
        <h3 className="mb-4 text-[27px] text-white">{title}</h3>
        <p className="mb-[22px] text-[14.5px] text-[#c9dde5]">{children}</p>
        <div className="flex flex-wrap gap-[22px]">
          {stats.map((s) => (
            <div key={s.label} className="border-s-2 border-white/30 ps-3">
              <div className="text-lg font-extrabold text-white">{s.value}</div>
              <div className="text-[11.5px] tracking-[.06em] text-[#a9c6d3] uppercase">{s.label}</div>
            </div>
          ))}
        </div>
        {action ? <div className="mt-7">{action}</div> : null}
      </div>
    </Reveal>
  );
}

export function LocationLegend({ items }) {
  const shape = {
    hq: 'size-3 rounded-full bg-[#c8332b] shadow-[0_0_0_3px_rgba(200,51,43,.28)]',
    branch: 'size-[11px] bg-[#c8332b]',
    project: 'size-[11px] rounded-full bg-[#c8332b]',
  };
  return (
    <div className="mt-6 flex flex-wrap gap-6">
      {items.map((i) => (
        <div key={i.label} className="flex items-center gap-2 text-[13.5px] font-semibold text-ink-soft">
          <span className={shape[i.type]} />
          {i.label}
        </div>
      ))}
    </div>
  );
}

export function CityTags({ cities }) {
  return (
    <div className="mt-[26px] flex flex-wrap gap-2.5">
      {cities.map((c) => (
        <span key={c} className="rounded-full border border-hairline bg-surface-soft px-4 py-2 text-[13px] font-semibold text-ink">
          {c}
        </span>
      ))}
    </div>
  );
}

export function ApproachStep({ index, title, children }) {
  return (
    <div className="flex gap-[18px] border-b border-hairline py-5 last:border-b-0">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-[15px] font-extrabold text-white">
        {index}
      </div>
      <div>
        <h4 className="mb-1.5 text-[16.5px]">{title}</h4>
        <p className="text-[14.5px] text-ink-soft">{children}</p>
      </div>
    </div>
  );
}

export function TimelineItem({ title, children }) {
  return (
    <div className="relative pb-[34px] last:pb-0">
      <span className="absolute top-0.5 -start-[34px] size-3.5 rounded-full border-[3px] border-white bg-brand shadow-[0_0_0_2px_var(--color-brand)]" />
      <h4 className="mb-1.5 text-base">{title}</h4>
      <p className="text-[14.5px] text-ink-soft">{children}</p>
    </div>
  );
}

export function Timeline({ children }) {
  return (
    <div className="relative mt-2.5 ps-[34px]">
      <span className="absolute inset-y-1.5 start-1.5 w-0.5 bg-hairline" />
      {children}
    </div>
  );
}

export function VisionCard({ icon, title, children }) {
  return (
    <div>
      <div className="mb-[22px] flex size-[54px] items-center justify-center rounded-full bg-white/12">
        <img className="size-[25px]" src={icon} alt="" />
      </div>
      <h3 className="mb-3.5 text-2xl text-white">{title}</h3>
      {children}
    </div>
  );
}

export function VisionText({ children }) {
  return <p className="mb-3 text-[15px] text-[#cfe3ec]">{children}</p>;
}

export function StatFigure({ value, label }) {
  return (
    <div className="rounded-sm border-s-[3px] border-brand bg-surface-soft px-5 py-[18px]">
      <div className="text-2xl font-extrabold text-brand">{value}</div>
      <div className="mt-0.5 text-[12.5px] text-ink-soft">{label}</div>
    </div>
  );
}

export function VisionSection({ children }) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,var(--color-brand)_0%,var(--color-brand-darker)_100%)] py-17 text-white md:py-26">
      <Reveal as="div" className="wrap grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
        {children}
      </Reveal>
    </section>
  );
}

export function CsrSection({ eyebrow, title, children, points }) {
  return (
    <section
      id="csr"
      className="relative bg-[linear-gradient(180deg,rgba(1,42,61,.82),rgba(1,42,61,.9)),url('/assets/img/csr.jpg')] bg-cover bg-center py-17 text-white md:py-26"
    >
      <Reveal as="div" className="wrap max-w-[780px]">
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <h2 className="mb-[18px] text-[clamp(26px,3.4vw,36px)] text-white">{title}</h2>
        {children}
        {points ? (
          <div className="mt-[30px] grid grid-cols-1 gap-4 sm:grid-cols-2">
            {points.map((p) => (
              <div
                key={p}
                className="flex items-start gap-3 text-[14.5px] text-[#e4eef2] before:mt-2 before:size-[7px] before:shrink-0 before:rounded-full before:bg-[#8fd3ee] before:content-['']"
              >
                {p}
              </div>
            ))}
          </div>
        ) : null}
      </Reveal>
    </section>
  );
}

export function CtaStrip({ title, text, children }) {
  return (
    <section className="bg-brand py-13 text-center text-white md:py-19">
      <div className="wrap">
        <h2 className="mb-4 text-[clamp(24px,3.2vw,32px)] text-white">{title}</h2>
        <p className="mb-[30px] text-base text-[#dbeef5]">{text}</p>
        <div className="flex flex-wrap justify-center gap-4">{children}</div>
      </div>
    </section>
  );
}

export function CtaButton({ href, variant = 'dark', children }) {
  return (
    <Button asChild variant={variant}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export function ContactInfo({ icon, label, value }) {
  return (
    <div className="mb-[26px] flex gap-4">
      <div className="flex size-[46px] shrink-0 items-center justify-center rounded-full bg-surface-soft">
        <img className="size-[21px]" src={icon} alt="" />
      </div>
      <div>
        <div className="mb-0.5 text-xs font-bold tracking-[.06em] text-ink-soft uppercase">{label}</div>
        <div className="text-[15.5px] font-semibold">{value}</div>
      </div>
    </div>
  );
}

export function HoursCard({ title, rows }) {
  return (
    <div className="mt-2 rounded-lg bg-surface-soft px-[26px] py-6">
      <h5 className="mb-3.5 text-[13px] tracking-[.06em] text-ink-soft uppercase">{title}</h5>
      {rows.map((r) => (
        <div key={r.days} className="flex justify-between border-b border-hairline py-[7px] text-sm last:border-b-0">
          <span className="text-ink-soft">{r.days}</span>
          <span className="font-semibold">{r.hours}</span>
        </div>
      ))}
    </div>
  );
}

export { ArrowRightIcon, Button, Reveal };
