const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const textForm = document.querySelector('form');
const inputWidth = document.querySelector('.width');
const inputHeight = document.querySelector('.height');
const inputCheck = document.querySelector('.checkbox');
const inputText = textForm.querySelector('input');
const selectElem = document.querySelector('select');
const defaultPalette = document.querySelector('.default-palette');
const colorPalette = document.querySelector('.color-palette');
const clearBtn = document.querySelector('.clear');
const downloadBtn = document.querySelector('.download');

const canvasObj = {
    width : '800',
    height : '300',
    bgColor : '#2d98da',
    textColor : '#fff',
    fontSize : 40,
    checked : true,
    visible : false
};


function setBgColor(){
    ctx.fillStyle = canvasObj.bgColor;
    ctx.fillRect(0,0,canvasObj.width,canvasObj.height);
    setText();
}


function setSize(){
    canvas.width = canvasObj.width;
    canvas.height = canvasObj.height;
    setBgColor();
}

function setText(){
    ctx.font = `${canvasObj.fontSize}px Arial`;
    ctx.fillStyle = canvasObj.textColor;
    ctx.textBaseline = 'middle';
    ctx.textAlign = "center";
    ctx.fillText(inputText.value, canvasObj.width/2, canvasObj.height/2);
}

function setClear(){
    canvasObj.bgColor = '#2d98da';
    ctx.fillStyle = canvasObj.bgColor;
    ctx.fillRect(0,0,canvasObj.width,canvasObj.height);
    inputText.value ="";
}

function defaultPaletteHandler(e){
    const defaultColors = document.querySelectorAll('.default-colors');
    if(e.target !== defaultColors[9]){
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
                    canvasObj.textColor = elem.style.backgroundColor;
                }
            });

            setBgColor();
            setText();
        }
    }
}

function colorPaletteHandler(e){
    const colors = document.querySelectorAll('.colors');

    if(canvasObj.checked === true){
        colors.forEach(elem => {
            if(e.target === elem){
                canvasObj.bgColor = elem.style.backgroundColor;
            }
        });

        setBgColor();

    }else if(canvasObj.checked !== true){
        colors.forEach(elem => {
            if(e.target === elem){
                canvasObj.textColor = elem.style.backgroundColor;
            }
        });

        setBgColor();
        setText();
    }
}

function fontSizeHandler(e){
    canvasObj.fontSize = e.target.value;
    setBgColor();
    setText();
}

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
    }
}

function submitHandler(e){
    e.preventDefault();
    setBgColor();
    setText();
}

function downloadHandler(){
    const image = canvas.toDataURL();
    const link = document.createElement("a");

    link.href = image;
    link.execCommand('SaveAs');
    link.download = "thumbnail";
    link.click();
}

function init(){
    inputWidth.addEventListener('keyup', function(){
        canvasObj.width = this.value;
        setSize();
    });
    inputHeight.addEventListener('keyup', function(){
        canvasObj.height = this.value;
        setSize();
    });
    textForm.addEventListener('submit', submitHandler);
    selectElem.addEventListener('change', fontSizeHandler);
    clearBtn.addEventListener('click', setClear);
    downloadBtn.addEventListener('click', downloadHandler);

    document.addEventListener('click', function(e){
        const defaultColors = document.querySelectorAll('.default-colors');

        if(e.target === defaultColors[9]){
            canvasObj.visible = !canvasObj.visible;

            if(canvasObj.visible){
                colorPalette.classList.add('showing');
            }else if(!canvasObj.visible){
                colorPalette.classList.remove('showing');
            }
        }else{
            canvasObj.visible = false;
            colorPalette.classList.remove('showing');
        }
    });

    defaultPalette.addEventListener('click', defaultPaletteHandler);
    colorPalette.addEventListener('click', colorPaletteHandler);
    inputCheck.addEventListener('click', switchHandler);

    setSize();
    setBgColor();
};

init();