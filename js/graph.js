function getProfilePhoto() {
	FB.api("/me/pictures",
		function(response) {
			console.log("Got profile photo");
		}
	);
}