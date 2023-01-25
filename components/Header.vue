<template>
  <div class="header">
    <div class="header__logo">
      <NuxtLink to="/">
        <!-- <span>Codemmit</span> -->
        <img data-aos="zoom-in" src="~/assets/logo/codemmit-logo.svg" alt="" />
      </NuxtLink>
    </div>
    <div class="header__navigation-links">
      <div class="header__hamburger-icon" @click="showHideNavbar">
        <span id="header__hamburger-top-line"></span>
        <span id="header__hamburger-middle-line"></span>
        <span id="header__hamburger-bottom-line"></span>
      </div>
      <div class="header__links" id="header__nav-links">
        <NuxtLink to="/"> HOME </NuxtLink>
        <NuxtLink to="/explore"> EXPLORE </NuxtLink>
        <NuxtLink to="/#post"> POSTS </NuxtLink>
        <NuxtLink to="/about"> ABOUT </NuxtLink>
        <NuxtLink to="/contact"> CONTACT </NuxtLink>
        <div class="header__social">
          <a href="https://www.instagram.com/cxp_codes/" target="_blank">
            <img src="~/assets/icon/instagram.svg" alt="ig icon" />
          </a>
          <a href="#" target="_blank">
            <img src="~/assets/icon/linkedin.svg" alt="linkedin icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  methods: {
    showHideNavbar() {
      const navLinksDisplay = document.getElementById('header__nav-links');
      const iconMiddleLine = document.getElementById(
        'header__hamburger-middle-line'
      );
      const iconTopLine = document.getElementById('header__hamburger-top-line');
      const iconBottomLine = document.getElementById(
        'header__hamburger-bottom-line'
      );
      if (navLinksDisplay.style.display === 'flex') {
        navLinksDisplay.style.display = 'none';
        iconMiddleLine.style.display = 'inline-block';
        iconTopLine.classList.remove('header__icon-line-animate');
        iconBottomLine.classList.remove('header__icon-bottom-line-animate');
      } else {
        navLinksDisplay.style.display = 'flex';
        iconMiddleLine.style.display = 'none';
        iconTopLine.classList.add('header__icon-line-animate');
        iconBottomLine.classList.add('header__icon-bottom-line-animate');
      }
    },
  },
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
      // span {
      //   font-size: 3em;
      //   font-weight: 600;
      //   background: linear-gradient(to right, #d90ae8, #e96443) padding-box,
      //     linear-gradient(to right, #e96443, #904e95) border-box;
      //   -webkit-background-clip: text;
      //   -webkit-text-fill-color: transparent;
      //   background-clip: text;
      // }
      img {
        width: 10em;
        height: auto;
      }
    }
  }

  &__links {
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

  &__social {
    display: none;
  }

  &__hamburger-icon {
    position: absolute;
    top: 1.7em;
    right: 5%;
    width: 1.65em;
    height: 1.2em;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    z-index: 9;

    span {
      position: relative;
      display: inline-block;
      width: 100%;
      height: 0.1em;
      border-radius: 0.05em;
      // background: linear-gradient(to right, #d90ae8, #e96443);
      background: linear-gradient(
        90.11deg,
        #ff5722 0.13%,
        #fdb703 92.62%,
        rgba(245, 121, 59, 0) 92.63%
      );
    }
  }

  &__icon-line-animate {
    animation: rotateLine 0.5s linear forwards;
  }

  &__icon-bottom-line-animate {
    animation: rotateBottomLine 0.5s linear forwards;
  }

  @keyframes rotateLine {
    0% {
      transform: rotate(0deg);
      top: 50%;
      background: #ffffff;
    }
    100% {
      transform: rotate(45deg);
      top: 50%;
      background: #ffffff;
    }
  }

  @keyframes rotateBottomLine {
    0% {
      transform: rotate(0deg);
      bottom: 50%;
      background: #ffffff;
    }
    100% {
      transform: rotate(-45deg);
      bottom: 50%;
      background: #ffffff;
    }
  }

  @media screen and (max-width: 768px) {
    &__logo {
      font-size: 1em;
    }
    &__hamburger-icon {
      display: flex;
    }

    #header__nav-links {
      display: none;
    }

    &__links {
      flex-direction: column;
      margin-right: 0;
    }

    &__links {
      position: absolute;
      top: 0;
      right: 0;
      width: 45vw;
      height: 90vh;
      justify-content: center;
      min-width: 18em;
      margin-right: 0;
      padding: 2em 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: linear-gradient(45deg, #d90ae8, #e96443);
      border-bottom-left-radius: 0.5em;

      a:hover {
        background: linear-gradient(to right, #0ae8d6, #e9cb43) padding-box,
          linear-gradient(to right, #e96443, #904e95) border-box;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    &__social {
      display: flex;
      position: absolute;
      bottom: 1em;
      a {
        img {
          width: 1.5em;
          height: auto;
          cursor: pointer;
        }

        &:not(:last-child) {
          margin-right: 0.5em;
        }
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
