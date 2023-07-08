<template>
  <div class="side-cards-bar">
    <div class="side-cards-bar__container">
      <RecommendCard />
    </div>
  </div>
</template>

<script>
import RecommendCard from '~/components/RecommendCard.vue';

export default {
  name: 'SideCardsBar',

  components: {
    RecommendCard,
  },
};
</script>

<style lang="scss">
.side-cards-bar {
  position: relative;
  top: 0;
  width: 100%;
  margin-top: 1.5em;
  padding-left: 0.3em;

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
