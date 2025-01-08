const apiKey = "078499cc5c2f1236ae0a02807e7228b7";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox1 = document.querySelector(".inpt");
const searchBtn = document.querySelector(".search button");
const weatherIcone = document.querySelector(".weather-icon");

async function checkWeather(city) { 
  let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block"; 
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcone.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcone.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcone.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcone.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcone.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox1.value);
});


