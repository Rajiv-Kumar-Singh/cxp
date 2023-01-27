// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=390, initial-scale=1',
      title: 'Codemmit',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Codemmit provides ready-to-use components, These components are built using HTML, CSS, JavaScript, React.js, or Vue.js. Codemmit provides a variety of reusable components, which are frequently used to build the user interface of web and mobile apps.' },
        {name:'google-site-verification', content:'JpNO4eERWLsDKNLsQAyJigfAIglDECBnsVKl6AiVY7M'}
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
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@400;700&display=swap',
      },
    ]
    }
  }
});