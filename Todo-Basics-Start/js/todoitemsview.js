var TodoItemsView = Backbone.View.extend({

	tagName: "ul",

	id: "todoItems",

	initialize: function(options){
		if (!(options && options.model))
			throw new Error("model is not specified.");

		this.model.on("add", this.onAddTodoItem, this);
	},

	onAddTodoItem: function(todoItem){
		//console.log("Added");
		var view = new TodoItemView({ model: todoItem });
		this.$el.append(view.render().$el);
	},

	events: {
		"click #add": "onClickAdd"
	},

	onClickAdd: function(){
		//console.log("Clicked");
		var todoItem = new TodoItem({ description: this.$("#newTodoItem").val() });
		this.model.add(todoItem);
	},

	render: function(){

		var self = this;

		this.$el.append("<input type='text' id='newTodoItem'></input>");
		this.$el.append("<button id='add'>Add</button>");

		this.model.each(function(todoItem){
			var view = new TodoItemView({ model: todoItem });
			self.$el.append(view.render().$el);
		});

		return this;

	}
});