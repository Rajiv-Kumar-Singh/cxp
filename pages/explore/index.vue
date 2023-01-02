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
}
</style>
