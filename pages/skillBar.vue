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
import SkillBar from '~/assets/thumbnails/skill-bar.jpg';

// import code file
import codes from '~/assets/codes/skillBar.js';

export default {
  name: 'SkillBar',
  data() {
    return {
      content: {
        title: 'Animate Skill Bar On Scroll Using HTML, CSS and JavaScript',
        image: SkillBar,
        video: '',
        description:
          '👋 Hi there, In this post we will be adding scroll animtion to skill bar using aos library',
        info: [
          {
            text: 'Checkout the source code below and take reference from video to create this.',
          },
        ],
        youtubeVideo: 'https://www.youtube.com/embed/azIXOvg0b_U',
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
