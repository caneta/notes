"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Arrows = (function () {
  function Arrows() {
    _classCallCheck(this, Arrows);
  }

  _createClass(Arrows, null, [{
    key: "examples",
    value: function examples() {
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
      console.log("evens: " + evens);
      console.log("odds: " + odds);
      console.log("nums: " + nums);
      console.log("fives: " + fives);

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
    }
  }, {
    key: "title",
    get: function get() {
      return "Fat Arrows";
    }
  }]);

  return Arrows;
})();

exports["default"] = Arrows;
module.exports = exports["default"];
//# sourceMappingURL=arrows.js.map
