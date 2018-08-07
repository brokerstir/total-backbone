var person = {
	name: "Mosh",

	walk: function(){
		this.trigger("walking", {
			speed: 1,
			startTime: "08:00"
		});
	}
};

// extend object with events capability
_.extend(person, Backbone.Events);

person.on("walking", function(e){
	console.log("Person is walking");
	console.log("Event Args", e);
});


// unsubscribe from event
//person.off("walking");



person.walk();
person.walk();


