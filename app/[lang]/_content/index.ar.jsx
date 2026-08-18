import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import Reveal from '../../../components/Reveal';

export default function IndexAr() {
  return (
    <>
      {/* HERO */}
      <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden">
        {/* The photograph is a layer of its own so it can settle into frame
            without carrying the copy with it. */}
        <div
          aria-hidden="true"
          className="m-settle absolute inset-0 -z-10 bg-[center_40%] bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(1,42,61,.5) 0%, rgba(1,42,61,.7) 55%, rgba(1,42,61,.93) 100%), url('/assets/img/hero_infrastructure.jpg')",
          }}
        />
        <div className="wrap w-full pt-[170px] pb-[130px]">
          <div
            className="m-fade m-eyebrow mb-4 inline-flex items-center gap-2.5 text-[12.5px] font-bold tracking-[.15em] text-[#8fd3ee] uppercase before:block before:h-0.5 before:w-6 before:bg-[#8fd3ee] before:content-['']"
            style={{ '--m-delay': '120ms', '--m-dur': '480ms' }}
          >
            تأسست عام 2006 · السليمانية، العراق
          </div>
          <h1
            className="m-wipe mb-6 max-w-[840px] text-[clamp(34px,5.4vw,64px)] leading-[1.07] text-white rtl:leading-[1.45]"
            style={{ '--m-delay': '200ms' }}
          >
            نبني البنية التحتية العراقية <em className="text-[#8fd3ee] not-italic">بتميّز هندسي.</em>
          </h1>
          <p
            className="m-register mb-10 max-w-[570px] text-[18.5px] font-normal text-[#dbe9ef]"
            style={{ '--m-delay': '380ms', '--m-dur': '620ms' }}
          >
            شركة إيلين هي شركة عراقية من الدرجة الأولى للمقاولات العامة والتجارة، تنفذ مشاريع في القطاع الصحي والمائي ومشاريع المجاري والبنية التحتية في جميع أنحاء العراق وإقليم كوردستان.
          </p>
          <div className="m-register flex flex-wrap gap-4" style={{ '--m-delay': '470ms', '--m-dur': '620ms' }}>
            <Button asChild>
              <Link href="/ar/projects.html">مشاهدة مشاريعنا <ArrowRightIcon /></Link>
            </Button>
            <Button asChild variant="heroOutline">
              <Link href="/ar/contact.html">تواصل معنا <ArrowRightIcon /></Link>
            </Button>
          </div>
          <div className="relative mt-[68px] flex flex-wrap pt-px">
            {/* The datum: the rule is struck across first, then the figures
                register to it one after another. */}
            <span
              aria-hidden="true"
              className="m-strike absolute inset-x-0 top-0 h-px bg-white/20"
              style={{ '--m-delay': '560ms', '--m-dur': '760ms' }}
            />
            <div
              className="m-register flex-1 border-e border-white/18 px-[22px] pt-[26px] first:ps-0 last:border-e-0 max-[700px]:mb-[18px] max-[700px]:flex-[1_1_50%] max-[700px]:border-e-0 max-[700px]:ps-0"
              style={{ '--m-delay': '640ms', '--m-dur': '560ms' }}
            >
              <div className="text-[30px] font-extrabold text-white">+19</div>
              <div className="mt-1 text-[12.5px] font-semibold tracking-[.08em] text-[#a9c6d3] uppercase">سنة من الخبرة</div>
            </div>
            <div
              className="m-register flex-1 border-e border-white/18 px-[22px] pt-[26px] first:ps-0 last:border-e-0 max-[700px]:mb-[18px] max-[700px]:flex-[1_1_50%] max-[700px]:border-e-0 max-[700px]:ps-0"
              style={{ '--m-delay': '700ms', '--m-dur': '560ms' }}
            >
              <div className="text-[30px] font-extrabold text-white">الدرجة 1</div>
              <div className="mt-1 text-[12.5px] font-semibold tracking-[.08em] text-[#a9c6d3] uppercase">تصنيف وزارة التخطيط</div>
            </div>
            <div
              className="m-register flex-1 border-e border-white/18 px-[22px] pt-[26px] first:ps-0 last:border-e-0 max-[700px]:mb-[18px] max-[700px]:flex-[1_1_50%] max-[700px]:border-e-0 max-[700px]:ps-0"
              style={{ '--m-delay': '760ms', '--m-dur': '560ms' }}
            >
              <div className="text-[30px] font-extrabold text-white">+40</div>
              <div className="mt-1 text-[12.5px] font-semibold tracking-[.08em] text-[#a9c6d3] uppercase">مشروعاً منجزاً</div>
            </div>
            <div
              className="m-register flex-1 border-e border-white/18 px-[22px] pt-[26px] first:ps-0 last:border-e-0 max-[700px]:mb-[18px] max-[700px]:flex-[1_1_50%] max-[700px]:border-e-0 max-[700px]:ps-0"
              style={{ '--m-delay': '820ms', '--m-dur': '560ms' }}
            >
              <div className="text-[30px] font-extrabold text-white">100%</div>
              <div className="mt-1 text-[12.5px] font-semibold tracking-[.08em] text-[#a9c6d3] uppercase">ملكية عراقية</div>
            </div>
          </div>
        </div>
        <div
          className="m-fade absolute bottom-7 left-1/2 -translate-x-1/2 text-center text-[11px] tracking-[.16em] text-[#cfe6ee]/85 uppercase [@media(max-height:840px)]:hidden"
          style={{ '--m-delay': '1000ms', '--m-dur': '700ms' }}
        >
          مرر للأسفل
          <div className="m-scroll-cue relative mx-auto mt-2 h-[34px] w-px overflow-hidden bg-[#cfe6ee]/85" />
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-17 md:py-26" id="about">
        <Reveal as="div" className="wrap grid grid-cols-1 items-center gap-9 md:grid-cols-[1fr_0.85fr] md:gap-[68px]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2.5 text-[12.5px] font-bold tracking-[.15em] text-brand uppercase before:block before:h-0.5 before:w-6 before:bg-brand before:content-['']">
              عن شركة إيلين
            </div>
            <h2 className="mb-[22px] text-[clamp(26px,3.4vw,38px)] leading-[1.2] rtl:leading-[1.5]">
              شركة متنامية ومتعددة التخصصات، مملوكة بالكامل لمواطنين عراقيين.
            </h2>
            <p className="mb-4 text-[17px] text-ink-soft">
              شركة إيلين للمقاولات العامة والتجارة المحدودة هي شركة مقاولات عراقية من الدرجة (1)، تأسست عام 2006 ومقرها الرئيسي في السليمانية، العراق. وعلى مدى ما يقارب عقدين من الزمن، نفذت الشركة مشاريع إنشائية وبنية تحتية في جميع أنحاء العراق وإقليم كوردستان.
            </p>
            <p className="mb-4 text-[17px] text-ink-soft">
              يتمتع مؤسسو الشركة وكوادرها الأساسية بخبرة هندسية عالية، وقد عملوا في مشاريع حكومية وخاصة كبرى، ويقدمون خبرة هندسية شاملة في الجوانب الفنية والتصميمية والإدارية والتنفيذية.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-4">
              <div className="rounded-sm border-s-[3px] border-brand bg-surface-soft px-5 py-[18px]">
                <div className="text-2xl font-extrabold text-brand">2006</div>
                <div className="mt-0.5 text-[12.5px] text-ink-soft">سنة التأسيس</div>
              </div>
              <div className="rounded-sm border-s-[3px] border-brand bg-surface-soft px-5 py-[18px]">
                <div className="text-2xl font-extrabold text-brand">الدرجة 1</div>
                <div className="mt-0.5 text-[12.5px] text-ink-soft">تسجيل لدى وزارة التخطيط</div>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link href="/ar/about.html">المزيد عنا <ArrowRightIcon /></Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img className="rounded-lg shadow-brand" src="/assets/img/history.jpg" alt="أعمال صب الخرسانة لشركة إيلين" />
            <div className="absolute start-0 bottom-[-20px] max-w-[210px] rounded-[3px] bg-brand px-5 py-4 text-white shadow-[0_14px_30px_rgba(1,42,61,.25)] sm:start-[-26px] sm:bottom-[-26px] sm:px-[26px] sm:py-[22px]">
              <div className="text-[26px] font-extrabold">100%</div>
              <div className="mt-0.5 text-xs opacity-85">ملكية وإدارة عراقية منذ التأسيس</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-surface-soft py-13 md:py-19">
        <Reveal as="div" className="wrap mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2.5 text-[12.5px] font-bold tracking-[.15em] text-brand uppercase before:block before:h-0.5 before:w-6 before:bg-brand before:content-['']">
            لماذا إيلين
          </div>
          <h2 className="text-[clamp(26px,3.4vw,38px)]">لماذا يختارنا عملاؤنا</h2>
        </Reveal>
        <div className="wrap">
          <Reveal as="div" stagger className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            <div className="group bg-white px-[30px] py-[38px] transition-colors hover:bg-surface-soft">
              <div className="mb-5 flex size-[66px] items-center justify-center rounded-full bg-surface-soft transition-colors group-hover:bg-brand">
                <img className="size-[38px] transition-[filter] group-hover:brightness-0 group-hover:invert" src="/assets/icons/ic_flag_dark.svg" alt="" />
              </div>
              <h4 className="mb-2 text-[16.5px]">السلامة أولاً</h4>
              <p className="text-[13.8px] text-ink-soft">معايير سلامة صارمة ورقابة جودة في كل مرحلة من مراحل التنفيذ.</p>
            </div>
            <div className="group bg-white px-[30px] py-[38px] transition-colors hover:bg-surface-soft">
              <div className="mb-5 flex size-[66px] items-center justify-center rounded-full bg-surface-soft transition-colors group-hover:bg-brand">
                <img className="size-[38px] transition-[filter] group-hover:brightness-0 group-hover:invert" src="/assets/icons/ic_process_dark.svg" alt="" />
              </div>
              <h4 className="mb-2 text-[16.5px]">تنفيذ منظم</h4>
              <p className="text-[13.8px] text-ink-soft">إدارة مشاريع شاملة من التخطيط وحتى التنفيذ والتسليم النهائي.</p>
            </div>
            <div className="group bg-white px-[30px] py-[38px] transition-colors hover:bg-surface-soft">
              <div className="mb-5 flex size-[66px] items-center justify-center rounded-full bg-surface-soft transition-colors group-hover:bg-brand">
                <img className="size-[38px] transition-[filter] group-hover:brightness-0 group-hover:invert" src="/assets/icons/ic_team_dark.svg" alt="" />
              </div>
              <h4 className="mb-2 text-[16.5px]">خبرة محلية</h4>
              <p className="text-[13.8px] text-ink-soft">كوادر محلية ماهرة تمتلك معرفة عميقة بالبيئة التنظيمية والهندسية في العراق.</p>
            </div>
            <div className="group bg-white px-[30px] py-[38px] transition-colors hover:bg-surface-soft">
              <div className="mb-5 flex size-[66px] items-center justify-center rounded-full bg-surface-soft transition-colors group-hover:bg-brand">
                <img className="size-[38px] transition-[filter] group-hover:brightness-0 group-hover:invert" src="/assets/icons/ic_target_dark.svg" alt="" />
              </div>
              <h4 className="mb-2 text-[16.5px]">معايير دولية</h4>
              <p className="text-[13.8px] text-ink-soft">الالتزام بمواصفات العقود العراقية والأممية ومنظمات المجتمع المدني ومعايير FIDIC في كل مشروع.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="py-17 md:py-26" id="services">
        <Reveal as="div" className="wrap mx-auto mb-14 max-w-[660px] text-center">
          <div className="mb-4 inline-flex items-center gap-2.5 text-[12.5px] font-bold tracking-[.15em] text-brand uppercase before:block before:h-0.5 before:w-6 before:bg-brand before:content-['']">
            ماذا نقدّم
          </div>
          <h2 className="mb-3.5 text-[clamp(26px,3.4vw,38px)]">خدماتنا الأساسية</h2>
          <p className="text-base text-ink-soft">
            تقدم شركة إيلين خدمات متكاملة في مجالات البناء والبنية التحتية والهندسة، وتعمل في جميع أنحاء العراق وإقليم كوردستان.
          </p>
        </Reveal>
        <Reveal as="div" stagger className="wrap grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-hairline bg-white p-8 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-brand-lg">
            <div className="mb-[22px] flex size-[84px] items-center justify-center rounded-full bg-surface-soft transition-colors">
              <img className="size-[50px]" src="/assets/icons/ic_construction.png" alt="" />
            </div>
            <h4 className="mb-[9px] text-lg">الإنشاءات العامة</h4>
            <p className="text-[14.2px] text-ink-soft">إنشاء المباني السكنية والتجارية والصناعية.</p>
          </div>
          <div className="rounded-lg border border-hairline bg-white p-8 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-brand-lg">
            <div className="mb-[22px] flex size-[84px] items-center justify-center rounded-full bg-surface-soft transition-colors">
              <img className="size-[50px]" src="/assets/icons/ic_water.png" alt="" />
            </div>
            <h4 className="mb-[9px] text-lg">شبكات المياه</h4>
            <p className="text-[14.2px] text-ink-soft">تمديد خطوط النقل ومحطات الضخ وخزانات المياه.</p>
          </div>
          <div className="rounded-lg border border-hairline bg-white p-8 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-brand-lg">
            <div className="mb-[22px] flex size-[84px] items-center justify-center rounded-full bg-surface-soft transition-colors">
              <img className="size-[50px]" src="/assets/icons/ic_sewer.png" alt="" />
            </div>
            <h4 className="mb-[9px] text-lg">شبكات المجاري</h4>
            <p className="text-[14.2px] text-ink-soft">إنشاء وتأهيل شبكات الصرف الصحي الحضرية.</p>
          </div>
        </Reveal>
        <div className="wrap mt-11 text-center">
          <Button asChild>
            <Link href="/ar/services.html">عرض جميع الخدمات <ArrowRightIcon /></Link>
          </Button>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,var(--color-brand)_0%,var(--color-brand-darker)_100%)] py-17 text-white md:py-26">
        <Reveal as="div" stagger className="wrap grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <div className="mb-[22px] flex size-[54px] items-center justify-center rounded-full bg-white/12">
              <img className="size-[25px]" src="/assets/icons/ic_target.svg" alt="" />
            </div>
            <h3 className="mb-3.5 text-2xl text-white">رؤيتنا</h3>
            <p className="mb-3 text-[15px] text-[#cfe3ec]">
              أن نكون شركة رائدة في قطاع البناء والهندسة في العراق، معروفة بالتميز في جودة العمل والموثوقية والتنمية المستدامة.
            </p>
          </div>
          <div>
            <div className="mb-[22px] flex size-[54px] items-center justify-center rounded-full bg-white/12">
              <img className="size-[25px]" src="/assets/icons/ic_flag.svg" alt="" />
            </div>
            <h3 className="mb-3.5 text-2xl text-white">رسالتنا</h3>
            <p className="mb-3 text-[15px] text-[#cfe3ec]">
              تقديم حلول إنشائية آمنة وعالية الجودة وفعّالة تسهم في تنمية العراق، من خلال إدارة مشاريع احترافية وأيدٍ عاملة محلية ماهرة.
            </p>
          </div>
        </Reveal>
      </section>

      {/* FEATURED PROJECT */}
      <section className="bg-surface-soft py-17 md:py-26" id="projects">
        <Reveal as="div" className="wrap mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2.5 text-[12.5px] font-bold tracking-[.15em] text-brand uppercase before:block before:h-0.5 before:w-6 before:bg-brand before:content-['']">
            أعمالنا
          </div>
          <h2 className="mb-3.5 text-[clamp(26px,3.4vw,38px)]">المشروع الرائد</h2>
          <p className="text-base text-ink-soft">نظرة على أحد أبرز إنجازاتنا في مجال البنية التحتية حتى الآن.</p>
        </Reveal>
        <Reveal as="div" variant="wipe" className="wrap">
          <div className="grid grid-cols-1 overflow-hidden rounded-lg shadow-brand-lg md:grid-cols-[1.1fr_0.9fr]">
            <div className="min-h-[380px] bg-[url('/assets/img/hospital_ext.jpg')] bg-cover bg-center" />
            <div className="flex flex-col justify-center bg-brand-darker p-12 text-white">
              <div className="mb-3 text-[12.5px] font-bold tracking-[.12em] text-[#8fd3ee] uppercase">استثمار في القطاع الصحي</div>
              <h3 className="mb-4 text-[27px] text-white">مستشفى بەخشین الأهلي العام</h3>
              <p className="mb-[22px] text-[14.5px] text-[#c9dde5]">
                مشروع استثماري صحي كبير في مدينة السليمانية — أحد أكبر المستشفيات في المدينة، صمّمته ونفذته شركة إيلين بالكامل على تسعة طوابق مع مساحة خضراء تشكل 40٪ من إجمالي مساحة المشروع.
              </p>
              <div className="flex flex-wrap gap-[22px]">
                <div className="border-s-2 border-white/30 ps-3">
                  <div className="text-lg font-extrabold text-white">100 سرير</div>
                  <div className="text-[11.5px] tracking-[.06em] text-[#a9c6d3] uppercase">الطاقة الاستيعابية</div>
                </div>
                <div className="border-s-2 border-white/30 ps-3">
                  <div className="text-lg font-extrabold text-white">9,850 م²</div>
                  <div className="text-[11.5px] tracking-[.06em] text-[#a9c6d3] uppercase">المساحة الإجمالية</div>
                </div>
                <div className="border-s-2 border-white/30 ps-3">
                  <div className="text-lg font-extrabold text-white">25.5 مليار د.ع</div>
                  <div className="text-[11.5px] tracking-[.06em] text-[#a9c6d3] uppercase">الميزانية الإجمالية</div>
                </div>
              </div>
              <div className="mt-7">
                <Button asChild variant="white">
                  <Link href="/ar/projects.html">جميع المشاريع <ArrowRightIcon /></Link>
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
            المسؤولية الاجتماعية للشركة
          </div>
          <h2 className="mb-[18px] text-[clamp(26px,3.4vw,36px)] text-white">نبني بمسؤولية، للناس وللبيئة.</h2>
          <p className="text-base text-[#d7e6ec]">
            تشكل المسؤولية الاجتماعية جزءاً أساسياً من عمل شركة إيلين. نحن ملتزمون بالاستدامة البيئية والتنمية المجتمعية وتطوير الكوادر البشرية في كل ما ننفذه.
          </p>
          <div className="mt-6">
            <Button asChild variant="heroOutline">
              <Link href="/ar/about.html#csr">اعرف المزيد <ArrowRightIcon /></Link>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-brand py-13 text-center text-white md:py-19">
        <div className="wrap">
          <h2 className="mb-4 text-[clamp(24px,3.2vw,32px)] text-white">لنبنِ معاً شيئاً يدوم.</h2>
          <p className="mb-[30px] text-base text-[#dbeef5]">تواصل معنا لمناقشة مشروعك الإنشائي أو مشروع البنية التحتية القادم.</p>
          <Button asChild variant="dark">
            <Link href="/ar/contact.html">تواصل مع فريقنا</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
