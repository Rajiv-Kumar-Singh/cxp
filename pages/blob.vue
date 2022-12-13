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
import blob from '~/assets/thumbnails/blob.jpg';

// import code file
import codes from '~/assets/codes/blob.js';

export default {
  name: 'Blob',
  data() {
    return {
      content: {
        title: 'Create Blob Shape With Animation Using Only HTML & CSS',
        image: blob,
        description:
          'Hello Developers, In this blog you will learn to create an awesome typewriter effect using HTML, CSS and JavaScript',
        info: [
          {
            text: 'Checkout the source code below and take reference from video to create this.',
          },
        ],
        youtubeVideo: 'https://www.youtube.com/embed/AtFRzx4Dj3w',
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
