import {
  ApproachStep,
  CtaButton,
  CtaStrip,
  Eyebrow,
  PageHeader,
  Reveal,
  ServiceCard,
} from '../../../components/sections';

export default function ServicesKu() {
  return (
    <>
      <PageHeader
        bgImage="/assets/img/water.jpg"
        homeHref="/ku/"
        homeLabel="ماڵەوە"
        crumb="خزمەتگوزارییەکان"
        title="خزمەتگوزاری تەواوکراو لە بیناسازی و ژێرخاندا."
      >
        کۆمپانیای ئێلین لە بەرفراوانەیەک بواری ئەندازیاری، بیناسازی و گەشەپێداندا کار دەکات — لە عێراق، هەرێمی کوردستان و نێودەوڵەتیدا.
      </PageHeader>

      {/* FULL SERVICES GRID */}
      <section className="py-17 md:py-26">
        <Reveal as="div" stagger className="wrap grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard num="01" icon="/assets/icons/ic_construction.png" title="بیناسازیی گشتی">
            بیناکردنی خانووی نیشتەجێبوون، بازرگانی و پیشەسازی، بە بەڕێوەبردنی ڕێکخراو و کرێکاری ناوخۆیی شارەزا.
          </ServiceCard>
          <ServiceCard num="02" icon="/assets/icons/ic_water.png" title="تۆڕی ئاو و پۆمپخانەکان">
            دانانی هێڵی گواستنەوە، پۆمپخانە و مەخزەنی ئاو — نزیکەی 145 کم لە تۆڕی ئاوی خواردنەوە تا ئێستا.
          </ServiceCard>
          <ServiceCard num="03" icon="/assets/icons/ic_sewer.png" title="تۆڕی فاضلاب">
            دروستکردن و چاککردنەوەی سیستەمی فاضلابی شارستانی و فاضلابی سندوقی لە چەندین شار و گەڕەکدا.
          </ServiceCard>
          <ServiceCard num="04" icon="/assets/icons/ic_oil.png" title="کارە پشتگیرییەکانی نەوت و گاز">
            کاری شارستانی و ژێرخانی پشتگیری بۆ کارگەی نەوت و گاز، بەگوێرەی ستانداردی توندی سەلامەتی پیشەسازی.
          </ServiceCard>
          <ServiceCard num="05" icon="/assets/icons/ic_agri.png" title="کشتوکاڵ و باخچەسازی">
            گەشەپێدانی باخچەی گشتی، ناوچەی سەوز و سیستەمی ئاودێری، لەوانە باخچەی گشتی سیتوان لە سلێمانی.
          </ServiceCard>
          <ServiceCard num="06" icon="/assets/icons/ic_industry.png" title="سیستەمی گەرمکردنەوە، ساردکردنەوە و هێڵی بۆری">
            دانانی سیستەمی میکانیکی و هێڵی بۆری بۆ پرۆژەی نیشتەجێبوون، بازرگانی و دامەزراوەیی.
          </ServiceCard>
          <ServiceCard num="07" icon="/assets/icons/ic_estate.png" title="وەبەرهێنانی خانووبەرە و پیشەسازی">
            جێبەجێکردنی پرۆژەی گەشەپێدان و وەبەرهێنان لە بواری خانووبەرە و پیشەسازیدا.
          </ServiceCard>
          <ServiceCard num="08" icon="/assets/icons/ic_invest.png" title="وەبەرهێنانەکان">
            وەبەرهێنانی ستراتیژی لە ژێرخان و پرۆژەی پیشەسازیدا کە بەهای ئابووری درێژخایەن دەدات.
          </ServiceCard>
          <ServiceCard num="09" icon="/assets/icons/ic_trading.png" title="بازرگانی و دابینکردن">
            دابینکردنی کەرەستە و ئامێری بیناسازیی کوالیتی بەرز، بە بەستنەوەی کڕیاران بە بازاڕی نێودەوڵەتی متمانەپێکراوەوە.
          </ServiceCard>
        </Reveal>
      </section>

      {/* PROCESS */}
      <section className="bg-surface-soft py-17 md:py-26">
        <div className="wrap grid grid-cols-1 items-start gap-9 md:grid-cols-[0.9fr_1.1fr] md:gap-[60px]">
          <Reveal as="img" variant="wipe" src="/assets/img/sewerage.jpg" alt="کاری ژێرخانی کۆمپانیای ئێلین" className="rounded-lg shadow-brand md:sticky md:top-[110px]" />
          <Reveal as="div">
            <Eyebrow>پرۆسەی کارمان</Eyebrow>
            <h2 className="mb-2 text-[clamp(24px,3vw,32px)]">لە پلاندانانەوە بۆ ڕادەستکردن</h2>
            <p className="mb-5 text-[15px] text-ink-soft">
              هەموو خزمەتگوزارییەک لە ڕێگەی هەمان ڕێبازی ڕێکخراو و توندوتیژەوە پێشکەش دەکرێت کە شێوازی کارمان لە هەموو پرۆژەیەکدا دیاری دەکات.
            </p>
            <div>
              <ApproachStep index="1" title="هەڵسەنگاندن و پلاندانان">
                تێگەیشتنێکی قووڵ لە ڕووبەری پرۆژە، بارودۆخی شوێن و پێداویستی کڕیار.
              </ApproachStep>
              <ApproachStep index="2" title="ئەندازیاری و دیزاین">
                کاری دیزاینی تەکنیکی گونجاو لەگەڵ ستانداردی عێراقی، نەتەوە یەکگرتووەکان و FIDIC.
              </ApproachStep>
              <ApproachStep index="3" title="جێبەجێکردن و چاودێری">
                جێبەجێکردنی ڕێکخراو لەگەڵ کۆنترۆڵی بەردەوامی کوالیتی و چاودێری سەلامەتی.
              </ApproachStep>
              <ApproachStep index="4" title="ڕادەستکردن و پشتگیری">
                ڕادەستکردنی کۆتایی لەگەڵ بەڵگەنامەی تەواو و پشتگیری بەردەوام کاتێک پێویست بێت.
              </ApproachStep>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaStrip
        title="پرۆژەیەکت هەیە لە مێشکتدا؟"
        text="پێمان بڵێ چیت پێویستە — تیمەکەمان لە ماوەی ڕۆژێکی کاردا پەیوەندیت پێوە دەکات."
      >
        <CtaButton href="/ku/contact.html">داوای ڕاوێژکاری بکە</CtaButton>
      </CtaStrip>
    </>
  );
}
