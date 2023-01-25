<template>
  <div class="hero">
    <div class="hero__container">
      <div class="hero__text-content">
        <small>Welcome! to</small>
        <h1><span>Codemmit</span></h1>
        <p>Explore FREE aspiring front-end content for your projects.</p>
        <div class="hero__buttons">
          <NuxtLink to="/explore">
            <button class="hero__primary-btn">Explore</button>
          </NuxtLink>
          <NuxtLink to="/contact">
            <button class="hero__secondary-btn">Contact Me</button>
          </NuxtLink>
        </div>
        <div class="hero__arrow-icon">
          <span>
            <img src="~/assets/icon/arrow-down.svg" alt="arrow" />
          </span>
        </div>
      </div>

      <!-- gallery  -->
      <div class="hero__gallery">
        <div class="hero__gallery-container">
          <!-- first slider  -->
          <div class="hero__slider">
            <img
              :src="`${card.image}`"
              alt="thumbnail"
              v-for="card in firstSlider"
              :key="card.image"
            />
          </div>

          <!-- second slider  -->
          <div class="hero__slider">
            <img
              :src="`${card.image}`"
              alt="thumbnail"
              v-for="card in secondSlider"
              :key="card.image"
            />
          </div>

          <!-- third slider  -->
          <div class="hero__slider">
            <img
              :src="`${card.image}`"
              alt="thumbnail"
              v-for="card in thirdSlider"
              :key="card.image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// importing thumbnails
import reactShpere from '~/assets/thumbnails/3d-react-sphere.jpg';
import VideoControl from '~/assets/thumbnails/video-controls.jpg';
import gradientButton from '~/assets/thumbnails/gradient-button.jpg';
import htmlSphere from '~/assets/thumbnails/html-text-sphere.jpg';
import AdvTypewriter from '~/assets/thumbnails/adv-typewriter.jpg';
import Blob from '~/assets/thumbnails/blob.jpg';
import reactPortfolio from '~/assets/thumbnails/react/portfolios/portfolio.jpg';
import SkillBar from '~/assets/thumbnails/skill-bar.jpg';
import ScaleHover from '~/assets/thumbnails/scale-hover-effect.jpg';
import LikeBtn from '~/assets/thumbnails/like-btn.jpg';

export default {
  name: 'Hero2',
  data() {
    return {
      firstSlider: [
        {
          image: `${reactShpere}`,
        },
        {
          image: `${VideoControl}`,
        },
        {
          image: `${gradientButton}`,
        },
        {
          image: `${htmlSphere}`,
        },
        {
          image: `${reactPortfolio}`,
        },
        {
          image: `${AdvTypewriter}`,
        },
      ],
      secondSlider: [
        {
          image: `${reactPortfolio}`,
        },
        {
          image: `${SkillBar}`,
        },
        {
          image: `${ScaleHover}`,
        },
        {
          image: `${LikeBtn}`,
        },
        {
          image: `${Blob}`,
        },
        {
          image: `${VideoControl}`,
        },
      ],
      thirdSlider: [
        {
          image: `${ScaleHover}`,
        },
        {
          image: `${AdvTypewriter}`,
        },
        {
          image: `${SkillBar}`,
        },
        {
          image: `${htmlSphere}`,
        },
        {
          image: `${AdvTypewriter}`,
        },
        {
          image: `${reactPortfolio}`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  top: 0;
  width: 100%;
  height: 80vh;

  &__container {
    position: relative;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 0 2%;
    color: #ffffff;
    font-family: 'Nunito', sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  &__text-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 10%;

    small {
      font-size: 1em;
    }

    h1 {
      font-family: 'Teko', sans-serif;
      line-height: 1;
      span {
        display: inline-block;
        font-size: 3em;
        position: relative;
        text-align: center;
        color: #ffffff;
        line-height: 1;
        background: linear-gradient(to right, #d90ae8, #e96443) padding-box,
          linear-gradient(to right, #e96443, #904e95) border-box;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
    p {
      font-size: 1em;
    }
  }

  &__buttons {
    display: flex;
    flex-wrap: nowrap;
    button {
      margin-top: 2em;
      font-size: 1em;
      white-space: nowrap;
      width: 8.2em;
      height: 2.6em;
      cursor: pointer;
    }
  }

  &__primary-btn {
    background: linear-gradient(156deg, #d90ae8, #e96443);
    font-family: 'Righteous', cursive;
    color: #ffffff;
    font-size: 0.2em;
    letter-spacing: 0.05em;
    border: none;
    margin-right: 1.2em;

    &:hover {
      border: 0.15em solid transparent;
      background: linear-gradient(#191d30, #191d30) padding-box,
        linear-gradient(45deg, #e96443, #904e95) border-box;
    }
  }

  &__secondary-btn {
    border: 0.15em solid transparent;
    background: linear-gradient(#191d30, #191d30) padding-box,
      linear-gradient(45deg, #e96443, #904e95) border-box;
    font-family: 'Righteous', cursive;
    color: #ffffff;
    font-size: 0.2em;
    letter-spacing: 0.05em;

    &:hover {
      background: linear-gradient(156deg, #d90ae8, #e96443);
      border: none;
    }
  }

  // Gallery styling
  &__gallery {
    width: 50%;
    height: 80vh;
    overflow: hidden;
    min-width: 29em;
  }

  &__gallery-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1em;

    .hero__slider:nth-child(2) {
      padding-top: 2.5em;
    }
  }

  &__slider {
    width: 50%;
    height: 80vh;
    overflow: scroll;
    display: flex;
    flex-direction: column;

    // hide scroll bar
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    img {
      width: 100%;
      height: auto;
      margin-bottom: 1em;
      border-radius: 0.3em;
    }
  }

  &__arrow-icon {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    &__buttons {
      button {
        font-size: 0.875em;
        width: 8em;
        height: 2.5em;
      }
    }

    &__text-content {
      h1 {
        span {
          font-size: 2em;
        }
      }
    }
  }

  @media screen and (max-width: 828px) {
    &__text-content {
      width: 100%;
      align-items: center;
      text-align: center;
      padding-right: 0;

      p {
        padding: 0 5%;
      }
    }

    &__gallery {
      position: fixed;
      left: 0;
      min-width: unset;
      width: 100%;
      z-index: -1;
      opacity: 0.1;
    }

    &__arrow-icon {
      margin-top: 5em;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.4em;
        height: 2.4em;
        border-radius: 50%;
        border: 0.06em solid #eaeaea;

        img {
          animation: iconBounce 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            infinite alternate;
        }
      }
    }

    @keyframes iconBounce {
      from {
        transform: translateY(0.1875em);
      }
      to {
        transform: translateY(-0.1875em);
      }
    }
  }
}
</style>
