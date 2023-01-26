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
import bottomNavigation from '~/assets/gifs/navbars/bottom-navigation-menu.mp4';

// import code file
import codes from '~/assets/codes/HTML/Navbar/bottomNavbar.js';

export default {
  name: 'htmlBottomNavigationMenu',
  data() {
    return {
      content: {
        title: 'Create Responsive Bottom Navigation Menu',
        image: '',
        video: bottomNavigation,
        description:
          '👋 Hi there,In this post you will learn how to create bottom navigation menu using HTML, CSS and Javascript.',
        info: [
          {
            text: 'For creating the navigation menu, you can use the source code provided below in your HTML and CSS file',
          },
        ],
        youtubeVideo: '',
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
