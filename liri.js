require("dotenv").config();
const fs = require("fs");
const spotifyKey = require("keys.js");
const Spotify = require("node-spotify-api");
const spotify = new Spotify({
  id: "spotify_id",
  secret: "spotify_secret"
});

// const spotify = new Spotify(keys.spotify);
// const concertThis = artist =>  - need to create a function for concert-this that runs when someone types in "conert-this" and passes in artist from command line
//also need to format output

const artist = process.argv.slice(2).join("%20");
console.log(artist);
const request = require("request");
request(
  "https://rest.bandsintown.com/artists/" +
    artist +
    "/events?app_id=6d18437d8b763434dfe190acae6c9482&date=upcoming",
  (error, response, body) => {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    // responsebody.foreach(function(body) {
    //   console.log(response.offers);
    // });
    console.log("body:", body); // Print the HTML for the Google homepage.
  }
);

spotify.search({ type: "tupac", query: "california" }, (err, data) => {
  if (err) {
    return console.log("Error occurred: " + err);
  }

  console.log(data);
});
search({ tupac, california });
// search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);

//This works. Hard code api key?
const movieTitle = process.argv.slice(2).join("+");
console.log(movieTitle);
const request = require("request");
request(
  "http://www.omdbapi.com/?apikey=d876dbd6&t=" + movieTitle,
  (error, response, body) => {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    // responsebody.foreach(function(body) {
    //   console.log(response.offers);
    // });
    console.log("body:", body); // Print the HTML for the Google homepage.
  }
);
