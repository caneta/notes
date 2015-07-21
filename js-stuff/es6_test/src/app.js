// Fat arrows: Expression bodies
var evens = [0, 2, 4, 6, 8, 10],
		odds = evens.map(v => v + 1),
		nums = evens.map((v, i) => v + i),
		pairs = evens.map(v => ({even: v, odd: v + 1}))

// Multiline strings and string interpolation
console.log(`evens: ${evens} 
odds: ${odds}
nums: ${nums}
-------------------`)

// Fat arrows: Statement bodies
var fives = []
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

console.log(`fives: ${fives}`)
