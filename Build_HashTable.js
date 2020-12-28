// Build set and get function, given the HashTable class below.
class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	// O(1)
	_hash(key) {
		// '_' means that private properties that is not accessible outside of the class like in JAVA. Development Standard in JS community, although it's possible.
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
			// charCodeAt: get an integer encoded UTF-16
			// '* i': makes it more unique
			// '% length': make it within the given length.
		}
		return hash;
	}

	// --------------------------------------------------- My answer: store the given info as an object(Hash Table) in the given array, and not collision-free
	set(key, value) {
		if (!key || typeof key !== "string" || !value) {
			return "Enter the correct key and value";
		}
		console.log(this._hash(key));
		// this.data.splice(this._hash(key) - 1, 0, { [key]: value });
		this.data.splice(this._hash(key), 1, { [key]: value }); // I don't get it why deleteCount not working properly when it's '0'.
	}

	get(key) {
		if (!key || typeof key !== "string") {
			return "Enter the correct key";
		}
		console.log(this.data[this._hash(key)]);
		// console.log(Object.values(this.data[this._hash(key)]));
	}

	// --------------------------------------------------- Solution 1: store the given info as an array in the given array, and Hash Collision Prevention.
	// O(1) as no loop here.
	set(key, value) {
		let address = this._hash(key);

		// if nothing there in the address(first time to push an item), in case of collision,
		if (!this.data[address]) {
			this.data[address] = [];
		}
		// if there is collision,
		this.data[address].push([key, value]); // Collision Prevention. Just add an item in the collided array.
	}

	// most cases: O(1), but if collided: O(n)
	get(key) {
		let address = this._hash(key);
		const currentBucket = this.data[address];

		// Dealing with collision,,,
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					return console.log(currentBucket[i][1]);
					// Loop through array of array
				}
			}
		}
		return undefined; // if an empty array
	}

	// What if we wanted to get all the keys?
	// Have to loop through all length of the hash table -> O(n)
	// If this method is needed, Hash table might not be the best idea.
	keys() {
		// Is it valid valid-test? No reachable if it's created I think.
		if (!this.data.length) {
			return console.log("empty Hash Table");
		}
		const keysArray = [];

		// Hash Collision Prevention
		for (let i = 0; i < this.data.length; i++) {
			// if there is an array in that memory space, and length is not 1,
			if (this.data[i] && this.data[i].length) {
				// If there is arrays more than one...
				if (this.data[i].length !== 1) {
					for (let j = 0; j < this.data[i].length; j++) {
						keysArray.push(this.data[i][j][0]);
					}
				} else {
					keysArray.push(this.data[i][0][0]);
				}
				// if (this.data.length > 1) { // This original solution is not precise I think... // What is this line for?
				// 	for (let j = 0; j < this.data[i].length; j++) {
				// 		keysArray.push(this.data[i][j][0]);
				// 	}
				// } else {
				// 	keysArray.push(this.data[i][0]); // what is this for?
				// }
			}
		}

		return console.log(keysArray);
	}
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
// myHashTable.get("grapes");
myHashTable.set("apples", 5);
// myHashTable.get("apples");

myHashTable.keys();

console.log(myHashTable);
