import {
  CityTags,
  CtaButton,
  CtaStrip,
  Eyebrow,
  LocationLegend,
  PageHeader,
  ProjectCard,
  ProjectFeature,
  Reveal,
  SectionHead,
} from '../../../components/sections';

export default function ProjectsKu() {
  return (
    <>
      <PageHeader
        bgImage="/assets/img/hospital_ext.jpg"
        homeHref="/ku/"
        homeLabel="ماڵەوە"
        crumb="پرۆژەکان"
        title="پرۆژە تەواوکراوەکان لە سەرانسەری عێراق."
      >
        پرۆژەی گەورەی بیناسازی و ژێرخان کە توانای تەکنیکی بەهێز، بەڕێوەبردنی ڕێکخراوی پرۆژە و پابەندبوون بە کوالیتی و سەلامەتی نیشان دەدەن.
      </PageHeader>

      {/* FEATURED: BAXSHIN HOSPITAL */}
      <section className="py-17 md:py-26">
        <div className="wrap">
          <ProjectFeature
            image="/assets/img/hospital_ext.jpg"
            tag="پرۆژەی سەرەکی · تەندروستی"
            title="نەخۆشخانەی گشتی تایبەتی بەخشین"
            stats={[
              { value: '100 قەرەوێڵە', label: 'توانای وەرگرتن' },
              { value: '9,850 م²', label: 'ڕووبەری گشتی' },
              { value: '9 نهۆم', label: 'پێکهاتەی بیناسازی' },
              { value: '25.5 ملیار', label: 'بودجەی گشتی (د.ع)' },
            ]}
          >
            پرۆژەیەکی گەورەی وەبەرهێنانی تەندروستی لە سلێمانی — یەکێک لە گەورەترین نەخۆشخانەکانی شار و عێراق، کە بە تەواوی لەلایەن کۆمپانیای ئێلینەوە دیزاین و جێبەجێ کراوە. لە باشووری سلێمانی دانراوە، هەموو بەشەکانی نەخۆشخانەیەکی پێشکەوتوو لەسەر 9 نهۆم لەخۆدەگرێت، لەگەڵ ڕووبەرێکی سەوز کە 40٪ی ڕووبەری پرۆژەکە پێکدەهێنێت، سەرەڕای گەراجی ژێرزەوی.
          </ProjectFeature>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ProjectCard thumb="/assets/img/hospital_atrium.jpg" tag="ناوەوە" title="حەوشەی ناوەوە و ڕووبەری سەوز">
              حەوشەیەکی ناوەوەی ڕووناکی سروشتی، تێکەڵکراو لەگەڵ ڕووبەری سەوزی نهۆمی سەرەوەی نەخۆشخانەکە.
            </ProjectCard>
            <ProjectCard thumb="/assets/img/hospital_lobby.jpg" tag="ناوەوە" title="لۆبیی سەرەکی و ڕێڕەوەکان">
              دیزاینێکی ناوەوەی پێشکەوتوو و مۆدێرن لە سەرانسەری ڕێڕەوە سەرەکییەکانی نەخۆشخانەکە.
            </ProjectCard>
          </div>
        </div>
      </section>

      {/* OTHER PROJECTS */}
      <section className="bg-surface-soft py-17 md:py-26">
        <div className="wrap">
          <SectionHead eyebrow="زیاتر لە کارەکانمان" title="ژێرخان و کارە گشتییەکان" align="left" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ProjectCard
              thumb="/assets/img/water.jpg"
              tag="تۆڕی ئاو"
              title="تۆڕی گواستنەوەی ئاو"
              meta={{ period: '2006 – 2024', value: '22.78 ملیار د.ع' }}
            >
              نزیکەی 145 کم لە هێڵی گواستنەوەی ئاوی خواردنەوە، پۆمپخانە و مەخزەن لە سلێمانی، ڕانیە، قەڵادزێ، ئاربەت و هەڵەبجە. ئاو گەیشتووەتە هەزاران ماڵی نوێ بە چاودێری بەڕێوەبەرایەتی ئاو.
            </ProjectCard>
            <ProjectCard
              thumb="/assets/img/sewerage.jpg"
              tag="فاضلاب"
              title="پرۆژەی فاضلابی سندوقی و تۆڕەکان"
              meta={{ period: '2006 – 2024', value: '13.25 ملیار د.ع' }}
            >
              جێبەجێکردنی سیستەمی فاضلاب و فاضلابی سندوقی لە چەندین شار و گەڕەکدا، لەگەڵ چاککردنەوەی تۆڕی کۆن و دانانی تۆڕی نوێ بۆ شارەوانییەکان.
            </ProjectCard>
            <ProjectCard
              thumb="/assets/img/complementary.jpg"
              tag="ژێرخانی شارستانی"
              title="پرۆژە تەواوکەرەکانی شارستانی"
              meta={{ period: '2007 – 2022', value: '11.67 ملیار د.ع' }}
            >
              ڕێگا، پیادەڕەو و فراوانکردنی ئاو و فاضلاب لە ناو 9 پرۆژەدا لە سلێمانی، ڕانیە و هەڵەبجە، کە سوودی بۆ سەدان ماڵ گەیشتووە.
            </ProjectCard>
            <ProjectCard
              thumb="/assets/img/garden.jpg"
              tag="شوێنی گشتی"
              title="باخچەی گشتی سیتوان"
              meta={{ period: '2013 – 2014', value: '536 ملیۆن د.ع' }}
            >
              پرۆژەیەکی ڕووبەری سەوزی گشتی بۆ شارەوانی سلێمانی لە گەڕەکی کانیبان، لەگەڵ سیستەمی ئاودێری، پیادەڕەو و شوێنی یاری منداڵان.
            </ProjectCard>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-17 md:py-26">
        <div className="wrap grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
          <Reveal as="div">
            <img src="/assets/img/iraq_map.png" alt="شوێنی پرۆژەکانی کۆمپانیای ئێلین لە عێراق" className="max-w-full" />
          </Reveal>
          <Reveal as="div">
            <Eyebrow>لەکوێ کار دەکەین</Eyebrow>
            <h2 className="mb-2 text-[clamp(24px,3vw,32px)]">شوێنی پرۆژەکان</h2>
            <p className="mb-5 text-[15px] text-ink-soft">
              کۆمپانیای ئێلین لە شارە سەرەکییەکانی عێراق و هەرێمی کوردستان کار دەکات، پرۆژەی ژێرخان و بیناسازیی گەورە جێبەجێ دەکات لەژێر بارودۆخی جوگرافی و تەکنیکی جیاوازدا.
            </p>
            <LocationLegend
              items={[
                { type: 'hq', label: 'بنکەی سەرەکی' },
                { type: 'branch', label: 'لق' },
                { type: 'project', label: 'پرۆژە' },
              ]}
            />
            <CityTags cities={['سلێمانی', 'هەولێر', 'بەغدا', 'هەڵەبجە', 'قەڵادزێ', 'کەلار']} />
          </Reveal>
        </div>
      </section>

      <CtaStrip
        title="ئامادەیت پرۆژەکەت دەست پێبکەیت؟"
        text="با گفتوگۆ بکەین لەسەر ئەوەی کۆمپانیای ئێلین چۆن کارامەیی ئەندازیاری بۆ پرۆژەی داهاتووت دەهێنێت."
      >
        <CtaButton href="/ku/contact.html">پەیوەندی بە تیمەکەمانەوە بکە</CtaButton>
      </CtaStrip>
    </>
  );
}
