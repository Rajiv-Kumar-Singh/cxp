<template>
  <div class="source-code">
    <div class="source-code__container">
      <h1 class="source-code__title">
        <span>{{ contentData.title }}</span>
      </h1>
      <div class="source-code__image">
        <img
          :src="`${contentData.image}`"
          v-if="contentData.image != ''"
          alt="thumbnail"
          loading="lazy"
        />
        <div class="source-code__video-box" v-if="contentData.video != ''">
          <video :poster="`${contentData.videoThumbnail}`" autoplay loop muted>
            <source :src="`${contentData.video}`" type="video/mp4" />
          </video>
        </div>
      </div>
      <div class="source-code__intro-text">
        <span> {{ contentData.description }}</span>
        <br />
        <p v-for="(texts, index) in contentData.info" :key="index">
          {{ texts.text }}
        </p>
      </div>

      <div class="source-code__key-points" v-if="contentData.listHeading">
        <h3>{{ contentData.listHeading }}</h3>
        <ul>
          <li v-for="list in contentData.keyPoints" :key="list.listItem">
            {{ list.listItem }}
          </li>
        </ul>
      </div>

      <!-- Project setup steps  -->
      <div class="source-code__setup" v-if="contentData.projectSetup">
        <h2>
          Follow the steps to setup and run the project on your local system.
        </h2>
        <div
          class="source-code__setup-steps"
          v-for="(steps, index) in contentData.projectSetup"
          :key="steps.step"
        >
          <h3>Step: {{ index + 1 }}</h3>
          <p>{{ steps.step }}</p>
        </div>
      </div>
      <!-- Download Button  -->
      <div
        class="source-code__download-details"
        v-if="contentData.downloadButton"
      >
        <a :href="`${contentData.downloadButtonLink}`" download>
          <span>Download Source Code</span>
        </a>
        <br />
      </div>

      <div
        class="source-code__tutorial-box"
        v-if="contentData.youtubeVideo != ''"
      >
        <h1><span>Watch Tutorial</span></h1>
        <iframe
          width="560"
          height="315"
          :src="`${contentData.youtubeVideo}`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"
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

import Code from '~/components/Code.vue';
export default {
  name: 'SourceCode',
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
    font-family: 'Righteous', cursive;
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

    img {
      width: 70%;
      min-width: 35em;
      height: auto;
      border-radius: 0.5em;
    }
  }

  &__intro-text {
    font-size: 1em;
    font-family: 'Nunito', sans-serif;
    font-weight: 200;
    line-height: 1.5;
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
        font-family: 'Righteous', cursive;
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

  &__video-box {
    position: relative;
    max-width: 45em;
    width: 100%;
    video {
      position: relative;
      width: 100%;
      height: auto;
    }
  }

  // Key points styling
  &__key-points {
    font-family: 'Nunito', sans-serif;
    margin-top: 1em;
    ul {
      list-style-position: inside;
      padding-left: 3%;
      line-height: 1.5em;

      li {
        letter-spacing: 0.05em;
        list-style-position: outside;
        margin-bottom: 0.3em;
        span {
          color: #ffffff;
        }
      }
    }
  }

  // Project setup setps styling
  &__setup {
    font-family: 'Nunito', sans-serif;
    margin-top: 1.5em;
    h2 {
      color: #00ffff;
      font-size: 1.3em;
      font-weight: 700;
    }
  }
  &__setup-steps {
    margin: 1em 0;

    h3 {
      font-size: 1.1em;
      font-weight: 600;
      color: #00ffff;
    }

    p {
      font-size: 1em;
      padding-left: 0.2em;
    }
  }

  // Download button styling
  &__download-details {
    margin-top: 3em;
    a {
      padding: 0.7em 1em;
      white-space: nowrap;
      color: #ffffff;
      text-decoration: none;
      font-family: 'Nunito', sans-serif;
      background: linear-gradient(#191d30, #191d30) padding-box,
        linear-gradient(132deg, #ff5722, #fdb703) border-box;
      border-radius: 0.5em;
      border: 0.15em solid transparent;

      span {
        font-weight: 700;
        background: linear-gradient(45deg, #ff5722, #fdb703) padding-box;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      &:hover {
        background: linear-gradient(#ff5722, #fdb703) padding-box,
          linear-gradient(45deg, #ff5722, #fdb703) border-box;

        span {
          background: linear-gradient(#ffffff, #ffffff) padding-box,
            linear-gradient(132deg, #ffffff, #ffffff) border-box;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    &__container {
      width: 100%;
    }

    &__image {
      img {
        width: 65%;
        min-width: 25em;
      }
    }

    &__tutorial-box {
      iframe {
        position: relative;
        display: inline-block;
        margin: 0 auto;
        width: 28em;
      }
    }
  }

  @media screen and (max-width: 478px) {
    &__tutorial-box {
      iframe {
        width: 25em;
        height: 15em;
      }
    }
  }

  @media screen and (max-width: 424px) {
    &__tutorial-box {
      iframe {
        width: 23em;
        height: 14em;
      }
    }

    &__image {
      img {
        min-width: 22em;
      }
    }
  }
}
</style>
