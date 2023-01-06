<template>
  <div class="explore">
    <div class="explore__container">
      <div class="explore__sidebar-container">
        <Sidebar />
      </div>
      <div class="explore__content-outer-container">
        <ExploreCards :cardData="cardsContent" />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar';
import ExploreCards from '~/components/ExploreCards';

// importing video thumbnails
import htmlNavbar from '~/assets/gifs/navbars/html-navbar.mp4';
import htmlBottomNavbar from '~/assets/gifs/navbars/bottom-navigation-menu.mp4';

export default {
  name: 'Explore',
  data() {
    return {
      cardsContent: [
        {
          codePageLink: '/explore/html-css/navbar/code/html-navbar',
          thumbnail: `${htmlNavbar}`,
          title: 'Create Responsive Navbar With Animation',
          description:
            'Used HTML, CSS and JavaScript for creating simple and responsive Navbar with some awesome animation effect.',
          youtubeLink: 'https://youtu.be/5jlDHSqjZcc',
        },
        {
          codePageLink: '/explore/html-css/navbar/code/bottom-navigation-menu',
          thumbnail: `${htmlBottomNavbar}`,
          title: 'Create Bottom Navigation Menu',
          description:
            'Create bottom navigation menu for mobile devices using HTML, CSS and Javascript with tab animation.',
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
.explore {
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
      width: 80%;
      margin-left: 0;
      margin: 0 auto;
    }
  }
}
</style>
