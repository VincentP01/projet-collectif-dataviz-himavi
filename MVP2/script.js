//L'API Fetch (en anglais, le verbe fetch signifie récupérer) fournit une interface JavaScript pour accéder et manipuler certaines parties du protocole, comme les requêtes et les réponses.
//Elle fournit également une méthode globale fetch() qui permet un accès pratique aux ressources récupérées de façon asynchrone sur le réseau.

//etappe 1 : API
const apiKey = "0d25d8930adb2107b9b213b3a14dbc25";
const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

// fonction + class

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherImages = [
    "url('./background/ClearPicture1.jpg')",
    "url('./background/ClearPicture2.jpg')",
    "url('./background/CloudsPicture1.jpg')",
    "url('./background/CloudsPicture2.jpg')",
    "url('./background/DrizzlePicture1.jpg')",
    "url('./background/DrizzlePicture2.jpg')",
    "url('./background/RainPicture1.jpg')",
    "url('./background/RainPicture2.jpg')",
    "url('./background/SnowPicture1.jpg')",
    "url('./background/SnowPicture2.jpg')",
]

// function imageInArray(min, max) {
//     Math.floor(Math.random(weatherImages.length))
// }

function imageInArray(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
console.log(weatherImages[imageInArray(0, 3)])


// const multiColorPictures = document.querySelector(".multiColor-pictures");
// const clearBackground = (document.body.style.backgroundImage = "url(/background/RainbowPicture1.jpg)"); // url(/background/ClearPicture2.jpg)

//test de verification dans la console
console.log("hello");

// fonction asynchrone qui attends la promesse de l'api ???
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`); //promesse? appel de l'API?

    // conditions si nom de ville invalide alors afficher
    // erreur
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

        // nom de ville valide donc affiche icones et pictures
    } else {
        let data = await response.json();

        console.log(data.weather);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =
            Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
            document.getElementById("background").style.backgroundImage =
                weatherImages[imageInArray(2, 4)];
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
            {
                document.getElementById("background").style.backgroundImage =
                    weatherImages[imageInArray(0, 2)];
            }
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
            {
                document.getElementById("background").style.backgroundImage =
                    weatherImages[imageInArray(4, 6)];
            }
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
            {
                document.getElementById("background").style.backgroundImage =
                    weatherImages[imageInArray(4, 6)];
            }
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";

            {
                document.getElementById("background").style.backgroundImage =
                    weatherImages[imageInArray(6, 8)];
            }
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
            {
                document.getElementById("background").style.backgroundImage =
                    weatherImages[imageInArray(8, 10)];
            }
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

let clickButton = searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
let pressTouch = searchBox.addEventListener("keydown", (event) => {
    //KeyboardEvent: key='Enter' | code='Enter'
    if (event.isComposing || event.keyCode === 13) checkWeather(searchBox.value);
});


checkWeather();