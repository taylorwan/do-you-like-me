function login(){
	FB.login(function(response) {
		if (response.authResponse) {
			console.log("Login successful!");
		} else {
			console.log("User cancelled login request.");
		}
	}
}