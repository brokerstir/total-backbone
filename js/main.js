// collections project
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

var Vehicles = Backbone.Collection.extend({
	model: Vehicle
});

var vehicles = new Vehicles([

	new Vehicle({ registrationNumber: "XLI887", color: "Blue"}),
	new Vehicle({ registrationNumber: "ZNP123", color: "Blue"}),
	new Vehicle({ registrationNumber: "XUV456", color: "Gray"})


]);


var blueVehicles = vehicles.where({ color: "Blue" });

console.log("Blue Vehicles", blueVehicles);


var theVehicle = vehicles.filter(function(vehicle){
	return vehicle.get("registrationNumber") == "XLI887";
 })

console.log("The Vehicle", theVehicle)

vehicles.remove(theVehicle);

vehicles.each(function(vehicle){
	console.log(vehicle)
});

