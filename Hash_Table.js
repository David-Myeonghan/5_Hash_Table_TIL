let user = {
	age: 54,
	name: "David",
	magic: true,
	scream: function () {
		console.log("AHHH!");
	},
};

user.age; // O(1)
user.spell = "abra kadabra"; // O(1)
console.log(user);
user.scream(); // O(1)
