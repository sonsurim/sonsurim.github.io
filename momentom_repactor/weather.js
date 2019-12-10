const Weather = document.querySelector(".js-weather");
const Place = document.querySelector(".js-place");

const API_KEY = "0c92ab19a0bc881dc06aab13daeb6ed2";
const COORDS_LS = "Coords";


function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json();
    }).then(function(json){
        let temperature = json.main.temp;
        temperature = Math.floor(temperature);
        const place = json.name;
        Weather.innerText = `${temperature}º`;
    });
}

function getPlace(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        Place.innerText = `${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS_LS,JSON.stringify(coordsObj));
}

function geoSuccessHandler(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
    getPlace(latitude,longitude);
}

function geoErrorHandler(){
   alert("사용자의 위치 정보를 허용해주세요.");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(geoSuccessHandler,geoErrorHandler);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS_LS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
        getPlace(parseCoords.latitude,parseCoords.longitude);
    }
}


function init(){
    loadCoords();
}


init();