// fetch запрос при помощи async/await ////////////////

async function fetchMoviesJSON() {
  const response = await fetch('/movies');
  const movies = await response.json();
  return movies;
}

fetchMoviesJSON().then(movies => {
  movies; // полученный список фильмов
});
