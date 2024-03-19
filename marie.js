<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>METEO</title>
  </head>
  <style>
    #characters {
      display: flex;
      flex-wrap: wrap;
    }
    .character {
      border: 1px solid red;
      padding: 20px;
    }s
  </style>
  <body>
    <div id="characters"></div>

    <script>
      fetch("https://hp-api.onrender.com/api/characters")
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // à retirer car on sait que c'est un tableau avec des objets
          data.forEach((personnage) => {
            const characterDiv = document.createElement("div");
            characterDiv.classList.add("character");
            characterDiv.innerHTML = `
                    <img src="${personnage.image}"/>
                    <h2>${personnage.name}</h2>
                    `;
            document.getElementById("characters").appendChild(characterDiv);
          });
        });
    </script>
  </body>
</html>




