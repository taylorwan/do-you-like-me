  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      userInfo();
      $('#authenticate').fadeOut();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '722395057890979',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.2' // use version 2.2
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "http://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // process user info
  function userInfo() {
    initialLogin();
    userPhotos();
  }

  function initialLogin() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
    });
  }

  function userPhotos() {
    var likers = FB.api('/me/photos', function(response) {
      var allPhotos = [];
      for (var i = 0; i < response.data.length; i++) {
        // var likersForThisPhoto = getLikesForPhoto(response.data[i].id + '/likes');
        // console.log("after getting photo");
        // console.log(likersForThisPhoto);
        // likers = addLikers(likers, thisLikers);
        allPhotos[allPhotos.length] = response.data[i].id;
      }
      return allPhotos;
    });
    console.log("done with processing likes");
    console.log(likers);
  }

  // figure out who likes the photos
  // function getLikesForPhoto(endpoint) {
  //   var likers = FB.api(endpoint, function(likes) {
  //       // if photo has any likes, proceed
  //       console.log(likes.data);
  //       var likers = [];
  //       for (var i = 0; i < likes.data.length; i++) {
  //         console.log(likes.data[i].name);
  //         likers.push(likes.data[i].name);
  //       }
  //       return likers;
  //     }
  //   );
  //   console.log("full list");
  //   console.log(likers);
  //   return likers;
  // }

  // function addLikers(likers, toAdd) {
  //   console.log("adding the following likers:");
  //   console.log(toAdd);
  //   for (var i = 0; i < toAdd.length; i++) {
  //     var current = toAdd[i];
  //     console.log(likers[current]);
  //     if (likers[current]) {
  //       var currentLikes = likers[current] + 1;
  //       likers[current] = currentLikes;
  //     } else {
  //       likers[current] = 1;
  //     }
  //   }
  //   console.log("added likers, returning:");
  //   console.log(likers);
  //   return likers;
  // }


