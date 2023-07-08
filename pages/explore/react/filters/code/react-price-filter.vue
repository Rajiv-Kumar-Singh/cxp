<template>
  <div class="code">
    <SourceCode :contentData="content" />
    <!-- <Code :codeData="codeContent" /> -->
    <AllUploads />
  </div>
</template>

<script>
// import components
import SourceCode from '~/components/SourceCode.vue';
import AllUploads from '~/components/AllUploads.vue';

// import thumbnails
import reactPriceFilter from '~/assets/thumbnails/react/filters/react-price-filter.jpg';

// import video
import reactPriceFilterVideo from '~/assets/gifs/react/filters/react-price-filter.mp4';

// import code file
import codes from '~/assets/codes/HTML/Navbar/bottomNavbar.js';

export default {
  name: 'ReactPriceFilter',
  data() {
    return {
      content: {
        title:
          'Filter product by their prices using React.js, Sass and Bootstrap',
        image: '',
        video: reactPriceFilterVideo,
        description:
          '👋Hi there, We will be creating price filter using React.js, with the help of this filter we can arrange products in "Low To High" or "High To Low" price order.',
        info: [
          {
            text: 'You can download the source code by clicking the below download button. For understanding the source code you must have some basic knowledge of React.js and SASS.',
          },
          {
            text: 'I hope this project will be helpful for you and add some value into your React.js journey. Thanks for reading.',
          },
        ],
        listHeading: 'Features:',
        keyPoints: [
          {
            listItem: 'Drop Down menu to select filter options',
          },
          {
            listItem:
              'Arrange products according to their prices. "Low To High" or "High To Low" order',
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
        youtubeVideo: 'https://www.youtube.com/embed/o2rbKpIUfsI',
        downloadButton: true,
        downloadButtonLink: '/zips/react/react-price-filter.rar',
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
