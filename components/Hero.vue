<template>
  <div class="hero">
    <div class="hero__container">
      <div class="hero__info">
        <p>
          All! Just <br />
          For Pixels
        </p>
        <button class="hero__primary-btn">Explore</button>
        <button class="hero__secondary-btn">Contact Us</button>
      </div>
      <div class="hero__carousel">
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
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  name: "Hero",
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
        snapAlign: "cener",
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
          videoURL: "https://www.youtube.com/embed/5jlDHSqjZcc",
        },
        {
          videoURL: "https://www.youtube.com/embed/QSrvL8VU3fE",
        },
        {
          videoURL: "https://www.youtube.com/embed/o5uV7fxh9To",
        },
        {
          videoURL: "https://www.youtube.com/embed/7Udqo7dbi5U",
        },
        {
          videoURL: "https://www.youtube.com/embed/D6fv9fzi6I8",
        },
        {
          videoURL: "https://www.youtube.com/embed/1AE3qtKA79w",
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
  height: 80vh;
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
    font-family: "Teko", sans-serif;
    font-size: 5em;
    font-weight: 600;
    line-height: 1;
    button {
      white-space: nowrap;
      width: 9em;
      height: 2.6em;
      cursor: pointer;
    }
  }
  &__primary-btn {
    background: linear-gradient(156deg, #d90ae8, #e96443);
    font-family: "Righteous", cursive;
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
    font-family: "Righteous", cursive;
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
