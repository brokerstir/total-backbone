var TodoItemsView = Backbone.View.extend({

	tagName: "ul",

	id: "todoItems",

	initialize: function(options){
		if (!(options && options.model))
			throw new Error("model is not specified.");

		//subscribe to add and remove events
		this.model.on("add", this.onAddTodoItem, this);
		this.model.on("remove", this.onRemoveTodoItem, this)
	},

	onRemoveTodoItem: function(todoItem){
		//console.log("Removed", todoItem);
		this.$("li#" + todoItem.id).remove();
	},

	// add item to list
	onAddTodoItem: function(todoItem){
		//console.log("Added");
		var view = new TodoItemView({ model: todoItem });
		this.$el.append(view.render().$el);
	},

	// event handlers for click on add button and keypress for input box
	events: {
		"click #add": "onClickAdd",
		"keypress #newTodoItem": "onKeyPress"
	},

	onKeyPress: function(e){
		if (e.keyCode == 13)
			this.onClickAdd();
			//console.log("Enter pressed")
	},

	onClickAdd: function(){

		var $textBox = this.$('#newTodoItem');

		//console.log("Clicked");

		if ($textBox.val()){
			var todoItem = new TodoItem({ description: $textBox.val() });
			this.model.add(todoItem);

			$textBox.val("");
		}
		

	},

	// render list of todo items
	render: function(){

		var self = this;

		this.$el.append("<input type='text' autofocus id='newTodoItem'></input>");
		this.$el.append("<button id='add'>Add</button>");

		this.model.each(function(todoItem){
			var view = new TodoItemView({ model: todoItem });
			self.$el.append(view.render().$el);
		});

		return this;

	}
});