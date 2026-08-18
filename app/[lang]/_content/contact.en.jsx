import ContactForm from '../../../components/ContactForm';
import { Field, FieldRow } from '../../../components/FormField';
import {
  Button,
  ContactInfo,
  Eyebrow,
  FeatureGrid,
  FeatureItem,
  HoursCard,
  PageHeader,
  Reveal,
  SectionHead,
} from '../../../components/sections';

export default function ContactEn() {
  return (
    <>
      <PageHeader
        bgImage="/assets/img/ov3.jpg"
        homeHref="/en/"
        homeLabel="Home"
        crumb="Contact"
        title="Let's discuss your project."
        tight
      >
        Reach out to our team for partnership inquiries, tenders, or project consultations.
      </PageHeader>

      {/* CONTACT */}
      <section className="py-17 md:py-26">
        <div className="wrap grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <Reveal as="div">
            <Eyebrow>Get In Touch</Eyebrow>
            <h2 className="mb-[18px] text-[clamp(26px,3.4vw,36px)]">We&apos;d love to hear from you.</h2>
            <p className="mb-[30px] text-[15.5px] text-ink-soft">
              Whether you&apos;re planning a construction project, exploring a partnership, or bidding on a tender, our team typically responds within one business day.
            </p>

            <ContactInfo icon="/assets/icons/ic_pin.svg" label="Headquarters" value="Azadi Building, Azadi Park Road, Sulaymaniyah, Iraq" />
            <ContactInfo icon="/assets/icons/ic_mail.svg" label="Email" value="info@ellincompany.com" />
            <ContactInfo icon="/assets/icons/ic_phone.svg" label="Phone" value="+964 770 154 1677" />

            <HoursCard
              title="Office Hours"
              rows={[
                { days: 'Saturday – Wednesday', hours: '8:00 AM – 4:00 PM' },
                { days: 'Thursday', hours: '8:00 AM – 1:00 PM' },
                { days: 'Friday', hours: 'Closed' },
              ]}
            />
          </Reveal>

          <ContactForm alertMessage="Thanks for reaching out! This form isn't accepting submissions yet — please email info@ellincompany.com or call +964 770 154 1677 and our team will help right away.">
            <FieldRow>
              <Field id="cf-name" label="Full Name" type="text" placeholder="Your name" required />
              <Field id="cf-email" label="Email Address" type="email" placeholder="you@example.com" required />
            </FieldRow>
            <FieldRow>
              <Field id="cf-phone" label="Phone Number" type="text" placeholder="+964" />
              <Field id="cf-subject" label="Subject" type="text" placeholder="How can we help?" />
            </FieldRow>
            <Field id="cf-message" label="Message" textarea placeholder="Tell us about your project..." required />
            <Button type="submit" className="mt-1 w-full">Send Message</Button>
          </ContactForm>
        </div>
      </section>

      {/* LOCATION STRIP */}
      <section className="bg-surface-soft py-13 md:py-19">
        <div className="wrap">
          <SectionHead eyebrow="Visit Us" title="Find Our Headquarters">
            Azadi Building, Azadi Park Road, Sulaymaniyah, Iraq
          </SectionHead>
          <FeatureGrid>
            <FeatureItem icon="/assets/icons/ic_pin.svg" title="Headquarters">
              Azadi Building, Azadi Park Road, Sulaymaniyah, Iraq
            </FeatureItem>
            <FeatureItem icon="/assets/icons/ic_mail.svg" title="Email Us">
              info@ellincompany.com
            </FeatureItem>
            <FeatureItem icon="/assets/icons/ic_phone.svg" title="Call Us">
              +964 770 154 1677
            </FeatureItem>
            <FeatureItem icon="/assets/icons/ic_target_blue.svg" title="Service Area">
              Iraq &amp; the Kurdistan Region
            </FeatureItem>
          </FeatureGrid>
        </div>
      </section>
    </>
  );
}
