'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _sourceMapSupport = require('source-map-support');

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

var _arrowsJs = require('./arrows.js');

var _arrowsJs2 = _interopRequireDefault(_arrowsJs);

var _classesJs = require('./classes.js');

var _classesJs2 = _interopRequireDefault(_classesJs);

(0, _sourceMapSupport.install)();

function printSectionTitle(title) {
	console.info('\n# -----------------------------');
	console.info('# ' + title);
	console.info('# -----------------------------');
}

printSectionTitle(_arrowsJs2['default'].title);
_arrowsJs2['default'].examples();

printSectionTitle(_classesJs2['default'].title);
_classesJs2['default'].examples();
//# sourceMappingURL=app.js.map
