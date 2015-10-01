var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";


var bearer = "BQAVGZZcQZMloGUDw68r5pVn-NH9CsDEz58pn5Q4yI-ZNVYVhKu2RcUfSGQczWdEDeVNDstZBtGFlphEwGSiyuPI5sSLHBFVlz0LIyPniKLLn4--1DM9L_Orc8NggbiIISy1j__mbF0Ghoswly0iFmr0NHTLZVQJd9NwKUo1_e7bs8uS4DO02rxRY4I8azf0zdKGigD_tBdop79VWp_US3dMv_RqXD544YwCRhxp7TJkxZPpnqWWAd1e4EPtS4S_sO1NaZeCZnsjDXbcNS9_4-ibpmU2BZPhZyo7NQ";

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
