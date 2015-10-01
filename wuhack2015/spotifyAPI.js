var clientID = "afa826690fe04e05a65c5b92ec2bec26";
var clientSecret = "d19a4e03cd31497981aa0ee5aa891eeb";
var spotifyBase = "https://api.spotify.com/";


var bearer = "BQDTMYcMS0KoozNK_QULW9uampUcSsefz2PbeZrDpflZTBeKStlwawCRzGdvNAZHDMidcEUM4UpVP3atkElhGScy-Xm2s3NYqTIGEQSiPhKU933UgvdR8i8d5GuXJ3pkAsPG02GENtJUJSh58OjleYJyeQFODWd5BHenDCovyfJ_g0aUJg4k6ypJsxGE63ze8uY4nxCo3Dc4OSBPCh3pJW8M4fRm8W37Gw5Gjpx_qi1FlCnNp7QkKFk2z3K2Rrx0-nN7MhA_W030os1rfznphpDSKpI-Lbz7uBSvIQ";

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
