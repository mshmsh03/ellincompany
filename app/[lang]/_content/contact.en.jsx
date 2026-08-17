import ContactForm from '../../../components/ContactForm';

export default function ContactEn() {
  return (
    <>
<section className="page-header" style={{ '--bgimg': "url('/assets/img/ov3.jpg')", padding: '220px 0 76px' }}>
  <div className="wrap">
    <div className="crumb"><a href="/en/">Home</a> / Contact</div>
    <h1>Let's discuss your project.</h1>
    <p>Reach out to our team for partnership inquiries, tenders, or project consultations.</p>
  </div>
</section>

{/* CONTACT */}
<section className="section">
  <div className="wrap contact-grid">
    <div className="reveal">
      <div className="eyebrow">Get In Touch</div>
      <h2>We'd love to hear from you.</h2>
      <p>Whether you're planning a construction project, exploring a partnership, or bidding on a tender, our team typically responds within one business day.</p>

      <div className="cinfo">
        <div className="ic"><img src="/assets/icons/ic_pin.svg" alt="" /></div>
        <div><div className="l">Headquarters</div><div className="v">Azadi Building, Azadi Park Road, Sulaymaniyah, Iraq</div></div>
      </div>
      <div className="cinfo">
        <div className="ic"><img src="/assets/icons/ic_mail.svg" alt="" /></div>
        <div><div className="l">Email</div><div className="v">info@ellincompany.com</div></div>
      </div>
      <div className="cinfo">
        <div className="ic"><img src="/assets/icons/ic_phone.svg" alt="" /></div>
        <div><div className="l">Phone</div><div className="v">+964 770 154 1677</div></div>
      </div>

      <div className="hours-card">
        <h5>Office Hours</h5>
        <div className="hours-row"><span>Saturday – Wednesday</span><span>8:00 AM – 4:00 PM</span></div>
        <div className="hours-row"><span>Thursday</span><span>8:00 AM – 1:00 PM</span></div>
        <div className="hours-row"><span>Friday</span><span>Closed</span></div>
      </div>
    </div>

    <ContactForm alertMessage="Thanks for reaching out! This form isn't accepting submissions yet — please email info@ellincompany.com or call +964 770 154 1677 and our team will help right away.">
      <div className="row">
        <div className="field"><label htmlFor="cf-name">Full Name</label><input id="cf-name" type="text" placeholder="Your name" required /></div>
        <div className="field"><label htmlFor="cf-email">Email Address</label><input id="cf-email" type="email" placeholder="you@example.com" required /></div>
      </div>
      <div className="row">
        <div className="field"><label htmlFor="cf-phone">Phone Number</label><input id="cf-phone" type="text" placeholder="+964" /></div>
        <div className="field"><label htmlFor="cf-subject">Subject</label><input id="cf-subject" type="text" placeholder="How can we help?" /></div>
      </div>
      <div className="field">
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" placeholder="Tell us about your project..." required></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Send Message</button>
    </ContactForm>
  </div>
</section>

{/* LOCATION STRIP */}
<section className="section-tight bg-soft">
  <div className="wrap">
    <div className="services-head reveal">
      <div className="eyebrow justify-center">Visit Us</div>
      <h2>Find Our Headquarters</h2>
      <p>Azadi Building, Azadi Park Road, Sulaymaniyah, Iraq</p>
    </div>
    <div className="why-grid reveal bg-white">
      <div className="why-item">
        <div className="ic"><img src="/assets/icons/ic_pin.svg" alt="" /></div>
        <h4>Headquarters</h4>
        <p>Azadi Building, Azadi Park Road, Sulaymaniyah, Iraq</p>
      </div>
      <div className="why-item">
        <div className="ic"><img src="/assets/icons/ic_mail.svg" alt="" /></div>
        <h4>Email Us</h4>
        <p>info@ellincompany.com</p>
      </div>
      <div className="why-item">
        <div className="ic"><img src="/assets/icons/ic_phone.svg" alt="" /></div>
        <h4>Call Us</h4>
        <p>+964 770 154 1677</p>
      </div>
      <div className="why-item">
        <div className="ic"><img src="/assets/icons/ic_target_blue.svg" alt="" /></div>
        <h4>Service Area</h4>
        <p>Iraq &amp; the Kurdistan Region</p>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
