export const config = {
  htmlCode: `
import React, { useEffect } from "react";
import "../styles/TextShpere.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Vue",
        "Nuxt",
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    &lt;>
      &lt;div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        &lt;span className="tagcloud">&lt;/span>
      &lt;/div>
    &lt;/>
  );
};

export default TextShpere;`,

  cssCode: `
/* Importing google font  */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;600;700;800;900&display=swap');

.text-shpere {
    position: relative;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1e1e1e;
}

.tagcloud {
    display: inline-block;
    top: 0;
    left: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    letter-spacing: 0.0625em;
    font-size: 1.3em;
}

/* Change color of each text in sphere on hover   */
.tagcloud--item {
    color: #00ffffff;
    text-transform: uppercase;
}

.tagcloud--item:hover {
    color: #ff6347;
}`,
};

export default config;
