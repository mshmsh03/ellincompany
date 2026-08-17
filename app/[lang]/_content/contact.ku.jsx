import ContactForm from '../../../components/ContactForm';

export default function ContactKu() {
  return (
    <>
<section className="page-header" style={{ '--bgimg': "url('/assets/img/ov3.jpg')", padding: '220px 0 76px' }}>
  <div className="wrap">
    <div className="crumb"><a href="/ku/">ماڵەوە</a> / پەیوەندیمان پێوە بکە</div>
    <h1>با گفتوگۆ لەسەر پرۆژەکەت بکەین.</h1>
    <p>پەیوەندی بە تیمەکەمانەوە بکە بۆ هاوبەشی، ئۆفەر یان ڕاوێژکاری پرۆژە.</p>
  </div>
</section>

{/* CONTACT */}
<section className="section">
  <div className="wrap contact-grid">
    <div className="reveal">
      <div className="eyebrow">پەیوەندیمان پێوە بکە</div>
      <h2>دڵخۆشین بۆ بیستنی دەنگت.</h2>
      <p>ئەگەر پلانت بۆ پرۆژەیەکی بیناسازی هەیە، یان بەدوای هاوبەشیدا دەگەڕێیت، یان ئۆفەرێک پێشکەش دەکەیت، تیمەکەمان بەگشتی لە ماوەی ڕۆژێکی کاردا وەڵام دەداتەوە.</p>

      <div className="cinfo">
        <div className="ic"><img src="/assets/icons/ic_pin.svg" alt="" /></div>
        <div><div className="l">بنکەی سەرەکی</div><div className="v">بینای ئازادی، شەقامی پارکی ئازادی، سلێمانی، عێراق</div></div>
      </div>
      <div className="cinfo">
        <div className="ic"><img src="/assets/icons/ic_mail.svg" alt="" /></div>
        <div><div className="l">ئیمەیل</div><div className="v">info@ellincompany.com</div></div>
      </div>
      <div className="cinfo">
        <div className="ic"><img src="/assets/icons/ic_phone.svg" alt="" /></div>
        <div><div className="l">مۆبایل</div><div className="v">1677 154 770 964+</div></div>
      </div>

      <div className="hours-card">
        <h5>کاتی کارکردن</h5>
        <div className="hours-row"><span>شەممە – چوارشەممە</span><span>8:00 بەیانی – 4:00 ئێوارە</span></div>
        <div className="hours-row"><span>پێنجشەممە</span><span>8:00 بەیانی – 1:00 نیوەڕۆ</span></div>
        <div className="hours-row"><span>هەینی</span><span>داخراوە</span></div>
      </div>
    </div>

    <ContactForm alertMessage="سوپاس بۆ پەیوەندیکردنتان! ئەم فۆرمە هێشتا پەیامەکان وەرناگرێت — تکایە پەیوەندیمان پێوە بکەن لە ڕێگەی info@ellincompany.com یان ژمارە +964 770 154 1677 و تیمەکەمان زوو یارمەتیتان دەدات.">
      <div className="row">
        <div className="field"><label htmlFor="cf-name">ناوی تەواو</label><input id="cf-name" type="text" placeholder="ناوت" required /></div>
        <div className="field"><label htmlFor="cf-email">ئیمەیل</label><input id="cf-email" type="email" placeholder="you@example.com" required /></div>
      </div>
      <div className="row">
        <div className="field"><label htmlFor="cf-phone">ژمارەی مۆبایل</label><input id="cf-phone" type="text" placeholder="964+" /></div>
        <div className="field"><label htmlFor="cf-subject">بابەت</label><input id="cf-subject" type="text" placeholder="چۆن یارمەتیت بدەین؟" /></div>
      </div>
      <div className="field">
        <label htmlFor="cf-message">پەیام</label>
        <textarea id="cf-message" placeholder="دەربارەی پرۆژەکەت پێمان بڵێ..." required></textarea>
      </div>
      <button type="submit" className="btn btn-primary">پەیام بنێرە</button>
    </ContactForm>
  </div>
</section>

{/* LOCATION STRIP */}
<section className="section-tight bg-soft">
  <div className="wrap">
    <div className="services-head reveal">
      <div className="eyebrow justify-center">سەردانمان بکە</div>
      <h2>شوێنی بنکەی سەرەکیمان بدۆزەرەوە</h2>
      <p>بینای ئازادی، شەقامی پارکی ئازادی، سلێمانی، عێراق</p>
    </div>
    <div className="why-grid reveal bg-white">
      <div className="why-item">
        <div className="ic"><img src="/assets/icons/ic_pin.svg" alt="" /></div>
        <h4>بنکەی سەرەکی</h4>
        <p>بینای ئازادی، شەقامی پارکی ئازادی، سلێمانی، عێراق</p>
      </div>
      <div className="why-item">
        <div className="ic"><img src="/assets/icons/ic_mail.svg" alt="" /></div>
        <h4>ئیمەیلمان بۆ بنێرە</h4>
        <p>info@ellincompany.com</p>
      </div>
      <div className="why-item">
        <div className="ic"><img src="/assets/icons/ic_phone.svg" alt="" /></div>
        <h4>پەیوەندیمان پێوە بکە</h4>
        <p>1677 154 770 964+</p>
      </div>
      <div className="why-item">
        <div className="ic"><img src="/assets/icons/ic_target_blue.svg" alt="" /></div>
        <h4>ناوچەی خزمەتگوزاری</h4>
        <p>عێراق و هەرێمی کوردستان</p>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
