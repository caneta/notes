'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Symbols = (function () {
  function Symbols() {
    _classCallCheck(this, Symbols);
  }

  _createClass(Symbols, null, [{
    key: 'examples',
    value: function examples() {
      var _obj1, _obj;

      // Symbols are tokens that serves as unique IDs
      var symbol1 = Symbol();
      console.log(typeof symbol1);
      var symbol2 = Symbol('This is the Symbol description');
      console.log(symbol2.toString());
      console.log(symbol1 === symbol2);

      // Symbols can be used as property keys
      var MY_KEY = Symbol();
      var FOO = Symbol();

      var obj1 = (_obj1 = {}, _defineProperty(_obj1, MY_KEY, 123), _defineProperty(_obj1, FOO, function () {
        return 'bar';
      }), _obj1);

      console.log(obj1[MY_KEY]); // 123
      console.log(obj1[FOO]()); // bar

      // Enumerating own property keys
      var obj = (_obj = {}, _defineProperty(_obj, Symbol('my_key'), 1), _defineProperty(_obj, 'enum', 2), _defineProperty(_obj, 'nonEnum', 3), _obj);
      Object.defineProperty(obj, 'nonEnum', { enumerable: false });

      // Object.getOwnPropertyNames() ignores symbol-valued property keys:
      console.log(Object.getOwnPropertyNames(obj)); // ['enum', 'nonEnum']

      // Object.getOwnPropertySymbols() ignores string-valued property keys:
      console.log(Object.getOwnPropertySymbols(obj));
    }
  }, {
    key: 'title',
    get: function get() {
      return 'Symbols';
    }
  }]);

  return Symbols;
})();

exports['default'] = Symbols;
module.exports = exports['default'];
// [Symbol(my_key)]

// Reflect.ownKeys() considers all kinds of keys:
// Reflect.ownKeys(obj) // [Symbol(my_key), 'enum', 'nonEnum']
//# sourceMappingURL=symbols.js.map
