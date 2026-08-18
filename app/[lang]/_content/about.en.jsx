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

export default function AboutEn() {
  return (
    <>
      <PageHeader
        bgImage="/assets/img/ov2.jpg"
        homeHref="/en/"
        homeLabel="Home"
        crumb="About Us"
        title="Nearly two decades of engineering discipline in Iraq."
      >
        Ellin Company for General Contracting &amp; Trading Ltd. — a Grade (1) Iraqi contractor headquartered in Sulaymaniyah.
      </PageHeader>

      {/* OVERVIEW */}
      <section className="py-17 md:py-26">
        <Reveal as="div" className="wrap grid grid-cols-1 items-center gap-9 md:grid-cols-[1fr_0.85fr] md:gap-[68px]">
          <div>
            <Eyebrow>Company Overview</Eyebrow>
            <h2 className="mb-[22px] text-[clamp(26px,3.4vw,38px)] leading-[1.2] rtl:leading-[1.5]">
              A growing, versatile firm entirely owned by Iraqi citizens.
            </h2>
            <p className="mb-4 text-[17px] text-ink-soft">
              Ellin Company is a growing and versatile firm specializing in general contracting and trading, founded in Sulaymaniyah and entirely owned by Iraqi citizens.
            </p>
            <p className="mb-4 text-[17px] text-ink-soft">
              The founders and key personnel of the company are highly qualified engineers of different backgrounds who have worked on various large government and private projects. The company&apos;s capabilities are best demonstrated by the background of its technical and managerial staff, and by its professional approach and well-established methodologies.
            </p>
            <p className="mb-4 text-[17px] text-ink-soft">
              The company offers engineering expertise across technical, design, and management aspects, as well as execution — ensuring well-engineered connections to international markets and the procurement of high-quality, cost-effective products. Ellin has experience in engineering and construction, investment, cooling and heating systems, pipelines, green roofs, and landscaping.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-4">
              <StatFigure value="2006" label="Year of Establishment" />
              <StatFigure value="Grade 1" label="Ministry of Planning Registration" />
              <StatFigure value="Iraq" label="Operational Region: Iraq & Kurdistan" />
              <StatFigure value="100%" label="Iraqi Ownership Structure" />
            </div>
          </div>
          <div className="relative">
            <img className="rounded-lg shadow-brand" src="/assets/img/ov1.jpg" alt="Ellin Company site operations" />
            <div className="absolute start-0 bottom-[-20px] max-w-[210px] rounded-[3px] bg-brand px-5 py-4 text-white shadow-[0_14px_30px_rgba(1,42,61,.25)] sm:start-[-26px] sm:bottom-[-26px] sm:px-[26px] sm:py-[22px]">
              <div className="text-[26px] font-extrabold">Azadi Bldg.</div>
              <div className="mt-0.5 text-xs opacity-85">Azadi Park Road, Sulaymaniyah, Iraq</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* HISTORY TIMELINE */}
      <section className="bg-surface-soft py-17 md:py-26">
        <div className="wrap grid grid-cols-1 items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
          <Reveal as="img" variant="wipe" src="/assets/img/history.jpg" alt="Ellin Company concrete works" className="rounded-lg shadow-brand" />
          <Reveal as="div">
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mb-[18px] text-[clamp(24px,3vw,34px)]">19 years of steady growth and engineering discipline.</h2>
            <Timeline>
              <TimelineItem title="2006 — Founded in Sulaymaniyah">
                Ellin Company is established, beginning with infrastructure and utility projects across the region.
              </TimelineItem>
              <TimelineItem title="Steady Diversification">
                The company gradually diversifies into healthcare construction, water transmission systems, sewerage networks, and public space development.
              </TimelineItem>
              <TimelineItem title="Major Institutional Projects">
                Ellin implements major projects for municipalities, public institutions, and private sector clients, strengthening its position within Iraq&apos;s contracting sector.
              </TimelineItem>
              <TimelineItem title="Today — A Recognized Contractor">
                Ellin is recognized as a reliable contractor known for engineering competence, structured execution, and long-term sustainability.
              </TimelineItem>
            </Timeline>
          </Reveal>
        </div>
      </section>

      {/* VISION & MISSION */}
      <VisionSection>
        <VisionCard icon="/assets/icons/ic_target.svg" title="Our Vision">
          <VisionText>
            Ellin Company strives to be a leader in the construction industry by delivering exceptional workmanship and outstanding customer service. We are committed to upholding the highest standards of professionalism, honesty, and fairness in all our relationships — with customers, employees, and vendors.
          </VisionText>
          <VisionText>
            To ensure quality assurance, our team strictly adheres to the general specifications of Iraqi contracts, UN contracts, NGO contracts, and FIDIC standards, aligning with the specific requirements of each project. Through this commitment, we aim to build a lasting reputation for reliability, integrity, and superior craftsmanship.
          </VisionText>
        </VisionCard>
        <VisionCard icon="/assets/icons/ic_flag.svg" title="Our Mission">
          <VisionText>
            Our mission is to deliver high-quality, efficient, and safe construction solutions that drive progress and innovation in Iraq&apos;s contracting industry — managed entirely by the local workforce and utilizing high-quality, internationally recognized products.
          </VisionText>
          <VisionText>
            Safety remains our top priority at every stage of the contracting process. Ellin Company provides comprehensive construction management, supervision, labor, materials, equipment, transportation, and all necessary resources to ensure successful project completion.
          </VisionText>
        </VisionCard>
      </VisionSection>

      {/* APPROACH */}
      <section className="bg-surface-soft py-17 md:py-26">
        <div className="wrap grid grid-cols-1 items-start gap-9 md:grid-cols-[0.9fr_1.1fr] md:gap-[60px]">
          <Reveal as="img" variant="wipe" src="/assets/img/approach.jpg" alt="Ellin Company site work" className="rounded-lg shadow-brand md:sticky md:top-[110px]" />
          <Reveal as="div">
            <Eyebrow>How We Work</Eyebrow>
            <h2 className="mb-2 text-[clamp(24px,3vw,32px)]">Company Approach</h2>
            <p className="mb-5 text-[15px] text-ink-soft">
              Every project is managed through a structured, disciplined methodology designed to ensure quality, efficiency, and reliability.
            </p>
            <div>
              <ApproachStep index="1" title="Comprehensive Methodology">
                Combines rigorous analysis, creative problem-solving, and collaborative teamwork.
              </ApproachStep>
              <ApproachStep index="2" title="Client-Centric Processes">
                Begins with a deep understanding of clients&apos; needs, followed by meticulous planning and precision execution.
              </ApproachStep>
              <ApproachStep index="3" title="Commitment to Innovation">
                Continuously integrates the latest technologies and industry best practices.
              </ApproachStep>
              <ApproachStep index="4" title="Quality Assurance">
                Stringent quality control and adherence to industry standards ensure reliability and durability.
              </ApproachStep>
              <ApproachStep index="5" title="Sustainability Focus">
                Minimizes environmental impact through eco-friendly designs and sustainable practices.
              </ApproachStep>
              <ApproachStep index="6" title="Holistic Approach">
                Delivers engineering excellence while contributing positively to society and the environment.
              </ApproachStep>
            </div>
          </Reveal>
        </div>
      </section>

      <CsrSection
        eyebrow="Corporate Social Responsibility"
        title="Building responsibly, for people and the planet."
        points={[
          'We minimize environmental impact in design and execution',
          'We uphold worker safety and ethical labor practices',
          'We support education, community development & local employment',
          'We integrate sustainable engineering into every project',
        ]}
      >
        <p className="text-base text-[#d7e6ec]">
          Corporate Social Responsibility is an integral part of Ellin Company&apos;s operations. We are committed to environmental sustainability, community development, and workforce growth — integrating responsible construction practices and ethical business conduct into everything we build.
        </p>
      </CsrSection>

      <CtaStrip
        title="Want to work with a proven contractor?"
        text="Explore our services or get in touch to discuss your next project."
      >
        <CtaButton href="/en/services.html">Our Services</CtaButton>
        <CtaButton href="/en/contact.html" variant="white">Contact Us</CtaButton>
      </CtaStrip>
    </>
  );
}
