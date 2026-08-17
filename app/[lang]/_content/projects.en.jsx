export default function ProjectsEn() {
  return (
    <>
<section className="page-header" style={{ '--bgimg': "url('/assets/img/hospital_ext.jpg')" }}>
  <div className="wrap">
    <div className="crumb"><a href="/en/">Home</a> / Projects</div>
    <h1>Accomplished projects across Iraq.</h1>
    <p>Major construction and infrastructure projects demonstrating strong technical capability, structured project management, and commitment to quality and safety.</p>
  </div>
</section>

{/* FEATURED: BAXSHIN HOSPITAL */}
<section className="section">
  <div className="wrap">
    <div className="proj-feature reveal">
      <div className="img-col bg-hospital-ext"></div>
      <div className="txt-col">
        <div className="tag">Flagship Project · Healthcare</div>
        <h3>Baxshin Private General Hospital</h3>
        <p>A major healthcare investment project in Sulaymaniyah — one of the largest hospitals in the city and in Iraq, designed and executed entirely by Ellin Company. Located south of Sulaymaniyah, it houses all departments of an advanced hospital across 9 floors, with a 40% landscaped area complemented by an underground garage.</p>
        <div className="proj-stats">
          <div><div className="n">100 beds</div><div className="l">Capacity</div></div>
          <div><div className="n">9,850 m²</div><div className="l">Total Area</div></div>
          <div><div className="n">9 floors</div><div className="l">Structure</div></div>
          <div><div className="n">25.5B IQD</div><div className="l">Total Budget</div></div>
        </div>
      </div>
    </div>
    <div className="proj-grid mt-24">
      <div className="proj-card reveal">
        <div className="thumb bg-hospital-atrium"></div>
        <div className="body">
          <div className="tag">Interior</div>
          <h4>Hospital Atrium &amp; Landscape</h4>
          <p>Naturally lit interior courtyard integrated within the hospital's landscaped ground floor.</p>
        </div>
      </div>
      <div className="proj-card reveal">
        <div className="thumb bg-hospital-lobby"></div>
        <div className="body">
          <div className="tag">Interior</div>
          <h4>Main Lobby &amp; Circulation</h4>
          <p>Advanced modern interior design across the hospital's primary circulation spaces.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* OTHER PROJECTS */}
<section className="section bg-soft">
  <div className="wrap">
    <div className="services-head left reveal">
      <div className="eyebrow">More of Our Work</div>
      <h2>Infrastructure &amp; Public Works</h2>
    </div>
    <div className="proj-grid">
      <div className="proj-card reveal">
        <div className="thumb bg-water"></div>
        <div className="body">
          <div className="tag">Water Networks</div>
          <h4>Water Transmission Networks</h4>
          <p>Nearly 145 km of drinking water transmission lines, pump stations, and reservoirs across Sulaymaniyah, Ranya, Qaladze, Arbat, and Halabja. Delivered water to thousands of new households under the supervision of the Water Directorate.</p>
          <div className="meta"><span>2006 – 2024</span><b>22.78B IQD</b></div>
        </div>
      </div>
      <div className="proj-card reveal">
        <div className="thumb bg-sewerage"></div>
        <div className="body">
          <div className="tag">Sewerage</div>
          <h4>Sewerage Box &amp; Network Projects</h4>
          <p>Implementation of sewerage systems and box sewers across multiple cities and neighborhoods, renovating old networks and laying new ones for municipalities.</p>
          <div className="meta"><span>2006 – 2024</span><b>13.25B IQD</b></div>
        </div>
      </div>
      <div className="proj-card reveal">
        <div className="thumb bg-complementary"></div>
        <div className="body">
          <div className="tag">Urban Infrastructure</div>
          <h4>Complementary Urban Projects</h4>
          <p>Roads, sidewalks, and water/sewerage extensions across 9 projects in Sulaymaniyah, Ranya, and Halabja, benefiting hundreds of households.</p>
          <div className="meta"><span>2007 – 2022</span><b>11.67B IQD</b></div>
        </div>
      </div>
      <div className="proj-card reveal">
        <div className="thumb bg-garden"></div>
        <div className="body">
          <div className="tag">Public Space</div>
          <h4>Setwan Public Garden</h4>
          <p>A public green space project for Sulaymaniyah Municipality in the Kaniba neighborhood, with irrigation, sidewalks, and a children's play area.</p>
          <div className="meta"><span>2013 – 2014</span><b>536M IQD</b></div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* LOCATIONS */}
<section className="section">
  <div className="wrap loc-grid">
    <div className="reveal">
      <img src="/assets/img/iraq_map.png" alt="Ellin Company project locations across Iraq" />
    </div>
    <div className="reveal">
      <div className="eyebrow">Where We Work</div>
      <h2 className="subhead-title">Project Locations</h2>
      <p className="subhead-text">Ellin Company operates across key cities in Iraq and the Kurdistan Region, delivering large-scale infrastructure and construction projects under diverse geographic and technical conditions.</p>
      <div className="loc-legend">
        <div className="li"><span className="dot hq"></span>Headquarters</div>
        <div className="li"><span className="sq"></span>Branch</div>
        <div className="li"><span className="dot"></span>Project</div>
      </div>
      <div className="city-tags">
        <span>Sulaymaniyah</span><span>Erbil</span><span>Baghdad</span><span>Halabja</span><span>Qaladizay</span><span>Kalar</span>
      </div>
    </div>
  </div>
</section>

{/* CTA */}
<section className="section-tight cta-strip">
  <div className="wrap">
    <h2>Ready to start your project?</h2>
    <p>Let's discuss how Ellin Company can bring engineering excellence to your next build.</p>
    <a href="/en/contact.html" className="btn btn-dark">Contact Our Team</a>
  </div>
</section>
    </>
  );
}
