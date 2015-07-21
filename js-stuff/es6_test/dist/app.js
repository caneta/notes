// Fat arrows: Expression bodies
"use strict";

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

// Multiline strings and string interpolation
console.log("evens: " + evens + " \nodds: " + odds + "\nnums: " + nums + "\n-------------------");

// Fat arrows: Statement bodies
var fives = [];
nums.forEach(function (v) {
		if (v % 5 === 0) fives.push(v);
});

console.log("fives: " + fives);
//# sourceMappingURL=app.js.map
