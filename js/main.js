var Song = Backbone.Model.extend();

/*
var Songs =  Backbone.Collection.extend({
	model: Song
});
*/

// create view class

var SongView = Backbone.View.extend({
	
	render: function(){
		var template = _.template($("#songTemplate").html());
		var html = template(this.model.toJSON());
		this.$el.html(html);
		//this.$el.html(this.model.get("title") + " <button>Listen</button>");

		return this;
	}

});


var song = new Song({ title: "Blue in Green", plays: 1001 });

var songView = new SongView({ el: "#container", model: song });
songView.render();

