const apiKey = "0d25d8930adb2107b9b213b3a14dbc25";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=paris";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}l`);
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;

}

checkWeather();