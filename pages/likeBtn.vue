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
import ScaleHover from '~/assets/thumbnails/like-btn.jpg';

// import code file
import codes from '~/assets/codes/likeBtn.js';

export default {
  name: 'LikeBtn',
  data() {
    return {
      content: {
        title: 'Create Like Button Using HTML, CSS and JavaScript',
        image: ScaleHover,
        description:
          'Hello Developers, In this blog you will learn to create an Like button, which when clicked it becomes red and if clicked again its color become grey',
        info: [
          {
            text: 'Checkout the source code below and take reference from video to create this.',
          },
        ],
        youtubeVideo: 'https://www.youtube.com/embed/1AE3qtKA79w',
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
