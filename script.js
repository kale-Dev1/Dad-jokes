// import axios from "https://cdn.skypack.dev/axios@1.2.5";
const laughEmoji = document.getElementById('laughImg')
laughEmoji.src = "laugh.svg";
// function getJoke(){
//     const config = {
//         headers: {
//             Accept: 'application/json'
//         }
//     }
//     axios.get('https://icanhazdadjoke.com/', config).then(res =>{
//         document.getElementById('joke').innerHTML = res.data.joke
//     })
// }

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