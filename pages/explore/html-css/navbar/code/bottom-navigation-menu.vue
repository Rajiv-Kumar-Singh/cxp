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
        title: 'Create Responsive Navbar With Shadow Animation',
        image: '',
        video: bottomNavigation,
        description:
          'Hello Developers, you will learn how to create bottom navigation menu using HTML, CSS and Javascript.',
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
