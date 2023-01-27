import axios from "https://cdn.skypack.dev/axios@1.2.5";
const laughEmoji = document.getElementById('laughImg')
laughEmoji.src = "http://c1.thejournal.ie/media/2015/10/face-with-tears-of-joy-752x501.png";
function getJoke(){
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    axios.get('https://icanhazdadjoke.com/', config).then(res =>{
        document.getElementById('joke').innerHTML = res.data.joke
    })
}

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', getJoke);