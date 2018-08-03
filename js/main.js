// create a model and instantiate
/*
var Song = Backbone.Model.extend({
	intialize: function(){
		console.log("A new song has been created.")
	}
});
*/

// create a model with default genre
var Song = Backbone.Model.extend({
	defaults: {
        genre: "Jazz"
	}
});

// create an instance of Song model
var song = new Song({
	title: "Blue in Green",
	artist: "Miles Davis",
	pulishYear: 1959
});

