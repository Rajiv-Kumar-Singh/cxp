<template>
  <div class="explore-cards">
    <div class="explore-cards__container">
      <div
        class="explore-cards__card"
        v-for="card in cardData"
        :key="card.title"
      >
        <div class="explore-cards__gif-box">
          <div class="explore-cards__video-box">
            <video autoplay loop muted>
              <source :src="`${card.thumbnail}`" type="video/mp4" />
            </video>
          </div>
          <div class="explore-cards__content-box">
            <p class="explore-cards__content-title">{{ card.title }}</p>
            <div class="explore-cards__text-description">
              <p>
                {{ card.description }}
              </p>
            </div>
            <div class="explore-cards__buttons-box">
              <NuxtLink
                :to="`${card.codePageLink}`"
                class="explore-cards__view-code"
              >
                <span>
                  View Source Code
                  <img
                    src="../assets/icon/arrow-right-white.svg"
                    alt="yotube icon"
                  />
                </span>
              </NuxtLink>
              <NuxtLink to="/explore" class="explore-cards__watch-on-yt">
                <span> Watch On</span>
                <br />
                <img src="../assets/icon/youtube.svg" alt="yotube icon" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// importing thumbnails
// import htmlNavbar from '../assets/gifs/navbars/html-navbar.mp4';

export default {
  name: 'ExploreCards',
  //   data() {
  //     return {
  //       cards: [
  //         {
  //           codePageLink: '/html-navbar',
  //           thumbnail: `${htmlNavbar}`,
  //           title: 'Create Responsive Navbar With Animation',
  //           description:
  //             'Used HTML, CSS and JavaScript for creating simple and responsive Navbar with some awesome animation effect.',
  //           youtubeLink: 'https://youtu.be/5jlDHSqjZcc',
  //         },
  //         {
  //           codePageLink: '/html-navbar',
  //           thumbnail: `${htmlNavbar}`,
  //           title: 'Create Responsive Navbar With Animation',
  //           description:
  //             'Used HTML, CSS and JavaScript for creating simple and responsive Navbar with some awesome animation effect.',
  //           youtubeLink: 'https://youtu.be/5jlDHSqjZcc',
  //         },
  //         {
  //           codePageLink: '/html-navbar',
  //           thumbnail: `${htmlNavbar}`,
  //           title: 'Create Responsive Navbar With Animation',
  //           description:
  //             'Used HTML, CSS and JavaScript for creating simple and responsive Navbar with some awesome animation effect.',
  //           youtubeLink: 'https://youtu.be/5jlDHSqjZcc',
  //         },
  //       ],
  //     };
  //   },
  props: {
    cardData: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
.explore-cards {
  position: relative;
  top: 0;
  width: 100%;
  min-width: 32em;
  font-family: 'Teko', sans-serif;
  border-radius: 0.2em;
  //   border: 2px solid red;

  &__container {
    position: relative;
    top: 0;
  }

  &__card {
    margin-top: 1.5em;
    padding: 0.5em;
    background: #050819;
    border: 0.012em solid #5a5555;
  }

  &__video-box {
    position: relative;
    width: 100%;
    // overflow: hidden;
    // padding-top: 56.25%;

    video {
      //   position: absolute;
      //   top: 0;
      //   width: 100%;
      //   height: 100%;
      //   border: none;
      position: relative;
      width: 100%;
      height: auto;
    }
  }

  // Description styling
  &__content-box {
    color: #ffffff;
  }

  &__content-title {
    letter-spacing: 0.05em;
    font-size: 1.33em;
    font-size: 200;
  }

  &__text-description {
    font-family: 'Nunito', sans-serif;
    p {
      font-size: 0.875em;
      font-weight: 200;
    }
  }

  &__buttons-box {
    font-family: 'Nunito', sans-serif;
    margin-top: 2em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: #ffffff;
      text-decoration: none;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 1em;
          height: auto;
        }
      }

      img {
        width: 2em;
        height: auto;
      }
    }

    a:nth-child(1) {
      span {
        background: linear-gradient(to right, #d90ae8, #e96443) padding-box,
          linear-gradient(to right, #e96443, #904e95) border-box;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;

        img {
          margin-left: 0.5em;
        }
      }

      &:hover {
        span {
          img {
            margin-left: 0.8em;
          }
        }
      }
    }

    a:nth-child(2) {
      font-size: 0.65em;
      font-weight: 300;
      line-height: 0.5;
    }
  }

  @media screen and (max-width: 839px) {
    min-width: 0;
  }
}
</style>
