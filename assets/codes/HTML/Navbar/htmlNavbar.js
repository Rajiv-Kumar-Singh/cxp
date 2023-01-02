export const config = {
    htmlCode: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Navbar</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="header">
      <div class="header__logo">
        <a href="#"> <span>Logo</span></a>
      </div>
      <div class="header__navigation-links">
        <div
          class="header__hamburger-icon"
          id="header__hamburger-icon"
          onclick=" showHideNavbar()"
        >
          <span id="header__hamburger-top-line"></span>
          <span id="header__hamburger-middle-line"></span>
          <span id="header__hamburger-bottom-line"></span>
        </div>
        <div class="header__links" id="header__nav-links">
          <a href="#" class="header__links--active">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">WORKS</a>
          <a href="#">CONTACT US</a>
          <div class="header__social">
            <a href="https://www.instagram.com/cxp_codes/" target="_blank">
              <img src="./assets/instagram.svg" alt="ig icon" />
            </a>
            <a href="#" target="_blank">
              <img src="./assets/linkedin.svg" alt="linkedin icon" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Hero section  -->
    <div class="hero">
      <h2>Responsive Navbar With Animations</h2>
    </div>

    <script>
      function showHideNavbar() {
        const navLinksDisplay = document.getElementById('header__nav-links');
        const iconMiddleLine = document.getElementById(
          'header__hamburger-middle-line'
        );
        const iconTopLine = document.getElementById(
          'header__hamburger-top-line'
        );
        const iconBottomLine = document.getElementById(
          'header__hamburger-bottom-line'
        );
        if (navLinksDisplay.style.display === 'flex') {
          navLinksDisplay.style.display = 'none';
          iconMiddleLine.style.display = 'inline-block';
          iconTopLine.classList.remove('header__icon-line-animate');
          iconBottomLine.classList.remove('header__icon-bottom-line-animate');
          navLinksDisplay.classList.remove('header__links--animate');
        } else {
          navLinksDisplay.style.display = 'flex';
          iconMiddleLine.style.display = 'none';
          iconTopLine.classList.add('header__icon-line-animate');
          iconBottomLine.classList.add('header__icon-bottom-line-animate');
          navLinksDisplay.classList.add('header__links--animate');
        }
      }
    </script>
  </body>
</html>
`,

    cssCode: `
/* Import google font  */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800&family=Poppins:wght@100&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header {
  position: relative;
  top: 0;
  z-index: 99;
  width: 100%;
  padding: 1em 2%;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Nunito', sans-serif;
  border-bottom: 1px solid #ffffff38;
  animation: shadowAnimation 3.5s linear infinite;
}

.header__logo a {
  text-decoration: none;
}

.header__logo a span {
  font-size: 3em;
  font-weight: 800;
  background: linear-gradient(to right, #0a7de8, #e96443) padding-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header__links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 2em;
  gap: 2em;
}

.header__links a {
  position: relative;
  color: #fff;
  font-size: 1.3em;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-decoration: none;
}

.header__links a:hover {
  background: linear-gradient(to right, #0a7de8, #e96443) padding-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* active link styling  */
.header__links .header__links--active {
  background: linear-gradient(to right, #0a7de8, #e96443) padding-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header__social {
  display: none;
}

.header__hamburger-icon {
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
}

.header__hamburger-icon span {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 0.1em;
  border-radius: 0.05em;
  background: linear-gradient(to right, #0a7de8, #e96443);
}

.header__icon-line-animate {
  animation: rotateLine 0.5s linear forwards;
}

.header__icon-bottom-line-animate {
  animation: rotateBottomLine 0.5s linear forwards;
}

@keyframes rotateLine {
  0% {
    transform: rotate(0deg);
    top: 50%;
    background: #fff;
  }
  100% {
    transform: rotate(45deg);
    top: 50%;
    background: #fff;
  }
}

@keyframes rotateBottomLine {
  0% {
    transform: rotate(0deg);
    bottom: 50%;
    background: #fff;
  }
  100% {
    transform: rotate(-45deg);
    bottom: 50%;
    background: #fff;
  }
}

@media screen and (max-width: 768px) {
  .header__logo {
    font-size: 0.65em;
  }

  .header__hamburger-icon {
    display: flex;
  }

  .header #header__nav-links {
    display: none;
  }

  .header__links {
    flex-direction: column;
    margin-right: 0;
  }

  .header__links {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    justify-content: center;
    min-width: 18em;
    margin-right: 0;
    padding: 2em 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(45deg, #00284e, #7d1900);
  }

  .header__links a:hover {
    background: linear-gradient(to right, #0ae8d6, #e9cb43) padding-box,
      linear-gradient(to right, #e96443, #904e95) border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .header__social {
    display: flex;
    position: absolute;
    bottom: 1em;
  }

  .header__social a img {
    width: 1.5em;
    height: auto;
    cursor: pointer;
  }

  .header__social a:not(:last-child) {
    margin-right: 0.5em;
  }
}
@keyframes shadowAnimation {
  0% {
    box-shadow: 0 0.3125em 5em #d90ae8 36;
  }
  40% {
    box-shadow: 0 0.3125em 8em #ed6442 2e;
  }
  70% {
    box-shadow: 0 0.3125em 8em #43c2e9 30;
  }
  100% {
    box-shadow: 0 0.3125em 5em #d90ae8 36;
  }
}

/* Adding opening down animation to navbar for mobile screens  */
.header__links--animate {
  animation: openingDown 1.5s ease-in-out forwards;
}

.header__links--animate a:nth-child(1) {
  animation: slideLeft 1.5s ease-in-out 0s forwards;
}

.header__links--animate a:nth-child(2) {
  animation: slideLeft 1.5s ease-in-out 0.1s forwards;
}

.header__links--animate a:nth-child(3) {
  animation: slideLeft 1.5s ease-in-out 0.3s forwards;
}

.header__links--animate a:nth-child(4) {
  animation: slideLeft 1.5s ease-in-out 0.4s forwards;
}

@keyframes openingDown {
  0% {
    height: 0;
    right: -100%;
    opacity: 0;
    border-bottom-left-radius: 10em;
  }
  100% {
    height: 100vh;
    right: 0;
    border-top-left-radius: 0;
    opacity: 1;
  }
}

@keyframes slideLeft {
  0% {
    right: -100%;
  }
  100% {
    right: 0;
  }
}

/* Hero section styling  */
.hero {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #000000;
  color: #ffffff;
  width: 100%;
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  font-weight: 100;
  padding: 0 2em;
  letter-spacing: 0.5em;
}
`,
};

export default config;
