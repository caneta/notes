// Modules: default exports, one per module
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports.square = square;
exports.diag = diag;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Modules = (function () {
	function Modules() {
		_classCallCheck(this, Modules);
	}

	_createClass(Modules, null, [{
		key: 'examples',
		value: function examples() {
			console.log('Test!');
		}
	}, {
		key: 'title',
		get: function get() {
			return 'Modules';
		}
	}]);

	return Modules;
})();

exports['default'] = Modules;
var sqrt = Math.sqrt;

exports.sqrt = sqrt;

function square(x) {
	return x * x;
}

function diag(x, y) {
	return sqrt(square(x) + square(y));
}
//# sourceMappingURL=modules.js.map
