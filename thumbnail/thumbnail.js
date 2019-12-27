const slide = document.querySelector('.switch');
const check = slide.querySelector('input');

let checkValue = false;

check.addEventListener('click',function(e){
    checkValue = !checkValue;
    console.log(checkValue);
})