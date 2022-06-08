const button = document.querySelector("button");
const p = document.querySelector("p");
button.addEventListener("click", generateJoke);

function generateJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((resp) => resp.json())
    .then((resp) => displayJoke(resp.value));
}
function displayJoke(joke) {
  p.textContent = joke;
}
