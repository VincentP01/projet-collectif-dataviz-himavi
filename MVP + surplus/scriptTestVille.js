//image de ville API
async function displayCityBackground() {
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Authorization": "Client-ID YABIyIQuHQTgv1dFek4U0CA0YLzI7eCr7HhICkE75f4"
    }

    let response = await fetch("https://api.unsplash.com/search/photos?query={" + searchBox.value + "}", {
        method: "GET",
        headers: headersList
    });

    let data = await response.text(searchBox.value);
    console.log(data);
}

displayCityBackground()