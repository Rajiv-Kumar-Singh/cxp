// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=390, initial-scale=1',
      title: 'Codemmit | coding blogs',
      meta: [
        { property: 'og:description', content: 'Codemmit is an coding blog website which provide free source code and templates for web and app developement.' },
        // { property: 'og:image', content: 'https://dyst2.netlify.app/_nuxt/arbitrum.42604ba3.png' }
      ],
      link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: ""
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,500&family=Righteous&family=Teko:wght@300;400;500;600;700&display=swap',
      },
    ]
    }
  }
});

