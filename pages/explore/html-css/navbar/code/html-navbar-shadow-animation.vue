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
import htmlNavbarShadowAniamtion from '~/assets/gifs/navbars/navbar-shadow-animation.mp4';

// import code file
import codes from '~/assets/codes/HTML/Navbar/shadowAniNavbar.js';

export default {
  name: 'htmlNavbar',
  data() {
    return {
      content: {
        title: 'Create Responsive Navbar With Shadow Animation',
        image: '',
        video: htmlNavbarShadowAniamtion,
        description:
          'Hello Developers, you will learn how to add shadow animation below navbar using HTML and CSS only.',
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
