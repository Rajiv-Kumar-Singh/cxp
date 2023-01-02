<template>
  <div class="code">
    <SourceCode :contentData="content" />
    <Code :codeData="codeContent" />
  </div>
</template>

<script>
import SourceCode from '~/components/SourceCode.vue';
import Code from '~/components/Code.vue';

// import thumbnails
import htmlNavbar from '~/assets/gifs/navbars/html-navbar.mp4';

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
          'Hello Developers, In this blog you will learn to create an simple navbar with animation using HTML, CSS and JavaScript',
        info: [
          {
            text: 'Checkout the source code below and take reference from video to create this.',
          },
        ],
        youtubeVideo: 'https://www.youtube.com/embed/7Udqo7dbi5U',
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
