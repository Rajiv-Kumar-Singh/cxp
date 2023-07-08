<template>
  <NuxtLink
    :to="`${card.codePageLink}`"
    class="recommend-card"
    v-for="card in cards"
    :key="card.title"
  >
    <img
      class="recommend-card__thumbnail"
      :src="`${card.thumbnail}`"
      v-if="card.thumbnail != ''"
      alt="thumbnail"
      loading="lazy"
    />
    <div class="recommend-card__info">
      <h5>{{ card.title }}</h5>
    </div>
  </NuxtLink>
</template>

<script>
// importing thumbnails
import reactPortfolio from '../assets/thumbnails/react/portfolios/portfolio.jpg';
import reactShpere from '../assets/thumbnails/3d-react-sphere.jpg';
import VideoControl from '../assets/thumbnails/video-controls.jpg';
import gradientButton from '../assets/thumbnails/gradient-button.jpg';
import htmlSphere from '../assets/thumbnails/html-text-sphere.jpg';
import AdvTypewriter from '../assets/thumbnails/adv-typewriter.jpg';
import reactPriceFilter from '../assets/thumbnails/react/filters/react-price-filter.jpg';
import scaleTextHover from '../assets/thumbnails/scale-hover-effect.jpg';

export default {
  name: 'RecommendCard',

  data() {
    return {
      cards: [
        {
          codePageLink: '/explore/react/filters',
          thumbnail: `${reactPriceFilter}`,
          title:
            'Filter product by their prices using React.js, Sass and Bootstrap',
          youtubeLink: 'https://youtu.be/o2rbKpIUfsI',
        },
        {
          codePageLink: '/explore/react/portfolios',
          thumbnail: `${reactPortfolio}`,
          title:
            'Create Responsive React.js Portfolio With Creative Animation & Hover Effects',
          youtubeLink: 'https://youtu.be/ftxwkYtzcv8',
        },
        {
          codePageLink: '/reactsphere',
          thumbnail: `${reactShpere}`,
          title: 'Create 3D Rotating Text Sphere Using React.js',
          youtubeLink: 'https://youtu.be/5jlDHSqjZcc',
        },
        {
          codePageLink: '/customVideoButton',
          thumbnail: `${VideoControl}`,
          title:
            'Create Custom Play/Pause button using HTML, CSS and JavaScript',
          youtubeLink: 'https://youtu.be/QSrvL8VU3fE',
        },
        {
          codePageLink: '/gradientButton',
          thumbnail: `${gradientButton}`,
          title:
            'Create CSS Gradient Buttons with Hover Effects Using HTML and CSS',
          youtubeLink: 'https://youtu.be/o5uV7fxh9To',
        },
        {
          codePageLink: '/htmlSphere',
          thumbnail: `${htmlSphere}`,
          title:
            'Create 3D Rotating Text Sphere Using HTML, CSS, JavaScript and TagCloud.js',
          youtubeLink: 'https://youtu.be/Y4Jl1Ql9qFI',
        },
        {
          codePageLink: '/advanceTypewriter',
          thumbnail: `${AdvTypewriter}`,
          title:
            'Create Advanced Typewriter Effect Using HTML CSS & JavaScript',
          youtubeLink: 'https://youtu.be/7Udqo7dbi5U',
        },
        {
          codePageLink: '/scaleHover',
          thumbnail: `${scaleTextHover}`,
          title:
            'Create Advanced Text Hover Effect Using HTML CSS and JavaScript',
          youtubeLink: 'https://youtu.be/D6fv9fzi6I8',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.recommend-card {
  position: relative;
  top: 0;
  width: 48%;
  height: auto;
  background: rgba(44, 42, 42, 0.5019607843);
  color: #ffffff;
  border-radius: 0.5em;
  text-decoration: none;
  font-family: 'Nunito', sans-serif;
  font-size: 0.9em;
  font-weight: 400;
  letter-spacing: 0.05em;

  &:hover {
    color: #00ffff;
  }

  &__thumbnail {
    width: 100%;
    border-radius: 0.5em 0.5em 0 0;
  }

  &__info {
    padding: 0.1em 0.5em 0.5em 0.5em;
  }

  @media screen and (max-width: 963px) {
    width: 45%;
  }
}
</style>
