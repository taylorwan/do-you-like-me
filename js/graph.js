function getProfilePhoto() {
	console.log("tryna profile photo");
	FB.api("/me/pictures",
		function(response) {
			if (response && !response.error) {
				console.log("Got profile photo");
			} else {
				console.log("didn't get profile photo");
			}
		}
	);
}