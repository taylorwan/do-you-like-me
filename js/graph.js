function getProfilePhoto(
	FB.api('/me/picture',
	function(response) {
		if (response && !response.error) {
			console.log("Got profile photo");
		} else {
			console.log("Could not access photo");
		}
	});
}