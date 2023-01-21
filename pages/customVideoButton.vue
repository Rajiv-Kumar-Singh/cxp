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
import videoControl from '~/assets/thumbnails/video-controls.jpg';

// import code file
import codes from '~/assets/codes/videoControls.js';

export default {
  name: 'ReactSphere',
  data() {
    return {
      content: {
        title: 'Create Custom Play/Pause button using HTML, CSS and JavaScript',
        image: videoControl,
        video: '',
        description:
          '👋 Hi there, In this blog you will learn to create custom HTML video controls (play/pause) button using HTML, CSS and JavaScript.',
        info: [
          {
            text: 'Checkout the source code below and take reference from video to create this rotating text cloud.',
          },
        ],
        youtubeVideo: 'https://www.youtube.com/embed/QSrvL8VU3fE',
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
