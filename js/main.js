// create view class
var SongView = Backbone.View.extend({

	tagName: "span",
	className: "song",
	id: "1234",

	attributes: {
		"data-genre": "Jazz"
	},

	render: function(){
		this.$el.html("Hello World");
		return this;
	}

});

// create instance of view and tell where to render in the DOM
var songView = new SongView();


//songView.render();
//$("#container").html(songView.$el);

$("#container").html(songView.render().$el);