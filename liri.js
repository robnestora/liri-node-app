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
    var options = { screen_name: 'Robbery44220681',
    count: 20 };

client.get('statuses/user_timeline', options , function(err, data) {
for (var i = 0; i < data.length ; i++) {
console.log(data[i].text);
}
})


  }
  else if (myArgs[0] == "spotify-this-song"){
 var query = "";
 for (var i = 3; i < nodeArgs.length; i++) {
 if (i > 3 && i < nodeArgs.length) {
 query = query + "+" + nodeArgs[i];
 //console.log(movieName);
 }
 else {
   query += nodeArgs[i];
 }
    spotify.search({ type: "track", query:query}, function(err,data){
      if (err) {
        return console.log('Error occurred: ' + err);
      }
    
    else if (!err) {
      
    console.log("Artist:" + data.tracks.items[0].album.artists[0].name); 
    console.log("Song: " +  data.tracks.items[0].name);
    console.log("Preview: " +  data.tracks.items[0].preview_url);
    console.log("Album: " +  data.tracks.items[0].album.name);
    }
        })
     
      

    /*else {
      console.log("Artist: Ace of Base" ); 
      console.log("Song: The Sign");
      console.log("Preview: ");
      console.log("Album:The Sign ");
    }
  
  */
  }
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