var TodoItemView = Backbone.View.extend({
	render: function(){
		this.$el.html(this.model.get("description"));

		return this;
	}

});