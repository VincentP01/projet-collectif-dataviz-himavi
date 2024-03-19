fetch('https://www.weatherapi.com?tokenb421f3bfe4f34d26988154753241803') // fetch ( + ?token+clé si c'est privé)
    .then(response => response.json())      // then
    .then(data => {
        console.log(data)
        data.forEach(food => {
            const foodDiv = document.createElement("div");
            foodDiv.classList.add('food');            // classList est pour ajouter une classe.
            foodDiv.innerHTML = `
        <img src ="${food.image}" />
        <h2>${food.name}</h2>
        <p>${food.house}</p>
        `;
            document.getElementById("dishes").appendChild(foodDiv)
        });
    })
