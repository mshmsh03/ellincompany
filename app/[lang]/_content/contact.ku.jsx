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

export default function ContactKu() {
  return (
    <>
      <PageHeader
        bgImage="/assets/img/ov3.jpg"
        homeHref="/ku/"
        homeLabel="ماڵەوە"
        crumb="پەیوەندیمان پێوە بکە"
        title="با گفتوگۆ لەسەر پرۆژەکەت بکەین."
        tight
      >
        پەیوەندی بە تیمەکەمانەوە بکە بۆ هاوبەشی، ئۆفەر یان ڕاوێژکاری پرۆژە.
      </PageHeader>

      {/* CONTACT */}
      <section className="py-17 md:py-26">
        <div className="wrap grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <Reveal as="div">
            <Eyebrow>پەیوەندیمان پێوە بکە</Eyebrow>
            <h2 className="mb-[18px] text-[clamp(26px,3.4vw,36px)]">دڵخۆشین بۆ بیستنی دەنگت.</h2>
            <p className="mb-[30px] text-[15.5px] text-ink-soft">
              ئەگەر پلانت بۆ پرۆژەیەکی بیناسازی هەیە، یان بەدوای هاوبەشیدا دەگەڕێیت، یان ئۆفەرێک پێشکەش دەکەیت، تیمەکەمان بەگشتی لە ماوەی ڕۆژێکی کاردا وەڵام دەداتەوە.
            </p>

            <ContactInfo icon="/assets/icons/ic_pin.svg" label="بنکەی سەرەکی" value="بینای ئازادی، شەقامی پارکی ئازادی، سلێمانی، عێراق" />
            <ContactInfo icon="/assets/icons/ic_mail.svg" label="ئیمەیل" value="info@ellincompany.com" />
            <ContactInfo icon="/assets/icons/ic_phone.svg" label="مۆبایل" value="1677 154 770 964+" />

            <HoursCard
              title="کاتی کارکردن"
              rows={[
                { days: 'شەممە – چوارشەممە', hours: '8:00 بەیانی – 4:00 ئێوارە' },
                { days: 'پێنجشەممە', hours: '8:00 بەیانی – 1:00 نیوەڕۆ' },
                { days: 'هەینی', hours: 'داخراوە' },
              ]}
            />
          </Reveal>

          <ContactForm alertMessage="سوپاس بۆ پەیوەندیکردنتان! ئەم فۆرمە هێشتا پەیامەکان وەرناگرێت — تکایە پەیوەندیمان پێوە بکەن لە ڕێگەی info@ellincompany.com یان ژمارە +964 770 154 1677 و تیمەکەمان زوو یارمەتیتان دەدات.">
            <FieldRow>
              <Field id="cf-name" label="ناوی تەواو" type="text" placeholder="ناوت" required />
              <Field id="cf-email" label="ئیمەیل" type="email" placeholder="you@example.com" required />
            </FieldRow>
            <FieldRow>
              <Field id="cf-phone" label="ژمارەی مۆبایل" type="text" placeholder="964+" />
              <Field id="cf-subject" label="بابەت" type="text" placeholder="چۆن یارمەتیت بدەین؟" />
            </FieldRow>
            <Field id="cf-message" label="پەیام" textarea placeholder="دەربارەی پرۆژەکەت پێمان بڵێ..." required />
            <Button type="submit" className="mt-1 w-full">پەیام بنێرە</Button>
          </ContactForm>
        </div>
      </section>

      {/* LOCATION STRIP */}
      <section className="bg-surface-soft py-13 md:py-19">
        <div className="wrap">
          <SectionHead eyebrow="سەردانمان بکە" title="شوێنی بنکەی سەرەکیمان بدۆزەرەوە">
            بینای ئازادی، شەقامی پارکی ئازادی، سلێمانی، عێراق
          </SectionHead>
          <FeatureGrid>
            <FeatureItem icon="/assets/icons/ic_pin.svg" title="بنکەی سەرەکی">
              بینای ئازادی، شەقامی پارکی ئازادی، سلێمانی، عێراق
            </FeatureItem>
            <FeatureItem icon="/assets/icons/ic_mail.svg" title="ئیمەیلمان بۆ بنێرە">
              info@ellincompany.com
            </FeatureItem>
            <FeatureItem icon="/assets/icons/ic_phone.svg" title="پەیوەندیمان پێوە بکە">
              1677 154 770 964+
            </FeatureItem>
            <FeatureItem icon="/assets/icons/ic_target_blue.svg" title="ناوچەی خزمەتگوزاری">
              عێراق و هەرێمی کوردستان
            </FeatureItem>
          </FeatureGrid>
        </div>
      </section>
    </>
  );
}
