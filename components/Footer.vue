<template>
  <footer class="footer">
    <div class="footer__container">
      <p>Copyright © {{ new Date().getFullYear() }} Codemmit</p>
      <div class="footer__social">
        <a href="https://www.instagram.com/cxp_codes/" target="_blank">
          <img src="~/assets/icon/instagram.svg" alt="ig icon" />
        </a>
        <a href="#" target="_blank">
          <img src="~/assets/icon/linkedin.svg" alt="linkedin icon" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  width: 100%;
  bottom: 0;
  background-color: #111524;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.5em;
    font-family: 'Nunito', sans-serif;
    font-size: 0.75em;
    font-weight: 300;
    color: #ffffff;
  }

  &__social {
    a {
      img {
        width: 2em;
        height: auto;
        cursor: pointer;
      }

      &:not(:last-child) {
        margin-right: 0.5em;
      }
    }
  }
}
</style>
