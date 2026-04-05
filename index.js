const jokeContainer = document.querySelector(".jokebox");
const punchlineButton = document.querySelector("#show-punchline");
const newJokeButton = document.querySelector("#new-joke");

let currentPunchline = null;

async function fetchJokes() {
    const response = await fetch("https://official-joke-api.appspot.com/jokes/programming/random");
    const data = await response.json();
    const joke = data[0];
    console.log(joke);

    // To clean old joke
    jokeContainer.innerHTML = "";

    const setupElement = document.createElement("p");
    setupElement.textContent = joke.setup;

    const punchlineElement = document.createElement("p")
    punchlineElement.textContent = joke.punchline;

    currentPunchline = punchlineElement;

    jokeContainer.appendChild(setupElement);
} 
punchlineButton.addEventListener('click', () => {
    if (!jokeContainer.contains(currentPunchline)) {
        jokeContainer.appendChild(currentPunchline);
    }
});

newJokeButton.addEventListener('click', () => {
    fetchJokes();
})

fetchJokes();