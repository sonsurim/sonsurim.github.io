const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const colorContainer = document.querySelector('.control-colors');
const colors = document.querySelectorAll('.colors');
const range = document.querySelector('input');
const mode = document.querySelector('.fill');
const saveBtn = document.querySelector('.save');

ctx.fillStyle = 'white';
ctx.fillRect(0,0,500,500);
ctx.strokeStyle = '#2c2c2c';
ctx.fillStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function startPainting(){
    painting = true;
}

function stopPainting(){
    painting = false;
}

function init(){
    if(canvas) {
        canvas.addEventListener("click",clickCanvasHandler);
        canvas.addEventListener("mousemove",mousemoveHandler);
        canvas.addEventListener("mousedown",startPainting);
        canvas.addEventListener("mouseleave",stopPainting);
        canvas.addEventListener("mouseup",stopPainting);
        canvas.addEventListener("contextmenu",clickRightHandler);
    }
    if(range){
        range.addEventListener("input", rangeChangeHandler);
    }
    if(mode){
        mode.addEventListener("click", clickModeHandler);
    }
    if(saveBtn){
        saveBtn.addEventListener("click", clickSaveHandler);
    }
    colorContainer.addEventListener('click', clickColorHandler);
}

// event handler
function mousemoveHandler(event){
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function rangeChangeHandler(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}

function clickColorHandler(e){
    const color = e.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function clickModeHandler(){
    if(filling === true){
        filling = false;
        mode.innerText = "FILL";
    }else{
        filling = true;
        mode.innerText = "PAINT";
    }
}

function clickCanvasHandler(){
    if(filling){
        ctx.fillRect(0,0,500,500);
    }
}

function clickRightHandler(event){
    event.preventDefault();
}

function clickSaveHandler(){
    const image = canvas.toDataURL();
    const link = document.createElement("a");

    link.href = image;
    link.download = "paintJS";
    link.click();
}

init();