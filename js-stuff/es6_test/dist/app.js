// Using source map to directly debug ES6 sources
'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _sourceMapSupport = require('source-map-support');

// Examples modules imports

var _modulesJs = require('./modules.js');

var _modulesJs2 = _interopRequireDefault(_modulesJs);

var _modules = require('./modules');

var lib = _interopRequireWildcard(_modules);

var _arrowsJs = require('./arrows.js');

var _arrowsJs2 = _interopRequireDefault(_arrowsJs);

var _classesJs = require('./classes.js');

var _classesJs2 = _interopRequireDefault(_classesJs);

var _letAndConstJs = require('./letAndConst.js');

var _letAndConstJs2 = _interopRequireDefault(_letAndConstJs);

(0, _sourceMapSupport.install)();

// Main app functions
function printSectionTitle(title) {
	console.info('\n# -----------------------------');
	console.info('# ' + title);
	console.info('# -----------------------------');
}

printSectionTitle(_modulesJs2['default'].title);
_modulesJs2['default'].examples();

printSectionTitle(_letAndConstJs2['default'].title);
_letAndConstJs2['default'].examples();

printSectionTitle(_arrowsJs2['default'].title);
_arrowsJs2['default'].examples();

printSectionTitle(_classesJs2['default'].title);
_classesJs2['default'].examples();
//# sourceMappingURL=app.js.map
