import ArrowIcon from '../../../components/ArrowIcon';

export default function IndexEn() {
  return (
    <>
{/* HERO */}
<section className="hero" id="home">
  <div className="hero-inner">
    <div className="eyebrow">Est. 2006 · Sulaymaniyah, Iraq</div>
    <h1>Building Iraq's infrastructure with <em>engineering excellence.</em></h1>
    <p>Ellin Company is a Grade (1) Iraqi general contracting and trading firm delivering healthcare, water, sewerage, and infrastructure projects across Iraq and the Kurdistan Region.</p>
    <div className="btnrow">
      <a href="/en/projects.html" className="btn btn-primary">View Our Projects</a>
      <a href="/en/contact.html" className="btn btn-ghost">Get in Touch</a>
    </div>
    <div className="hero-stats">
      <div className="stat"><div className="num">19+</div><div className="lbl">Years of Experience</div></div>
      <div className="stat"><div className="num">Grade 1</div><div className="lbl">Ministry Classification</div></div>
      <div className="stat"><div className="num">40+</div><div className="lbl">Projects Completed</div></div>
      <div className="stat"><div className="num">100%</div><div className="lbl">Iraqi-Owned</div></div>
    </div>
  </div>
  <div className="scroll-cue">Scroll<div className="line"></div></div>
</section>

{/* ABOUT TEASER */}
<section className="section" id="about">
  <div className="wrap about-grid">
    <div className="reveal">
      <div className="eyebrow">About Ellin Company</div>
      <h2>A growing, versatile contractor entirely owned by Iraqi citizens.</h2>
      <p className="lead">Ellin Company for General Contracting &amp; Trading Ltd. is a Grade (1) Iraqi contracting company established in 2006 and headquartered in Sulaymaniyah, Iraq. With nearly two decades of experience, we've delivered construction and infrastructure projects across Iraq and the Kurdistan Region.</p>
      <p className="lead">Our founders and key personnel are highly qualified engineers who have worked on large government and private projects, offering expertise across technical, design, management, and execution.</p>
      <div className="about-figs">
        <div className="about-fig"><div className="n">2006</div><div className="l">Year Established</div></div>
        <div className="about-fig"><div className="n">Grade 1</div><div className="l">Ministry of Planning Registration</div></div>
      </div>
      <div className="mt-32">
        <a href="/en/about.html" className="btn btn-outline">More About Us <ArrowIcon /></a>
      </div>
    </div>
    <div className="about-media reveal">
      <img src="/assets/img/history.jpg" alt="Ellin Company concrete works" />
      <div className="float-card">
        <div className="n">100%</div>
        <div className="l">Iraqi-owned &amp; operated since day one</div>
      </div>
    </div>
  </div>
</section>

{/* WHY CHOOSE US */}
<section className="section-tight bg-soft">
  <div className="wrap">
    <div className="services-head reveal">
      <div className="eyebrow justify-center">Why Ellin</div>
      <h2>Why Clients Choose Us</h2>
    </div>
    <div className="why-grid reveal bg-white">
      <div className="why-item">
        <div className="ic"><img src="/assets/icons/ic_flag_dark.svg" alt="" /></div>
        <h4>Safety First</h4>
        <p>Rigorous safety standards and quality control at every stage of the contracting process.</p>
      </div>
      <div className="why-item">
        <div className="ic"><img src="/assets/icons/ic_process_dark.svg" alt="" /></div>
        <h4>Structured Delivery</h4>
        <p>Comprehensive project management from planning through execution and final handover.</p>
      </div>
      <div className="why-item">
        <div className="ic"><img src="/assets/icons/ic_team_dark.svg" alt="" /></div>
        <h4>Local Expertise</h4>
        <p>Skilled local workforce with deep knowledge of Iraq's regulatory and engineering landscape.</p>
      </div>
      <div className="why-item">
        <div className="ic"><img src="/assets/icons/ic_target_dark.svg" alt="" /></div>
        <h4>International Standards</h4>
        <p>Compliance with Iraqi, UN, NGO, and FIDIC contract specifications on every project.</p>
      </div>
    </div>
  </div>
</section>

{/* SERVICES TEASER */}
<section className="section" id="services">
  <div className="wrap">
    <div className="services-head reveal">
      <div className="eyebrow justify-center">What We Do</div>
      <h2>Core Services</h2>
      <p>Ellin Company offers integrated services across construction, infrastructure, and engineering — operating across Iraq and the Kurdistan Region.</p>
    </div>
    <div className="svc-grid">
      <div className="svc-card reveal"><div className="ic"><img src="/assets/icons/ic_construction.png" alt="" /></div><h4>General Construction</h4><p>Construction of residential, commercial, and industrial buildings.</p></div>
      <div className="svc-card reveal"><div className="ic"><img src="/assets/icons/ic_water.png" alt="" /></div><h4>Water Supply Networks</h4><p>Installation of transmission lines, pump stations, and reservoirs.</p></div>
      <div className="svc-card reveal"><div className="ic"><img src="/assets/icons/ic_sewer.png" alt="" /></div><h4>Sewerage Networks</h4><p>Construction and rehabilitation of urban sewerage systems.</p></div>
    </div>
    <div className="center-text mt-44">
      <a href="/en/services.html" className="btn btn-primary">View All Services <ArrowIcon /></a>
    </div>
  </div>
</section>

{/* VISION / MISSION */}
<section className="section vm">
  <div className="wrap vm-grid">
    <div className="vm-card reveal">
      <div className="ic"><img src="/assets/icons/ic_target.svg" alt="" /></div>
      <h3>Our Vision</h3>
      <p>To be a leading construction and engineering company in Iraq, recognized for excellence in workmanship, reliability, and sustainable development.</p>
    </div>
    <div className="vm-card reveal">
      <div className="ic"><img src="/assets/icons/ic_flag.svg" alt="" /></div>
      <h3>Our Mission</h3>
      <p>To provide high-quality, safe, and efficient construction solutions that contribute to Iraq's growth through professional project management and skilled local labor.</p>
    </div>
  </div>
</section>

{/* FEATURED PROJECT */}
<section className="section bg-soft" id="projects">
  <div className="wrap">
    <div className="services-head reveal">
      <div className="eyebrow justify-center">Our Work</div>
      <h2>Flagship Project</h2>
      <p>A look at one of our most significant infrastructure achievements to date.</p>
    </div>
    <div className="proj-feature reveal">
      <div className="img-col bg-hospital-ext"></div>
      <div className="txt-col">
        <div className="tag">Healthcare Investment</div>
        <h3>Baxshin Private General Hospital</h3>
        <p>A major healthcare investment project in Sulaymaniyah — one of the largest hospitals in the city, designed and executed entirely by Ellin Company across 9 floors with a 40% landscaped area.</p>
        <div className="proj-stats">
          <div><div className="n">100 beds</div><div className="l">Capacity</div></div>
          <div><div className="n">9,850 m²</div><div className="l">Total Area</div></div>
          <div><div className="n">25.5B IQD</div><div className="l">Total Budget</div></div>
        </div>
        <div className="mt-28">
          <a href="/en/projects.html" className="btn btn-white">See All Projects <ArrowIcon /></a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CSR TEASER */}
<section className="section csr" id="csr">
  <div className="wrap">
    <div className="csr-inner reveal">
      <div className="eyebrow csr-eyebrow">Corporate Social Responsibility</div>
      <h2>Building responsibly, for people and the planet.</h2>
      <p>Corporate Social Responsibility is an integral part of Ellin Company's operations. We're committed to environmental sustainability, community development, and workforce growth in everything we build.</p>
      <div className="mt-24">
        <a href="/en/about.html#csr" className="btn btn-ghost">Learn More <ArrowIcon /></a>
      </div>
    </div>
  </div>
</section>

{/* CTA */}
<section className="section-tight cta-strip">
  <div className="wrap">
    <h2>Let's build something lasting.</h2>
    <p>Get in touch to discuss your next infrastructure or construction project.</p>
    <a href="/en/contact.html" className="btn btn-dark">Contact Our Team</a>
  </div>
</section>
    </>
  );
}
