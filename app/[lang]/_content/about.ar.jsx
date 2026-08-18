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

export default function AboutAr() {
  return (
    <>
      <PageHeader
        bgImage="/assets/img/ov2.jpg"
        homeHref="/ar/"
        homeLabel="الرئيسية"
        crumb="من نحن"
        title="ما يقارب عقدين من الانضباط الهندسي في العراق."
      >
        شركة إيلين للمقاولات العامة والتجارة المحدودة — شركة عراقية من الدرجة (1) مقرها الرئيسي في السليمانية.
      </PageHeader>

      {/* OVERVIEW */}
      <section className="py-17 md:py-26">
        <Reveal as="div" className="wrap grid grid-cols-1 items-center gap-9 md:grid-cols-[1fr_0.85fr] md:gap-[68px]">
          <div>
            <Eyebrow>نبذة عن الشركة</Eyebrow>
            <h2 className="mb-[22px] text-[clamp(26px,3.4vw,38px)] leading-[1.2] rtl:leading-[1.5]">
              شركة متنامية ومتعددة التخصصات، مملوكة بالكامل لمواطنين عراقيين.
            </h2>
            <p className="mb-4 text-[17px] text-ink-soft">
              شركة إيلين هي شركة متنامية ومتعددة التخصصات متخصصة في المقاولات العامة والتجارة، تأسست في السليمانية وهي مملوكة بالكامل لمواطنين عراقيين.
            </p>
            <p className="mb-4 text-[17px] text-ink-soft">
              يتمتع مؤسسو الشركة وكوادرها الأساسية بخبرة هندسية عالية من خلفيات متنوعة، وقد عملوا في مشاريع حكومية وخاصة كبرى. وتتجلى قدرات الشركة بوضوح من خلال خلفية كوادرها الفنية والإدارية، ونهجها الاحترافي ومنهجياتها الراسخة.
            </p>
            <p className="mb-4 text-[17px] text-ink-soft">
              تقدّم الشركة خبرة هندسية شاملة في الجوانب الفنية والتصميمية والإدارية والتنفيذية، مما يعزز الكفاءة الإجمالية ويضمن روابط هندسية جيدة مع الأسواق الدولية لاختيار وتوريد منتجات عالية الجودة وبأسعار تنافسية مناسبة للبناء. ولدى إيلين خبرة في مجالات الهندسة والإنشاءات والاستثمار وأنظمة التبريد والتدفئة وخطوط الأنابيب والأسطح الخضراء وتنسيق الحدائق.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-4">
              <StatFigure value="2006" label="سنة التأسيس" />
              <StatFigure value="الدرجة 1" label="تسجيل لدى وزارة التخطيط" />
              <StatFigure value="العراق" label="منطقة العمل: العراق وإقليم كوردستان" />
              <StatFigure value="100%" label="هيكل ملكية عراقي بالكامل" />
            </div>
          </div>
          <div className="relative">
            <img className="rounded-lg shadow-brand" src="/assets/img/ov1.jpg" alt="عمليات موقع شركة إيلين" />
            <div className="absolute start-0 bottom-[-20px] max-w-[210px] rounded-[3px] bg-brand px-5 py-4 text-white shadow-[0_14px_30px_rgba(1,42,61,.25)] sm:start-[-26px] sm:bottom-[-26px] sm:px-[26px] sm:py-[22px]">
              <div className="text-[26px] font-extrabold">مبنى آزادي</div>
              <div className="mt-0.5 text-xs opacity-85">طريق حديقة آزادي، السليمانية، العراق</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* HISTORY TIMELINE */}
      <section className="bg-surface-soft py-17 md:py-26">
        <div className="wrap grid grid-cols-1 items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
          <Reveal as="img" src="/assets/img/history.jpg" alt="أعمال صب الخرسانة لشركة إيلين" className="rounded-lg shadow-brand" />
          <Reveal as="div">
            <Eyebrow>قصتنا</Eyebrow>
            <h2 className="mb-[18px] text-[clamp(24px,3vw,34px)]">19 عاماً من النمو المطّرد والانضباط الهندسي.</h2>
            <Timeline>
              <TimelineItem title="2006 — التأسيس في السليمانية">
                تأسست شركة إيلين بمشاريع بنية تحتية ومرافق عامة في المنطقة.
              </TimelineItem>
              <TimelineItem title="توسّع تدريجي">
                توسعت الشركة تدريجياً لتشمل إنشاءات القطاع الصحي وأنظمة نقل المياه وشبكات الصرف الصحي وتطوير المساحات العامة.
              </TimelineItem>
              <TimelineItem title="مشاريع مؤسسية كبرى">
                نفذت إيلين مشاريع كبرى للبلديات والمؤسسات العامة وعملاء من القطاع الخاص، مما عزز مكانتها ضمن قطاع المقاولات في العراق.
              </TimelineItem>
              <TimelineItem title="اليوم — مقاول موثوق ومعترف به">
                تُعرف إيلين اليوم كمقاول موثوق مشهود له بالكفاءة الهندسية والتنفيذ المنظم والاستدامة على المدى الطويل.
              </TimelineItem>
            </Timeline>
          </Reveal>
        </div>
      </section>

      {/* VISION & MISSION */}
      <VisionSection>
        <VisionCard icon="/assets/icons/ic_target.svg" title="رؤيتنا">
          <VisionText>
            تسعى شركة إيلين لأن تكون شركة رائدة في قطاع البناء من خلال تقديم جودة عمل استثنائية وخدمة عملاء متميزة. نحن ملتزمون بأعلى معايير الاحترافية والنزاهة والعدالة في جميع علاقاتنا — مع العملاء والموظفين والموردين.
          </VisionText>
          <VisionText>
            ولضمان الجودة، يلتزم فريقنا بدقة بالمواصفات العامة للعقود العراقية وعقود الأمم المتحدة والمنظمات غير الحكومية ومعايير FIDIC، بما يتوافق مع متطلبات كل مشروع. ومن خلال هذا الالتزام، نسعى لبناء سمعة دائمة قائمة على الموثوقية والنزاهة والحرفية المتميزة.
          </VisionText>
        </VisionCard>
        <VisionCard icon="/assets/icons/ic_flag.svg" title="رسالتنا">
          <VisionText>
            رسالتنا هي تقديم حلول إنشائية آمنة وفعّالة وعالية الجودة تسهم في تنمية العراق، من خلال إدارة مشاريع احترافية وأيدٍ عاملة محلية ماهرة ومنتجات عالية الجودة معترف بها دولياً.
          </VisionText>
          <VisionText>
            تبقى السلامة أولويتنا القصوى في كل مرحلة من مراحل التنفيذ. وتوفر شركة إيلين إدارة إنشائية شاملة تتضمن الإشراف والأيدي العاملة والمواد والمعدات والنقل، وكل ما يلزم لضمان إتمام المشروع بنجاح.
          </VisionText>
        </VisionCard>
      </VisionSection>

      {/* APPROACH */}
      <section className="bg-surface-soft py-17 md:py-26">
        <div className="wrap grid grid-cols-1 items-start gap-9 md:grid-cols-[0.9fr_1.1fr] md:gap-[60px]">
          <Reveal as="img" src="/assets/img/approach.jpg" alt="أعمال موقع شركة إيلين" className="rounded-lg shadow-brand md:sticky md:top-[110px]" />
          <Reveal as="div">
            <Eyebrow>كيف نعمل</Eyebrow>
            <h2 className="mb-2 text-[clamp(24px,3vw,32px)]">منهجية عملنا</h2>
            <p className="mb-5 text-[15px] text-ink-soft">
              تُدار كل مشاريعنا وفق منهجية منظمة وصارمة مصممة لضمان الجودة والكفاءة والموثوقية.
            </p>
            <div>
              <ApproachStep index="1" title="منهجية شاملة">
                تجمع بين التحليل الدقيق وحل المشكلات الإبداعي والعمل الجماعي المتكامل.
              </ApproachStep>
              <ApproachStep index="2" title="عمليات محورها العميل">
                تبدأ بفهم عميق لاحتياجات العملاء، يتبعه تخطيط دقيق وتنفيذ عالي الدقة.
              </ApproachStep>
              <ApproachStep index="3" title="الالتزام بالابتكار">
                دمج مستمر لأحدث التقنيات وأفضل الممارسات في القطاع.
              </ApproachStep>
              <ApproachStep index="4" title="ضمان الجودة">
                إجراءات صارمة لمراقبة الجودة والالتزام بمعايير القطاع لضمان الموثوقية والمتانة.
              </ApproachStep>
              <ApproachStep index="5" title="التركيز على الاستدامة">
                تقليل الأثر البيئي من خلال تصاميم صديقة للبيئة وممارسات مستدامة.
              </ApproachStep>
              <ApproachStep index="6" title="نهج شامل">
                تقديم تميز هندسي مع الإسهام بشكل إيجابي في المجتمع والبيئة.
              </ApproachStep>
            </div>
          </Reveal>
        </div>
      </section>

      <CsrSection
        eyebrow="المسؤولية الاجتماعية للشركة"
        title="نبني بمسؤولية، للناس وللبيئة."
        points={[
          'نقلل الأثر البيئي في التصميم والتنفيذ',
          'نلتزم بسلامة العمال وممارسات العمل الأخلاقية',
          'ندعم التعليم والتنمية المجتمعية والتوظيف المحلي',
          'ندمج الهندسة المستدامة في كل مشروع',
        ]}
      >
        <p className="text-base text-[#d7e6ec]">
          تشكل المسؤولية الاجتماعية للشركة جزءاً أساسياً من عمليات شركة إيلين. نحن ملتزمون بالاستدامة البيئية والتنمية المجتمعية وتطوير الكوادر البشرية — من خلال دمج ممارسات بناء مسؤولة وسلوك تجاري أخلاقي في كل ما ننفذه.
        </p>
      </CsrSection>

      <CtaStrip
        title="هل تريد العمل مع مقاول موثوق؟"
        text="اطّلع على خدماتنا أو تواصل معنا لمناقشة مشروعك القادم."
      >
        <CtaButton href="/ar/services.html">خدماتنا</CtaButton>
        <CtaButton href="/ar/contact.html" variant="white">اتصل بنا</CtaButton>
      </CtaStrip>
    </>
  );
}
