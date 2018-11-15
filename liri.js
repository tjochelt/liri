require("dotenv").config();
const fs = require("fs");
const keys = require("./keys");
const moment = require("moment");
moment().format();
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
const request = require("request");
const command = process.argv[2];
const liriRequest = process.argv.slice(3).join(" ");
// const spotify = new Spotify(keys.spotify);
console.log(command, liriRequest);
// if (command === "concert-this") {
//   bandsInTown(liriRequest);
// }
// if (command === "spotify-this-song") {
//   searchSpotify(liriRequest);
// }
// if (command === "movie-this") {
//   movieThis(liriRequest);
// }
// if (command === "do-this") {
//   doThis();
// }

function bandsInTown(artist) {
  request(
    "https://rest.bandsintown.com/artists/" +
      artist +
      "/events?app_id=6d18437d8b763434dfe190acae6c9482&date=upcoming",
    // bandsInTown.id +

    (error, response, body) => {
      console.log("error:", error);
      console.log("statusCode:", response && response.statusCode);
      let data = JSON.parse(body);
      // console.log("body:", body);
      const dateTime = data[0].datetime;
      console.log(bandsInTown.id);
      console.log(
        artist,
        ` \n Venue: ${data[0].venue.name} \n City: ${
          data[0].venue.city
        } \n State: ${data[0].venue.region} \n Date: ${moment(dateTime).format(
          "MM/DD/YYYY"
        )}`
      );
    }
  );
}

function searchSpotify(song) {
  console.log("spotify asked");
  spotify.search({ type: "track", query: song }, (err, data) => {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    console.log(data);
    console.log(`Artist: $`);
  });
}

//This works. Hard code api key?
function movieThis(movie) {
  request(
    `
    http://www.omdbapi.com/?apikey=d876dbd6&t= ${movie}`,
    // movies.id + "" + movie,
    (error, response, body) => {
      // console.log(body);
      console.log("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // \
      let data = JSON.parse(body);
      console.log("here's the data:", data);
      console.log(`
      Title: ${body.title} \n
      Year: ${data.year} \n
      Country of production: ${data.country} \n
      Language: ${data.language} \n
      Plot: ${data.plot} \n
      Actors: ${data.actors} \n
      `);
    }
  );
}

fs.readFile("random.txt", "utf8", function(error, data) {
  // If the code experiences any errors it will log the error to the console.
  const splitted = data.split(' "');
  console.log("hi", splitted);
  const newCommand = splitted[0];
  const newSearch = splitted[1];
  console.log(newCommand);
  if (error) {
    return console.log(error);
  } else {
    if (newCommand === "concert-this") {
      bandsInTown(newSearch);
    }
    if (newCommand === "spotify-this-song") {
      searchSpotify(newSearch);
    }
    if (newCommand === "movie-this") {
      movieThis(newSearch);
    }
    // console.log("doThisWorked", data);
    // let obj = {};
  }
  // console.log(obj);
});

//
