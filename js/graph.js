function getProfilePhoto(
	FB.api('/me/picture',
	function(response) {
		if (response && !response.error) {

		}
	});
}