import { ArrowRightIcon } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import Reveal from '../../../components/Reveal';

export default function IndexEn() {
  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center bg-[center_40%] bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(1,42,61,.5) 0%, rgba(1,42,61,.7) 55%, rgba(1,42,61,.93) 100%), url('/assets/img/hero_infrastructure.jpg')",
        }}
      >
        <div className="wrap w-full pt-[170px] pb-[130px]">
          <div className="mb-4 inline-flex items-center gap-2.5 text-[12.5px] font-bold tracking-[.15em] text-[#8fd3ee] uppercase before:block before:h-0.5 before:w-6 before:bg-[#8fd3ee] before:content-['']">
            Est. 2006 · Sulaymaniyah, Iraq
          </div>
          <h1 className="mb-6 max-w-[840px] text-[clamp(34px,5.4vw,64px)] leading-[1.07] text-white rtl:leading-[1.45]">
            Building Iraq&apos;s infrastructure with{' '}
            <em className="text-[#8fd3ee] not-italic">engineering excellence.</em>
          </h1>
          <p className="mb-10 max-w-[570px] text-[18.5px] font-normal text-[#dbe9ef]">
            Ellin Company is a Grade (1) Iraqi general contracting and trading firm delivering healthcare, water, sewerage, and infrastructure projects across Iraq and the Kurdistan Region.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href="/en/projects.html">View Our Projects <ArrowRightIcon /></a>
            </Button>
            <Button asChild variant="heroOutline">
              <a href="/en/contact.html">Get in Touch <ArrowRightIcon /></a>
            </Button>
          </div>
          <div className="mt-[68px] flex flex-wrap border-t border-white/20">
            <div className="flex-1 border-e border-white/18 px-[22px] pt-[26px] first:ps-0 last:border-e-0 max-[700px]:mb-[18px] max-[700px]:flex-[1_1_50%] max-[700px]:border-e-0 max-[700px]:ps-0">
              <div className="text-[30px] font-extrabold text-white">19+</div>
              <div className="mt-1 text-[12.5px] font-semibold tracking-[.08em] text-[#a9c6d3] uppercase">Years of Experience</div>
            </div>
            <div className="flex-1 border-e border-white/18 px-[22px] pt-[26px] first:ps-0 last:border-e-0 max-[700px]:mb-[18px] max-[700px]:flex-[1_1_50%] max-[700px]:border-e-0 max-[700px]:ps-0">
              <div className="text-[30px] font-extrabold text-white">Grade 1</div>
              <div className="mt-1 text-[12.5px] font-semibold tracking-[.08em] text-[#a9c6d3] uppercase">Ministry Classification</div>
            </div>
            <div className="flex-1 border-e border-white/18 px-[22px] pt-[26px] first:ps-0 last:border-e-0 max-[700px]:mb-[18px] max-[700px]:flex-[1_1_50%] max-[700px]:border-e-0 max-[700px]:ps-0">
              <div className="text-[30px] font-extrabold text-white">40+</div>
              <div className="mt-1 text-[12.5px] font-semibold tracking-[.08em] text-[#a9c6d3] uppercase">Projects Completed</div>
            </div>
            <div className="flex-1 border-e border-white/18 px-[22px] pt-[26px] first:ps-0 last:border-e-0 max-[700px]:mb-[18px] max-[700px]:flex-[1_1_50%] max-[700px]:border-e-0 max-[700px]:ps-0">
              <div className="text-[30px] font-extrabold text-white">100%</div>
              <div className="mt-1 text-[12.5px] font-semibold tracking-[.08em] text-[#a9c6d3] uppercase">Iraqi-Owned</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-center text-[11px] tracking-[.16em] text-[#cfe6ee] uppercase opacity-85 [@media(max-height:840px)]:hidden">
          Scroll
          <div className="relative mx-auto mt-2 h-[34px] w-px overflow-hidden bg-[#cfe6ee] after:absolute after:inset-x-0 after:top-[-100%] after:h-full after:w-full after:animate-[scrolldown_1.8s_infinite] after:bg-white" />
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-17 md:py-26" id="about">
        <Reveal as="div" className="wrap grid grid-cols-1 items-center gap-9 md:grid-cols-[1fr_0.85fr] md:gap-[68px]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2.5 text-[12.5px] font-bold tracking-[.15em] text-brand uppercase before:block before:h-0.5 before:w-6 before:bg-brand before:content-['']">
              About Ellin Company
            </div>
            <h2 className="mb-[22px] text-[clamp(26px,3.4vw,38px)] leading-[1.2] rtl:leading-[1.5]">
              A growing, versatile contractor entirely owned by Iraqi citizens.
            </h2>
            <p className="mb-4 text-[17px] text-ink-soft">
              Ellin Company for General Contracting &amp; Trading Ltd. is a Grade (1) Iraqi contracting company established in 2006 and headquartered in Sulaymaniyah, Iraq. With nearly two decades of experience, we&apos;ve delivered construction and infrastructure projects across Iraq and the Kurdistan Region.
            </p>
            <p className="mb-4 text-[17px] text-ink-soft">
              Our founders and key personnel are highly qualified engineers who have worked on large government and private projects, offering expertise across technical, design, management, and execution.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-4">
              <div className="rounded-sm border-s-[3px] border-brand bg-surface-soft px-5 py-[18px]">
                <div className="text-2xl font-extrabold text-brand">2006</div>
                <div className="mt-0.5 text-[12.5px] text-ink-soft">Year Established</div>
              </div>
              <div className="rounded-sm border-s-[3px] border-brand bg-surface-soft px-5 py-[18px]">
                <div className="text-2xl font-extrabold text-brand">Grade 1</div>
                <div className="mt-0.5 text-[12.5px] text-ink-soft">Ministry of Planning Registration</div>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild variant="outline">
                <a href="/en/about.html">More About Us <ArrowRightIcon /></a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img className="rounded-lg shadow-brand" src="/assets/img/history.jpg" alt="Ellin Company concrete works" />
            <div className="absolute start-0 bottom-[-20px] max-w-[210px] rounded-[3px] bg-brand px-5 py-4 text-white shadow-[0_14px_30px_rgba(1,42,61,.25)] sm:start-[-26px] sm:bottom-[-26px] sm:px-[26px] sm:py-[22px]">
              <div className="text-[26px] font-extrabold">100%</div>
              <div className="mt-0.5 text-xs opacity-85">Iraqi-owned &amp; operated since day one</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-surface-soft py-13 md:py-19">
        <Reveal as="div" className="wrap mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2.5 text-[12.5px] font-bold tracking-[.15em] text-brand uppercase before:block before:h-0.5 before:w-6 before:bg-brand before:content-['']">
            Why Ellin
          </div>
          <h2 className="text-[clamp(26px,3.4vw,38px)]">Why Clients Choose Us</h2>
        </Reveal>
        <Reveal as="div" className="wrap">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            <div className="group bg-white px-[30px] py-[38px] transition-colors hover:bg-surface-soft">
              <div className="mb-5 flex size-[66px] items-center justify-center rounded-full bg-surface-soft transition-colors group-hover:bg-brand">
                <img className="size-[38px] transition-[filter] group-hover:brightness-0 group-hover:invert" src="/assets/icons/ic_flag_dark.svg" alt="" />
              </div>
              <h4 className="mb-2 text-[16.5px]">Safety First</h4>
              <p className="text-[13.8px] text-ink-soft">Rigorous safety standards and quality control at every stage of the contracting process.</p>
            </div>
            <div className="group bg-white px-[30px] py-[38px] transition-colors hover:bg-surface-soft">
              <div className="mb-5 flex size-[66px] items-center justify-center rounded-full bg-surface-soft transition-colors group-hover:bg-brand">
                <img className="size-[38px] transition-[filter] group-hover:brightness-0 group-hover:invert" src="/assets/icons/ic_process_dark.svg" alt="" />
              </div>
              <h4 className="mb-2 text-[16.5px]">Structured Delivery</h4>
              <p className="text-[13.8px] text-ink-soft">Comprehensive project management from planning through execution and final handover.</p>
            </div>
            <div className="group bg-white px-[30px] py-[38px] transition-colors hover:bg-surface-soft">
              <div className="mb-5 flex size-[66px] items-center justify-center rounded-full bg-surface-soft transition-colors group-hover:bg-brand">
                <img className="size-[38px] transition-[filter] group-hover:brightness-0 group-hover:invert" src="/assets/icons/ic_team_dark.svg" alt="" />
              </div>
              <h4 className="mb-2 text-[16.5px]">Local Expertise</h4>
              <p className="text-[13.8px] text-ink-soft">Skilled local workforce with deep knowledge of Iraq&apos;s regulatory and engineering landscape.</p>
            </div>
            <div className="group bg-white px-[30px] py-[38px] transition-colors hover:bg-surface-soft">
              <div className="mb-5 flex size-[66px] items-center justify-center rounded-full bg-surface-soft transition-colors group-hover:bg-brand">
                <img className="size-[38px] transition-[filter] group-hover:brightness-0 group-hover:invert" src="/assets/icons/ic_target_dark.svg" alt="" />
              </div>
              <h4 className="mb-2 text-[16.5px]">International Standards</h4>
              <p className="text-[13.8px] text-ink-soft">Compliance with Iraqi, UN, NGO, and FIDIC contract specifications on every project.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* SERVICES TEASER */}
      <section className="py-17 md:py-26" id="services">
        <Reveal as="div" className="wrap mx-auto mb-14 max-w-[660px] text-center">
          <div className="mb-4 inline-flex items-center gap-2.5 text-[12.5px] font-bold tracking-[.15em] text-brand uppercase before:block before:h-0.5 before:w-6 before:bg-brand before:content-['']">
            What We Do
          </div>
          <h2 className="mb-3.5 text-[clamp(26px,3.4vw,38px)]">Core Services</h2>
          <p className="text-base text-ink-soft">
            Ellin Company offers integrated services across construction, infrastructure, and engineering — operating across Iraq and the Kurdistan Region.
          </p>
        </Reveal>
        <div className="wrap grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal as="div" className="rounded-lg border border-hairline bg-white p-8 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-brand-lg">
            <div className="mb-[22px] flex size-[84px] items-center justify-center rounded-full bg-surface-soft transition-colors">
              <img className="size-[50px]" src="/assets/icons/ic_construction.png" alt="" />
            </div>
            <h4 className="mb-[9px] text-lg">General Construction</h4>
            <p className="text-[14.2px] text-ink-soft">Construction of residential, commercial, and industrial buildings.</p>
          </Reveal>
          <Reveal as="div" className="rounded-lg border border-hairline bg-white p-8 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-brand-lg">
            <div className="mb-[22px] flex size-[84px] items-center justify-center rounded-full bg-surface-soft transition-colors">
              <img className="size-[50px]" src="/assets/icons/ic_water.png" alt="" />
            </div>
            <h4 className="mb-[9px] text-lg">Water Supply Networks</h4>
            <p className="text-[14.2px] text-ink-soft">Installation of transmission lines, pump stations, and reservoirs.</p>
          </Reveal>
          <Reveal as="div" className="rounded-lg border border-hairline bg-white p-8 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-brand-lg">
            <div className="mb-[22px] flex size-[84px] items-center justify-center rounded-full bg-surface-soft transition-colors">
              <img className="size-[50px]" src="/assets/icons/ic_sewer.png" alt="" />
            </div>
            <h4 className="mb-[9px] text-lg">Sewerage Networks</h4>
            <p className="text-[14.2px] text-ink-soft">Construction and rehabilitation of urban sewerage systems.</p>
          </Reveal>
        </div>
        <div className="wrap mt-11 text-center">
          <Button asChild>
            <a href="/en/services.html">View All Services <ArrowRightIcon /></a>
          </Button>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,var(--color-brand)_0%,var(--color-brand-darker)_100%)] py-17 text-white md:py-26">
        <Reveal as="div" className="wrap grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <div className="mb-[22px] flex size-[54px] items-center justify-center rounded-full bg-white/12">
              <img className="size-[25px]" src="/assets/icons/ic_target.svg" alt="" />
            </div>
            <h3 className="mb-3.5 text-2xl text-white">Our Vision</h3>
            <p className="mb-3 text-[15px] text-[#cfe3ec]">
              To be a leading construction and engineering company in Iraq, recognized for excellence in workmanship, reliability, and sustainable development.
            </p>
          </div>
          <div>
            <div className="mb-[22px] flex size-[54px] items-center justify-center rounded-full bg-white/12">
              <img className="size-[25px]" src="/assets/icons/ic_flag.svg" alt="" />
            </div>
            <h3 className="mb-3.5 text-2xl text-white">Our Mission</h3>
            <p className="mb-3 text-[15px] text-[#cfe3ec]">
              To provide high-quality, safe, and efficient construction solutions that contribute to Iraq&apos;s growth through professional project management and skilled local labor.
            </p>
          </div>
        </Reveal>
      </section>

      {/* FEATURED PROJECT */}
      <section className="bg-surface-soft py-17 md:py-26" id="projects">
        <Reveal as="div" className="wrap mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2.5 text-[12.5px] font-bold tracking-[.15em] text-brand uppercase before:block before:h-0.5 before:w-6 before:bg-brand before:content-['']">
            Our Work
          </div>
          <h2 className="mb-3.5 text-[clamp(26px,3.4vw,38px)]">Flagship Project</h2>
          <p className="text-base text-ink-soft">A look at one of our most significant infrastructure achievements to date.</p>
        </Reveal>
        <Reveal as="div" className="wrap">
          <div className="grid grid-cols-1 overflow-hidden rounded-lg shadow-brand-lg md:grid-cols-[1.1fr_0.9fr]">
            <div className="min-h-[380px] bg-[url('/assets/img/hospital_ext.jpg')] bg-cover bg-center" />
            <div className="flex flex-col justify-center bg-brand-darker p-12 text-white">
              <div className="mb-3 text-[12.5px] font-bold tracking-[.12em] text-[#8fd3ee] uppercase">Healthcare Investment</div>
              <h3 className="mb-4 text-[27px] text-white">Baxshin Private General Hospital</h3>
              <p className="mb-[22px] text-[14.5px] text-[#c9dde5]">
                A major healthcare investment project in Sulaymaniyah — one of the largest hospitals in the city, designed and executed entirely by Ellin Company across 9 floors with a 40% landscaped area.
              </p>
              <div className="flex flex-wrap gap-[22px]">
                <div className="border-s-2 border-white/30 ps-3">
                  <div className="text-lg font-extrabold text-white">100 beds</div>
                  <div className="text-[11.5px] tracking-[.06em] text-[#a9c6d3] uppercase">Capacity</div>
                </div>
                <div className="border-s-2 border-white/30 ps-3">
                  <div className="text-lg font-extrabold text-white">9,850 m²</div>
                  <div className="text-[11.5px] tracking-[.06em] text-[#a9c6d3] uppercase">Total Area</div>
                </div>
                <div className="border-s-2 border-white/30 ps-3">
                  <div className="text-lg font-extrabold text-white">25.5B IQD</div>
                  <div className="text-[11.5px] tracking-[.06em] text-[#a9c6d3] uppercase">Total Budget</div>
                </div>
              </div>
              <div className="mt-7">
                <Button asChild variant="white">
                  <a href="/en/projects.html">See All Projects <ArrowRightIcon /></a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CSR TEASER */}
      <section
        className="relative bg-[linear-gradient(180deg,rgba(1,42,61,.82),rgba(1,42,61,.9)),url('/assets/img/csr.jpg')] bg-cover bg-center py-17 text-white md:py-26"
        id="csr"
      >
        <Reveal as="div" className="wrap max-w-[780px]">
          <div className="mb-4 inline-flex items-center gap-2.5 text-[12.5px] font-bold tracking-[.15em] text-[#8fd3ee] uppercase before:block before:h-0.5 before:w-6 before:bg-[#8fd3ee] before:content-['']">
            Corporate Social Responsibility
          </div>
          <h2 className="mb-[18px] text-[clamp(26px,3.4vw,36px)] text-white">Building responsibly, for people and the planet.</h2>
          <p className="text-base text-[#d7e6ec]">
            Corporate Social Responsibility is an integral part of Ellin Company&apos;s operations. We&apos;re committed to environmental sustainability, community development, and workforce growth in everything we build.
          </p>
          <div className="mt-6">
            <Button asChild variant="heroOutline">
              <a href="/en/about.html#csr">Learn More <ArrowRightIcon /></a>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-brand py-13 text-center text-white md:py-19">
        <div className="wrap">
          <h2 className="mb-4 text-[clamp(24px,3.2vw,32px)] text-white">Let&apos;s build something lasting.</h2>
          <p className="mb-[30px] text-base text-[#dbeef5]">Get in touch to discuss your next infrastructure or construction project.</p>
          <Button asChild variant="dark">
            <a href="/en/contact.html">Contact Our Team</a>
          </Button>
        </div>
      </section>
    </>
  );
}
