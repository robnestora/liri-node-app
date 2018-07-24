require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var Twitter = require("twitter");
var request = require("request");
var fs = require("fs");

var spotify = new Spotify(keys.spotify);
  var client = new Twitter(keys.twitter);
  var request = require("request");
  var twit = require("twitter");
  var nodeArgs = process.argv;
  var myArgs = process.argv.slice(2);
  //console.log('myArgs: ', myArgs);
  if (myArgs[0] == "my-tweets") {
    var params = {screen_name: 'Robbery44220681'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        console.log(JSON.parse(tweets).text);
      }
    });
 


    // console.log("boyakasha");
  }
  else if (myArgs[0] == "this-movie"){
   // console.log(myArgs[1]);
    var movieName = "";
      for (var i = 3; i < nodeArgs.length; i++) {
      if (i > 3 && i < nodeArgs.length) {
      movieName = movieName + "+" + nodeArgs[i];
      //console.log(movieName);
      }
      else {
        movieName += nodeArgs[i];
      }
    }
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    //console.log(queryUrl);

    request(queryUrl, function(error, response, body) {

      // If the request is successful
      if (!error && response.statusCode === 200) {

        // Parse the body of the site and recover just the imdbRating
        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Released: " + JSON.parse(body).Year);
        console.log("Cast: " + JSON.parse(body).Actors);
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        console.log("Country: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
      
      }
    });

      }