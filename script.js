
const laughEmoji = document.getElementById('laughImg');

laughEmoji.src = "laugh.svg";

const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', handleClick);

async function fetchJoke() {
    const response = await fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",    
        },
    })

    return response.json();
    
  }

  async function handleClick() {
    const { joke } = await fetchJoke();
    document.getElementById('joke').innerHTML = joke;
  }