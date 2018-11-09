require("dotenv").config();
const fs = require("fs");
const keys = require("./keys");
const Spotify = require("node-spotify-api");
let spotify = new Spotify(keys.spotify);
const request = require("request");
const command = process.argv[2];
const liriRequest = process.argv.slice(3).join(" ");

// const spotify = new Spotify(keys.spotify);
// const concertThis = artist =>  - need to create a function for concert-this that runs when someone types in "conert-this" and passes in artist from command line
//also need to format output
console.log(command, liriRequest);
if (command === "concert-this") {
  bandsInTown(liriRequest);
}
if (command === "spotify-this-song") {
  searchSpotify(liriRequest);
}
if (command === "movie-this") {
  movieThis(liriRequest);
}
function bandsInTown(artist) {
  request(
    "https://rest.bandsintown.com/artists/" +
      artist +
      "/events?app_id=6d18437d8b763434dfe190acae6c9482&date=upcoming",
    (error, response, body) => {
      console.log("error:", error);
      console.log("statusCode:", response && response.statusCode);
      let data = JSON.parse(body);
      console.log("body:", body);
      console.log(data[0].venue.name, data[0].venue.city, data[0].venue.region);
    }
  );
}

function searchSpotify(song) {
  console.log("what up");
  spotify.search({ type: "track", query: song }, (err, data) => {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    console.log(data);
  });
}

// search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);

//This works. Hard code api key?
function movieThis(movie) {
  // const movieTitle = process.argv.slice(2).join("+");
  console.log("dis dee movie:", movie);
  // const request = require("request");
  request(
    "http://www.omdbapi.com/?apikey=d876dbd6&t=" + movie,
    (error, response, body) => {
      console.log("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      // responsebody.foreach(function(body) {
      //   console.log(response.offers);
      // });
      console.log("body:", body); // Print the HTML for the Google homepage.
    }
  );
}
//
