<template>
  <div class="uploads" id="post">
    <div class="uploads__container">
      <div class="uploads__header">
        <span>All Uploads</span>
        <img src="../assets/icon/arrow.svg" alt="loading image" />
      </div>
      <div class="uploads__cards-container">
        <div class="uploads__card" v-for="card in cards" :key="card.title">
          <div class="uploads__card-box">
            <!-- <NuxtLink :to="`${card.codePageLink}`" class="uploads__card-route">
              <div class="uploads__card-thumbnail">
                <img :src="`${card.thumbnail}`" alt="loading image" />
              </div>
              <div class="uploads__card-description">
                <p>{{ card.description }}</p>
              </div>
            </NuxtLink>
            <div class="post__spinner">
              <orbit-spinner
                :animation-duration="1200"
                :size="55"
                :color="'#ff1d5e'"
              />
            </div>
            <div class="uploads__card-btn-box">
              <a
                class="uploads__button"
                :href="`${card.youtubeLink}`"
                target="_blank"
              >
                <span>Watch on</span>
                <img src="../assets/icon/youtube.svg" alt="loading image" />
              </a>
            </div> -->
            <div class="uploads__card-thumbnail">
              <img :src="`${card.thumbnail}`" alt="thumbnail" />
            </div>
            <div class="uploads__card-description">
              <div class="uploads__card-title">
                <p>{{ card.description }}</p>
              </div>
              <div class="uploads__card-buttons">
                <NuxtLink
                  :to="`${card.codePageLink}`"
                  class="uploads__card-route"
                  ><span>View Source Code</span></NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
        <div class="uploads__card uploads__card--last-card">
          <p>
            <NuxtLink to="/explore">
              Explore More
              <img src="../assets/icon/arrow-right.svg" alt="arrow icon" />
            </NuxtLink>
          </p>
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
import LikeBtn from '../assets/thumbnails/like-btn.jpg';

// importing spinner
import { OrbitSpinner } from 'epic-spinners';

export default {
  name: 'Post',
  data() {
    return {
      cards: [
        {
          codePageLink: '/reactsphere',
          thumbnail: `${reactShpere}`,
          title: '',
          description: 'Create 3D Rotating Text Sphere Using React.js',
          youtubeLink: 'https://youtu.be/5jlDHSqjZcc',
        },
        {
          codePageLink: '/customVideoButton',
          thumbnail: `${VideoControl}`,
          title: '',
          description:
            'Create Custom Play/Pause button using HTML, CSS and JavaScript',
          youtubeLink: 'https://youtu.be/QSrvL8VU3fE',
        },
        {
          codePageLink: '/gradientButton',
          thumbnail: `${gradientButton}`,
          title: '',
          description:
            'Create CSS Gradient Buttons with Hover Effects Using HTML and CSS',
          youtubeLink: 'https://youtu.be/o5uV7fxh9To',
        },
        {
          codePageLink: '/htmlSphere',
          thumbnail: `${htmlSphere}`,
          title: '',
          description:
            'Create 3D Rotating Text Sphere Using HTML, CSS, JavaScript and TagCloud.js',
          youtubeLink: 'https://youtu.be/Y4Jl1Ql9qFI',
        },
        {
          codePageLink: '/advanceTypewriter',
          thumbnail: `${AdvTypewriter}`,
          title: '',
          description:
            'Create Advanced Typewriter Effect Using HTML CSS & JavaScript',
          youtubeLink: 'https://youtu.be/7Udqo7dbi5U',
        },
        {
          codePageLink: '/blob',
          thumbnail: `${Blob}`,
          title: '',
          description: 'Create Blob Shape With Animation Using Only HTML & CSS',
          youtubeLink: 'https://youtu.be/AtFRzx4Dj3w',
        },
        {
          codePageLink: '/skillbar',
          thumbnail: `${SkillBar}`,
          title: '',
          description:
            'Animate Skill Bar On Scroll Using HTML, CSS & JavaScript',
          youtubeLink: 'https://youtu.be/azIXOvg0b_U',
        },
        {
          codePageLink: '/scaleHover',
          thumbnail: `${ScaleHover}`,
          title: '',
          description:
            'Create Advanced Text Hover Effect Using HTML CSS & JavaScript',
          youtubeLink: 'https://youtu.be/D6fv9fzi6I8',
        },
        {
          codePageLink: '/likeBtn',
          thumbnail: `${LikeBtn}`,
          title: '',
          description: 'Create Like Button Using HTML, CSS and JavaScript',
          youtubeLink: 'https://youtu.be/1AE3qtKA79w',
        },
      ],
    };
  },
  components: {
    OrbitSpinner,
  },
};
</script>

<style lang="scss">
.uploads {
  position: relative;
  top: 0;
  width: 100%;
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
    // height: 50em;
    margin-top: 3em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
    align-items: center;
    // display: grid;
    // grid-template-columns: 1fr 1fr 1fr;
    overflow: scroll;
    scroll-behavior: smooth;
    overflow: scroll;
    gap: 1em;
    padding: 1em;
    background: #2c2a2a80;
    border-radius: 0.5em;

    // Hide Scroll bars
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      // height: 0.15em;
      // width: 0.15em;
      display: none;
    }

    // &::-webkit-scrollbar-track {
    //   background: #203258;
    // }

    // &::-webkit-scrollbar-thumb {
    //   background: #203258;
    // }

    // &::-webkit-scrollbar-thumb:vertical {
    //   background: linear-gradient(to right, #d90ae8, #e96443);
    //   border-radius: 0.625em;
    // }

    // &::-webkit-scrollbar-thumb:horizontal {
    //   background: linear-gradient(to right, #d90ae8, #e96443);
    //   border-radius: 0.625em;
    // }
  }

  &__card {
    position: relative;
    width: 32%;
    max-width: 16em;
    min-width: 16em;
    height: 21em;
    color: #ffffff;
    font-family: 'Nunito', sans-serif;
    background: #2c3149;
    border-radius: 0.5em;
    line-height: 1.5;
    cursor: pointer;

    &:hover {
      animation: zoomIn 0.1s linear forwards;
    }

    @keyframes zoomIn {
      0% {
        transform: scale(1, 1);
      }
      100% {
        transform: scale(1.03, 1.03);
      }
    }

    a {
      text-decoration: none;
    }
  }

  &__card-description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  // change color of Card text upon hover
  &__card:hover &__card-description {
    color: #00ffff;
  }

  &__card-title {
    padding: 0.5em 0.5em;
    font-weight: 300;
  }

  &__card-box {
    position: relative;
    width: 100%;
    height: 100%;
  }

  &__card-buttons {
    padding: 1em 0.5em;
    width: 100%;
    position: absolute;
    top: 84%;
  }

  &__card-route {
    border: 0.15em solid transparent;
    background: linear-gradient(#2c3149, #2c3149) padding-box,
      linear-gradient(45deg, #e96443, #904e95) border-box;
    display: inline-block;
    width: 100%;
    text-align: center;
    border-radius: 0.4em;

    span {
      background: linear-gradient(to right, #d90ae8, #e96443) padding-box,
        linear-gradient(to right, #e96443, #904e95) border-box;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
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
  }

  // Last card stlying
  &__card--last-card {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Teko', sans-serif;
    letter-spacing: 0.1em;
    text-align: center;

    &:hover img {
      position: relative;
      left: 5px;
    }

    a {
      font-size: 1.5em;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(to right, #d90ae8, #e96443) padding-box,
        linear-gradient(to right, #e96443, #904e95) border-box;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    img {
      margin-left: 10px;
      width: 1em;
      height: auto;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    &__header {
      span {
        &::after {
          width: 266%;
        }
      }

      img {
        width: 1.5em;
        height: auto;
      }
    }
  }
}
</style>
