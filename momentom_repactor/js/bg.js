const body = document.querySelector("body");

const IMG_NUMBER = 2;

function paintNumber(imageNumber){
    body.style.backgroundImage = `url(img/${imageNumber + 1}.png)`;
    body.classList.add("bgimg");
}

function getRanNumber(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = getRanNumber();
    paintNumber(randomNumber);
}

init();