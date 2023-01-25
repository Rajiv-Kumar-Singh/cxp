<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header';
import Footer from '~/components/Footer';

// import animate on scroll library
import AOS from 'aos';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  mounted() {
    // Animation settings
    AOS.init({
      duration: 800,
      delay: 0,
      once: true,
      easing: 'ease-in-out',
    });
  },
};
</script>

<style lang="scss">
// Importing aos library css for animation
@import 'aos/dist/aos.css';

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  background-color: #191d30;
}

// Adding styling to browser vertical scroll bar
/* width */
::-webkit-scrollbar {
  width: 0.2em;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.1em grey;
  border-radius: 0;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: linear-gradient(
    180deg,
    #ff5722 0.13%,
    #fdb703 92.62%,
    rgba(245, 121, 59, 0) 92.63%
  );
  border-radius: 0;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(
    90.11deg,
    #ff5722 0.13%,
    #fdb703 92.62%,
    rgba(245, 121, 59, 0) 92.63%
  );
}
// @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,500&family=Righteous&family=Teko:wght@300;400;500;600;700&display=swap');
// Card color:  #353847
</style>

