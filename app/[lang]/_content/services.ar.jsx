import {
  ApproachStep,
  CtaButton,
  CtaStrip,
  Eyebrow,
  PageHeader,
  Reveal,
  ServiceCard,
} from '../../../components/sections';

export default function ServicesAr() {
  return (
    <>
      <PageHeader
        bgImage="/assets/img/water.jpg"
        homeHref="/ar/"
        homeLabel="الرئيسية"
        crumb="خدماتنا"
        title="خدمات متكاملة في البناء والبنية التحتية."
      >
        تعمل شركة إيلين في مجموعة واسعة من قطاعات الهندسة والبناء والتنمية — في العراق وإقليم كوردستان وعلى المستوى الدولي.
      </PageHeader>

      {/* FULL SERVICES GRID */}
      <section className="py-17 md:py-26">
        <Reveal as="div" stagger className="wrap grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard num="01" icon="/assets/icons/ic_construction.png" title="الإنشاءات العامة">
            إنشاء المباني السكنية والتجارية والصناعية، بإدارة مشاريع منظمة وأيدٍ عاملة محلية ماهرة.
          </ServiceCard>
          <ServiceCard num="02" icon="/assets/icons/ic_water.png" title="شبكات المياه ومحطات الضخ">
            تمديد خطوط النقل ومحطات الضخ وخزانات المياه — بما يقارب 145 كم من شبكات مياه الشرب حتى الآن.
          </ServiceCard>
          <ServiceCard num="03" icon="/assets/icons/ic_sewer.png" title="شبكات المجاري">
            إنشاء وتأهيل شبكات الصرف الصحي الحضرية والمجاري الصندوقية في مدن وأحياء متعددة.
          </ServiceCard>
          <ServiceCard num="04" icon="/assets/icons/ic_oil.png" title="أعمال دعم النفط والغاز">
            أعمال مدنية وبنية تحتية داعمة لمنشآت النفط والغاز، منفذة وفق أعلى معايير السلامة الصناعية.
          </ServiceCard>
          <ServiceCard num="05" icon="/assets/icons/ic_agri.png" title="الزراعة وتنسيق الحدائق">
            تطوير الحدائق العامة والمساحات الخضراء وأنظمة الري، بما في ذلك حديقة سيتوان العامة في السليمانية.
          </ServiceCard>
          <ServiceCard num="06" icon="/assets/icons/ic_industry.png" title="أنظمة التدفئة والتبريد وخطوط الأنابيب">
            تركيب الأنظمة الميكانيكية وخطوط الأنابيب للمشاريع السكنية والتجارية والمؤسسية.
          </ServiceCard>
          <ServiceCard num="07" icon="/assets/icons/ic_estate.png" title="الاستثمارات العقارية والصناعية">
            تنفيذ مشاريع التطوير والاستثمار في القطاعين العقاري والصناعي.
          </ServiceCard>
          <ServiceCard num="08" icon="/assets/icons/ic_invest.png" title="الاستثمارات">
            استثمار استراتيجي في مشاريع البنية التحتية والمشاريع الصناعية بما يحقق قيمة اقتصادية طويلة الأمد.
          </ServiceCard>
          <ServiceCard num="09" icon="/assets/icons/ic_trading.png" title="التجارة والتوريد">
            توريد مواد ومعدات بناء عالية الجودة، مع ربط العملاء بأسواق دولية موثوقة.
          </ServiceCard>
        </Reveal>
      </section>

      {/* PROCESS */}
      <section className="bg-surface-soft py-17 md:py-26">
        <div className="wrap grid grid-cols-1 items-start gap-9 md:grid-cols-[0.9fr_1.1fr] md:gap-[60px]">
          <Reveal as="img" variant="wipe" src="/assets/img/sewerage.jpg" alt="أعمال بنية تحتية لشركة إيلين" className="rounded-lg shadow-brand md:sticky md:top-[110px]" />
          <Reveal as="div">
            <Eyebrow>آلية عملنا</Eyebrow>
            <h2 className="mb-2 text-[clamp(24px,3vw,32px)]">من التخطيط حتى التسليم</h2>
            <p className="mb-5 text-[15px] text-ink-soft">
              تُقدَّم كل خدماتنا وفق نفس المنهجية المنظمة والصارمة التي تحدد نهجنا في كل مشروع.
            </p>
            <div>
              <ApproachStep index="1" title="التقييم والتخطيط">
                فهم عميق لنطاق المشروع وظروف الموقع ومتطلبات العميل.
              </ApproachStep>
              <ApproachStep index="2" title="الهندسة والتصميم">
                أعمال تصميم فني متوافقة مع المعايير العراقية والأممية ومعايير FIDIC.
              </ApproachStep>
              <ApproachStep index="3" title="التنفيذ والإشراف">
                تنفيذ منظم مع رقابة مستمرة على الجودة والسلامة.
              </ApproachStep>
              <ApproachStep index="4" title="التسليم والدعم">
                تسليم نهائي مع توثيق كامل ودعم مستمر عند الحاجة.
              </ApproachStep>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaStrip
        title="هل لديك مشروع تريد تنفيذه؟"
        text="أخبرنا بما تحتاجه — سيتواصل معك فريقنا خلال يوم عمل واحد."
      >
        <CtaButton href="/ar/contact.html">اطلب استشارة</CtaButton>
      </CtaStrip>
    </>
  );
}
