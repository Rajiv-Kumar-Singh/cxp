<template>
  <div class="react-portfolios">
    <div class="react-portfolios__container">
      <div class="react-portfolios__sidebar-container">
        <Sidebar />
      </div>
      <div class="react-portfolios__content-outer-container">
        <ExploreCards :cardData="cardsContent" />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar';
import ExploreCards from '~/components/ExploreCards';

// importing thumbnails
import darkPortfolio from '~/assets/thumbnails/react/portfolios/portfolio.jpg';

export default {
  name: 'Portfolios',
  data() {
    return {
      cardsContent: [
        {
          codePageLink: '/explore/react/portfolios/code/react-portfolio',
          thumbnail: '',
          imageThumbnail: `${darkPortfolio}`,
          title: 'Create Responsive React.js Portfolio Website',
          description:
            'This is an complete React.js personal portfolio website, It includes Scroll animations, Hover animations, 3D animations, Minimalist design, Use of SASS for styling components, follows BEM naming convention & many more....',
          youtubeLink: 'https://youtu.be/5jlDHSqjZcc',
        },
      ],
    };
  },
  components: {
    Sidebar,
    ExploreCards,
  },
};
</script>

<style lang="scss">
.react-portfolios {
  position: relative;
  top: 0;
  width: 100%;
  padding-bottom: 25vh;

  &__container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    // border: 2px solid green;
  }

  &__sidebar-container {
    position: sticky;
    top: 0;
  }

  &__content-outer-container {
    width: 50%;
    margin-left: 5%;
    // border: 3px solid yellow;
  }

  @media screen and (max-width: 839px) {
    &__sidebar-container {
      position: relative;
    }

    &__container {
      flex-direction: column;
    }

    &__sidebar-container {
      width: 100%;
    }

    &__content-outer-container {
      width: 90%;
      margin-left: 0;
      margin: 0 auto;
    }
  }
}
</style>
