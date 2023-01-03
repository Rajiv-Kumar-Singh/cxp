export const config = {
    htmlCode: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Navbar With Shadow Animation</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="header">
      <div class="header__logo">
        <a href="/"><span>Logo</span></a>
      </div>
      <div class="header__links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Posts</a>
        <a href="#">Contact Us</a>
      </div>
    </div>

    <!-- Hero section   -->
    <div class="hero">
      <h1>Navbar With Shadow Animation</h1>
    </div>
  </body>
</html>

`,

    cssCode: `
/* Importing google fonts  */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800&family=Poppins:wght@100&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #000000;
}

.header {
  position: relative;
  top: 0;
  font-family: 'Nunito', sans-serif;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  animation: shadowAnimation 3.5s linear infinite; /*  Adding shadow animation  */
}

@keyframes shadowAnimation {
  0% {
    box-shadow: 0 0.3125em 5em #6ee80a66;
  }

  40% {
    box-shadow: 0 0.3125em 8em #2cb3e863;
  }

  70% {
    box-shadow: 0 0.3125em 8em #2ce8bf4a;
  }

  100% {
    box-shadow: 0 0.3125em 5em #6ee80a66;
  }
}

.header__logo a {
  text-decoration: none;
}

.header__logo a span {
  font-size: 3em;
  font-weight: 900;
  background: linear-gradient(45deg, #6ee80a, #e96443);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header__links {
  display: flex;
  gap: 2em;
}

.header__links a {
  text-decoration: none;
  font-size: 1.33em;
  font-weight: 600;
  background: linear-gradient(45deg, #8ee80a, #2ce8bf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header__links a:hover {
  background: linear-gradient(45deg, #6ee80a, #e96443);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Hero section styling  */
.hero {
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #c4c0c0;
  width: 100%;
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  font-weight: 100;
  padding: 0 2em;
  letter-spacing: 0.5em;
}

.hero h1 {
  margin-bottom: 3em;
}
`,
};

export default config;
