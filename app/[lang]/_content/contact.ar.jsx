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

export default function ContactAr() {
  return (
    <>
      <PageHeader
        bgImage="/assets/img/ov3.jpg"
        homeHref="/ar/"
        homeLabel="الرئيسية"
        crumb="اتصل بنا"
        title="لنتحدث عن مشروعك."
        tight
      >
        تواصل مع فريقنا للاستفسارات المتعلقة بالشراكات أو العطاءات أو استشارات المشاريع.
      </PageHeader>

      {/* CONTACT */}
      <section className="py-17 md:py-26">
        <div className="wrap grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <Reveal as="div">
            <Eyebrow>تواصل معنا</Eyebrow>
            <h2 className="mb-[18px] text-[clamp(26px,3.4vw,36px)]">يسعدنا التواصل معك.</h2>
            <p className="mb-[30px] text-[15.5px] text-ink-soft">
              سواء كنت تخطط لمشروع إنشائي، أو تستكشف شراكة، أو تتقدم بعطاء، يستجيب فريقنا عادةً خلال يوم عمل واحد.
            </p>

            <ContactInfo icon="/assets/icons/ic_pin.svg" label="المقر الرئيسي" value="مبنى آزادي، طريق حديقة آزادي، السليمانية، العراق" />
            <ContactInfo icon="/assets/icons/ic_mail.svg" label="البريد الإلكتروني" value="info@ellincompany.com" />
            <ContactInfo icon="/assets/icons/ic_phone.svg" label="الهاتف" value="1677 154 770 964+" />

            <HoursCard
              title="ساعات الدوام"
              rows={[
                { days: 'السبت – الأربعاء', hours: '8:00 صباحاً – 4:00 مساءً' },
                { days: 'الخميس', hours: '8:00 صباحاً – 1:00 ظهراً' },
                { days: 'الجمعة', hours: 'مغلق' },
              ]}
            />
          </Reveal>

          <ContactForm alertMessage="شكراً لتواصلكم معنا! هذا النموذج لا يستقبل الرسائل حالياً — يرجى مراسلتنا عبر info@ellincompany.com أو الاتصال على +964 770 154 1677 وسيتواصل فريقنا معكم فوراً.">
            <FieldRow>
              <Field id="cf-name" label="الاسم الكامل" type="text" placeholder="اسمك" required />
              <Field id="cf-email" label="البريد الإلكتروني" type="email" placeholder="you@example.com" required />
            </FieldRow>
            <FieldRow>
              <Field id="cf-phone" label="رقم الهاتف" type="text" placeholder="964+" />
              <Field id="cf-subject" label="الموضوع" type="text" placeholder="كيف يمكننا مساعدتك؟" />
            </FieldRow>
            <Field id="cf-message" label="الرسالة" textarea placeholder="أخبرنا عن مشروعك..." required />
            <Button type="submit" className="mt-1 w-full">إرسال الرسالة</Button>
          </ContactForm>
        </div>
      </section>

      {/* LOCATION STRIP */}
      <section className="bg-surface-soft py-13 md:py-19">
        <div className="wrap">
          <SectionHead eyebrow="زُرنا" title="موقع المقر الرئيسي">
            مبنى آزادي، طريق حديقة آزادي، السليمانية، العراق
          </SectionHead>
          <FeatureGrid>
            <FeatureItem icon="/assets/icons/ic_pin.svg" title="المقر الرئيسي">
              مبنى آزادي، طريق حديقة آزادي، السليمانية، العراق
            </FeatureItem>
            <FeatureItem icon="/assets/icons/ic_mail.svg" title="راسلنا">
              info@ellincompany.com
            </FeatureItem>
            <FeatureItem icon="/assets/icons/ic_phone.svg" title="اتصل بنا">
              1677 154 770 964+
            </FeatureItem>
            <FeatureItem icon="/assets/icons/ic_target_blue.svg" title="نطاق الخدمة">
              العراق وإقليم كوردستان
            </FeatureItem>
          </FeatureGrid>
        </div>
      </section>
    </>
  );
}
