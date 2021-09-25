// const footnote = require('markdown-it-footnote');
const wikilinks = require('markdown-it-wikilinks');
const attrs = require('markdown-it-attrs');

const hyphenateRE = /\s/g;
function hyphenate(str) {
  return str.replace(hyphenateRE, '-').toLowerCase();
}
/** @type {import('vitepress').UserConfig} */
module.exports = {
  title: 'Transition Component for Astro floks .',
  description: "A flexible transition, for dev working with astro to make web more closer than ever .",
  lang: 'en-US',
  head: [
    ['meta', { name: 'author', content: 'XSukhpreet' }],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/logo.svg',
        sizes: 'any',
      },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/logo.svg',
        color: '#000000',
      },
    ],
    ['meta', { property: 'og:site_name', content: "TR Component" }],
    ['meta', { property: 'orbit:color', content: 'green' }],
    // ['link', { rel: 'canonical', href: '' }],
    // [
    //   'script',
    //   { type: 'module', src: 'https://js.withorbit.com/orbit-web-component.js', async: true },
    // ],
  ],
  themeConfig: {
     nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: 'Config Reference',
        link: '/config/basics',
        activeMatch: '^/config/'
      },
      {
        text: 'Release Notes',
        link: 'https://github.com/vuejs/vitepress/releases'
      }
    ],
  },
  markdown: {
    config(app) {
      //app.use(footnote);
      app.use(attrs);
      app.use(
        wikilinks({
          baseURL: '/docs/',
          generatePageNameFromLabel: hyphenate,
        })
      );
    },
    anchor: {
      permalink: false,
    },
  },
  vueOptions: {
    template: {
      // compilerOptions: {
      //   isCustomElement: (tag) => tag.startsWith('orbit-'),
      // },
    },
  },
};
