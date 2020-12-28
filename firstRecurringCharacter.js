// Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// --------------------------------------------------- My answer: Store in an Array, the key in HashTable is an index of array, and value is value.
function firstRecurringCharacter(input) {
	const inputLength = input.length;
	const results = new Array(inputLength); // Make it static array to prevent memory leaking..?

	if (!input.length) {
		return console.log("Invalid Input");
	}

	for (let i = 0; i < input.length; i++) {
		let address = input[i]; // key = value

		// If there is nothing stored,
		if (!results[address]) {
			// results[address] = [];
			// results[address].push([input]); // but not need to make an array of array that is not reabable...?
			// , or
			results.splice(address, 1, input[i]);
		} else if (results[address]) {
			return console.log(input[i]);
		}
		// console.log(results);
	}

	return console.log(undefined);
} // O(n)

// --------------------------------------------------- Solution01: using an naive way - nested for-loop, but not invalid for the bonus question.
function firstRecurringCharacter1(input) {
	for (let i = 0; i < input.length; i++) {
		// 'j should be 'i+1' so that preventing comparing 5 with 5 in the second for-loop
		for (let j = i + 1; j < input.length; j++) {
			if (input[i] === input[j]) {
				return input[i];
			}
		}
	}
	return undefined;
} // O(n^2)
// O(1) in space complexity.

// --------------------------------------------------- Solution02: using Hash Table, while adding input to the hash table using for-loop, we can check if the property alreay exist.
function firstRecurringCharacter2(input) {
	let map = {}; // increase space complexity.

	for (let i = 0; i < input.length; i++) {
		// if the key alreay exist,
		if (map[[input[i]]] !== undefined) {
			return console.log(input[i]);
		} else {
			// !IMPORTANT!
			// x.foo = 3; is equal to x['foo'] = 3; // the latter syntax allows us to have a property type 'string'
			// !IMPORTANT!
			map[input[i]] = i; // value can be anything here.
		}
		console.log(map);
	}
	return console.log(undefined);
} // O(n)

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4]);
