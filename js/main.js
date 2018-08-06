
var Song = Backbone.Model.extend({
	defaults: {
		listeners: 0
	}
});

/*
var Songs =  Backbone.Collection.extend({
	model: Song
});
*/

// create view class

var SongView = Backbone.View.extend({
	/*
	events: {
		"click": "onClick",
		"click .bookmark": "onClickBookmark",
	},

	onClick: function(){
		console.log("Listen Clicked");
	},

	onClickBookmark: function(e){
		e.stopPropagation();
		console.log("Bookmark Clicked");
	},
	*/

	initialize: function(){
		this.model.on("change", this.render, this);
	},

	render: function(){
		this.$el.html(this.model.get("title") + " - Listeners: " + this.model.get("listeners"));
		return this;
	}

});

/*
var SongsView = Backbone.View.extend({
	render: function(){
		var self = this;
		this.model.each(function(song){
			var songView = new SongView({model: song});
			self.$el.append(songView.render().$el);

		});
	}
});
*/

/*
var songs = new Songs([
	new Song({ title: "Blue in Green"}),
	new Song({ title: "So What"}),
	new Song ({ title: "All Blues"})
]);
*/

/*
var songsView = new SongsView({ el: "#songs", model: songs});
songsView.render()
*/



var song = new Song({ title: "Blue in Green" })

var songView = new SongView({ el: "#container", model: song });
songView.render();