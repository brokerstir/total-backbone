var TodoItemView = Backbone.View.extend({

	tagName: "li",

	initialize: function(options){
		if (!(options && options.model))
			throw new Error("model is not specified.");

		// listen for change events on model and refresh the render
		this.model.on("change", this.render, this);
	},

	// DOM event handler for click on checkbox
	events: {
		"click #toggle": "onClickToggle",
		"click #delete": "onClickDelete"
	},

	onClickDelete: function(){
		//console.log("Delete clicked");
		this.model.destroy();
	},

	onClickToggle: function(){
		this.model.toggle();
		this.model.save();
		//console.log(this.model.toJSON());
	},

	render: function(){

		this.$el.attr("id", this.model.id);

		this.$el.toggleClass("completed", this.model.get("completed"));

		var checked = this.model.get("completed") ? "checked" : "";
		this.$el.html("<input id='toggle' type='checkbox'" + checked +"></input>" + this.model.escape("title") + "<button id='delete'>Delete</button");

		return this;
	}

});