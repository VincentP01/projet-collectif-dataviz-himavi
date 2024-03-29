const apiKey = "0d25d8930adb2107b9b213b3a14dbc25";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const weatherBackground = document.querySelector("#background");

// const clearBackground = document.body.style.backgroundImage = "url(/background/ClearPicture1.jpg)"; //, url(/background/ClearPicture2.jpg)
// // document.getElementById(".background").style.background = "url(/background/ClearPicture1.jpg)";

// const drizzleBackground = [uzefgzuyfg.jpg, sdjcgfg.jpg]
// const mistBackground = [uzefgzuyfg.jpg, sdjcgfg.jpg]
// const rainBackground = [uzefgzuyfg.jpg, sdjcgfg.jpg]
// const snowBackground = [uzefgzuyfg.jpg, sdjcgfg.jpg]
// console.log(clearBackground[0])


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

        let currentWeatherBackground = weatherBackground.classList[0]

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
            //modifier la classe de l'élément
            weatherBackground.classList.replace(currentWeatherBackground, "backgroundCloudy");
            // weatherBackground.src = "background/CloudsPicture2.png"
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
            weatherBackground.classList.replace(currentWeatherBackground, "backgroundSunny");
            //imagebeautemps.src = Math.floor(Math.random() * 6 + 1)+'.jpg';
            //document.querySelector(".background").innerHTML = clearBackground[0];
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
            weatherBackground.classList.replace(currentWeatherBackground, "backgroundDrizzly");
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
            weatherBackground.classList.replace(currentWeatherBackground, "backgroundMisty");
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
            weatherBackground.classList.replace(currentWeatherBackground, "backgroundRainy");
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
            weatherBackground.classList.replace(currentWeatherBackground, "backgroundSnowy");
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none";

    }
}

let clickButton = searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
let pressTouch = searchBox.addEventListener("keydown", (event) => {
    if (event.isComposing || event.keyCode === 13) checkWeather(searchBox.value);
})

// KeyboardEvent: key='Enter' | code='Enter'

// if (event.type === "click" || (event.type === "keypress" && event.key === "Enter")) {
//     // Empêcher le rechargement de la page (si le bouton est dans un formulaire)
//     event.preventDefault();
// }
// jQuery(function ($) {
//     let t = ${('#test');
//     t.on('keyup', function (e) {
//         if (e.keyCode == 13)
//     });
// });


checkWeather()
