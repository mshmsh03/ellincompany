import ContactForm from '../../../components/ContactForm';

export default function ContactAr() {
  return (
    <>
<section className="page-header" style={{ '--bgimg': "url('/assets/img/ov3.jpg')", padding: '220px 0 76px' }}>
  <div className="wrap">
    <div className="crumb"><a href="/ar/">الرئيسية</a> / اتصل بنا</div>
    <h1>لنتحدث عن مشروعك.</h1>
    <p>تواصل مع فريقنا للاستفسارات المتعلقة بالشراكات أو العطاءات أو استشارات المشاريع.</p>
  </div>
</section>

{/* CONTACT */}
<section className="section">
  <div className="wrap contact-grid">
    <div className="reveal">
      <div className="eyebrow">تواصل معنا</div>
      <h2>يسعدنا التواصل معك.</h2>
      <p>سواء كنت تخطط لمشروع إنشائي، أو تستكشف شراكة، أو تتقدم بعطاء، يستجيب فريقنا عادةً خلال يوم عمل واحد.</p>

      <div className="cinfo">
        <div className="ic"><img src="/assets/icons/ic_pin.svg" alt="" /></div>
        <div><div className="l">المقر الرئيسي</div><div className="v">مبنى آزادي، طريق حديقة آزادي، السليمانية، العراق</div></div>
      </div>
      <div className="cinfo">
        <div className="ic"><img src="/assets/icons/ic_mail.svg" alt="" /></div>
        <div><div className="l">البريد الإلكتروني</div><div className="v">info@ellincompany.com</div></div>
      </div>
      <div className="cinfo">
        <div className="ic"><img src="/assets/icons/ic_phone.svg" alt="" /></div>
        <div><div className="l">الهاتف</div><div className="v">1677 154 770 964+</div></div>
      </div>

      <div className="hours-card">
        <h5>ساعات الدوام</h5>
        <div className="hours-row"><span>السبت – الأربعاء</span><span>8:00 صباحاً – 4:00 مساءً</span></div>
        <div className="hours-row"><span>الخميس</span><span>8:00 صباحاً – 1:00 ظهراً</span></div>
        <div className="hours-row"><span>الجمعة</span><span>مغلق</span></div>
      </div>
    </div>

    <ContactForm alertMessage="شكراً لتواصلكم معنا! هذا النموذج لا يستقبل الرسائل حالياً — يرجى مراسلتنا عبر info@ellincompany.com أو الاتصال على +964 770 154 1677 وسيتواصل فريقنا معكم فوراً.">
      <div className="row">
        <div className="field"><label htmlFor="cf-name">الاسم الكامل</label><input id="cf-name" type="text" placeholder="اسمك" required /></div>
        <div className="field"><label htmlFor="cf-email">البريد الإلكتروني</label><input id="cf-email" type="email" placeholder="you@example.com" required /></div>
      </div>
      <div className="row">
        <div className="field"><label htmlFor="cf-phone">رقم الهاتف</label><input id="cf-phone" type="text" placeholder="964+" /></div>
        <div className="field"><label htmlFor="cf-subject">الموضوع</label><input id="cf-subject" type="text" placeholder="كيف يمكننا مساعدتك؟" /></div>
      </div>
      <div className="field">
        <label htmlFor="cf-message">الرسالة</label>
        <textarea id="cf-message" placeholder="أخبرنا عن مشروعك..." required></textarea>
      </div>
      <button type="submit" className="btn btn-primary">إرسال الرسالة</button>
    </ContactForm>
  </div>
</section>

{/* LOCATION STRIP */}
<section className="section-tight bg-soft">
  <div className="wrap">
    <div className="services-head reveal">
      <div className="eyebrow justify-center">زُرنا</div>
      <h2>موقع المقر الرئيسي</h2>
      <p>مبنى آزادي، طريق حديقة آزادي، السليمانية، العراق</p>
    </div>
    <div className="why-grid reveal bg-white">
      <div className="why-item">
        <div className="ic"><img src="/assets/icons/ic_pin.svg" alt="" /></div>
        <h4>المقر الرئيسي</h4>
        <p>مبنى آزادي، طريق حديقة آزادي، السليمانية، العراق</p>
      </div>
      <div className="why-item">
        <div className="ic"><img src="/assets/icons/ic_mail.svg" alt="" /></div>
        <h4>راسلنا</h4>
        <p>info@ellincompany.com</p>
      </div>
      <div className="why-item">
        <div className="ic"><img src="/assets/icons/ic_phone.svg" alt="" /></div>
        <h4>اتصل بنا</h4>
        <p>1677 154 770 964+</p>
      </div>
      <div className="why-item">
        <div className="ic"><img src="/assets/icons/ic_target_blue.svg" alt="" /></div>
        <h4>نطاق الخدمة</h4>
        <p>العراق وإقليم كوردستان</p>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
