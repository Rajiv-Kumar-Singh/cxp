<template>
  <div>
    <Hero2 />
    <Post />
  </div>
</template>

<script>
import Hero2 from '~/components/Hero2';
import Post from '~/components/Posts';

export default {
  name: 'HomePage',
  components: {
    Hero2,
    Post,
  },
  // head() {
  //   return {
  //     title: 'Codemmit - All just for pixels',
  //   };
  // },
};
</script>
