<template>
  <div class="react-content">
    <div class="react-content__container">
      <div class="react-content__sidebar-container">
        <Sidebar />
      </div>
      <div class="react-content__content-outer-container">
        <ExploreCards :cardData="cardsContent" />
      </div>
      <div class="react-content__side-cards-bar">
        <SideCardsBar />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar';
import ExploreCards from '~/components/ExploreCards';
import SideCardsBar from '~/components/SideCardsBar.vue';

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
    SideCardsBar,
  },
};
</script>

<style lang="scss">
.react-content {
  position: relative;
  top: 0;
  width: 100%;
  padding-bottom: 25vh;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  &__sidebar-container {
    position: sticky;
    top: 0;
  }

  &__content-outer-container {
    width: 50%;
  }

  &__side-cards-bar {
    position: sticky;
    top: 0;
    width: 28%;
    padding: 0 0.5em 0 0;
  }

  @media screen and (max-width: 1196px) {
    &__container {
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

    &__content-outer-container {
      width: 60%;
    }

    &__side-cards-bar {
      display: none;
    }
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
