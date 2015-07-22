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

printSectionTitle("let and const keywords");

// Variables declared with let have Block Scope, while variables declared with var have Function Scope
function f() {
  {
    var x = "lalala";
    console.log(x); // lalala
    {
      console.log(_x);
      // okay, block scoped name
      var _x = "sneaky";
      var y = "cucucu";
      console.log(_x);
    }
    // error, already declared in block
    // let x = "inner"
    // error, y is declared inside an inner block
    // console.log(y)
  }
}

f();

// error, const
// x = "foo"
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
//# sourceMappingURL=app.js.map
