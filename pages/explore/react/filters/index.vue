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

// import thumbnails
import reactPriceFilter from '~/assets/thumbnails/react/filters/react-price-filter.jpg';

export default {
  name: 'Filters',
  data() {
    return {
      cardsContent: [
        {
          codePageLink: '/explore/react/filters/code/react-price-filter',
          thumbnail: '',
          imageThumbnail: `${reactPriceFilter}`,
          title:
            'Filter product by their prices using React.js, Sass and Bootstrap',
          description:
            'Create price filter using React.js, with the help of this filter we can arrange products in "Low To High" or "High To Low" price order.',
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
