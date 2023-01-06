export const config = {
    htmlCode: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bottom Navbar</title>
    <link rel="stylesheet" href="./style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
  </head>
  <body>
    <nav class="bottom-navbar">
      <ul class="bottom-navbar__list-items">
        <span class="bottom-navbar__indicator"></span>
        <li class="bottom-navbar__item active">
          <a class="bottom-navbar__link" href="#">
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
          </a>
        </li>
        <li class="bottom-navbar__item">
          <a class="bottom-navbar__link" href="#">
            <i class="fa-solid fa-truck-fast"></i>
            <span>Track</span>
          </a>
        </li>
        <li class="bottom-navbar__item">
          <a class="bottom-navbar__link" href="#">
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
            <span>Upload</span>
          </a>
        </li>
        <li class="bottom-navbar__item">
          <a class="bottom-navbar__link" href="#">
            <i class="fa-solid fa-folder-open"></i>
            <span>View</span>
          </a>
        </li>
        <li class="bottom-navbar__item">
          <a class="bottom-navbar__link" href="#">
            <i class="fa-solid fa-user"></i>
            <span> Profile</span>
          </a>
        </li>
      </ul>
    </nav>

    <script>
      const navbarItems = document.querySelectorAll('.bottom-navbar__item');

      const indicator = document.querySelector('.bottom-navbar__indicator');

      navbarItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          navbarItems.forEach((eachItem) =>
            eachItem.classList.remove('active')
          );
          item.classList.add('active');

          const parentWidth = item.parentElement.clientWidth;
          const leftMargin = (parentWidth / navbarItems.length) * index;
          indicator.style.left = leftMargin + 'px';
        });
      });
    </script>
  </body>
</html>

`,

    cssCode: `
/* Importing google font  */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800&family=Poppins:wght@100;200;300&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffd300;
  font-family: 'Poppins', sans-serif;
}

.bottom-navbar {
  background: #ffffff;
  box-shadow: 0 2.3em 3em -1.18em rgba(0, 0, 0, 0.75);
}

.bottom-navbar ul {
  position: relative;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.68em;
}

.bottom-navbar ul li {
  position: relative;
  width: 3.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5em 0;
}

.bottom-navbar ul li a {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000000;
}

.bottom-navbar ul .active a {
  color: #ff6347;
}

.bottom-navbar ul li a span {
  margin-top: 0.5em;
  font-size: 0.5em;
  font-weight: 300;
}

.bottom-navbar ul .active {
  font-size: 0.99em;
}

.bottom-navbar__indicator {
  position: absolute;
  left: 0;
  height: 100%;
  width: 3.5em;
  z-index: 0;
  transition: all 0.2s linear;
}

.bottom-navbar__indicator::after {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  content: '';
  border-bottom: 0.2em solid #ff6347;
  border-radius: 0;
}

`,
};

export default config;
