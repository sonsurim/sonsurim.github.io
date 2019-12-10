const greetingFirst = document.querySelector(".js-greeting-1");
const greetingForm = document.querySelector(".js-greeting-form");
const greetingInput = greetingForm.querySelector("input");
const greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

// ect
const greetingToDo = document.querySelector(".js-todo");
const greetingToDoForm = document.querySelector(".js-todo-form");
const greetingBody = document.querySelector("body");

const greetingClock = document.querySelector(".js-clock");
const greetingWeather = document.querySelector(".js-weather")
const greetingPlace = document.querySelector(".js-place")
// ect

// etc function
function greetingTime(){
    const date = new Date();
    const hours = date.getHours();
    const currentUser = localStorage.getItem(USER_LS);

    if(hours < 12){ // 오전인 경우
        greeting.innerText = `Good Morning, ${currentUser}.`;
    }else if(hours === 12){ //오후 12시인 경우
        greeting.innerText = `Good AfterNoon, ${currentUser}.`;
    }else{
        greeting.innerText = `Good AfterNoon, ${currentUser}.`;
    }
}

function greetingToDoPaint(){
    greetingToDo.classList.add(SHOWING_CN);
    greetingToDoForm.classList.add(SHOWING_CN);
    const toDoScript = document.createElement("script");
    toDoScript.src = "todo.js";
    greetingBody.appendChild(toDoScript);
}

function greetingClockPaint(){
    greetingClock.classList.add(SHOWING_CN);
    const clockScript = document.createElement("script");
    clockScript.src = "clock.js";
    greetingBody.appendChild(clockScript);
}

function greetingWeatherPaint(){
    greetingWeather.classList.add(SHOWING_CN);
    greetingPlace.classList.add(SHOWING_CN);
}
// etc function

function saveName(text){
    localStorage.setItem(USER_LS,text);
}


function paintName(text){
    greetingForm.classList.remove(SHOWING_CN);
    greetingFirst.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    saveName(text);
    greetingTime(Text);
    setInterval(greetingTime, 1000);
}

function submitHandler(event){
    event.preventDefault();
    const currentValue = greetingInput.value;
    paintName(currentValue);
    saveName(currentValue);
    greetingToDoPaint();
    greetingClockPaint();
    greetingWeatherPaint();
}

function askForName(){
    greetingForm.classList.add(SHOWING_CN);
    greetingFirst.classList.add(SHOWING_CN);
    greetingForm.addEventListener("submit",submitHandler);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintName(currentUser);
        greetingToDoPaint();
        greetingClockPaint();
        greetingWeatherPaint();
    }

}

function init(){
    loadName();
}

init();
