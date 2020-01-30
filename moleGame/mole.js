let isPlay = false;
let turn = 0;
let count = 0;

let preNum;
let moleNum;

function createMole(){
    for(let i = 0; i < 9; i++){
        const div = $('<div class="hole"></div>');
        const img = $(`<img id = "${i}" class="mole" src="img/mole.png">`);
        div.append(img);
        $('.hole-container').append(div);
    }
}

function moleActive(moleNum){
    moleNum.click(catchMole);
    moleNum.addClass('active');
}

function moleInactive(moleNum){
    moleNum.unbind();
    moleNum.removeClass('active');
}

function countReset(){
    turn = 0;
    count = 0;
    $('.count').html(`${count}`);
    $('.start-btn').disabled = false;
    $('.start-btn').removeClass('btn-active');
}

function modalPop(){
    $('modal-count').html(`${count}0`);
    $('.modal').addClass('active');

    setTimeout(function(){
        $('.modal').removeClass('active');
        countReset();
    }, 3000);
}

function moleAgain(){
    if(turn === 10){
        isPlay = false;
        moleInactive(moleNum);
        clearTimeout(missMole);
        setTimeout(modalPop, 800)
    }else{
        moleInactive(moleNum);
        clearTimeout(missMole);
        setTimeout(startGame, 1000);
    }
};

function catchMole(){
    moleAgain();
    clearTimeout(missMole);
    count ++;
    $('.count').html(`${count}`);
}

function getRanNum(){
    let ranNum = Math.floor(Math.random() * 9);

    if ( preNum !== ranNum ){
        preNum = ranNum;
        return ranNum;
    }else{
        return getRanNum();
    }
}

function startGame(){
    if(turn < 10){
        moleNum = $(`#${getRanNum()}`);
        moleActive(moleNum);
        missMole = setTimeout(moleAgain, 3000);

        turn++;
    }
}

function init(){
    createMole();

    $('.start-btn').click(function(){
        isPlay = !isPlay;

        if(isPlay && count === 0){
            $('.start-btn').addClass('btn-active');
            $('.start-btn').disabled = 'disabled';
            setTimeout(startGame,1000);
        }else{
            $('.start-btn').disabled = false;
        }

    });
}

init();