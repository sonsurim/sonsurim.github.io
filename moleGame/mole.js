const startBtn = document.querySelector('.start-btn');

let count = 0;
let isPlay = false;
let turn = 0;

let ranNum;
let preNum;
let moleNum;

function catchMole() {
    moleAgain();
    clearTimeout(missMole);
    count ++;
    const span = document.querySelector('.count');
    span.textContent = `${count}`;
}

function moleActive(moleNum){
    moleNum.addEventListener('click', catchMole);
    moleNum.classList.add('active');
}

function moleInactive(moleNum){
    moleNum.removeEventListener('click', catchMole);
    moleNum.classList.remove('active');
}

function countReset(){
    turn = 0;
    count = 0;
    const span = document.querySelector('.count');
    span.textContent = `${count}`;
    startBtn.disabled = false;
    startBtn.classList.remove('btn-active');
}

function modalPop(){
    const modal = document.querySelector('.modal');
    const modalCount = modal.querySelector('.modal-count');
    modalCount.textContent = `${count}0`;
    modal.classList.add('active');

    setTimeout(function(){
        modal.classList.remove('active');
        countReset();
    }, 3000);
}

function getRanNum() {
    ranNum = Math.floor(Math.random() * 9);
    if ( preNum !== ranNum ) {
        preNum = ranNum;
        return ranNum;
    }else{
        return getRanNum();
    }
};

function moleAgain(){
    if(turn === 10){
        isPlay = false;
        moleInactive(moleNum);
        clearTimeout(missMole);

        setTimeout(function(){
            modalPop();
        }, 800)
    }else{
        moleInactive(moleNum);
        clearTimeout(missMole);

        setTimeout(function(){
            startGame();
        }, 1000);
    }
};

function startGame(){
    if (turn < 10){
        moleNum = document.getElementById(`${getRanNum()}`);
        moleActive(moleNum);
        missMole = setTimeout(moleAgain, 3000);

        turn++;
    };
};

startBtn.addEventListener('click', function(){
    isPlay = !isPlay;

    if(isPlay && count === 0){
        startBtn.classList.add('btn-active');
        startBtn.disabled = 'disabled';
        setTimeout(function(){
            startGame();
        }, 1000);
    }else{
        startBtn.disabled = false;
    }
});