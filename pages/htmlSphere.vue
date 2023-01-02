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
import threeDSphere from '~/assets/thumbnails/html-text-sphere.jpg';

// import code file
import codes from '~/assets/codes/htmlSphere.js';

export default {
  name: 'HtmlSphere',
  data() {
    return {
      content: {
        title:
          'Create 3D Rotating Text Sphere Using HTML, CSS, JavaScript and TagCloud.js',
        image: threeDSphere,
        video: '',
        description:
          'Hello Developers, In this blog you will learn to create this awesome 3D rotating text sphere using HTML, CSS, JavaScript and a package named TagCloud.js.',
        info: [
          {
            text: 'Checkout the source code below and take reference from video to create this rotating text cloud.',
          },
          {
            text: 'Checkout TagCloud.js Here : https://www.npmjs.com/package/TagCloud',
          },
        ],
        youtubeVideo: 'https://www.youtube.com/embed/Y4Jl1Ql9qFI',
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
