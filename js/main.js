// model project
var Vehicle = Backbone.Model.extend({

	//urlRoot: “/api/vehicles”,

	idAttribute: "registrationNumber",

	validate: function(attrs){
		if(!attrs.registrationNumber)
			return "Registrations is required is required";
	}, // end validate

	start: function(){
		console.log("Vehicle started.")	
	}		

}); // end model class	

var Car = Vehicle.extend({
	start: function(){
		console.log("Car with registration number {registrationNumber} started.")	
	}
});

var car = new Car({registrationNumber: "XLI887", color: "blue"});

