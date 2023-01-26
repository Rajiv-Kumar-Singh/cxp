<template>
  <div class="code">
    <SourceCode :contentData="content" />
    <Code :codeData="codeContent" />
  </div>
</template>

<script>
import SourceCode from '../components/SourceCode.vue';
import Code from '~/components/Code.vue';

// import thumbnails
import gradientButton from '~/assets/thumbnails/gradient-button.jpg';

// import code file
import codes from '~/assets/codes/gradientButtons.js';

export default {
  name: 'ReactSphere',
  data() {
    return {
      content: {
        title:
          'Create CSS Gradient Buttons with Hover Effects Using HTML and CSS.',
        image: gradientButton,
        video: '',
        description:
          '👋 Hi there, In this post we will be creating 3 gradient button with hover effect using HTML and CSS only',
        info: [
          {
            text: 'Checkout the source code below and take reference from video to create this',
          },
        ],
        youtubeVideo: 'https://www.youtube.com/embed/o5uV7fxh9To',
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
