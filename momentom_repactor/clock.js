const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    timeSet(date);
}

function timeSet(date){
    const hours = date.getHours();
    const minutes = date.getMinutes();

    if(hours < 12){ //오전인 경우 (아침~낮)
        clockTitle.innerText = `${hours}:${minutes < 10? `0${minutes}`:minutes}`;
    }else if(hours === 12){ //자정인 경우 (밤 12시)
        clockTitle.innerText = `${hours}:${minutes < 10? `0${minutes}`:minutes}`;
    }else{ //오후인 경우 (낮~밤)
        let currentHours = hours;
        currentHours = hours - 12;
        clockTitle.innerText = `${currentHours}:${minutes < 10 ? `0${minutes}`:minutes}`;
    }
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();

