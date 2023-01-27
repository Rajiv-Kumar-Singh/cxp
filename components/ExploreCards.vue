<template>
  <div class="explore-cards">
    <div class="explore-cards__container">
      <div
        class="explore-cards__card"
        v-for="card in cardData"
        :key="card.title"
      >
        <!-- Hover to Play tag  -->
        <span class="explore-cards__hover-tag" v-if="card.thumbnail"
          >Hover To Play</span
        >
        <div class="explore-cards__gif-box">
          <div class="explore-cards__video-box" v-if="card.thumbnail">
            <video
              class="explore-cards__video"
              :poster="`${card.videoThumbnail}`"
              loop
              muted
            >
              <source :src="`${card.thumbnail}`" type="video/mp4" />
            </video>
          </div>
          <div
            class="explore-cards__image-thumbnail"
            v-if="card.imageThumbnail"
          >
            <img
              :src="`${card.imageThumbnail}`"
              alt="thumbnail"
              loading="lazy"
            />
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
export default {
  name: 'ExploreCards',
  props: {
    cardData: {
      type: Array,
    },
  },
  mounted() {
    // Adding functinality to video hover play and pause
    const video = document.getElementsByClassName('explore-cards__video');
    let i;
    for (i = 0; i < video.length; i++) {
      video[i].addEventListener('mouseover', function () {
        this.play();
      });
      video[i].addEventListener('mouseout', function () {
        this.pause();
      });
    }
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

  &__container {
    position: relative;
    top: 0;
  }

  &__card {
    position: relative;
    margin-top: 1.5em;
    padding: 0.5em;
    background: #050819;
    border: 0.012em solid #5a5555;
  }

  &__video-box {
    position: relative;
    width: 100%;

    video {
      position: relative;
      width: 100%;
      height: auto;
    }
  }

  // Hover to play tag styling
  &__hover-tag {
    position: absolute;
    top: 3.38em;
    left: -4.8em;
    content: 'Hover To Play';
    white-space: nowrap;
    background: #000000;
    color: #ffffff;
    padding: 0.1em 0.5em;
    font-size: 0.875em;
    transform: rotate(270deg);
    font-family: 'Anonymous Pro', monospace;
  }
  &__image-thumbnail {
    position: relative;
    width: 100%;

    img {
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
