const connection = require('./index.js');

function getAllMovies(req, res) {
  connection.query(`SELECT * FROM movies;`, function (error, results) {
    if(error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(results);
    }
  })
}

module.exports = {getAllMovies: getAllMovies};