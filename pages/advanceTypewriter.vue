<template>
  <div class="code">
    <SourceCode :contentData="content" />
    <Code :codeData="codeContent" />
  </div>
</template>

<script>
import SourceCode from "../components/SourceCode.vue";
import Code from "~/components/Code.vue";

// import thumbnails
import videoControl from "~/assets/thumbnails/adv-typewriter.jpg";

// import code file
import codes from "~/assets/codes/AdvTypewriter.js";

export default {
  name: "AdvanceTypeWriter",
  data() {
    return {
      content: {
        title: "Advanced Typewriter Effect Using HTML, CSS and JavaScript",
        image: videoControl,
        description:
          "Hello Developers, In this blog you will learn to create an awesome typewriter effect using HTML, CSS and JavaScript",
        info: [
          {
            text: "Checkout the source code below and take reference from video to create this.",
          },
        ],
        youtubeVideo: "https://www.youtube.com/embed/7Udqo7dbi5U",
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
