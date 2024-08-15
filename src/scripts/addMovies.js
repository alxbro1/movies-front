const clearData = require("./cleanInputs");
const addMovie = require("./sendData");

const manageMovies = () => {
  clearData();
  addMovie();
};

module.exports = manageMovies