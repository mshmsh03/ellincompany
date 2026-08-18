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

export default function ProjectsAr() {
  return (
    <>
      <PageHeader
        bgImage="/assets/img/hospital_ext.jpg"
        homeHref="/ar/"
        homeLabel="الرئيسية"
        crumb="مشاريعنا"
        title="مشاريع منجزة في جميع أنحاء العراق."
      >
        مشاريع إنشائية وبنية تحتية كبرى تُظهر قدرة فنية عالية وإدارة مشاريع منظمة والتزاماً بالجودة والسلامة.
      </PageHeader>

      {/* FEATURED: BAXSHIN HOSPITAL */}
      <section className="py-17 md:py-26">
        <div className="wrap">
          <ProjectFeature
            image="/assets/img/hospital_ext.jpg"
            tag="المشروع الرائد · القطاع الصحي"
            title="مستشفى بەخشین الأهلي العام"
            stats={[
              { value: '100 سرير', label: 'الطاقة الاستيعابية' },
              { value: '9,850 م²', label: 'المساحة الإجمالية' },
              { value: '9 طوابق', label: 'الهيكل الإنشائي' },
              { value: '25.5 مليار', label: 'الميزانية الإجمالية (د.ع)' },
            ]}
          >
            مشروع استثماري صحي كبير في مدينة السليمانية — أحد أكبر المستشفيات في المدينة وفي العراق، صممته ونفذته شركة إيلين بالكامل. يقع جنوب السليمانية، ويضم جميع أقسام المستشفى المتطور على تسعة طوابق، مع مساحة خضراء تشكل 40٪ من مساحة المشروع، إضافة إلى موقف سيارات تحت الأرض.
          </ProjectFeature>
          <Reveal as="div" stagger className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ProjectCard thumb="/assets/img/hospital_atrium.jpg" tag="الأجواء الداخلية" title="الفناء الداخلي والمساحة الخضراء">
              فناء داخلي مضاء طبيعياً، مدمج ضمن المساحة الخضراء في الطابق الأرضي للمستشفى.
            </ProjectCard>
            <ProjectCard thumb="/assets/img/hospital_lobby.jpg" tag="الأجواء الداخلية" title="الردهة الرئيسية ومسارات الحركة">
              تصميم داخلي عصري ومتطور في جميع مسارات الحركة الرئيسية بالمستشفى.
            </ProjectCard>
          </Reveal>
        </div>
      </section>

      {/* OTHER PROJECTS */}
      <section className="bg-surface-soft py-17 md:py-26">
        <div className="wrap">
          <SectionHead eyebrow="المزيد من أعمالنا" title="البنية التحتية والأشغال العامة" align="left" />
          <Reveal as="div" stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ProjectCard
              thumb="/assets/img/water.jpg"
              tag="شبكات المياه"
              title="شبكات نقل المياه"
              meta={{ period: '2006 – 2024', value: '22.78 مليار د.ع' }}
            >
              ما يقارب 145 كم من خطوط نقل مياه الشرب ومحطات الضخ والخزانات في السليمانية ورانية وقەڵادزێ وأربت وحلبجة. تم توصيل المياه لآلاف الأسر الجديدة بإشراف مديرية الماء.
            </ProjectCard>
            <ProjectCard
              thumb="/assets/img/sewerage.jpg"
              tag="الصرف الصحي"
              title="مشاريع المجاري الصندوقية والشبكات"
              meta={{ period: '2006 – 2024', value: '13.25 مليار د.ع' }}
            >
              تنفيذ أنظمة صرف صحي ومجاري صندوقية في مدن وأحياء متعددة، مع تأهيل شبكات قديمة وتمديد شبكات جديدة للبلديات.
            </ProjectCard>
            <ProjectCard
              thumb="/assets/img/complementary.jpg"
              tag="بنية تحتية حضرية"
              title="مشاريع حضرية تكميلية"
              meta={{ period: '2007 – 2022', value: '11.67 مليار د.ع' }}
            >
              طرق وأرصفة وتمديدات مياه وصرف صحي ضمن 9 مشاريع في السليمانية ورانية وحلبجة، استفاد منها مئات الأسر.
            </ProjectCard>
            <ProjectCard
              thumb="/assets/img/garden.jpg"
              tag="مساحة عامة"
              title="حديقة سيتوان العامة"
              meta={{ period: '2013 – 2014', value: '536 مليون د.ع' }}
            >
              مشروع مساحة خضراء عامة لبلدية السليمانية في حي كانیبان، يشمل نظام ري وأرصفة ومنطقة ألعاب للأطفال.
            </ProjectCard>
          </Reveal>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-17 md:py-26">
        <div className="wrap grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
          <Reveal as="div" variant="wipe">
            <img src="/assets/img/iraq_map.png" alt="مواقع مشاريع شركة إيلين في العراق" className="max-w-full" />
          </Reveal>
          <Reveal as="div">
            <Eyebrow>أين نعمل</Eyebrow>
            <h2 className="mb-2 text-[clamp(24px,3vw,32px)]">مواقع المشاريع</h2>
            <p className="mb-5 text-[15px] text-ink-soft">
              تعمل شركة إيلين في مدن رئيسية عبر العراق وإقليم كوردستان، منفذةً مشاريع بنية تحتية وإنشاءات كبرى في ظروف جغرافية وفنية متنوعة.
            </p>
            <LocationLegend
              items={[
                { type: 'hq', label: 'المقر الرئيسي' },
                { type: 'branch', label: 'فرع' },
                { type: 'project', label: 'مشروع' },
              ]}
            />
            <CityTags cities={['السليمانية', 'أربيل', 'بغداد', 'حلبجة', 'قەڵادزێ', 'كلار']} />
          </Reveal>
        </div>
      </section>

      <CtaStrip
        title="هل أنت مستعد لبدء مشروعك؟"
        text="لنتحدث عن كيفية إسهام شركة إيلين بتميز هندسي في مشروعك القادم."
      >
        <CtaButton href="/ar/contact.html">تواصل مع فريقنا</CtaButton>
      </CtaStrip>
    </>
  );
}
