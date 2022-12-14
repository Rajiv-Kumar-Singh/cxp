<template>
  <div class="header">
    <div class="header__logo">
      <NuxtLink to="/">
        <span>Codemmit</span>
      </NuxtLink>
    </div>
    <div class="header__navigation-links">
      <NuxtLink to="/"> HOME </NuxtLink>
      <NuxtLink to="/#post"> POSTS </NuxtLink>
      <NuxtLink to="/about"> ABOUT </NuxtLink>
      <NuxtLink to="/contact"> CONTACT </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  top: 0;
  z-index: 99;
  width: 100%;
  padding: 1em 2%;
  box-sizing: border-box;
  margin: 0;
  font-family: 'Teko', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #191d30;
  animation: shadowAnimation 3.5s linear infinite;

  &__logo {
    a {
      text-decoration: none;
      span {
        font-size: 3em;
        font-weight: 600;
        background: linear-gradient(to right, #d90ae8, #e96443) padding-box,
          linear-gradient(to right, #e96443, #904e95) border-box;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
  }

  &__navigation-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 2em;
    gap: 2em;

    a {
      color: #ffffff;
      font-size: 1.3em;
      letter-spacing: 0.1em;
      text-decoration: none;
    }

    a:hover {
      background: linear-gradient(to right, #d90ae8, #e96443) padding-box,
        linear-gradient(to right, #e96443, #904e95) border-box;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: zoomIn 0.1s linear forwards;
    }

    @keyframes zoomIn {
      0% {
        transform: scale(1, 1);
      }
      100% {
        transform: scale(1.05, 1.05);
      }
    }
  }
}

@keyframes shadowAnimation {
  0% {
    box-shadow: 0 0.3125em 5em #d90ae836;
  }

  40% {
    box-shadow: 0 0.3125em 8em #ed64422e;
  }

  70% {
    box-shadow: 0 0.3125em 8em #43c2e930;
  }

  100% {
    box-shadow: 0 0.3125em 5em #d90ae836;
  }
}
</style>
