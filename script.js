const appKey = "f24f40b1c24505685fce3b8acd0fcffc";

$("#search-btnn").click(function () {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(callAPI);
  } else {
      alert("this browser not support location");
  }
});

function theResponse(response) {
  $("#city-name").html(response.name);
  $("#cloud-img").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
  $("#temp").html((response.main.temp - 273).toFixed(1) + "°");
  $("#humidity-div").html(response.main.humidity + "%");
  $("#status").html(response.weather[0].description);
}

function callAPI(position) {
  let searchLink = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${appKey}`;
  $.ajax({
    type: "GET",
    url: searchLink,
    data: {},
    success: function (result) {
      theResponse(result)
    },
    error: function (error) {
      alert(JSON.parse(error.responseText).message);
    }
  });
}
