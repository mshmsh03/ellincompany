import {
  ApproachStep,
  CsrSection,
  CtaButton,
  CtaStrip,
  Eyebrow,
  PageHeader,
  Reveal,
  StatFigure,
  Timeline,
  TimelineItem,
  VisionCard,
  VisionSection,
  VisionText,
} from '../../../components/sections';

export default function AboutKu() {
  return (
    <>
      <PageHeader
        bgImage="/assets/img/ov2.jpg"
        homeHref="/ku/"
        homeLabel="ماڵەوە"
        crumb="دەربارەمان"
        title="نزیکەی دوو دەیە ئەزموونی ئەندازیاری ڕێکخراو لە عێراق."
      >
        کۆمپانیای ئێلین بۆ پیمانکاری گشتی و بازرگانی — کۆمپانیایەکی عێراقی پلە (1) کە بنکەی سەرەکی لە سلێمانییە.
      </PageHeader>

      {/* OVERVIEW */}
      <section className="py-17 md:py-26">
        <Reveal as="div" className="wrap grid grid-cols-1 items-center gap-9 md:grid-cols-[1fr_0.85fr] md:gap-[68px]">
          <div>
            <Eyebrow>پوختەی کۆمپانیا</Eyebrow>
            <h2 className="mb-[22px] text-[clamp(26px,3.4vw,38px)] leading-[1.2] rtl:leading-[1.5]">
              کۆمپانیایەکی گەشەسەندوو و فرەلایەن کە بە تەواوی خاوەنداریێتی هاوڵاتیانی عێراقییە.
            </h2>
            <p className="mb-4 text-[17px] text-ink-soft">
              کۆمپانیای ئێلین کۆمپانیایەکی گەشەسەندوو و فرەلایەنە کە تایبەتمەندە لە پیمانکاری گشتی و بازرگانیدا، لە سلێمانی دامەزراوە و بە تەواوی خاوەنداریێتی هاوڵاتیانی عێراقییە.
            </p>
            <p className="mb-4 text-[17px] text-ink-soft">
              دامەزرێنەران و کادرە سەرەکییەکانی کۆمپانیاکە ئەندازیارانی شارەزان لە پاشخانی جیاواز، کە لە پرۆژەی گەورەی حکومی و تایبەتیدا کار کردووە. توانای کۆمپانیاکە باشترین شێوە دەردەکەوێت لە ڕێگەی پاشخانی کادرە تەکنیکی و بەڕێوەبردنەکەی، هەروەها شێوازی پیشەیی و ڕێبازە دامەزراوەکانی.
            </p>
            <p className="mb-4 text-[17px] text-ink-soft">
              کۆمپانیاکە شارەزایی ئەندازیاری فراوان پێشکەش دەکات لە ڕووی تەکنیکی، دیزاین، بەڕێوەبردن و جێبەجێکردنەوە — ئەمەش کارایی گشتی بەرز دەکاتەوە و پەیوەندی ئەندازیاری باش لەگەڵ بازاڕی نێودەوڵەتی دەپارێزێت بۆ هەڵبژاردن و دابینکردنی بەرهەمی کوالیتی بەرز و گونجاو لە نرخدا. ئێلین ئەزموونی هەیە لە بواری ئەندازیاری و بیناسازی، وەبەرهێنان، سیستەمی گەرمکردنەوە و ساردکردنەوە، هێڵی بۆرییەکان، سەرسازی سەوز و باخچەسازیدا.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-4">
              <StatFigure value="2006" label="ساڵی دامەزراندن" />
              <StatFigure value="پلەی 1" label="تۆمارکراو لای وەزارەتی پلاندانان" />
              <StatFigure value="عێراق" label="ناوچەی کار: عێراق و هەرێمی کوردستان" />
              <StatFigure value="100%" label="پێکهاتەی خاوەندارێتی عێراقی" />
            </div>
          </div>
          <div className="relative">
            <img className="rounded-lg shadow-brand" src="/assets/img/ov1.jpg" alt="کارگەی کۆمپانیای ئێلین" />
            <div className="absolute start-0 bottom-[-20px] max-w-[210px] rounded-[3px] bg-brand px-5 py-4 text-white shadow-[0_14px_30px_rgba(1,42,61,.25)] sm:start-[-26px] sm:bottom-[-26px] sm:px-[26px] sm:py-[22px]">
              <div className="text-[26px] font-extrabold">بینای ئازادی</div>
              <div className="mt-0.5 text-xs opacity-85">شەقامی پارکی ئازادی، سلێمانی، عێراق</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* HISTORY TIMELINE */}
      <section className="bg-surface-soft py-17 md:py-26">
        <div className="wrap grid grid-cols-1 items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
          <Reveal as="img" variant="wipe" src="/assets/img/history.jpg" alt="کارەکانی کۆنکریت ڕژاندنی کۆمپانیای ئێلین" className="rounded-lg shadow-brand" />
          <Reveal as="div">
            <Eyebrow>چیرۆکمان</Eyebrow>
            <h2 className="mb-[18px] text-[clamp(24px,3vw,34px)]">19 ساڵ گەشەسەندنی بەردەوام و ئەندازیاری ڕێکخراو.</h2>
            <Timeline>
              <TimelineItem title="2006 — دامەزراندن لە سلێمانی">
                کۆمپانیای ئێلین دامەزرا، دەستی پێکرد بە پرۆژەی ژێرخان و خزمەتگوزاری گشتی لە ناوچەکەدا.
              </TimelineItem>
              <TimelineItem title="فراوانبوونی هەنگاو بە هەنگاو">
                کۆمپانیاکە بە شێوەیەکی هێمن فراوانی کرد بۆ بواری بیناسازیی تەندروستی، سیستەمی گواستنەوەی ئاو، تۆڕی فاضلاب و گەشەپێدانی شوێنی گشتی.
              </TimelineItem>
              <TimelineItem title="پرۆژە گەورەکانی دامەزراوەیی">
                ئێلین پرۆژەی گەورەی بۆ شارەوانی، دامەزراوەی گشتی و کڕیاری بواری تایبەت جێبەجێ کرد، ئەمەش شوێنی کۆمپانیاکەی لە بواری پیمانکاری عێراقدا بەهێزتر کرد.
              </TimelineItem>
              <TimelineItem title="ئەمڕۆ — پیمانکارێکی متمانەپێکراو">
                ئێلین ئەمڕۆ ناسراوە وەک پیمانکارێکی متمانەپێکراو کە بە شارەزایی ئەندازیاری، جێبەجێکردنی ڕێکخراو و بەردەوامی درێژخایەن ناودار بووە.
              </TimelineItem>
            </Timeline>
          </Reveal>
        </div>
      </section>

      {/* VISION & MISSION */}
      <VisionSection>
        <VisionCard icon="/assets/icons/ic_target.svg" title="ئاواتمان">
          <VisionText>
            ئێلین هەوڵدەدات ببێتە کۆمپانیایەکی پێشەنگ لە بواری بیناسازیدا لە ڕێگەی پێشکەشکردنی کارێکی نایاب و خزمەتگوزاریی کڕیاری بەرز. ئێمە پابەندین بە بەرزترین ستانداردی پیشەیی، ڕاستگۆیی و دادپەروەری لە هەموو پەیوەندییەکانماندا — لەگەڵ کڕیار، کارمەند و دابینکەران.
          </VisionText>
          <VisionText>
            بۆ دڵنیابوون لە کوالیتی، تیمەکەمان بە وردی پابەندە بە مەرجەکانی گشتی گرێبەستی عێراقی، گرێبەستی نەتەوە یەکگرتووەکان، ڕێکخراوە ناحکومییەکان و ستانداردی FIDIC، بەگوێرەی پێداویستی هەر پرۆژەیەک. لە ڕێگەی ئەم پابەندییەوە، هەوڵدەدەین ناوبانگێکی بەردەوام بنیات بنێین کە پشتی بەستووە بە متمانەپێکراوی، ڕاستگۆیی و کارامەیی بێوێنە.
          </VisionText>
        </VisionCard>
        <VisionCard icon="/assets/icons/ic_flag.svg" title="ئەرکمان">
          <VisionText>
            ئەرکمان پێشکەشکردنی چارەسەری بیناسازیی سەلامەت، کارا و بەکوالیتی بەرزە کە یارمەتی گەشەسەندن و داهێنان دەدات لە بواری پیمانکاری عێراقدا — بە بەڕێوەبردنی تەواو لەلایەن کرێکاری ناوخۆییەوە و بەکارهێنانی بەرهەمی کوالیتی بەرز و ناسراو لە ئاستی نێودەوڵەتی.
          </VisionText>
          <VisionText>
            سەلامەتی هەمیشە پێشینەی سەرەکیمانە لە هەموو قۆناغەکانی جێبەجێکردندا. کۆمپانیای ئێلین بەڕێوەبردنی تەواوی بیناسازی، چاودێری، کرێکار، کەرەستە، ئامێر و گواستنەوە پێشکەش دەکات بۆ دڵنیابوون لە سەرکەوتنی تەواوکردنی پرۆژە.
          </VisionText>
        </VisionCard>
      </VisionSection>

      {/* APPROACH */}
      <section className="bg-surface-soft py-17 md:py-26">
        <div className="wrap grid grid-cols-1 items-start gap-9 md:grid-cols-[0.9fr_1.1fr] md:gap-[60px]">
          <Reveal as="img" variant="wipe" src="/assets/img/approach.jpg" alt="کاری شوێنی کۆمپانیای ئێلین" className="rounded-lg shadow-brand md:sticky md:top-[110px]" />
          <Reveal as="div">
            <Eyebrow>چۆن کار دەکەین</Eyebrow>
            <h2 className="mb-2 text-[clamp(24px,3vw,32px)]">شێوازی کارمان</h2>
            <p className="mb-5 text-[15px] text-ink-soft">
              هەموو پرۆژەیەک لە ڕێگەی ڕێبازێکی ڕێکخراو و توندوتیژەوە بەڕێوە دەبرێت کە دیزاین کراوە بۆ دڵنیابوون لە کوالیتی، کارایی و متمانەپێکراوی.
            </p>
            <div>
              <ApproachStep index="1" title="ڕێبازی گشتگیر">
                تێکەڵکردنی شیکاری وردبینانە، چارەسەرکردنی داهێنەرانە و کارگروپی هاوکارانە.
              </ApproachStep>
              <ApproachStep index="2" title="پرۆسەی کڕیار لە ناوەندا">
                دەستپێدەکات بە تێگەیشتنێکی قووڵ لە پێداویستی کڕیار، دواتر پلاندانانی وردبینانە و جێبەجێکردنی وردبینانە.
              </ApproachStep>
              <ApproachStep index="3" title="پابەندبوون بە داهێنان">
                تێکەڵکردنی بەردەوامی نوێترین تەکنەلۆژیا و باشترین شێوازەکانی بوارەکە.
              </ApproachStep>
              <ApproachStep index="4" title="دڵنیایی کوالیتی">
                کۆنترۆڵی توندی کوالیتی و پابەندبوون بە ستانداردی بوارەکە بۆ دڵنیابوون لە متمانەپێکراوی و بەرگری.
              </ApproachStep>
              <ApproachStep index="5" title="سەرنج لەسەر بەردەوامی">
                کەمکردنەوەی کاریگەری ژینگەیی لە ڕێگەی دیزاینی دۆستی ژینگە و شێوازی بەردەوام.
              </ApproachStep>
              <ApproachStep index="6" title="ڕێبازی گشتگیر">
                پێشکەشکردنی کارامەیی ئەندازیاری لەگەڵ بەشداریکردنی ئەرێنی لە کۆمەڵگا و ژینگەدا.
              </ApproachStep>
            </div>
          </Reveal>
        </div>
      </section>

      <CsrSection
        eyebrow="بەرپرسیارێتی کۆمەڵایەتی کۆمپانیا"
        title="بە بەرپرسیارێتییەوە بنیات دەنێین، بۆ خەڵک و ژینگە."
        points={[
          'کاریگەری ژینگەیی لە دیزاین و جێبەجێکردندا کەم دەکەینەوە',
          'پابەندین بە سەلامەتی کرێکار و ڕەفتاری کاری ئەخلاقی',
          'پشتگیری پەروەردە، گەشەپێدانی کۆمەڵگا و دامەزراندنی ناوخۆیی دەکەین',
          'ئەندازیاری بەردەوام لە هەموو پرۆژەیەکدا تێکەڵ دەکەین',
        ]}
      >
        <p className="text-base text-[#d7e6ec]">
          بەرپرسیارێتی کۆمەڵایەتی کۆمپانیا بەشێکی سەرەکییە لە کاروباری کۆمپانیای ئێلیندا. ئێمە پابەندین بە بەردەوامی ژینگەیی، گەشەپێدانی کۆمەڵگا و پەرەپێدانی کرێکاران — لە ڕێگەی تێکەڵکردنی شێوازی بیناسازیی بەرپرسیارانە و ڕەفتاری بازرگانی ئەخلاقی لە هەموو ئەوەی دروستی دەکەین.
        </p>
      </CsrSection>

      <CtaStrip
        title="دەتەوێت لەگەڵ پیمانکارێکی متمانەپێکراو کار بکەیت؟"
        text="خزمەتگوزارییەکانمان ببینە یان پەیوەندیمان پێوە بکە بۆ گفتوگۆکردن لەسەر پرۆژەی داهاتووت."
      >
        <CtaButton href="/ku/services.html">خزمەتگوزارییەکانمان</CtaButton>
        <CtaButton href="/ku/contact.html" variant="white">پەیوەندیمان پێوە بکە</CtaButton>
      </CtaStrip>
    </>
  );
}
