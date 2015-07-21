"use strict";

function printSectionTitle(title) {
  console.info("\n# -----------------------------\n# " + title + "\n# -----------------------------");
}

// function printSeparator(){
// 	console.log(`
// - - - - - - - - - - - - - - - -`
// 	)
// }

printSectionTitle("Fat Arrows");

// Expression bodies
var evens = [0, 2, 4, 6, 8, 10],
    odds = evens.map(function (v) {
  return v + 1;
}),
    nums = evens.map(function (v, i) {
  return v + i;
}),
    pairs = evens.map(function (v) {
  return { even: v, odd: v + 1 };
});

// Statement bodies
var fives = [];
nums.forEach(function (v) {
  if (v % 5 === 0) fives.push(v);
});

// Multiline strings and string interpolation
console.log("\nevens: " + evens + " \nodds: " + odds + "\nnums: " + nums + "\nfives: " + fives + "\n");

// Lexical this
var bob = {
  _name: "Bob",
  _friends: ["Anne", "Tim", "Jack"],
  printFriends: function printFriends() {
    var _this = this;

    this._friends.forEach(function (f) {
      return console.log(_this._name + " knows " + f);
    });
  }
};

bob.printFriends();

printSectionTitle("Enhanced Object Literals");

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
//# sourceMappingURL=app.js.map
