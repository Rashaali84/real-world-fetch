//get access to
const form = document.querySelector("form");
const output = document.querySelector("output");

form.addEventListener("submit", event => {
    // stop the form submitting and reloading the page
    event.preventDefault();

    // clear out any previous results
    output.innerHTML = "";

    // get the value of the field with name="pokemon"
    const formData = new FormData(event.target);
    const name = formData.get("pokemon");
    getPokemon(name);
});
