var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";


var bearer = "BQDZLR2X2SozZpYNb0mHBhG0e3jEIiXUw5xHI8BOON5JtEQkxCM-YiWnecCPTgR2UaTHGeZBRADTynnrdAvJJDAEbMyUkdKUZFi4t7EeT3mEEUQHuCh5FlWvc9OcT00qHNlzaQKNSNniW68dE1mw6mC6CVHXNh6eZX2IkwXtOmCJcZxGK6Q-lP3Ed-VAgOPHLoDUjjfyqzMcSErx-D92c0Usz1lCywpYMwsYAishBVxr5VXI8vKctf5AJtGDxKGmyP1ySgkaAlWiATMd2fpVvdojoSXAUQtGUwIKwA";

/*
* Temporary backdoor method of updating OAuth key
* Login to your Spotify Developer account and generate new OAuth token
* Copy to clipboard and go to UniSound
* Access from console and call updateOAuth() with no parameters
* Paste into prompt and run without reloading (which will reset token)
*/
function updateOAuth(){
	var newToken = prompt("Paste OAuth Token Here:");
	alert("...with OAuth(" + cutKey(bearer, 5) + ")");
	bearer = newToken;
	alert("...with OAuth(" + cutKey(bearer, 5) + ")");
	alert("Complete. Do not reload the page, or the OAuth token will revert.");
}

function cutKey(key, cut){
	if(key.length >= cut * 2){
		return key.substr(0, cut) + "..." + key.substr(key.length - cut, cut);	
	}
	else{
		return key;
	}
}

function serveData(data){
	var incomingData = document.getElementById('incomingData');
	var jsonData = JSON.stringify(data);
	incomingData.value += jsonData + "\n";
}
