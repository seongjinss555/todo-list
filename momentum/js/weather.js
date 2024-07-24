const API_KEY = "b8fd15abfe89ff6052481d6a82cafc2e";


function onGeoTrue(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response=> response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoFalse(){
    alert("위치를 찾지 못했습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoTrue,onGeoFalse);
