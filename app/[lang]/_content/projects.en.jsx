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

export default function ProjectsEn() {
  return (
    <>
      <PageHeader
        bgImage="/assets/img/hospital_ext.jpg"
        homeHref="/en/"
        homeLabel="Home"
        crumb="Projects"
        title="Accomplished projects across Iraq."
      >
        Major construction and infrastructure projects demonstrating strong technical capability, structured project management, and commitment to quality and safety.
      </PageHeader>

      {/* FEATURED: BAXSHIN HOSPITAL */}
      <section className="py-17 md:py-26">
        <div className="wrap">
          <ProjectFeature
            image="/assets/img/hospital_ext.jpg"
            tag="Flagship Project · Healthcare"
            title="Baxshin Private General Hospital"
            stats={[
              { value: '100 beds', label: 'Capacity' },
              { value: '9,850 m²', label: 'Total Area' },
              { value: '9 floors', label: 'Structure' },
              { value: '25.5B IQD', label: 'Total Budget' },
            ]}
          >
            A major healthcare investment project in Sulaymaniyah — one of the largest hospitals in the city and in Iraq, designed and executed entirely by Ellin Company. Located south of Sulaymaniyah, it houses all departments of an advanced hospital across 9 floors, with a 40% landscaped area complemented by an underground garage.
          </ProjectFeature>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ProjectCard thumb="/assets/img/hospital_atrium.jpg" tag="Interior" title="Hospital Atrium & Landscape">
              Naturally lit interior courtyard integrated within the hospital&apos;s landscaped ground floor.
            </ProjectCard>
            <ProjectCard thumb="/assets/img/hospital_lobby.jpg" tag="Interior" title="Main Lobby & Circulation">
              Advanced modern interior design across the hospital&apos;s primary circulation spaces.
            </ProjectCard>
          </div>
        </div>
      </section>

      {/* OTHER PROJECTS */}
      <section className="bg-surface-soft py-17 md:py-26">
        <div className="wrap">
          <SectionHead eyebrow="More of Our Work" title="Infrastructure & Public Works" align="left" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ProjectCard
              thumb="/assets/img/water.jpg"
              tag="Water Networks"
              title="Water Transmission Networks"
              meta={{ period: '2006 – 2024', value: '22.78B IQD' }}
            >
              Nearly 145 km of drinking water transmission lines, pump stations, and reservoirs across Sulaymaniyah, Ranya, Qaladze, Arbat, and Halabja. Delivered water to thousands of new households under the supervision of the Water Directorate.
            </ProjectCard>
            <ProjectCard
              thumb="/assets/img/sewerage.jpg"
              tag="Sewerage"
              title="Sewerage Box & Network Projects"
              meta={{ period: '2006 – 2024', value: '13.25B IQD' }}
            >
              Implementation of sewerage systems and box sewers across multiple cities and neighborhoods, renovating old networks and laying new ones for municipalities.
            </ProjectCard>
            <ProjectCard
              thumb="/assets/img/complementary.jpg"
              tag="Urban Infrastructure"
              title="Complementary Urban Projects"
              meta={{ period: '2007 – 2022', value: '11.67B IQD' }}
            >
              Roads, sidewalks, and water/sewerage extensions across 9 projects in Sulaymaniyah, Ranya, and Halabja, benefiting hundreds of households.
            </ProjectCard>
            <ProjectCard
              thumb="/assets/img/garden.jpg"
              tag="Public Space"
              title="Setwan Public Garden"
              meta={{ period: '2013 – 2014', value: '536M IQD' }}
            >
              A public green space project for Sulaymaniyah Municipality in the Kaniba neighborhood, with irrigation, sidewalks, and a children&apos;s play area.
            </ProjectCard>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-17 md:py-26">
        <div className="wrap grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
          <Reveal as="div">
            <img src="/assets/img/iraq_map.png" alt="Ellin Company project locations across Iraq" className="max-w-full" />
          </Reveal>
          <Reveal as="div">
            <Eyebrow>Where We Work</Eyebrow>
            <h2 className="mb-2 text-[clamp(24px,3vw,32px)]">Project Locations</h2>
            <p className="mb-5 text-[15px] text-ink-soft">
              Ellin Company operates across key cities in Iraq and the Kurdistan Region, delivering large-scale infrastructure and construction projects under diverse geographic and technical conditions.
            </p>
            <LocationLegend
              items={[
                { type: 'hq', label: 'Headquarters' },
                { type: 'branch', label: 'Branch' },
                { type: 'project', label: 'Project' },
              ]}
            />
            <CityTags cities={['Sulaymaniyah', 'Erbil', 'Baghdad', 'Halabja', 'Qaladizay', 'Kalar']} />
          </Reveal>
        </div>
      </section>

      <CtaStrip
        title="Ready to start your project?"
        text="Let's discuss how Ellin Company can bring engineering excellence to your next build."
      >
        <CtaButton href="/en/contact.html">Contact Our Team</CtaButton>
      </CtaStrip>
    </>
  );
}
