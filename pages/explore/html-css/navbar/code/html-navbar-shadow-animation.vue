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

// import video thumbnails
import shadowAnimateNav from '~/assets/thumbnails/html/navbars/shadow-animate-navbar.jpg';

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
          '👋 Hi there, you will learn how to add shadow animation below navbar using HTML and CSS only.',
        info: [
          {
            text: 'For creating this awesome shadow animation, you can copy and paste the source code provided below in your HTML and CSS file.',
          },
        ],
        youtubeVideo: '',
        videoThumbnail: shadowAnimateNav,
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
