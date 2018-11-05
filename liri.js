require("dotenv").config();
// const spotify = new Spotify(keys.spotify);
const artist = process.argv.slice(2).join("%20");
//   .split(" ")
//   .join("%");
console.log(artist);
const request = require("request");
request(
  "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp",
  (error, response, body) => {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    console.log("body:", body); // Print the HTML for the Google homepage.
  }
);
