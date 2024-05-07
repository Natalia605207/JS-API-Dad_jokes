const emojies = ["🤨", "🤔", "😯", "😉", "😶", "😦", "😕"];
const face = document.querySelector("#face");
const joke = document.querySelector("#joke");
const getJoke = document.querySelector("#getJoke");

getJoke.addEventListener("click", createJoke);
getJoke.addEventListener("click", changeFace);

async function createJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const result = await res.json();

  joke.textContent = result.joke;
}

function changeFace() {
    let randomFace = emojies[Math.floor(Math.random() * emojies.length)];
    face.textContent = randomFace;
}

