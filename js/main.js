// collections
var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
	model: Song
});

var songs = new Songs([
		new Song({ title: "Song1"}),
		new Song({ title: "Song2"}),
		new Song({ title: "Song2"})
	]);

songs.add(new Song({ title: "Song 4"}));