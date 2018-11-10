console.log("this is loaded");

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.bands = {
  id: process.env.BANDS_IN_TOWN_APP_ID
};

exports.movies = {
  id: process.env.MOVIE_THIS_ID
};
