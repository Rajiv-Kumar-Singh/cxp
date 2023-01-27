<template>
  <div class="code">
    <SourceCode :contentData="content" />
    <Code :codeData="codeContent" />
  </div>
</template>

<script>
import SourceCode from '~/components/SourceCode.vue';
import Code from '~/components/Code.vue';

// import video
import htmlNavbar from '~/assets/gifs/navbars/html-navbar.mp4';

// import video thumbnails
import htmlNavThumbnail from '~/assets/thumbnails/html/navbars/responsive-nav.jpg';

// import code file
import codes from '~/assets/codes/HTML/Navbar/htmlNavbar.js';

export default {
  name: 'htmlNavbar',
  data() {
    return {
      content: {
        title: 'Create Responsive Navbar With Animation',
        image: '',
        video: htmlNavbar,
        description:
          '👋 Hi there, In this blog you will learn to create an simple navbar with animation using HTML, CSS and JavaScript',
        info: [
          {
            text: 'For creating this minimalistic navigation menu, you can use the source code provided below.',
          },
          {
            text: 'JavaScript is used to add animations, which you can see inside script tag just above the closing body tag.',
          },
        ],
        youtubeVideo: '',
        videoThumbnail: htmlNavThumbnail,
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
    Code,
  },
};
</script>

<style lang="scss" scoped>
.code {
  position: relative;
  top: 0;
}
</style>
