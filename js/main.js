// create model with method
var Animal = Backbone.Model.extend({
	walk: function(){
		console.log("Animal walking...")
	}

});

// inherit from Animal model
var Dog = Animal.extend({
	walk: function(){
		console.log("Dog walking...")
	}
});

var dog = new Dog();

dog.walk();