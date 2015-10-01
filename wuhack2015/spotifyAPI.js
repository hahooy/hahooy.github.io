var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";


var bearer = "BQAlOnZ_IzcLnnYs9TP84CENh3lh1CRs8G9xCi379iDMLiOMrlT4Qrn3UZvdS7qfVWU5hkuYXC8jzHPh9oQMk5dv1_uSPX7335nCako9iQLod8g4dr7xNkOo26nKU0G2V_iF2UkSRqM_8pC5zLG4iu4Y8rn7FoVnQ5fVXMxsPyt3I6Vys0GrKpA7icDl9gvPcPvqpn5k5AcEF_fZTTMkO7scMYiKsTtvemrA3F0cLWx2nuF2y-x90odmR7KMlUh1I-Eue3E3tzWN8UFk-UC3FArl7JOUopJfi2qdAg";

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
