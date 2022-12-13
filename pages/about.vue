<template>
  <div class="about">
    <div class="about__header">
      <span>ABOUT</span>
    </div>
    <div class="about__description">
      <p>
        CodeXpool provide coding content related to full-stack development,
        mostly related to front-end development. Here i post FREE Source Code
        and video tutorial for my
        <a
          href="https://www.youtube.com/channel/UCkNUMuNBp1-037oHEKs-G9Q"
          target="_blank"
          >YouTube Channel</a
        >
      </p>
      <p>
        You are free to use content shared on this website without any
        restrictions.
      </p>
      <p>
        I hope these blog posts are helpful for you, if you have any queries or
        suggestions you can <NuxtLink to="/"> Contact me </NuxtLink>
      </p>
    </div>
    <div class="about__social">
      <span>Follow CXP On</span>
      <div class="about__social-icons">
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
  name: 'About',
};
</script>

<style lang="scss" scoped>
.about {
  position: relative;
  top: 0;
  height: 85vh;
  padding: 2em;

  &__header {
    position: relative;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      position: relative;
      text-align: center;
      font-family: 'Teko', sans-serif;
      font-size: 4em;
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

  &__description {
    margin-top: 1em;
    font-size: 1em;
    color: #ffffff;
    font-weight: 300;
    text-align: center;
    padding-top: 2em;
    font-family: 'Nunito', sans-serif;
    p {
      margin-top: 1em;
      a {
        color: #00ffff;
        text-decoration: none;
      }
    }
  }

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
    }
  }

  &__social-icons {
    margin-top: 1em;

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
