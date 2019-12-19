const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const colorContainer = document.querySelector('.control-colors');
const colors = document.querySelectorAll('.colors');
const range = document.querySelector('input');
const mode = document.querySelector('.fill');
const saveBtn = document.querySelector('.save');

const INITIAL_COLOR = '#2c2c2c';
const CANVAS_SIZE = 500;

ctx.fillStyle = 'white';
ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
//그 선의 너비가 2.5px
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

//canvas에서 마우스를 움직일때 발생
function mousemoveHandler(event){
    const x = event.offsetX;
    const y = event.offsetY;
    //클릭하지 않고 마우스를 움직였을 때에는
    if(!painting){
        //그림이 들어갈 새로운 경로를 만든다
        ctx.beginPath();
        // 마우스의 x,y 좌표로 그 경로를 옮긴다. → 내가 마우스를 움직이는 모든 순간에 경로를 만든다(아직 path를 사용하지 않은 상태)
        ctx.moveTo(x,y);

    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function startPainting(){
    painting = true;
}

function stopPainting(){
    painting = false;
}


function colorClickHandler(e){
    const color = e.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function rangeChangeHandler(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}

function modeClickHandler(){
    if(filling === true){
        filling = false;
        mode.innerText = "FILL";
    }else{
        filling = true;
        mode.innerText = "PAINT";
    }

}

function canvasClickHandler(){
    if(filling){
    ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
    }
}

function rightClickHandler(event){
    event.preventDefault();
}

function saveClickHandler(){
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "paintJS";
    link.click();
}

function init(){
    if(canvas) {
        canvas.addEventListener("mousemove",mousemoveHandler);
        canvas.addEventListener("mousedown",startPainting);
        canvas.addEventListener("mouseleave",stopPainting);
        canvas.addEventListener("mouseup",stopPainting);
        canvas.addEventListener("click",canvasClickHandler);
        canvas.addEventListener("contextmenu",rightClickHandler);
    }
    if(range){
        range.addEventListener("input", rangeChangeHandler);
    }
    if(mode){
        mode.addEventListener("click", modeClickHandler);
    }
    if(saveBtn){
        saveBtn.addEventListener("click", saveClickHandler);
    }

    // Array.from(colors).forEach(color => color.addEventListener("click",colorClickHandler));
    colorContainer.addEventListener('click', colorClickHandler);
}

init();