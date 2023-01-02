<template>
  <div class="coming-soon">
    <div class="coming-soon__container">
      <div class="coming-soon__sidebar-container">
        <Sidebar />
      </div>
      <div class="coming-soon__content-outer-container">
        <p>Coming Soon...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComingSoon',
};
</script>

<style lang="scss">
.coming-soon {
  position: relative;
  top: 0;
  width: 100%;
  height: 80vh;
  font-family: 'Nunito', sans-serif;
  color: #ffffff;

  &__container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
  }

  &__sidebar-container {
    position: sticky;
    top: 0;
  }

  &__content-outer-container {
    position: relative;
    top: 0;
    width: 100%;
    height: 100%;
    margin-left: 5%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: 2em;
      background: linear-gradient(to right, #d90ae8, #00ffff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: textGradient 2s linear infinite;
    }
  }

  @keyframes textGradient {
    0% {
      background: linear-gradient(to right, #d90ae8, #00ffff);
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    50% {
      background: linear-gradient(to right, #00ffff, #e96443);
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    100% {
      background: linear-gradient(to right, #d90ae8, #00ffff);
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
}
</style>
