const LANGS = ['en', 'ar', 'ku'];
const PAGES = ['index', 'about', 'services', 'projects', 'contact'];

const SITE = {
  en: {
    dir: 'ltr',
    langName: 'EN',
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

const PHONE_HREF = 'tel:+9647701541677';
const EMAIL = 'info@ellincompany.com';

module.exports = { LANGS, PAGES, SITE, PHONE_HREF, EMAIL };
