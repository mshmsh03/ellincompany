export const LANGS = ['en', 'ar', 'ku'];
export const PAGES = ['index', 'about', 'services', 'projects', 'contact'];

export const SITE = {
  en: {
    dir: 'ltr',
    langName: 'EN',
    ogLocale: 'en_US',
    hreflang: 'en',
    brandAlt: 'Ellin Company',
    footerLogoAlt: 'Ellin logo',
    burgerLabel: 'Menu',
    nav: {
      index: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact Us',
    },
    footerNavHeading: 'Navigate',
    footerNav: {
      index: 'Home',
      about: 'About Us',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
    },
    tagline: 'Ellin Company for General Contracting & Trading Ltd. — a Grade (1) Iraqi contractor delivering infrastructure since 2006.',
    contactHeading: 'Contact',
    address: 'Azadi Building, Azadi Park Road, Sulaymaniyah, Iraq',
    phoneDisplay: '+964 770 154 1677',
    copyright: 'Ellin Company for General Contracting & Trading Ltd. All rights reserved.',
    cityLine: 'Sulaymaniyah, Iraq',
  },
  ar: {
    dir: 'rtl',
    langName: 'عربي',
    ogLocale: 'ar_IQ',
    hreflang: 'ar',
    brandAlt: 'شركة إيلين',
    footerLogoAlt: 'شعار إيلين',
    burgerLabel: 'القائمة',
    nav: {
      index: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      projects: 'مشاريعنا',
      contact: 'اتصل بنا',
    },
    footerNavHeading: 'روابط',
    footerNav: {
      index: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      projects: 'مشاريعنا',
      contact: 'اتصل بنا',
    },
    tagline: 'شركة إيلين للمقاولات العامة والتجارة المحدودة — شركة عراقية من الدرجة (1) تنفذ مشاريع البنية التحتية منذ عام 2006.',
    contactHeading: 'تواصل معنا',
    address: 'مبنى آزادي، طريق حديقة آزادي، السليمانية، العراق',
    phoneDisplay: '1677 154 770 964+',
    copyright: 'شركة إيلين للمقاولات العامة والتجارة المحدودة. جميع الحقوق محفوظة.',
    cityLine: 'السليمانية، العراق',
  },
  ku: {
    dir: 'rtl',
    langName: 'کوردی',
    ogLocale: 'ckb_IQ',
    hreflang: 'ckb',
    brandAlt: 'کۆمپانیای ئێلین',
    footerLogoAlt: 'لۆگۆی ئێلین',
    burgerLabel: 'پێڕست',
    nav: {
      index: 'ماڵەوە',
      about: 'دەربارەمان',
      services: 'خزمەتگوزارییەکان',
      projects: 'پرۆژەکان',
      contact: 'پەیوەندیمان پێوە بکە',
    },
    footerNavHeading: 'ڕێنیشاندەر',
    footerNav: {
      index: 'ماڵەوە',
      about: 'دەربارەمان',
      services: 'خزمەتگوزارییەکان',
      projects: 'پرۆژەکان',
      contact: 'پەیوەندیمان پێوە بکە',
    },
    tagline: 'کۆمپانیای ئێلین بۆ پیمانکاری گشتی و بازرگانی — کۆمپانیایەکی عێراقی پلە (1) کە لە ساڵی 2006ەوە پرۆژەی ژێرخان جێبەجێ دەکات.',
    contactHeading: 'پەیوەندی',
    address: 'بینای ئازادی، شەقامی پارکی ئازادی، سلێمانی، عێراق',
    phoneDisplay: '1677 154 770 964+',
    copyright: 'کۆمپانیای ئێلین بۆ پیمانکاری گشتی و بازرگانی. هەموو مافەکان پارێزراون.',
    cityLine: 'سلێمانی، عێراق',
  },
};

export const PHONE_HREF = 'tel:+9647701541677';
export const EMAIL = 'info@ellincompany.com';

// Root-relative internal link path for a given language/page pair.
export function pagePath(lang, page) {
  return page === 'index' ? `/${lang}/` : `/${lang}/${page}.html`;
}

// Per-page <title>/<meta description> text, extracted verbatim from the
// previous static/EJS build so search-indexed titles don't change.
export const PAGE_META = {
  en: {
    index: {
      title: 'Ellin Company | General Contracting & Trading, Sulaymaniyah, Iraq',
      description: 'Ellin Company for General Contracting & Trading Ltd. — Grade (1) Iraqi contractor delivering construction, water, sewerage, and infrastructure projects since 2006.',
    },
    about: {
      title: 'About Us | Ellin Company',
      description: 'Learn about Ellin Company — a Grade (1) Iraqi general contracting firm established in 2006, our history, vision, mission, and approach.',
    },
    services: {
      title: 'Services | Ellin Company',
      description: "Explore Ellin Company's core services: construction, water networks, sewerage, oil & gas support, agriculture, real estate, and more.",
    },
    projects: {
      title: 'Projects | Ellin Company',
      description: "Explore Ellin Company's accomplished projects: Baxshin Private Hospital, water transmission networks, sewerage systems, and public infrastructure across Iraq.",
    },
    contact: {
      title: 'Contact Us | Ellin Company',
      description: 'Get in touch with Ellin Company for General Contracting & Trading Ltd. in Sulaymaniyah, Iraq. Reach out for partnership inquiries, tenders, or project consultations.',
    },
  },
  ar: {
    index: {
      title: 'شركة إيلين | مقاولات عامة وتجارة، السليمانية، العراق',
      description: 'شركة إيلين للمقاولات العامة والتجارة المحدودة — شركة عراقية من الدرجة الأولى تنفذ مشاريع البناء والمياه والمجاري والبنية التحتية منذ عام 2006.',
    },
    about: {
      title: 'من نحن | شركة إيلين',
      description: 'تعرف على شركة إيلين — شركة عراقية من الدرجة الأولى للمقاولات العامة تأسست عام 2006، تاريخنا ورؤيتنا ورسالتنا ومنهجيتنا.',
    },
    services: {
      title: 'خدماتنا | شركة إيلين',
      description: 'اكتشف خدمات شركة إيلين الأساسية: الإنشاءات، شبكات المياه، الصرف الصحي، دعم النفط والغاز، الزراعة، العقارات، وغيرها.',
    },
    projects: {
      title: 'مشاريعنا | شركة إيلين',
      description: 'اكتشف مشاريع شركة إيلين المنجزة: مستشفى بەخشین الأهلي، شبكات نقل المياه، أنظمة الصرف الصحي، والبنية التحتية العامة في جميع أنحاء العراق.',
    },
    contact: {
      title: 'اتصل بنا | شركة إيلين',
      description: 'تواصل مع شركة إيلين للمقاولات العامة والتجارة المحدودة في السليمانية، العراق. للاستفسارات والشراكات والعطاءات واستشارات المشاريع.',
    },
  },
  ku: {
    index: {
      title: 'کۆمپانیای ئێلین | پیمانکاری گشتی و بازرگانی، سلێمانی، عێراق',
      description: 'کۆمپانیای ئێلین بۆ پیمانکاری گشتی و بازرگانی — کۆمپانیایەکی عێراقی پلە یەکەم کە لە ساڵی 2006ەوە پرۆژەی بیناسازی، ئاو، فاضلاب و ژێرخان جێبەجێ دەکات.',
    },
    about: {
      title: 'دەربارەمان | کۆمپانیای ئێلین',
      description: 'زیاتر بزانە دەربارەی کۆمپانیای ئێلین — کۆمپانیایەکی عێراقی پلە یەکەم بۆ پیمانکاری گشتی، دامەزراوی ساڵی 2006، مێژوو، ئاوات، ئەرک و شێوازی کارمان.',
    },
    services: {
      title: 'خزمەتگوزارییەکان | کۆمپانیای ئێلین',
      description: 'خزمەتگوزاریە سەرەکییەکانی کۆمپانیای ئێلین بزانە: بیناسازی، تۆڕی ئاو، فاضلاب، پشتگیری نەوت و گاز، کشتوکاڵ، خانووبەرە و زیاتر.',
    },
    projects: {
      title: 'پرۆژەکان | کۆمپانیای ئێلین',
      description: 'پرۆژە تەواوکراوەکانی کۆمپانیای ئێلین بزانە: نەخۆشخانەی تایبەتی بەخشین، تۆڕی گواستنەوەی ئاو، سیستەمی فاضلاب و ژێرخانی گشتی لە سەرانسەری عێراق.',
    },
    contact: {
      title: 'پەیوەندیمان پێوە بکە | کۆمپانیای ئێلین',
      description: 'پەیوەندی بکە بە کۆمپانیای ئێلین بۆ پیمانکاری گشتی و بازرگانی لە سلێمانی، عێراق. بۆ هاوبەشی، ئۆفەر و ڕاوێژکاری پرۆژە.',
    },
  },
};
