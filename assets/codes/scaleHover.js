export const config = {
  htmlCode: `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hover Effect</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div id="box">
        <h1 class="alpha">H</h1>
        <h1 class="alpha">o</h1>
        <h1 class="alpha">v</h1>
        <h1 class="alpha">e</h1>
        <h1 class="alpha">r</h1>
        <span id="me">
            <h1 class="alpha">m</h1>
            <h1 class="alpha">e</h1>
        </span>
    </div>


    <!-- JavaScript For Animation     -->
    <script>

        const elements = document.getElementsByClassName('alpha');

        for (let i = 0; i<=elements.length; i++)
        {
            elements[i].addEventListener('animationend',function(e){
                elements[i].classList.remove('animated');
            });

            elements[i].addEventListener('mouseover',function(e){
                elements[i].classList.add('animated')
            })
        }


    </script>
</body>

</html>`,

  cssCode: `
         /*          Imported Google Font Family Link             */
@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@800&display=swap');
*{
  margin: 0;
  padding: 0;
}

body {
  background-color: #000000;
}

#box{
  display: flex;
  position: absolute;
  top: 263px;
  left: 35vw;
  /* border: 2px solid red; */
}

#me{
  display: flex;
  margin-left: 25px;
}

.alpha{
  color: #FFFFFF;
  font-size: 77px;
  font-family: 'Almarai',sans-serif;
  margin: 4px;
}

.alpha.animated{
  color: #ff6347;
  animation: ani 0.7s ease-in-out 1;
}

@keyframes ani {
  0%{
    transform: scale(1.2,0.5);
  }
  16%{
    transform: scale(1.2,0.5);
  }
  25%{
    transform: scale(1.2,0.5);
  }
  32%{
    transform: scale(0.8,1.1);
  }
  48%{
    transform: scale(0.95,1);
  }
  64%{
    transform: scale(0.8,1.2);
  }
  80%{
    transform: scale(1.15,1);
  }
  87%{
    transform: scale(1.15,1);
  }
  90%{
    /* This will add the shaking effect one time almost at the end   */
    transform: scale(0.8,1);
  }
  95%{
    transform: scale(1.05,1);
  }
  100%{
    transform: scale(1,1);
  }
}
`,
};

export default config;
