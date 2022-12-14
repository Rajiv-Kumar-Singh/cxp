<template>
  <div class="main-carousel">
    <div class="main-carousel__container">
      <div class="main-carousel__header">
        <h2>
          Haven't Subscribed?
          <a
            href="https://www.youtube.com/channel/UCkNUMuNBp1-037oHEKs-G9Q"
            target="_blank"
            ><span>Click Here!</span></a
          >
        </h2>
      </div>
      <div class="main-carousel__carousel">
        <Carousel
          :settings="settings"
          :breakpoints="breakpoints"
          :wrap-around="true"
        >
          <Slide v-for="slide in carouselSlides" :key="slide">
            <div class="main-carousel__carousel-container">
              <iframe
                width="550"
                height="215"
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
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  name: 'MainCarousel',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      // carousel settings
      settings: {
        snapAlign: 'center',
        autoplay: 10000,
        touchDrag: true,
        mouseDrag: true,
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        250: {
          itemsToShow: 1,
          snapAlign: 'start',
        },
        630: {
          itemsToShow: 1.5,
        },
        818: {
          itemsToShow: 2,
        },
        1000: {
          itemsToShow: 2.5,
        },
        1143: {
          itemsToShow: 1,
        },
      },
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
.main-carousel {
  position: relative;
  top: 0;
  width: 100%;

  &__container {
    position: relative;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 0 2%;
  }

  &__header {
    margin-bottom: 1em;
    color: #ffffff;
    font-size: 1em;
    font-family: 'Nunito', sans-serif;
    h2 {
      a {
        text-decoration: none;
        span {
          background: linear-gradient(to right, #d90ae8, #e96443) padding-box,
            linear-gradient(to right, #e96443, #904e95) border-box;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      }
    }
  }

  &__carousel {
    width: 100%;
  }

  &__carousel-container iframe {
    border-radius: 0.5em;
    width: 22em;
  }
}

.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  background-color: transparent;
  background: linear-gradient(156deg, #d90ae8, #e96443);
  border-radius: 0.5em;
}

.carousel__pagination-button::after {
  border-radius: 0.5em;
  background-color: #ffffff5c;
}

.carousel__icon {
  fill: #ffffff;
}
</style>
