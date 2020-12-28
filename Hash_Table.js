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

// in JS Obejcts, Only allow to have 'string' as keys
const a = new Map(); // How to create Map in JS.
// Allows us to have any type of data as keys, including functions and arrays.
// Also maintain insertion order.

const b = new Set();
// Only stores Key, no values.
