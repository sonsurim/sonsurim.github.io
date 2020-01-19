const header = document.querySelector('.header');

let currentWidth;

function appendHeader(){
    if(currentWidth < 1200){
        createHeader();
    }else{
        createHeaderPc();
    }
}
function createHeader(){
    header.innerHTML=`<div><i class="icon-menu"></i></div>
    <div><img src="./img/logo-black.svg" alt="Logo"></div>
    <div><img src="./img/icon-user.svg" alt = "user"></div>`;
    header.classList.remove('header-pc');
    header.classList.add('header');
}
function createHeaderPc(){
    header.innerHTML=`<div class="header-logo">
    <img src="./img/logo-black.svg" alt="Logo">
    </div>
    <ul class="header-list">
    <li>인기</li>
    <li>최신</li>
    <li>섹션</li>
    <li>프라임</li>
    <li><img src="./img/icon-user.svg" alt = "user"></li>
    </ul>`;
    header.classList.remove('header');
    header.classList.add('header-pc');
}
function resizeHandler(e){
    currentWidth = e.target.innerWidth;
    appendHeader();
}



function init(){
    currentWidth = window.innerWidth;
    window.addEventListener('resize', resizeHandler);
    appendHeader();
}

init();