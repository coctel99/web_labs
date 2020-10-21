/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// ref: https://github.com/tc39/proposal-global\nvar getGlobal = function () {\n\t// the only reliable means to get the global object is\n\t// `Function('return this')()`\n\t// However, this causes CSP violations in Chrome apps.\n\tif (typeof self !== 'undefined') { return self; }\n\tif (typeof window !== 'undefined') { return window; }\n\tif (typeof global !== 'undefined') { return global; }\n\tthrow new Error('unable to locate global object');\n}\n\nvar global = getGlobal();\n\nmodule.exports = exports = global.fetch;\n\n// Needed for TypeScript and Webpack.\nexports.default = global.fetch.bind(global);\n\nexports.Headers = global.Headers;\nexports.Request = global.Request;\nexports.Response = global.Response;\n\n//# sourceURL=webpack:///./node_modules/node-fetch/browser.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n    getAbilityUrl\n} = __webpack_require__(/*! ./model */ \"./src/model.js\");\n\ndocument.querySelector(\"#root\").innerHTML = `\n    <div>\n      <h1>Single Page Application (PokeApi)</h1>\n      <ul id=\"header\">\n        <li><a class=\"link\" id=\"info\" href=\"#\">Student info</a></li>\n        <li><a class=\"link\" id=\"pokemon\" href=\"#\">Pokemon info</a></li>\n      </ul>\n      <div id=\"content\"></div>\n    </div>\n  `;\n\nconst infoMarkup = () => `<div>\n  <h1>Barabanov Alexander</h1>\n  <h2>M3308</h2>\n  </div>`;\n\nconst pokemonMarkup = (name, abilities) => `\n  <div id=\"pokemon-container\">\n    <h1 id=\"pokemon-name\">Name: ${name}</h1>\n    <h3 id=\"pokemon-ability-effect\">Effects: <br>${abilities.join(\"<br><br>\")}</h3>\n  </div>`;\n\nconst contentElement = document.querySelector(\"#content\");\n\nconst renderInfo = () => {\n    contentElement.innerHTML = infoMarkup();\n};\n\nconst renderPokemon = async () => {\n    getAbilityUrl(25).then(result => {\n        contentElement.innerHTML = pokemonMarkup(result[0], result[1]);\n    });\n};\n\ndocument.querySelectorAll(\".link\").forEach((el) => [\n    el.addEventListener(\"click\", (event) => {\n        if (event.target.id === \"info\") {\n            renderInfo();\n        }\n        if (event.target.id === \"pokemon\") {\n            renderPokemon();\n        }\n    }),\n]);\n\nrenderInfo();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {global.fetch = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n\nconst getDataFromUrl = async (url) => {\n    const response = await fetch(url);\n    const data = await response.json();\n    return data;\n};\n\nconst getAbilityUrl = async (number) => {\n    let url = `https://pokeapi.co/api/v2/pokemon/${number}`;\n    let ability_urls = [];\n    let ability_names = [];\n    let info = [];\n    let abilities = [];\n    let name;\n    const tempData = await getDataFromUrl(url);\n    name = tempData.name;\n    for (let i = 0; i < tempData.abilities.length; i++) {\n        ability_urls.push(tempData.abilities[i].ability.url);\n        ability_names.push(tempData.abilities[i].ability.name);\n    }\n\n    console.log(\"abilities: \" + ability_names);\n\n    let requests = ability_urls.map(url => getInfoAboutAbility(url));\n    info = await Promise.all(requests);\n    for (let k = 0; k < info.length; k++) {\n        abilities.push(\"<i>\" + ability_names[k] + \"</i><br>\" + info[k].effect_entries[0].effect);\n    }\n    return [name, abilities];\n};\n\nconst getInfoAboutAbility = async (url) => {\n    const response = await fetch(url);\n    const abilityData = await response.json();\n    return abilityData;\n};\n\nmodule.exports = {\n    getAbilityUrl\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/model.js?");

/***/ })

/******/ });