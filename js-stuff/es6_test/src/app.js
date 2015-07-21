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

printSectionTitle('Enhanced Object Literals')

// var obj = {
//     // __proto__
//     __proto__: theProtoObj,
//     // Shorthand for ‘handler: handler’
//     handler,
//     // Methods
//     toString() {
//      // Super calls
//      return "d " + super.toString();
//     },
//     // Computed (dynamic) property names
//     [ 'prop_' + (() => 42)() ]: 42
// };
