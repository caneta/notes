"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LetAndConst = (function () {
	function LetAndConst() {
		_classCallCheck(this, LetAndConst);
	}

	_createClass(LetAndConst, null, [{
		key: "examples",
		value: function examples() {
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
		}
	}, {
		key: "title",
		get: function get() {
			return "let and const keywords";
		}
	}]);

	return LetAndConst;
})();

exports["default"] = LetAndConst;
module.exports = exports["default"];
// error, const
// x = "foo"
//# sourceMappingURL=letAndConst.js.map
