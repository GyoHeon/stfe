import axios from "axios";

const url = "https://www.omdbapi.com/?apikey=7035c60c&s=frozen";

function fetchMovies() {
  axios.get(url).then((res) => {
    console.log(res);
    const h1El = document.querySelector("h1");
    const imgEl = document.querySelector("img");
    h1El.textContent = res.data.Search[0].Title;
    imgEl.src = res.data.Search[0].Poster;
  });
}

fetchMovies();
