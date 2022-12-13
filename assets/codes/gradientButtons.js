export const config = {
  htmlCode: `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Button</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="button">
        <button class="button__follow-btn"><span>FOLLOW</span></button>
        <button class="button__launch-btn"><span>LAUNCH NOW</span></button>
        <button class="button__subscribe-btn">SUBSCRIBE</button>
    </div>
</body>

</html>`,
  cssCode: `
* {
    margin: 0;
    padding: 0;
}

.button {
    position: relative;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000000;
}

.button button {
    font-size: 1.5em;
    color: #ffffff;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 0.5em;
    border: 0.15em solid transparent;
}

.button button:hover {
    border: 0.2em solid transparent;
}

/* Follow Button styling  */
.button__follow-btn {
    padding: 0.7em 3.2em;
    background: linear-gradient(to right, #f37335, #fdc830) padding-box, linear-gradient(to right, #fdc830, #f37335) border-box;
}

.button__follow-btn:hover {
    background: linear-gradient(#000, #000) padding-box, linear-gradient(45deg, #f37335, #fdc830) border-box;
}

.button__follow-btn:hover span {
    background: linear-gradient(to right, #f37335, #fdc830) padding-box, linear-gradient(to right, #fdc830, #f37335) border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Launch button styling  */
.button__launch-btn {
    padding: 0.7em 2.1em;
    margin-top: 50px;
    margin-bottom: 50px;
    background: linear-gradient(#000000, #000000) padding-box, linear-gradient(45deg, #e96443, #904e95) border-box;
}

.button__launch-btn span {
    background: linear-gradient(to right, #904e95, #e96443) padding-box, linear-gradient(to right, #e96443, #904e95) border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.button__launch-btn:hover {
    background: linear-gradient(to right, #904e95, #e96443) padding-box, linear-gradient(to right, #e96443, #904e95) border-box;
}

.button__launch-btn:hover span {
    color: #ffffff;
    background: none;
    -webkit-text-fill-color: #ffffff;
    background-clip: unset;
}

/* Subscribe button styling  */
.button__subscribe-btn {
    padding: 0.7em 2.6em;
    background: linear-gradient(to right, #11998e, #38ef7d) padding-box,
        linear-gradient(to right, #38ef7d, #11998e) border-box
}`,
};

export default config;
