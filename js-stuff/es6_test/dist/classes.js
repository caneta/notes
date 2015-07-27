'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Classes = (function () {
  function Classes() {
    _classCallCheck(this, Classes);
  }

  _createClass(Classes, null, [{
    key: 'examples',
    value: function examples() {
      // Base class minimal example
      // A class body can only contain methods,
      // but not data properties!

      var Point = (function () {
        function Point(x, y) {
          _classCallCheck(this, Point);

          this.x = x;
          this.y = y;
        }

        _createClass(Point, [{
          key: 'toString',
          value: function toString() {
            return '(' + this.x + ', ' + this.y + ')';
          }
        }]);

        return Point;
      })();

      var p = new Point(25, 8);
      console.log(p.toString());

      // Inheritance minimal example

      var ColorPoint = (function (_Point) {
        _inherits(ColorPoint, _Point);

        function ColorPoint(x, y, color) {
          _classCallCheck(this, ColorPoint);

          _get(Object.getPrototypeOf(ColorPoint.prototype), 'constructor', this).call(this, x, y);
          this.color = color;
        }

        _createClass(ColorPoint, [{
          key: 'toString',
          value: function toString() {
            return _get(Object.getPrototypeOf(ColorPoint.prototype), 'toString', this).call(this) + ' in ' + this.color;
          }
        }]);

        return ColorPoint;
      })(Point);

      var cp = new ColorPoint(25, 8, 'green');
      console.log(cp.toString()); // '(25, 8) in green'
      console.log(cp instanceof ColorPoint); // true
      console.log(cp instanceof Point); // true

      // ReferenceError, because classes are
      // not hoisted unlike functions:
      //
      // new Foo()
      // class Foo {} // ReferenceError
      //
      // ...but the following is corrct:
      //
      // function functionThatUsesBar() { new Bar(); }
      // class Bar {}
      // functionThatUsesBar(); // OK

      // Class expression: identifier visible only
      // within the expression
      var MyClass = (function () {
        function Me() {
          _classCallCheck(this, Me);
        }

        _createClass(Me, [{
          key: 'getClassName',
          value: function getClassName() {
            return Me.name;
          }
        }]);

        return Me;
      })();
      var inst = new MyClass();
      console.log(inst.getClassName()); // Me
      // console.log(Me.name) // ReferenceError: Me is not defined

      // Three kinds of methods:
      var Foo = (function () {
        function Foo(prop) {
          _classCallCheck(this, Foo);

          this.prop = prop;
        }

        _createClass(Foo, [{
          key: 'prototypeMethod',
          value: function prototypeMethod() {
            return 'prototypical';
          }
        }], [{
          key: 'staticMethod',
          value: function staticMethod() {
            return 'classy';
          }
        }]);

        return Foo;
      })();

      var foo = new Foo(123);
      console.log(foo.prop);
      console.log(Foo.staticMethod());
      console.log(foo.prototypeMethod());

      // Getter and setter methods:
      // methods names and object properties must be different
      // to avoid circular dependencies

      var Person = (function () {
        function Person() {
          _classCallCheck(this, Person);
        }

        _createClass(Person, [{
          key: 'name',
          get: function get() {
            return this.firstName;
          },
          set: function set(name) {
            this.firstName = name;
          }
        }]);

        return Person;
      })();

      var person = new Person();
      person.name = 'Tom';
      console.log(person.name);
    }
  }, {
    key: 'title',
    get: function get() {
      return 'Classes';
    }
  }]);

  return Classes;
})();

exports['default'] = Classes;
module.exports = exports['default'];
// Tom
//# sourceMappingURL=classes.js.map
