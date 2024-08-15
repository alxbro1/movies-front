const { get } = require("axios");

if (window.location.pathname.includes("addMovie.html")) {
  const addMovies = require("./addMovies");
  addMovies();
} else {
  const printCards = require("./printCards");
  const carousel = require("./carousel");

  get("http://localhost:3000/movies")
    .then((e) => {
      printCards(e.data);
    })
    .catch((err) => console.log(err));

  carousel();
}
