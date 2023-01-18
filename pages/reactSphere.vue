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
import threeDSphere from '~/assets/thumbnails/3d-react-sphere.jpg';

// import code file
import codes from '~/assets/codes/reactTextSphere.js';

export default {
  name: 'ReactSphere',
  data() {
    return {
      content: {
        title: 'Create 3D Rotating Text Sphere Using React.js',
        image: threeDSphere,
        video: '',
        description:
          'Hello Developers, In this blog you will learn to create this awesome 3D rotating text sphere using React.js and a package named TagCloud.js.',
        info: [
          {
            text: 'Checkout the source code below and take reference from video to create this rotating text cloud.',
          },
          {
            text: 'Checkout TagCloud.js Here : https://www.npmjs.com/package/TagCloud',
          },
        ],
        downloadButton: true,
        downloadButtonLink: '/zips/react/3d-text-sphere.rar',
        youtubeVideo: 'https://www.youtube.com/embed/5jlDHSqjZcc',
      },
      codeContent: {
        htmlSyntax: false,
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
