<template>
  <div>
    <Hero />
    <Post />
    <Footer />
  </div>
</template>

<script>
import Hero from '~/components/Hero';
import Post from '~/components/Posts';
import Footer from '~/components/Footer';

export default {
  name: 'HomePage',
  components: {
    Hero,
    Post,
    Footer,
  },
  head() {
    return {
      title: 'CodeXpool - All just for pixels',
    };
  },
};
</script>
