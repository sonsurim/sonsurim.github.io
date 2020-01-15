const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const textForm = document.querySelector('form');
const inputWidth = document.querySelector('.width');
const inputHeight = document.querySelector('.height');
const inputCheck = document.querySelector('.checkbox');
const inputText = textForm.querySelector('input');
const selectElem = document.querySelector('select');
const defaultPalette = document.querySelector('.default-palette');
const paletteModal = document.querySelector('.palette-modal');
const clearBtn = document.querySelector('.clear');
const downloadBtn = document.querySelector('.download');

const canvasObj = {
    visible : false,
    checked : true,
    width : '800',
    height : '300',
    bgColor : '#2d98da',
    fontSize : 40,
    fontColor : '#fff',
};

function setBgColor(){
    ctx.fillStyle = canvasObj.bgColor;
    ctx.fillRect(0,0,canvasObj.width,canvasObj.height);
    setText();
};
function setSize(){
    canvas.width = canvasObj.width;
    canvas.height = canvasObj.height;
    setBgColor();
};
function setText(){
    ctx.font = `${canvasObj.fontSize}px Arial`;
    ctx.fillStyle = canvasObj.fontColor;
    ctx.textBaseline = 'middle';
    ctx.textAlign = "center";
    ctx.fillText(inputText.value, canvasObj.width/2, canvasObj.height/2);
};

/* event Handler */
function setClearHandler(){
    canvasObj.bgColor = '#2d98da';
    ctx.fillStyle = canvasObj.bgColor;
    ctx.fillRect(0,0,canvasObj.width,canvasObj.height);
    inputText.value ="";
};
function defaultPaletteHandler(e){
    const defaultColors = document.querySelectorAll('.default-colors');

    if(e.target !== defaultColors[9]){  // ect color는 따로 배경색을 지정해두지 않아서
        if(canvasObj.checked === true){
            defaultColors.forEach(elem => {
                if(e.target === elem){
                    canvasObj.bgColor = elem.style.backgroundColor;
                }
            });
            setBgColor();
        }else if(canvasObj.checked !== true){
            defaultColors.forEach(elem => {
                if(e.target === elem){
                    canvasObj.fontColor = elem.style.backgroundColor;
                }
            });
            setBgColor();
        };
    };
};
function paletteModalHandler(e){
    const colors = document.querySelectorAll('.colors');

    if(canvasObj.checked === true){
        colors.forEach(elem => {
            if(e.target === elem){
                canvasObj.bgColor = elem.style.backgroundColor;
            };
        });
        setBgColor();
    }else if(canvasObj.checked !== true){
        colors.forEach(elem => {
            if(e.target === elem){
                canvasObj.fontColor = elem.style.backgroundColor;
            };
        });
        setBgColor();   // 기존 텍스트 지우는 역할
    };
};
function switchHandler(e){
    const font = document.querySelector('.icon-fontsize');
    const brush = document.querySelector('.icon-brush');

    canvasObj.checked = !canvasObj.checked;

    if(canvasObj.checked){
        inputCheck.classList.add('checked');
        font.classList.remove('showing');
        brush.classList.add('showing');
    }else if(!canvasObj.checked){
        inputCheck.classList.remove('checked');
        brush.classList.remove('showing');
        font.classList.add('showing');
    };
};
function downloadHandler(){
    const image = canvas.toDataURL();
    const link = document.createElement("a");

    link.href = image;
    link.download = inputText.value;
    link.click();
};
function popModalHandler(e){
    const defaultColors = document.querySelectorAll('.default-colors');

    if(e.target === defaultColors[9]){
        canvasObj.visible = !canvasObj.visible;

        if(canvasObj.visible){
            paletteModal.classList.add('showing');
        }else if(!canvasObj.visible){
            paletteModal.classList.remove('showing');
        }
    }else{
        canvasObj.visible = false;
        paletteModal.classList.remove('showing');
    }
};

function specialChar() {
    let pattern_spc = /[.]/;

    if( (pattern_spc.test(inputText.value))) {
        alert("마침표는 사용이 불가능 합니다!");
        inputText.value = inputText.value.replace(".","");
    }

}

function init(){
    document.addEventListener('click', popModalHandler);
    defaultPalette.addEventListener('click', defaultPaletteHandler);
    paletteModal.addEventListener('click', paletteModalHandler);
    inputCheck.addEventListener('click', switchHandler);
    clearBtn.addEventListener('click', setClearHandler);
    downloadBtn.addEventListener('click', downloadHandler);

    inputWidth.addEventListener('keyup', function(){
        canvasObj.width = this.value;
        setSize();
    });
    inputHeight.addEventListener('keyup', function(){
        canvasObj.height = this.value;
        setSize();
    });
    textForm.addEventListener('submit', function(e){
        e.preventDefault();
        setBgColor();
    });
    selectElem.addEventListener('change', function(e){
        canvasObj.fontSize = e.target.value;
        setBgColor();
    });

    setSize();
};

init();