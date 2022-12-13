<template>
  <div class="footer">
    <div class="footer__container">
      <p>Copyright © 2022 CodeXpool</p>
      <div class="footer__social">
        <a href="https://www.instagram.com/cxp_codes/" target="_blank">
          <img src="~/assets/icon/instagram.svg" alt="ig icon" />
        </a>
        <a href="#" target="_blank">
          <img src="~/assets/icon/linkedin.svg" alt="linkedin icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  top: 0;
  background-color: gray;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.5em;
  }
}
</style>
