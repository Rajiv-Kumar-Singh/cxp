<template>
  <div class="post">
    <div class="post__container">
      <div class="post__header"><span>All POSTS</span></div>

      <div class="post__content-container">
        <div class="post__recent-uploads">
          <div class="post__recent-uploads-header">
            <span>Recent Uploads</span>
            <img src="../assets/icon/arrow.svg" alt="loading image" />
          </div>
          <div class="post__cards-container">
            <div class="post__card" v-for="card in cards" :key="card.title">
              <div class="post__card-box">
                <NuxtLink :to="`${card.codePageLink}`" class="post__card-route">
                  <div class="post__card-thumbnail">
                    <img :src="`${card.thumbnail}`" alt="loading image" />
                    <!-- <p>{{ card.title }}</p> -->
                  </div>
                  <div class="post__card-description">
                    <!-- <p>{{ card.title }}</p> -->
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
                <div class="post__card-btn-box">
                  <a
                    class="post__button"
                    :href="`${card.youtubeLink}`"
                    target="_blank"
                  >
                    <span>Watch on</span>
                    <img src="../assets/icon/youtube.svg" alt="yotube icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="post__carousel-component">
          <MainCarousel />
        </div>
      </div>
      <div class="post__all-uploads">
        <AllUploads />
      </div>
    </div>
  </div>
</template>

<script>
// importing components
import AllUploads from '../components/AllUploads.vue';
import MainCarousel from '../components/MainCarousel.vue';

// importing thumbnails
import reactShpere from '../assets/thumbnails/3d-react-sphere.jpg';
import VideoControl from '../assets/thumbnails/video-controls.jpg';
import gradientButton from '../assets/thumbnails/gradient-button.jpg';
import htmlSphere from '../assets/thumbnails/html-text-sphere.jpg';
import AdvTypewriter from '../assets/thumbnails/adv-typewriter.jpg';

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
      ],
    };
  },
  components: {
    AllUploads,
    MainCarousel,
    OrbitSpinner,
  },
  mounted() {
    const card = document.getElementsByClassName('post__card-route');
    let i;
    for (i = 0; i < card.length; i++) {
      card[i].addEventListener('click', function () {
        const spinner = this.nextElementSibling;
        console.log(spinner, 'content');
        if (spinner.style.display === 'flex') {
          spinner.style.display = 'none';
        } else {
          spinner.style.display = 'flex';
        }
      });
    }
  },
};
</script>

<style lang="scss">
.post {
  position: relative;
  top: 0;
  padding-bottom: 5em;

  &__container {
    position: relative;
    top: 0;
  }

  &__header {
    position: relative;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      position: relative;
      text-align: center;
      font-family: 'Teko', sans-serif;
      font-size: 4em;
      font-weight: 600;
      color: #ffffff;
      line-height: 1;
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
        width: 1.5em;
        height: 0.05em;
        background: linear-gradient(to right, #d90ae8, #e96443);
      }
    }
  }

  &__content-container {
    position: relative;
    top: 0;
    width: 100%;
    padding: 1em;
    margin-top: 5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__carousel-component {
    width: 35vw;
    padding: 1em;
    border-radius: 0.5em;
    background-color: #131624;
  }

  &__recent-uploads {
    position: relative;
    top: 0;
    width: 60%;
  }

  &__recent-uploads-header {
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
        width: 354%;
        height: 0.05em;
        background: linear-gradient(to right, #d90ae8, #e96443);
      }
    }

    img {
      width: 1.5em;
      height: auto;
    }
  }

  &__cards-container {
    position: relative;
    top: 0;
    width: 100%;
    margin-top: 3em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: scroll;
    scroll-behavior: smooth;
    overflow-y: hidden;
    padding-top: 0.5em;
    padding-bottom: 1.5em;

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

    &::-webkit-scrollbar-thumb:horizontal {
      background: linear-gradient(to right, #d90ae8, #e96443);
      border-radius: 0.625em;
    }
  }

  &__card {
    position: relative;
    min-width: 16em;
    height: 21em;
    color: #ffffff;
    font-family: 'Nunito', sans-serif;
    background: #2c3149;
    border-radius: 0.5em;
    line-height: 1.5;
    margin-right: 1em;
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

  // change color of Card text upon hover
  &__card:hover &__card-description {
    p {
      color: #00ffff;
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

  &__spinner {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    background: #00000080;
  }

  &__card-thumbnail {
    position: relative;

    img {
      width: 100%;
      height: auto;
      border-top-left-radius: 0.5em;
      border-top-right-radius: 0.5em;
    }

    // p {
    //   position: absolute;
    //   bottom: 0;
    //   padding: 0.5em;
    //   max-height: 5em;
    //   font-weight: 600;
    //   background: rgb(0 0 0 / 81%);
    // }
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

  @media screen and (max-width: 1143px) {
    &__content-container {
      flex-direction: column;
    }

    &__recent-uploads {
      width: 100%;
    }

    &__carousel-component {
      margin-top: 3em;
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    &__header {
      span {
        font-size: 3em;
      }
    }

    &__content-container {
      margin-top: 2.5em;
    }

    &__recent-uploads-header {
      span {
        &::after {
          width: 266%;
        }
      }
    }
  }
}
</style>
