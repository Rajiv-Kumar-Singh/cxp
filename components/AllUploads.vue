<template>
  <div class="uploads">
    <div class="uploads__container">
      <div class="uploads__header">
        <span>All Uploads</span>
        <img src="../assets/icon/arrow.svg" alt="loading image" />
      </div>
      <div class="uploads__cards-container">
        <div class="uploads__card" v-for="card in cards" :key="card.title">
          <div class="uploads__card-box">
            <NuxtLink :to="`${card.codePageLink}`" class="uploads__card-route">
              <div class="uploads__card-thumbnail">
                <img :src="`${card.thumbnail}`" alt="loading image" />
                <p>{{ card.title }}</p>
              </div>
              <div class="uploads__card-description">
                <p>{{ card.description }}</p>
              </div>
            </NuxtLink>
            <div class="uploads__card-btn-box">
              <a
                class="uploads__button"
                :href="`${card.youtubeLink}`"
                target="_blank"
              >
                <span>Watch on</span>
                <img src="../assets/icon/youtube.svg" alt="loading image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// importing thumbnails
import reactShpere from '../assets/thumbnails/3d-react-sphere.jpg';
import VideoControl from '../assets/thumbnails/video-controls.jpg';
import gradientButton from '../assets/thumbnails/gradient-button.jpg';
import htmlSphere from '../assets/thumbnails/html-text-sphere.jpg';
import AdvTypewriter from '../assets/thumbnails/adv-typewriter.jpg';
import Blob from '../assets/thumbnails/blob.jpg';
import SkillBar from '../assets/thumbnails/skill-bar.jpg';
import ScaleHover from '../assets/thumbnails/scale-hover-effect.jpg';

export default {
  name: 'Post',
  data() {
    return {
      cards: [
        {
          codePageLink: '/reactsphere',
          thumbnail: `${reactShpere}`,
          title: 'Create 3D Rotating Text Sphere Using React.js',
          description:
            'Learn how to create awesome 3D rotating text sphere using React.js and package named TagCloud.',
          youtubeLink: 'https://youtu.be/5jlDHSqjZcc',
        },
        {
          codePageLink: '/customVideoButton',
          thumbnail: `${VideoControl}`,
          title:
            'Create Custom Play/Pause button using HTML, CSS and JavaScript',
          description:
            'Learn to create custom HTML video controls ( play / pause ) button using HTML, CSS and JavaScript.',
          youtubeLink: 'https://youtu.be/QSrvL8VU3fE',
        },
        {
          codePageLink: '/gradientButton',
          thumbnail: `${gradientButton}`,
          title:
            'Create CSS Gradient Buttons with Hover Effects Using HTML and CSS',
          description:
            'In this Blog we will create three awesome buttons with gradient border and hover effect using HTML and CSS only.',
          youtubeLink: 'https://youtu.be/o5uV7fxh9To',
        },
        {
          codePageLink: '/htmlSphere',
          thumbnail: `${htmlSphere}`,
          title:
            'Create 3D Rotating Text Sphere Using HTML, CSS, JavaScript and TagCloud.js',
          description:
            'Learn to create 3D rotating text sphere using only HTML, CSS and JavaScript',
          youtubeLink: 'https://youtu.be/Y4Jl1Ql9qFI',
        },
        {
          codePageLink: '/advanceTypewriter',
          thumbnail: `${AdvTypewriter}`,
          title:
            'Create Advanced Typewriter Effect Using HTML CSS & JavaScript',
          description:
            'In this blog we will create an awesome Typewriter Effect using HTML CSS and JavaScript.',
          youtubeLink: 'https://youtu.be/7Udqo7dbi5U',
        },
        {
          codePageLink: '/blob',
          thumbnail: `${Blob}`,
          title: 'Create Blob Shape With Animation Using Only HTML & CSS',
          description:
            'In this blog we will create Blob shape with animation using HTML & CSS only.',
          youtubeLink: 'https://youtu.be/AtFRzx4Dj3w',
        },
        {
          codePageLink: '/skillbar',
          thumbnail: `${SkillBar}`,
          title: 'Animate Skill Bar On Scroll Using HTML, CSS & JavaScript',
          description:
            'In this blog we will be adding scroll animation to skill bars using HTML, CSS & JavaScript',
          youtubeLink: 'https://youtu.be/azIXOvg0b_U',
        },
        {
          codePageLink: '/scaleHoverEffect',
          thumbnail: `${ScaleHover}`,
          title:
            'Create Advanced Text Hover Effect Using HTML CSS & JavaScript',
          description:
            'In this blog you will learn to create an advance Hover Text Effect Using HTML, CSS and JavaScript',
          youtubeLink: 'https://youtu.be/D6fv9fzi6I8',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.uploads {
  position: relative;
  top: 0;
  width: 65vw;
  padding-bottom: 5em;

  &__container {
    position: relative;
    top: 0;
    padding: 1em;
    margin-top: 5em;
    // border: 2px solid red;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    span {
      position: relative;
      font-size: 1.8em;
      font-family: 'Teko', sans-serif;
      color: #ffffff;
      line-height: 1.2;
      background: linear-gradient(to right, #d90ae8, #e96443) padding-box,
        linear-gradient(to right, #e96443, #904e95) border-box;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;

      &::after {
        position: absolute;
        left: 0;
        bottom: 0;
        content: '';
        width: 525%;
        height: 0.05em;
        background: linear-gradient(to right, #d90ae8, #e96443);
      }
    }

    img {
      width: 1.5em;
      height: auto;
    }
  }

  //   Card styling
  &__cards-container {
    position: relative;
    top: 0;
    width: 100%;
    height: 50em;
    margin-top: 3em;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    overflow: scroll;
    scroll-behavior: smooth;
    overflow-x: hidden;
    overflow-y: scroll;
    gap: 1em;
    padding: 1em;
    background: #2c2a2a80;
    border-radius: 0.5em;

    &::-webkit-scrollbar {
      height: 0.15em;
      width: 0.15em;
    }
    &::-webkit-scrollbar-track {
      background: #203258;
    }

    &::-webkit-scrollbar-thumb {
      background: #203258;
    }

    &::-webkit-scrollbar-thumb:vertical {
      background: linear-gradient(to right, #d90ae8, #e96443);
      border-radius: 0.625em;
    }
  }

  &__card {
    position: relative;
    width: 18em;
    height: 21em;
    color: #ffffff;
    font-family: 'Nunito', sans-serif;
    background: #2c3149;
    border-radius: 0.5em;
    line-height: 1.5;
    cursor: pointer;
    a {
      text-decoration: none;
    }
  }

  &__card-box {
    position: relative;
    width: 100%;
    height: 100%;
  }

  &__card-route {
    color: #ffffff;

    &::after {
      position: absolute;
      top: 0;
      content: '';
      width: 100%;
      height: 100%;
      z-index: 8;
    }
  }

  &__card-thumbnail {
    position: relative;

    img {
      width: 100%;
      height: auto;
      border-top-left-radius: 0.5em;
      border-top-right-radius: 0.5em;
    }

    p {
      position: absolute;
      bottom: 0;
      padding: 0.5em;
      max-height: 5em;
      font-weight: 600;
      background: rgb(0 0 0 / 81%);
    }
  }

  &__card-description {
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-weight: 100;
    }
  }

  &__card-btn-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__button {
    position: absolute;
    bottom: 0.5em;
    width: 90%;
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
    text-decoration: none;
    background: #ffffff;
    color: #000000;
    border-radius: 0.5em;
    z-index: 9;

    span {
      font-weight: 700;
      margin-right: 1em;
    }

    img {
      width: 2em;
      height: auto;
    }
  }
}
</style>
