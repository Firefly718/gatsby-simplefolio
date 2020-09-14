import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bohdan | Front-End Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Bohdan',
  subtitle: "I'm the Front-End Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'lightSmile.png',
  paragraphOne:
    "I'm a Front-End Developer and I like to create landing-pages, SPA and other web-products with next tools:",
  paragraphTwo:
    'HTML5 / CSS3 / JavaScript / BEM / Sass / jQuery / Bootstrap / Foundation / WordPress / Shopify / Git / npm / Gulp / VScode / Vue.JS.',
  paragraphThree: 'I like to get new experience and try to be better than yesterday.',
  resume: 'https://drive.google.com/file/d/1w6NrXSCgSgxSFNslWwyXh38ha3UdGAhI/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'dgp.png',
    title: 'Digital Products',
    info:
      'Simple and beautiful landing-page with Slick Sliders and interesting contact form on Google Map.',
    info2: 'Tools: HTML5 / CSS3 / JavaScript / Sass / Git / npm / Gulp.',
    url: 'https://firefly718.github.io/digital_products/',
    repo: 'https://github.com/Firefly718/digital_products', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'monticello.png',
    title: 'Monticello',
    info:
      'Simple and beautiful landing-page with interesting Slick Sliders, 360 Google Map and contact form on Google Map.',
    info2: 'Tools: HTML5 / CSS3 / JavaScript / Sass / Git / npm / Gulp.',
    url: 'https://firefly718.github.io/monticello/',
    repo: 'https://github.com/Firefly718/monticello', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'web.dev.firefly@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Firefly718',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
