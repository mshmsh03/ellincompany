import {
  ApproachStep,
  CtaButton,
  CtaStrip,
  Eyebrow,
  PageHeader,
  Reveal,
  ServiceCard,
} from '../../../components/sections';

export default function ServicesEn() {
  return (
    <>
      <PageHeader
        bgImage="/assets/img/water.jpg"
        homeHref="/en/"
        homeLabel="Home"
        crumb="Services"
        title="Integrated services across construction and infrastructure."
      >
        Ellin Company operates across a wide range of engineering, construction, and development sectors — in Iraq, the Kurdistan Region, and internationally.
      </PageHeader>

      {/* FULL SERVICES GRID */}
      <section className="py-17 md:py-26">
        <div className="wrap grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard num="01" icon="/assets/icons/ic_construction.png" title="General Construction">
            Construction of residential, commercial, and industrial buildings, delivered with structured project management and skilled local labor.
          </ServiceCard>
          <ServiceCard num="02" icon="/assets/icons/ic_water.png" title="Water Supply Networks & Pump Stations">
            Installation of transmission lines, pump stations, and reservoirs — nearly 145 km of drinking water networks delivered to date.
          </ServiceCard>
          <ServiceCard num="03" icon="/assets/icons/ic_sewer.png" title="Sewerage Networks">
            Construction and rehabilitation of urban sewerage systems and box sewers across multiple cities and neighborhoods.
          </ServiceCard>
          <ServiceCard num="04" icon="/assets/icons/ic_oil.png" title="Oil & Gas Support Works">
            Civil and infrastructure support for oil and gas facilities, executed to strict industrial safety standards.
          </ServiceCard>
          <ServiceCard num="05" icon="/assets/icons/ic_agri.png" title="Agriculture & Landscaping">
            Development of public gardens, green areas, and irrigation systems, including Sulaymaniyah&apos;s Setwan Public Garden.
          </ServiceCard>
          <ServiceCard num="06" icon="/assets/icons/ic_industry.png" title="Heating, Cooling & Pipeline Systems">
            Installation of mechanical systems and pipelines for residential, commercial, and institutional projects.
          </ServiceCard>
          <ServiceCard num="07" icon="/assets/icons/ic_estate.png" title="Real Estate & Industrial Investments">
            Execution of development and investment projects across residential and industrial real estate.
          </ServiceCard>
          <ServiceCard num="08" icon="/assets/icons/ic_invest.png" title="Investments">
            Strategic investment in infrastructure and industrial ventures aligned with long-term economic value.
          </ServiceCard>
          <ServiceCard num="09" icon="/assets/icons/ic_trading.png" title="Trading & Supply">
            Supply of high-quality construction materials and equipment, connecting clients to trusted international markets.
          </ServiceCard>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-surface-soft py-17 md:py-26">
        <div className="wrap grid grid-cols-1 items-start gap-9 md:grid-cols-[0.9fr_1.1fr] md:gap-[60px]">
          <Reveal as="img" src="/assets/img/sewerage.jpg" alt="Ellin Company infrastructure work" className="rounded-lg shadow-brand md:sticky md:top-[110px]" />
          <Reveal as="div">
            <Eyebrow>Our Process</Eyebrow>
            <h2 className="mb-2 text-[clamp(24px,3vw,32px)]">From Planning to Delivery</h2>
            <p className="mb-5 text-[15px] text-ink-soft">
              Every service is delivered through the same structured, disciplined methodology that defines our approach to every project.
            </p>
            <div>
              <ApproachStep index="1" title="Assessment & Planning">
                Deep understanding of project scope, site conditions, and client requirements.
              </ApproachStep>
              <ApproachStep index="2" title="Engineering & Design">
                Technical design work aligned with Iraqi, UN, NGO, and FIDIC standards.
              </ApproachStep>
              <ApproachStep index="3" title="Execution & Supervision">
                Structured execution with continuous quality control and safety oversight.
              </ApproachStep>
              <ApproachStep index="4" title="Handover & Support">
                Final delivery with documentation and ongoing support as needed.
              </ApproachStep>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaStrip
        title="Have a project in mind?"
        text="Tell us what you need — our team will get back to you within one business day."
      >
        <CtaButton href="/en/contact.html">Request a Consultation</CtaButton>
      </CtaStrip>
    </>
  );
}
