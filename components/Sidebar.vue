<template>
  <div class="sidebar">
    <div class="sidebar__container">
      <div class="sidebar__box">
        <div class="sidebar__topic-box">
          <h3>
            <span>
              <img src="../assets/icon/html.svg" alt="html icon" />
              HTML/CSS
            </span>
          </h3>
          <div class="sidebar__tags">
            <NuxtLink to="/explore/html-css/navbar">Navbar</NuxtLink>
            <NuxtLink to="/explore/coming-soon">Hero</NuxtLink>
            <NuxtLink to="/explore/coming-soon">Cards</NuxtLink>
            <NuxtLink to="/explore/coming-soon">Sliders</NuxtLink>
            <NuxtLink to="/explore/coming-soon">3D</NuxtLink>
          </div>
        </div>
        <div class="sidebar__topic-box">
          <h3>
            <span>
              <img src="../assets/icon/react.svg" alt="react icon" />
              REACT
            </span>
          </h3>
          <div class="sidebar__tags">
            <NuxtLink to="/explore/coming-soon">Navbar</NuxtLink>
            <NuxtLink to="/explore/coming-soon">Hero</NuxtLink>
            <NuxtLink to="/explore/coming-soon">Cards</NuxtLink>
            <NuxtLink to="/explore/coming-soon">Sliders</NuxtLink>
            <NuxtLink to="/explore/coming-soon">3D</NuxtLink>
            <NuxtLink to="/explore/coming-soon">Portfolio</NuxtLink>
          </div>
        </div>
        <div class="sidebar__topic-box">
          <h3>
            <span>
              <img src="../assets/icon/vue.svg" alt="vue icon" />Vue
            </span>
          </h3>
          <div class="sidebar__tags">
            <NuxtLink to="/explore/coming-soon">Navbar</NuxtLink>
            <NuxtLink to="/explore/coming-soon">Hero</NuxtLink>
            <NuxtLink to="/explore/coming-soon">Cards</NuxtLink>
            <NuxtLink to="/explore/coming-soon">Sliders</NuxtLink>
            <NuxtLink to="/explore/coming-soon">3D</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style lang="scss">
.sidebar {
  position: relative;
  top: 0;
  width: 20%;
  min-width: 17em;
  padding-left: 1em;
  font-family: 'Teko', sans-serif;

  &__container {
    position: relative;
    top: 0;
  }

  &__box {
    position: relative;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &__topic-box {
    position: relative;
    top: 0;
    width: 100%;
    margin-top: 3em;
    // border: 2px solid green;

    h3 {
      position: relative;
      color: #00ffff;
      font-weight: 300;

      span {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0.05em 0.3em 0.02em;
        width: fit-content;
        font-weight: 400;
        letter-spacing: 0.03em;
        border-top-left-radius: 0.05em;
        border-top-right-radius: 0.05em;
        background: linear-gradient(to right, #5a2646, #1d3333);

        img {
          width: 1em;
          height: auto;
          margin-right: 0.5em;
        }
      }

      &::after {
        position: absolute;
        left: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 0.05em;
        background: linear-gradient(to right, #5a2646, #1d3333);
      }
    }
  }

  &__tags {
    // font-family: 'Nunito', sans-serif;
    margin-top: 1em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0.5em;

    a {
      text-align: center;
      color: #ffffff;
      text-decoration: none;
      background: #2c3149;
      //   margin-right: 0.5em;
      padding: 0.01em 0.2em;
      border-radius: 2px;
      letter-spacing: 0.04em;
    }
  }
}
</style>
