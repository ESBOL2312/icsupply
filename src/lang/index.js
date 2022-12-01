import VueI18n from 'vue-i18n';
import mainSR from './sr/main.js';
import mainEn from './en/main.js';
import aboutSR from './sr/about.js';
import aboutEn from './en/about.js';

import navLinksSr from './sr/navLinks.js';
import navLinksEn from './en/navLinks.js';

import industriesSr from './sr/industries.js';
import industriesEn from './en/industries.js';

import productsSr from './sr/products.js';
import productsEn from './en/products.js';

import servicesSr from './sr/services.js';
import servicesEn from './en/services.js';


import Vue from 'vue';

const messages = {
  sr: {
    main: mainSR,
    about: aboutSR,
    nav: navLinksSr,
    industries:industriesSr,
    products:productsSr,
    services:servicesSr,

  },
  en: {
    main: mainEn,
    about: aboutEn,
    nav:navLinksEn,
    industries:industriesEn,
    products:productsEn,
    services:servicesEn,

  },
};

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'sr',
  messages,
  fallbackLocale: 'sr',
});

export default i18n;