<template>
  <div class="explore">
    <div class="explore__container">
      <div class="explore__sidebar-container">
        <Sidebar />
      </div>

      <div class="explore__content-outer-container">
        <ExploreCards :cardData="cardsContent" />
      </div>

      <div class="explore__side-cards-bar">
        <SideCardsBar />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar';
import ExploreCards from '~/components/ExploreCards';
import SideCardsBar from '~/components/SideCardsBar.vue';

// importing video
import htmlNavbar from '~/assets/gifs/navbars/html-navbar.mp4';
import htmlBottomNavbar from '~/assets/gifs/navbars/bottom-navigation-menu.mp4';
import reactPriceFilterVideo from '~/assets/gifs/react/filters/react-price-filter.mp4';

// import video-image thumbnail
import htmlNavThumbnail from '~/assets/thumbnails/html/navbars/responsive-nav.jpg';
import bottomNavbar from '~/assets/thumbnails/html/navbars/bottom-menu.jpg';
import reactPriceFilter from '~/assets/thumbnails/react/filters/react-price-filter.jpg';

// import image thumbnail
import darkPortfolio from '~/assets/thumbnails/react/portfolios/portfolio.jpg';

export default {
  name: 'Explore',
  data() {
    return {
      cardsContent: [
        // {
        //   codePageLink: '/explore/html-css/navbar/code/html-navbar',
        //   thumbnail: `${htmlNavbar}`,
        //   title: 'Create Responsive Navbar With Animation',
        //   description:
        //     'Used HTML, CSS and JavaScript for creating simple and responsive Navbar with some awesome animation effect.',
        //   youtubeLink: 'https://youtu.be/5jlDHSqjZcc',
        //   videoThumbnail: `${htmlNavThumbnail}`,
        // },
        {
          codePageLink: '/explore/react/portfolios/code/react-portfolio',
          thumbnail: '',
          imageThumbnail: `${darkPortfolio}`,
          title: 'Create Responsive React.js Portfolio Website',
          description:
            'This is an complete React.js personal portfolio website, It includes Scroll animations, Hover animations, 3D animations, Minimalist design, Use of SASS for styling components, follows BEM naming convention & many more....',
          youtubeLink: 'https://youtu.be/5jlDHSqjZcc',
        },
        {
          codePageLink: '/explore/html-css/navbar/code/bottom-navigation-menu',
          thumbnail: `${htmlBottomNavbar}`,
          title: 'Create Bottom Navigation Menu',
          description:
            'Create bottom navigation menu for mobile devices using HTML, CSS and Javascript with tab animation.',
          youtubeLink: 'https://youtu.be/5jlDHSqjZcc',
          videoThumbnail: `${bottomNavbar}`,
        },
        {
          codePageLink: '/explore/react/filters/code/react-price-filter',
          thumbnail: `${reactPriceFilterVideo}`,
          title:
            'Filter product by their prices using React.js, Sass and Bootstrap',
          description:
            'Create price filter using React.js, with the help of this filter we can arrange products in "Low To High" or "High To Low" price order.',
          youtubeLink: 'https://youtu.be/o2rbKpIUfsI',
          videoThumbnail: `${reactPriceFilter}`,
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
.explore {
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
