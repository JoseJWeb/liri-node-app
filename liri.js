//This is to have access to the key files for use with the liri.js file
//Require it,then create a variable that holds the file keys.js
var keys = require('./keys.js');
var Twitter = require('twitter');
//var Spotify = require('node-spotify-api');
//var request = require('request');


var getMyTweets = function() {

	var client = new Twitter(keys.twitterKeys);
	 
	var params = {screen_name: 'knodeknows'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	    //console.log(tweets);
	    //Loop through all the tweets, then console.log the created_at
	    //then create a space, then console.log the text attribute of the array
	    for (var i = 0; i<tweets.length; i++) {
	    	console.log(tweets[i].created_at);
	    	console.log('');
	    	console.log(tweets[i].text);
	    }
	  }
	});

}

// THE SPOTIFY DOES NOT WORK, I HAVE TO FIGURE OUT HOW TO RESOLVE THE 
//401 error : no token, or how to use the request way to access the API, 
//I tried it like for 3 hours and I just got frustrated with it because the Spotify 
// and the OMBD does not work properly 
// var spotify = new Spotify({
//   id: <'dd7e47fa56e346c1b84986f7a1237cca'>,
//   secret: <'fcfd67353cf547b3956fdee499871391'>
// });
 
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });
	
// MOVIE OMBD WAS WORKING AND THEN IT CRASHED 
// var getMeMovie = function(movieName) {

// 	request('http://www.omdbapi.com/?i=tt3896198&apikey=9aea04a2' + movieName +, function (error, response, body) {
// 	  console.log('error:', error); // Print the error if one occurred
// 	  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// 	  console.log('body:', body); 

// 	  // Parse the JSON Data for a Readable Format 
// 	  //var jsonData = JSON.parse(body);
// 	  //console.log('Title: ' + jsonData.Title);
// 	  //console.log('Year: '  + jsonData.Year);
// 	  //console.log('Rated: ' + jsonData.imdbRating);
// 	  //console.log('IMBD Rating: ' + jsonData.imbdRating);
// 	  //console.log('Country: '  +  jsonData.Language);
// 	  //console.log('Language: ' + jsonData.);
// 	  //console.log('Plot:' + jsonData.Plot);
// 	  //console.log('Actors: ' + jsonData.Actors);
// 	  //console.log('Rotten tomatoes rating: ' + jsonData.tomatoRating);
// 	  //console.log('Rotten tomatoes URL: ' + jsonData.tomato.URL);
// 	});
// }
// Create the Switch Statement 
//that will hold the different arguments from the user
// The function runs, and takes in user input, and using that
//to decide which function or to output 'LIRI does not know that'
var pick = function(caseData, functionData) {
	switch(caseData){
		case 'my-tweets' :
			getMyTweets();
			break;
		//case 'movie-this':
			//getMeMovie(functionData);
		default:
		console.log('LIRI does not know that');
	}
}

//Next Create a function that you can pass arguments into 
//when you run pick 
var runThis = function(argOne, argTwo) {
	pick(argOne,argTwo);

};


runThis(process.argv[2], process.argv[3]);







