<template>
  <div class="source-code">
    <div class="source-code__container">
      <h1 class="source-code__title">
        <span>{{ contentData.title }}</span>
      </h1>
      <div class="source-code__image">
        <img :src="`${contentData.image}`" alt="thumbnail" />
      </div>
      <div class="source-code__intro-text">
        <span> {{ contentData.description }}</span>
        <br />
        <p v-for="(texts, index) in contentData.info" :key="index">
          {{ texts.text }}
        </p>
      </div>

      <div class="source-code__tutorial-box">
        <h1><span>Watch Tutorial</span></h1>
        <iframe
          width="560"
          height="315"
          :src="`${contentData.youtubeVideo}`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <!-- <div class="source-code__code">
        <Code />
      </div> -->
    </div>
  </div>
</template>

<script>
// importing thumbnails
// import reactShpere from "../assets/thumbnails/3d-react-sphere.jpg";

import Code from "~/components/Code.vue";
export default {
  name: "SourceCode",
  components: {
    Code,
  },
  props: {
    contentData: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
.source-code {
  position: relative;
  top: 0;

  &__container {
    position: relative;
    top: 0;
    width: 60vw;
    height: 100%;
    // border: 2px solid red;
    color: #ffffff;
    padding: 2em 2%;
  }

  &__title {
    font-family: "Righteous", cursive;
    font-size: 1.5em;
    font-weight: 400;
    span {
      background: linear-gradient(to right, #d90ae8, #e96443) padding-box,
        linear-gradient(to right, #e96443, #904e95) border-box;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  &__image {
    position: relative;
    top: 0;
    margin: 1.5em 0;
    width: 100%;
    // display: flex;
    // justify-content: center;
    // align-items: center;

    img {
      width: 65%;
      height: auto;
      border-radius: 0.5em;
    }
  }

  &__intro-text {
    font-size: 1.12em;
    font-family: "Nunito", sans-serif;
    font-weight: 200;
    p {
      margin-top: 0.5em;
    }
  }

  &__tutorial-box {
    position: relative;
    top: 0;
    margin-top: 3em;

    h1 {
      margin-bottom: 0.5em;
      span {
        font-family: "Righteous", cursive;
        font-size: 1em;
        font-weight: 400;
        background: linear-gradient(to right, #d90ae8, #e96443) padding-box,
          linear-gradient(to right, #e96443, #904e95) border-box;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    iframe {
      border-radius: 0.5em;
    }
  }
}
</style>
