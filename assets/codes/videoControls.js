export const config = {
  htmlCode: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Custom Video Play/Pause button</title>
    <link rel="stylesheet" href="./style.css" />
  </head>

  <body>
    <div class="custom-video">
      <!-- first video  -->
      <div class="custom-video__container">
        <video class="custom-video__video" width="100%" height="auto" muted>
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="custom-video__control">▶</div>
      </div>

      <!-- second video   -->
      <div class="custom-video__container">
        <video class="custom-video__video" width="100%" height="auto" muted>
          <source src="video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="custom-video__control">▶</div>
      </div>

      <!-- third video  -->
      <div class="custom-video__container">
        <video class="custom-video__video" width="100%" height="auto" muted>
          <source src="video3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="custom-video__control">▶</div>
      </div>

      <!-- fourth video   -->
      <div class="custom-video__container">
        <video class="custom-video__video" width="100%" height="auto" muted>
          <source src="video4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="custom-video__control">▶</div>
      </div>
    </div>

    <script>
      // Adding functinality to video play and pause button
      const video = document.getElementsByClassName("custom-video__video");
      let i;
      for (i = 0; i < video.length; i++) {
        video[i].addEventListener("click", function () {
          const controls = this.nextElementSibling;
          if (controls.innerHTML === "▶") {
            controls.innerHTML = "| |";
            this.play();
          } else {
            controls.innerHTML = "▶";
            this.pause();
          }
        });
        video[i].addEventListener("mouseout", function () {
          const controls = this.nextElementSibling;
          if (!this.paused) {
            controls.style.display = "none";
          }
        });
        video[i].addEventListener("mouseover", function () {
          const controls = this.nextElementSibling;
          controls.style.display = "flex";
        });
        video[i].addEventListener(
          "ended",
          function () {
            const controls = this.nextElementSibling;
            controls.style.display = "flex";
            controls.innerHTML = "▶";
          },
          false
        );
      }
    </script>
  </body>
</html>`,
  cssCode: `
/* Adding Google Font  */
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.custom-video {
    position: relative;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    background-color: #00808097;
}

.custom-video__container {
    position: relative;
    top: 0;
    width: 32vw;
    height: auto;
    margin: 1em;
    font-family: 'Oswald', sans-serif;
}

.custom-video__video {
    border-radius: 0.2em;
    cursor: pointer;
}

.custom-video__control {
    position: absolute;
    top: 43%;
    left: 46%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 1em;
    font-weight: 400;
    width: 3em;
    height: 3em;
    white-space: nowrap;
    line-height: 0;
}

video::-webkit-media-controls {
    position: relative;
    z-index: 1;
}`,
};

export default config;
