<template>
  <div>
    <Hero />
    <Post />
  </div>
</template>

<script>
import Hero from "~/components/Hero";
import Post from "~/components/Posts";

export default {
  name: "HomePage",
  components: {
    Hero,
    Post,
  },
  head() {
    return {
      title: "CodeXpool - All just for pixels",
    };
  },
};
</script>
