export default class Arrows {
	static get title() {
		return 'Fat Arrows'
	}

	static examples() {
		// Expression bodies
		var evens = [0, 2, 4, 6, 8, 10],
				odds  = evens.map(v => v + 1),
				nums  = evens.map((v, i) => v + i),
				pairs = evens.map(v => ({even: v, odd: v + 1}))

		// Statement bodies
		var fives = []
		nums.forEach(v => {
			if (v % 5 === 0)
				fives.push(v);
		});

		// Multiline strings and string interpolation
		console.log(`evens: ${evens}`)
		console.log(`odds: ${odds}`)
		console.log(`nums: ${nums}`)
		console.log(`fives: ${fives}`)

		// Lexical this
		var bob = {
			_name: "Bob",
			_friends: ["Anne", "Tim", "Jack"],
			printFriends() {
				this._friends.forEach(f =>
					console.log(`${this._name} knows ${f}`))
			}
		}

		bob.printFriends()
	}
}
