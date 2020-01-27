const fomula = document.querySelector('#fomula');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

let currentValue;
let result;

function calc(){
    currentValue = currentValue.replace(/x/g,'*');
    currentValue = currentValue.substr(0, currentValue.length -1);
    result = eval(currentValue);
    fomula.textContent = result;
}

function outputHandler(e){
    li.forEach(elem => {
        if(e.target === elem){
            currentValue = fomula.textContent + elem.textContent;
            fomula.textContent = currentValue;
        }
    });

    if(e.target === li[3]){
        fomula.textContent ="";
        currentValue = "";
    }else if(e.target === li[15]){
        calc();
        currentValue = "";
    }
}

ul.addEventListener('click',outputHandler);