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
import ScaleHover from '~/assets/thumbnails/scale-hover-effect.jpg';

// import code file
import codes from '~/assets/codes/scaleHover.js';

export default {
  name: 'ScaleHover',
  data() {
    return {
      content: {
        title:
          'Create Advanced Text Hover Effect Using HTML CSS and JavaScript',
        image: ScaleHover,
        video: '',
        description:
          'Hello Developers, In this blog you will learn to create an awesome advanced Text Hover Effect Using HTML, CSS and JavaScript',
        info: [
          {
            text: 'Checkout the source code below and take reference from video to create this.',
          },
        ],
        youtubeVideo: 'https://www.youtube.com/embed/D6fv9fzi6I8',
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
