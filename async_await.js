// fetch запрос при помощи async/await ////////////////////////////////////////////

async function fetchMoviesJSON() {
  const response = await fetch('/movies');
  const movies = await response.json();
  return movies;
}

fetchMoviesJSON().then(movies => {
  movies; // полученный список фильмов
});


// fetch запрос стандарнтый синтаксис через цепочку вызовов .then() //////////////// 

 fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => response.json())
      .then((data) => setPosts(data));
