<template>
  <div class="contact">
    <div class="contact__social">
      <span>Contact me On</span>
      <div class="contact__social-icons">
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
  name: 'Contact',
};
</script>

<style lang="scss" scoped>
.contact {
  position: relative;
  top: 0;
  padding: 2em;
  width: 100%;
  height: 79vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &__social {
    margin-top: 3em;
    text-align: center;

    span {
      position: relative;
      text-align: center;
      font-family: 'Teko', sans-serif;
      font-size: 2em;
      font-weight: 600;
      color: #ffffff;
      line-height: 1;
      background: linear-gradient(to right, #d90ae8, #e96443) padding-box,
        linear-gradient(to right, #e96443, #904e95) border-box;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;

      &::after {
        position: absolute;
        left: 0;
        bottom: 0;
        content: '';
        width: 1.5em;
        height: 0.05em;
        background: linear-gradient(to right, #d90ae8, #e96443);
      }
    }
  }

  &__social-icons {
    margin-top: 2em;

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
