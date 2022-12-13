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

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
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
// @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,500&family=Righteous&family=Teko:wght@300;400;500;600;700&display=swap');
// Card color:  #353847
</style>

