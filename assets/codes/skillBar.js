export const config = {
  htmlCode: `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skill Bar Animation on Scroll</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</head>

<body>

    <div id="scrollbar"></div>
    <div id="progressbar"></div>

    <div id="cont1">
        <div id="boxx">CodeXpool</div>
    </div>

    <div id="cont2">

        <div id="headskill">Skills</div>
        <div class="skillbox">
            <p class="sk">HTML</p>
            <div class="container" data-aos="fade-right">
                <div class="htmlbar bars" id="htBar">90%</div>
                <div class="progress-line1 html">
                    <span></span>
                </div>
            </div>



            <p class="sk">CSS</p>
            <div class="container" data-aos="fade-right">
                <div class="cssbar bars" id="csBar">80%
                </div>
                <div class="progress-line2 css">
                    <span></span>
                </div>
            </div>




            <p class="sk">JavaScript</p>
            <div class="container" data-aos="fade-right">
                <div class="jsbar bars" id="jsBar">65%</div>
                <div class="progress-line3 js">
                    <span></span>
                </div>
            </div>


            <p class="sk">Node.js</p>
            <div class="container" data-aos="fade-right">
                <div class="nodejsbar bars" id="nodeBar">60%</div>
                <div class="progress-line4 nodejs">
                    <span></span>
                </div>
            </div>



            <p class="sk">Express.js</p>
            <div class="container" data-aos="fade-right">
                <div class="expressbar bars" id="expressBar">60%</div>
                <div class="progress-line5 express">
                    <span></span>
                </div>
            </div>




            <p class="sk">MongoDB</p>
            <div class="container" data-aos="fade-right">
                <div class="mongodbbar bars" id="mongodbBar">70%</div>
                <div class="progress-line6 mongodb">
                    <span></span>
                </div>
            </div>



        </div>

    </div>

    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
        AOS.init({
            duration: 1500
        });
    </script>

    <script>
        let progress = document.getElementById('progressbar');
        window.onscroll = function () {
            let totalHeight = document.body.scrollHeight + window.innerHeight;
            let progressHeight = (window.pageYOffset / totalHeight) * 28.1;
            progress.style.display = 'revert';
            progress.style.height = progressHeight + "%";
            let flowBar1 = document.getElementById('htBar');
            let flowBar2 = document.getElementById('csBar');
            let flowBar3 = document.getElementById('jsBar');
            let flowBar4 = document.getElementById('nodeBar');
            let flowBar5 = document.getElementById('expressBar');
            let flowBar6 = document.getElementById('mongodbBar');
            if (progressHeight > 5) {

                flowBar1.style.animationName = 'animateskillbar11';
                flowBar2.style.animationName = 'animateskillbar22';
                flowBar3.style.animationName = 'animateskillbar33';
                flowBar4.style.animationName = 'animateskillbar44';
                flowBar5.style.animationName = 'animateskillbar55';
                flowBar6.style.animationName = 'animateskillbar66';
            }
            else {
                flowBar1.style.animationName = 'animateskillbar1';
                flowBar2.style.animationName = 'animateskillbar2';
                flowBar3.style.animationName = 'animateskillbar3';
                flowBar4.style.animationName = 'animateskillbar4';
                flowBar5.style.animationName = 'animateskillbar5';
                flowBar6.style.animationName = 'animateskillbar6';
            }

        }
    </script>
</body>

</html>`,

  cssCode: `
      @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: #000000;
}
body::-webkit-scrollbar {
    display: none;
  }

#boxx {
    position: absolute;
    top: 202px;
    left: 37vw;
    font-size: 78px;
    color: #ff6347;
}

#scrollbar{
    position: fixed;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    z-index: 100;
    background: rgba(255, 255, 255,0.05);
}
 
#progressbar{
    position: fixed;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    z-index: 100;
    display: none;
    background: #00FFFF;
}
  
@keyframes ani{
    0%{
      filter: hue-rotate(0deg);
    }
    50%{
      filter: hue-rotate(360deg);
    }
    100%{
      filter: hue-rotate(0deg);
    }
}
  
#progressbar::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ff6347;
}
#progressbar::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ff6347;
}

#cont1{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 580px;
    background-color: 	#00FFFF;
}

#cont2{
    position: absolute;
    top: 575px;
    width: 100vw;
    height: 300%;
    background-color: #000000;
}


#headskill{
    position: absolute;
    top:12px;
    left: 2px;
    font-size:86px;
    color: #00FFFF;
    font-family: 'Sacramento', cursive;
}


.skillbox {
    position: relative;
    top: 275px;
    width: 59%;
    left: 22vw;
    display: inline-block;
}
  
  @media screen and (max-width: 651px){
    .skillbox{
      top: 415px;
      width: 100%;
      left: 0vw;
    }
  }
  @media screen and (max-width: 396px){
    .skillbox{
      top: 415px;
      width: 100%;
    }
  
    }
  
#mysk{
    position: absolute;
    top: 12px;
    left: 9px;
    color:	#00FFFF;
    font-size: 52px;
    font-family: 'Sacramento', cursive;
    letter-spacing: 1px;
  }
  

  
#skillhr {
    display: inline-block;
    position: absolute;
    left: 2px;
    top: 72px;
    width: 148px;
    height: 0.7px;
    border-width: 0;
    color:#00FFFF ;
    background-color: #00FFFF;
    text-decoration: underline over;
  }
  
  .skillbox p{
    margin-left: 45px;
    font-size: 24px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .container {
    margin-left: 45px;
    width: 80%;
    height: 5px;
    background-color: #ffffff;
    border-radius:15px;
    margin-bottom: 35px;
  }
  
  
#htBar {
    width: 0%;
    height: 5px; 
    border-radius: 15px;
    font-size: 4px;
    background-color: #00FFFF;
    text-align: right;
    color: #000000;
    animation: animateskillbar1 1s 2s cubic-bezier(1,0,0.5,1) forwards;
  }
  
  @keyframes animateskillbar1{
    0%{
      width: 0%;
    }
    100%{
      width: 0%;
    }
  }
  @keyframes animateskillbar11{
    0%{
      width: 0%;
    }
    100%{
      width: 90%;
    }
  }

 
  #csBar{
    width: 0%;
    height: 5px; 
    border-radius: 15px;
    font-size: 4px;
    background-color: #00FFFF;
    text-align: right;
    color: #000000;
    animation: animateskillbar2 1s 2s cubic-bezier(1,0,0.5,1) forwards;
  }
  @keyframes animateskillbar22{
    0%{
      width: 0%;
    }
    100%{
      width: 80%;
    }
  }
  @keyframes animateskillbar2{
    0%{
      width: 0%;
    }
    100%{
      width: 0%;
    }
  }
  
  
  #jsBar{
    width: 0%;
    height: 5px; 
    border-radius: 15px;
    font-size: 4px;
    background-color: #00FFFF;
    text-align: right;
    color: #000000;
    animation: animateskillbar3 1s 2s cubic-bezier(1,0,0.5,1) forwards;
    }
    @keyframes animateskillbar33{
      0%{
        width: 0%;
      }
      100%{
        width: 65%;
      }
    }
    @keyframes animateskillbar3{
      0%{
        width: 0%;
      }
      100%{
        width: 0%;
      }
    }
    

  #nodeBar{
    width: 0%; 
    height: 5px; 
    border-radius: 15px;
    font-size: 4px;
    background-color: #00FFFF;
    text-align: right;
    color: #000000;
    animation: animateskillbar4 1s 2s cubic-bezier(1,0,0.5,1) forwards;
  }
  @keyframes animateskillbar44{
    0%{
      width: 0%;
    }
    100%{
      width: 60%;
    }
  }
  @keyframes animateskillbar4{
    0%{
      width: 0%;
    }
    100%{
      width: 0%;
    }
  }
  
  #expressBar{
    width: 0%;
    height: 5px; 
    border-radius: 15px;
    font-size: 4px;
    background-color: #00FFFF;
    text-align: right;
    color: #000000;
    animation: animateskillbar5 1s 2s cubic-bezier(1,0,0.5,1) forwards;
  }
  @keyframes animateskillbar55{
    0%{
      width: 0%;
    }
    100%{
      width: 60%;
    }
  }
  @keyframes animateskillbar5{
    0%{
      width: 0%;
    }
    100%{
      width: 0%;
    }
  }
  
  #mongodbBar{
    width: 0%;
    height:5px; 
    border-radius: 15px;
    font-size: 4px;
    background-color: #00FFFF;
    text-align: right;
    color: #000000;
    animation: animateskillbar6 1s 2s cubic-bezier(1,0,0.5,1) forwards;
    }
    @keyframes animateskillbar66{
      0%{
        width: 0%;
      }
      100%{
        width: 70%;
      }
    }
    @keyframes animateskillbar6{
      0%{
        width: 0%;
      }
      100%{
        width: 0%;
      }
    }
  
  
.sk{
    color: #ff6347;
}
  
.sk:hover{
    color: #00FFFF;
}`,
};

export default config;
