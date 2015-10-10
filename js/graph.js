function getProfilePhoto() {
	console.log("tryna profile photo");
	FB.api("/me/pictures",
		function(response) {
			console.log("Got profile photo");
		}
	);
}