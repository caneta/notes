// Using source map to directly debug ES6 sources
import { install } from 'source-map-support';
install();

// Main app functions
function printSectionTitle(title){
	console.info(`\n# -----------------------------`)
	console.info(`# ${title}`)
	console.info(`# -----------------------------`)
}

// Examples modules imports
import Modules from './modules.js'
import { square, diag } from './modules'
import * as lib from './modules'
import Arrows from './arrows.js'
import Classes from './classes.js'
import LetAndConst from './letAndConst.js'

printSectionTitle(Modules.title)
Modules.examples()

printSectionTitle(LetAndConst.title)
LetAndConst.examples()

printSectionTitle(Arrows.title)
Arrows.examples()

printSectionTitle(Classes.title)
Classes.examples()
