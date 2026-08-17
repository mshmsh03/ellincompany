import ArrowIcon from '../../../components/ArrowIcon';

export default function IndexAr() {
  return (
    <>
{/* HERO */}
<section className="hero" id="home">
  <div className="hero-inner">
    <div className="eyebrow">تأسست عام 2006 · السليمانية، العراق</div>
    <h1>نبني البنية التحتية العراقية <em>بتميّز هندسي.</em></h1>
    <p>شركة إيلين هي شركة عراقية من الدرجة الأولى للمقاولات العامة والتجارة، تنفذ مشاريع في القطاع الصحي والمائي ومشاريع المجاري والبنية التحتية في جميع أنحاء العراق وإقليم كوردستان.</p>
    <div className="btnrow">
      <a href="/ar/projects.html" className="btn btn-primary">مشاهدة مشاريعنا</a>
      <a href="/ar/contact.html" className="btn btn-ghost">تواصل معنا</a>
    </div>
    <div className="hero-stats">
      <div className="stat"><div className="num">+19</div><div className="lbl">سنة من الخبرة</div></div>
      <div className="stat"><div className="num">الدرجة 1</div><div className="lbl">تصنيف وزارة التخطيط</div></div>
      <div className="stat"><div className="num">+40</div><div className="lbl">مشروعاً منجزاً</div></div>
      <div className="stat"><div className="num">100%</div><div className="lbl">ملكية عراقية</div></div>
    </div>
  </div>
  <div className="scroll-cue">مرر للأسفل<div className="line"></div></div>
</section>

{/* ABOUT TEASER */}
<section className="section" id="about">
  <div className="wrap about-grid">
    <div className="reveal">
      <div className="eyebrow">عن شركة إيلين</div>
      <h2>شركة متنامية ومتعددة التخصصات، مملوكة بالكامل لمواطنين عراقيين.</h2>
      <p className="lead">شركة إيلين للمقاولات العامة والتجارة المحدودة هي شركة مقاولات عراقية من الدرجة (1)، تأسست عام 2006 ومقرها الرئيسي في السليمانية، العراق. وعلى مدى ما يقارب عقدين من الزمن، نفذت الشركة مشاريع إنشائية وبنية تحتية في جميع أنحاء العراق وإقليم كوردستان.</p>
      <p className="lead">يتمتع مؤسسو الشركة وكوادرها الأساسية بخبرة هندسية عالية، وقد عملوا في مشاريع حكومية وخاصة كبرى، ويقدمون خبرة هندسية شاملة في الجوانب الفنية والتصميمية والإدارية والتنفيذية.</p>
      <div className="about-figs">
        <div className="about-fig"><div className="n">2006</div><div className="l">سنة التأسيس</div></div>
        <div className="about-fig"><div className="n">الدرجة 1</div><div className="l">تسجيل لدى وزارة التخطيط</div></div>
      </div>
      <div className="mt-32">
        <a href="/ar/about.html" className="btn btn-outline">المزيد عنا <ArrowIcon /></a>
      </div>
    </div>
    <div className="about-media reveal">
      <img src="/assets/img/history.jpg" alt="أعمال صب الخرسانة لشركة إيلين" />
      <div className="float-card">
        <div className="n">100%</div>
        <div className="l">ملكية وإدارة عراقية منذ التأسيس</div>
      </div>
    </div>
  </div>
</section>

{/* WHY CHOOSE US */}
<section className="section-tight bg-soft">
  <div className="wrap">
    <div className="services-head reveal">
      <div className="eyebrow justify-center">لماذا إيلين</div>
      <h2>لماذا يختارنا عملاؤنا</h2>
    </div>
    <div className="why-grid reveal bg-white">
      <div className="why-item">
        <div className="ic"><img src="/assets/icons/ic_flag_dark.svg" alt="" /></div>
        <h4>السلامة أولاً</h4>
        <p>معايير سلامة صارمة ورقابة جودة في كل مرحلة من مراحل التنفيذ.</p>
      </div>
      <div className="why-item">
        <div className="ic"><img src="/assets/icons/ic_process_dark.svg" alt="" /></div>
        <h4>تنفيذ منظم</h4>
        <p>إدارة مشاريع شاملة من التخطيط وحتى التنفيذ والتسليم النهائي.</p>
      </div>
      <div className="why-item">
        <div className="ic"><img src="/assets/icons/ic_team_dark.svg" alt="" /></div>
        <h4>خبرة محلية</h4>
        <p>كوادر محلية ماهرة تمتلك معرفة عميقة بالبيئة التنظيمية والهندسية في العراق.</p>
      </div>
      <div className="why-item">
        <div className="ic"><img src="/assets/icons/ic_target_dark.svg" alt="" /></div>
        <h4>معايير دولية</h4>
        <p>الالتزام بمواصفات العقود العراقية والأممية ومنظمات المجتمع المدني ومعايير FIDIC في كل مشروع.</p>
      </div>
    </div>
  </div>
</section>

{/* SERVICES TEASER */}
<section className="section" id="services">
  <div className="wrap">
    <div className="services-head reveal">
      <div className="eyebrow justify-center">ماذا نقدّم</div>
      <h2>خدماتنا الأساسية</h2>
      <p>تقدم شركة إيلين خدمات متكاملة في مجالات البناء والبنية التحتية والهندسة، وتعمل في جميع أنحاء العراق وإقليم كوردستان.</p>
    </div>
    <div className="svc-grid">
      <div className="svc-card reveal"><div className="ic"><img src="/assets/icons/ic_construction.png" alt="" /></div><h4>الإنشاءات العامة</h4><p>إنشاء المباني السكنية والتجارية والصناعية.</p></div>
      <div className="svc-card reveal"><div className="ic"><img src="/assets/icons/ic_water.png" alt="" /></div><h4>شبكات المياه</h4><p>تمديد خطوط النقل ومحطات الضخ وخزانات المياه.</p></div>
      <div className="svc-card reveal"><div className="ic"><img src="/assets/icons/ic_sewer.png" alt="" /></div><h4>شبكات المجاري</h4><p>إنشاء وتأهيل شبكات الصرف الصحي الحضرية.</p></div>
    </div>
    <div className="center-text mt-44">
      <a href="/ar/services.html" className="btn btn-primary">عرض جميع الخدمات <ArrowIcon /></a>
    </div>
  </div>
</section>

{/* VISION / MISSION */}
<section className="section vm">
  <div className="wrap vm-grid">
    <div className="vm-card reveal">
      <div className="ic"><img src="/assets/icons/ic_target.svg" alt="" /></div>
      <h3>رؤيتنا</h3>
      <p>أن نكون شركة رائدة في قطاع البناء والهندسة في العراق، معروفة بالتميز في جودة العمل والموثوقية والتنمية المستدامة.</p>
    </div>
    <div className="vm-card reveal">
      <div className="ic"><img src="/assets/icons/ic_flag.svg" alt="" /></div>
      <h3>رسالتنا</h3>
      <p>تقديم حلول إنشائية آمنة وعالية الجودة وفعّالة تسهم في تنمية العراق، من خلال إدارة مشاريع احترافية وأيدٍ عاملة محلية ماهرة.</p>
    </div>
  </div>
</section>

{/* FEATURED PROJECT */}
<section className="section bg-soft" id="projects">
  <div className="wrap">
    <div className="services-head reveal">
      <div className="eyebrow justify-center">أعمالنا</div>
      <h2>المشروع الرائد</h2>
      <p>نظرة على أحد أبرز إنجازاتنا في مجال البنية التحتية حتى الآن.</p>
    </div>
    <div className="proj-feature reveal">
      <div className="img-col bg-hospital-ext"></div>
      <div className="txt-col">
        <div className="tag">استثمار في القطاع الصحي</div>
        <h3>مستشفى بەخشین الأهلي العام</h3>
        <p>مشروع استثماري صحي كبير في مدينة السليمانية — أحد أكبر المستشفيات في المدينة، صمّمته ونفذته شركة إيلين بالكامل على تسعة طوابق مع مساحة خضراء تشكل 40٪ من إجمالي مساحة المشروع.</p>
        <div className="proj-stats">
          <div><div className="n">100 سرير</div><div className="l">الطاقة الاستيعابية</div></div>
          <div><div className="n">9,850 م²</div><div className="l">المساحة الإجمالية</div></div>
          <div><div className="n">25.5 مليار د.ع</div><div className="l">الميزانية الإجمالية</div></div>
        </div>
        <div className="mt-28">
          <a href="/ar/projects.html" className="btn btn-white">جميع المشاريع <ArrowIcon /></a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CSR TEASER */}
<section className="section csr" id="csr">
  <div className="wrap">
    <div className="csr-inner reveal">
      <div className="eyebrow csr-eyebrow">المسؤولية الاجتماعية للشركة</div>
      <h2>نبني بمسؤولية، للناس وللبيئة.</h2>
      <p>تشكل المسؤولية الاجتماعية جزءاً أساسياً من عمل شركة إيلين. نحن ملتزمون بالاستدامة البيئية والتنمية المجتمعية وتطوير الكوادر البشرية في كل ما ننفذه.</p>
      <div className="mt-24">
        <a href="/ar/about.html#csr" className="btn btn-ghost">اعرف المزيد <ArrowIcon /></a>
      </div>
    </div>
  </div>
</section>

{/* CTA */}
<section className="section-tight cta-strip">
  <div className="wrap">
    <h2>لنبنِ معاً شيئاً يدوم.</h2>
    <p>تواصل معنا لمناقشة مشروعك الإنشائي أو مشروع البنية التحتية القادم.</p>
    <a href="/ar/contact.html" className="btn btn-dark">تواصل مع فريقنا</a>
  </div>
</section>
    </>
  );
}
