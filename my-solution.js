
async function getPokemon(name) {
    // request that pokemon from PokeAPI
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) throw new Error(response.status);
        else {
            let fetchedPoke = await response.json();
            const heading = document.createElement("h2");
            heading.textContent = fetchedPoke.name;
            const image = document.createElement("img");
            image.src = fetchedPoke.sprites.front_default;
            image.alt = "";
            output.appendChild(heading);
            output.appendChild(image);
        }
    }
    catch (error) {
        if (error.message === "404") {
            output.textContent = `⚠️ Couldn't find "${name}"`;
        } else {
            output.textContent = "⚠️ Something went wrong";
        }

    }

}