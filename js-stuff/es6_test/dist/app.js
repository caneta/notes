'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _sourceMapSupport = require('source-map-support');

// Modules: named exports

var _lib = require('./lib');

var lib = _interopRequireWildcard(_lib);

// Modules: default exports, one per module

var _lib2 = _interopRequireDefault(_lib);

(0, _sourceMapSupport.install)();

function printSectionTitle(title) {
  console.info('\n# -----------------------------\n# ' + title + '\n# -----------------------------');
}

// function printSeparator(){
// 	console.log(`
// - - - - - - - - - - - - - - - -`
// 	)
// }

printSectionTitle('Fat Arrows');

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
console.log('\nevens: ' + evens + ' \nodds: ' + odds + '\nnums: ' + nums + '\nfives: ' + fives + '\n');

// Lexical this
var bob = {
  _name: 'Bob',
  _friends: ['Anne', 'Tim', 'Jack'],
  printFriends: function printFriends() {
    var _this = this;

    this._friends.forEach(function (f) {
      return console.log(_this._name + ' knows ' + f);
    });
  }
};

bob.printFriends();

printSectionTitle('let and const keywords');

// Variables declared with let have Block Scope, while variables declared with var have Function Scope
function f() {
  {
    var x = 'lalala';
    console.log(x); // lalala
    {
      console.log(_x);
      // okay, block scoped name
      var _x = 'sneaky';
      var y = 'cucucu';
      console.log(_x);
    }
    // error, already declared in block
    // let x = "inner"
    // error, y is declared inside an inner block
    // console.log(y)
  }
}

f();
console.log((0, _lib.square)(11));
console.log((0, _lib.diag)(4, 3));

console.log(lib.square(11));
console.log(lib.diag(4, 3));
(0, _lib2['default'])();
// error, const
// x = "foo"
//# sourceMappingURL=app.js.map
