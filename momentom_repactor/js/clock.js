(function(){
const clockContainer = document.querySelector(".clock-container");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    timeSet(date);
}

function timeSet(date){
    const hours = date.getHours();
    const minutes = date.getMinutes();

    if(hours < 12){
        clockTitle.innerText = `${hours}:${minutes < 10? `0${minutes}`:minutes}`;
    }else if(hours === 12){
        clockTitle.innerText = `${hours}:${minutes < 10? `0${minutes}`:minutes}`;
    }else{
        let currentHours = hours;
        currentHours = hours - 12;
        clockTitle.innerText = `${currentHours}:${minutes < 10 ? `0${minutes}`:minutes}`;
    }
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();})();
