function printSectionTitle(title){
	console.info(`
# -----------------------------
# ${title}
# -----------------------------`
	)
}

// function printSeparator(){
// 	console.log(`
// - - - - - - - - - - - - - - - -`
// 	)
// }

printSectionTitle('Fat Arrows')

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
console.log(`
evens: ${evens} 
odds: ${odds}
nums: ${nums}
fives: ${fives}
`)

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

printSectionTitle('let and const keywords')

// Variables declared with let have Block Scope, while variables declared with var have Function Scope
function f() {
  {
    let x = "lalala"
		console.log(x) // lalala
    {
			console.log(x)
      // okay, block scoped name
      const x = "sneaky"
      const y = "cucucu"
			console.log(x)
      // error, const
      // x = "foo"
    }
    // error, already declared in block
    // let x = "inner"
    // error, y is declared inside an inner block
		// console.log(y)
  }
}

f()

// class Point {
// 	constructor(x, y) {
// 		this.x = x
// 		this.y = y
// 	}
// 	toString() {
// 		return `(${this.x}, ${this.y})`
// 		// return '(' + this.x + ', ' + this.y + ')';
// 	}
// }

// class ColorPoint extends Point {
// 	constructor(x, y, color) {
// 		super(x, y)
// 		this.color = color
// 	}
// 	toString() {
// 		// return super.toString() + ' in ' + this.color;
// 		return `${super.toString()} in ${this.color}`
// 	}
// }
