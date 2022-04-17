const API_KEY = "1318d93d32d1c9af2a53f1ae1eab3e3e";

// 제대로 실행되었을 때
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}

// 에러가 발생했을 때
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

// 위치 정보를 얻는 함수
// 각 인자는 '제대로 실행되었을 때, 에러가 발생했을 때' 실행 될 함수를 나타냄
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);