// import polyfill from 'babel-core/polyfill'
// require("babel")

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

var _letAndConstJs = require('./letAndConst.js');

var _letAndConstJs2 = _interopRequireDefault(_letAndConstJs);

var _arrowsJs = require('./arrows.js');

var _arrowsJs2 = _interopRequireDefault(_arrowsJs);

var _symbolsJs = require('./symbols.js');

var _symbolsJs2 = _interopRequireDefault(_symbolsJs);

var _iterAndGenJs = require('./iterAndGen.js');

var _iterAndGenJs2 = _interopRequireDefault(_iterAndGenJs);

var _classesJs = require('./classes.js');

var _classesJs2 = _interopRequireDefault(_classesJs);

(0, _sourceMapSupport.install)();

// Main app functions
function printSectionTitle(title) {
  console.info('\n# -----------------------------');
  console.info('# ' + title);
  console.info('# -----------------------------');
}

// printSectionTitle(Modules.title)
// Modules.examples()

// printSectionTitle(LetAndConst.title)
// LetAndConst.examples()

// printSectionTitle(Arrows.title)
// Arrows.examples()

printSectionTitle(_symbolsJs2['default'].title);
_symbolsJs2['default'].examples();

// printSectionTitle(IterAndGen.title)
// IterAndGen.examples()

// printSectionTitle(Classes.title)
// Classes.examples()
//# sourceMappingURL=app.js.map
