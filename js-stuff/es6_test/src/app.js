import { install } from 'source-map-support';
install();

function printSectionTitle(title){
	console.info(`\n# -----------------------------`)
	console.info(`# ${title}`)
	console.info(`# -----------------------------`)
}

// printSectionTitle('let and const keywords')

// // Variables declared with let have Block Scope, while variables declared with var have Function Scope
// function f() {
//   {
//     let x = "lalala"
// 		console.log(x) // lalala
//     {
// 			console.log(x)
//       // okay, block scoped name
//       const x = "sneaky"
//       const y = "cucucu"
// 			console.log(x)
//       // error, const
//       // x = "foo"
//     }
//     // error, already declared in block
//     // let x = "inner"
//     // error, y is declared inside an inner block
// 		// console.log(y)
//   }
// }

// f()

// // Modules: named exports
// import { square, diag } from './lib'
// console.log(square(11))
// console.log(diag(4, 3))

// import * as lib from './lib'
// console.log(lib.square(11))
// console.log(lib.diag(4, 3))

// // Modules: default exports, one per module
// import printBabbala from './lib'
// printBabbala()
import Arrows from './arrows.js'
import Classes from './classes.js'

printSectionTitle(Arrows.title)
Arrows.examples()

printSectionTitle(Classes.title)
Classes.examples()
