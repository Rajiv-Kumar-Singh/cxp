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
          '👋Hi there, In this blog post you will learn to create this awesome 3D rotating text sphere using React.js and a package named TagCloud.js.',
        info: [
          {
            text: 'You can also checkout the source code below and take reference from video tutorial to create this 3D rotating text cloud.',
          },
          {
            text: 'Checkout TagCloud.js Here : https://www.npmjs.com/package/TagCloud',
          },
        ],
        projectSetup: [
          {
            step: 'Download source code file',
          },
          {
            step: 'In the main directory (outermost folder) run the command : `npm install`',
          },
          {
            step: 'To start the development server run the command: `npm start`',
          },
          {
            step: '🎉Great! You have successfully setup and run the project.',
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
