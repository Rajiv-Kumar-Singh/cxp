<template>
  <div class="hero">
    <div class="hero__container">
      <div class="hero__info">
        <p>
          <!-- All! Just <br />
          For Pixels -->
          <span> Namaste From Codemmit </span>
        </p>
        <p class="hero__description">
          Explore free aspiring content for your projects.
        </p>
        <a href="#all-uploads">
          <button class="hero__primary-btn">Explore</button></a
        >
        <NuxtLink to="/contact">
          <button class="hero__secondary-btn">Contact Me</button></NuxtLink
        >
        <div class="hero__arrow-icon">
          <span>
            <img src="~/assets/icon/arrow-down.svg" alt="arrow" />
          </span>
        </div>
      </div>
      <!-- <div class="hero__carousel">
        <Carousel :settings="settings" :wrap-around="true">
          <Slide v-for="slide in carouselSlides" :key="slide">
            <div class="hero__carousel-container">
              <iframe
                width="560"
                height="315"
                :src="`${slide.videoURL}`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Slide>

          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </div> -->
    </div>
  </div>
</template>

<script>
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  name: 'Hero',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      // carousel settings
      settings: {
        itemsToShow: 1,
        snapAlign: 'cener',
        autoplay: 10000,
        touchDrag: true,
        mouseDrag: true,
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      //   breakpoints: {
      //     350: {
      //       itemsToShow: 1,
      //       snapAlign: "center",
      //     },
      //   },
      carouselSlides: [
        {
          videoURL: 'https://www.youtube.com/embed/5jlDHSqjZcc',
        },
        {
          videoURL: 'https://www.youtube.com/embed/QSrvL8VU3fE',
        },
        {
          videoURL: 'https://www.youtube.com/embed/o5uV7fxh9To',
        },
        {
          videoURL: 'https://www.youtube.com/embed/7Udqo7dbi5U',
        },
        {
          videoURL: 'https://www.youtube.com/embed/D6fv9fzi6I8',
        },
        {
          videoURL: 'https://www.youtube.com/embed/1AE3qtKA79w',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.hero {
  position: relative;
  top: 0;
  width: 100%;
  height: 90vh;
  //   border: 2px solid red;

  &__container {
    position: relative;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
  }

  &__info {
    color: #ffffff;
    font-family: 'Teko', sans-serif;
    font-weight: 600;
    line-height: 1;
    width: 100%;
    text-align: center;

    p {
      span {
        font-size: 5em;
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

    button {
      margin-top: 2em;
      font-size: 1em;
      white-space: nowrap;
      width: 9em;
      height: 2.6em;
      cursor: pointer;
    }
  }

  &__description {
    font-size: 1em;
    color: #ffffff;
    font-weight: 300;
    text-align: center;
    font-family: 'Nunito', sans-serif;
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

  &__carousel {
    width: 50%;
  }

  &__carousel-container iframe {
    border-radius: 0.5em;
  }

  &__arrow-icon {
    margin-top: 8em;
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
        animation: iconBounce 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite
          alternate;
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

  @media screen and (max-width: 768px) {
    &__info {
      p {
        span {
          font-size: 2.65em;
        }
      }
    }

    &__description {
      font-size: 0.875em;
    }

    button {
      margin-top: 2em;
      font-size: 0.875em;
      white-space: nowrap;
      width: 7em;
      height: 2.6em;
    }
  }
}

.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  background-color: transparent;
  background: linear-gradient(156deg, #d90ae8, #e96443);
}

.carousel__icon {
  fill: #ffffff;
}
</style>
