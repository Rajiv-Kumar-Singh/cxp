<template>
  <div class="code">
    <SourceCode :contentData="content" />
    <!-- <Code :codeData="codeContent" /> -->
    <AllUploads />
  </div>
</template>

<script>
import SourceCode from '~/components/SourceCode.vue';
// import Code from '~/components/Code.vue';
import AllUploads from '~/components/AllUploads.vue';

// import thumbnails
import darkPortfolio from '~/assets/thumbnails/react/portfolios/portfolio.jpg';

// import code file
import codes from '~/assets/codes/HTML/Navbar/bottomNavbar.js';

export default {
  name: 'ReactPortfolio',
  data() {
    return {
      content: {
        title: 'Create Responsive React.js Portfolio Website',
        image: darkPortfolio,
        video: '',
        description:
          'Hello Developers, This personal portfolio website is created using React.js.',
        info: [
          {
            text: 'For creating this minimalistic and creative portfolio website you can download the source code by clicking the dowload button. For understanding the source code you need to have knowledge of React.js and few packages which are been used for animations, these packages are mentioned below, you can checkout it out at the mentioned links.',
          },
          {
            text: 'I hope this project will be helpful for you and add some value into your React.js journey.',
          },
        ],
        listHeading: 'Features:',
        keyPoints: [
          {
            listItem:
              'It uses AOS library for scroll animation. For more info visit: https://github.com/michalsnik/aos',
          },
          {
            listItem:
              'For creating the 3D rotaing text sphere, it uses TagCloud package. For more info visit: https://www.npmjs.com/package/TagCloud',
          },
        ],
        projectSetup: [
          {
            step: 'Download source code file',
          },
          {
            step: 'In the main directory (outermost folder) run the command : `npm install`',
          },
          {
            step: 'To start the development server run the command: `npm start`',
          },
          {
            step: '🎉Hurray! You have successfully setup and run the project.',
          },
        ],
        youtubeVideo: 'https://www.youtube.com/embed/ftxwkYtzcv8',
        downloadButton: true,
        downloadButtonLink: '/zips/react/portfolio.rar',
      },
      codeContent: {
        htmlSyntax: true,
        htmlCode: codes.htmlCode,
        cssCode: codes.cssCode,
      },
    };
  },
  components: {
    SourceCode,
    AllUploads,
  },
};
</script>

<style lang="scss" scoped>
.code {
  position: relative;
  top: 0;
}
</style>
