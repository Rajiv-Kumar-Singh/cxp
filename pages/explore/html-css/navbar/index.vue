<template>
  <div class="html-css-all-navbars">
    <div class="html-css-all-navbars__container">
      <div class="html-css-all-navbars__sidebar-container">
        <Sidebar />
      </div>
      <div class="html-css-all-navbars__content-outer-container">
        <ExploreCards :cardData="cardsContent" />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar';
import ExploreCards from '~/components/ExploreCards';

// importing video
import htmlNavbar from '~/assets/gifs/navbars/html-navbar.mp4';
import htmlNavbarShadowAniamtion from '~/assets/gifs/navbars/navbar-shadow-animation.mp4';
import bottomNavbar from '~/assets/gifs/navbars/bottom-navigation-menu.mp4';

// import video thumbnails
import htmlNavThumbnail from '~/assets/thumbnails/html/navbars/responsive-nav.jpg';
import bottomNavbarVideoThumb from '~/assets/thumbnails/html/navbars/bottom-menu.jpg';
import shadowAnimateNav from '~/assets/thumbnails/html/navbars/shadow-animate-navbar.jpg';

export default {
  name: 'HtmlCssNavbars',
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
          videoThumbnail: htmlNavThumbnail,
        },
        {
          codePageLink:
            '/explore/html-css/navbar/code/html-navbar-shadow-animation',
          thumbnail: `${htmlNavbarShadowAniamtion}`,
          title: 'Create Animated Shadow below Navbar',
          description:
            'Using only HTML and CSS you can easily create shadow animation below Navbar.',
          youtubeLink: 'https://youtu.be/5jlDHSqjZcc',
          videoThumbnail: shadowAnimateNav,
        },
        {
          codePageLink: '/explore/html-css/navbar/code/bottom-navigation-menu',
          thumbnail: `${bottomNavbar}`,
          title: 'Create Bottom Navigation Menu',
          description:
            'Create bottom navigation menu for mobile devices using HTML, CSS and Javascript with tab animation.',
          youtubeLink: 'https://youtu.be/5jlDHSqjZcc',
          videoThumbnail: bottomNavbarVideoThumb,
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
.html-css-all-navbars {
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
