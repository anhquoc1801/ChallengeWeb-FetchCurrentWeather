




const appKey = "f24f40b1c24505685fce3b8acd0fcffc";

let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity-div");
let status = document.getElementById("status");


$("#search-btnn").click(function () {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(callAPI);
  } else {
      alert("this browser not support location");
  }
});

function theResponse(response) {
  cityName.innerHTML = response.name;
  icon.src = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
  temperature.innerHTML = (response.main.temp - 273).toFixed(1) + "°";
  humidity.innerHTML = response.main.humidity + "%";
  status.innerHTML = response.weather[0].description;
}

function callAPI(position) {
  let searchLink = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${appKey}`;
  $.ajax({
    url: searchLink,
    success: function (result) {
      return theResponse(result)
    }
  });
}
