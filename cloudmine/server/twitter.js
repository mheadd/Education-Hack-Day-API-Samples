// This example demonstrates use of CloudMine JavaScript API
// from within a snippet, and use of the HTTP client to 
// interact with the Twitter API

// For full documentation, see: https://cloudmine.me/developer_zone#code/overview

// init CloudMine library with app_id and api_key
cloudmine.init({app_id: "{app_id}",
                api_key: "{api_key}"});

// Make a call to the Twitter api, searching for '#eduhackday'
http.get("http://search.twitter.com/search.json?q=#eduhackday", null, function(resp){
    // Process the Twitter response - grab the first tweet
    var tweet = resp.results[0];

    // Save the tweet to CloudMine
    cloudmine.setValue("tweet", tweet, function(){
        // exit when the save succeeds, returning the URL for the profile
        // of the user who sent the tweet
        exit({
            image: tweet.profile_image_url
        });
    });
});
