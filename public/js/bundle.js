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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const CharacterData = __webpack_require__(/*! ./models/character_data.js */ \"./src/models/character_data.js\");\nconst CharacterView = __webpack_require__(/*! ./views/character_view.js */ \"./src/views/character_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n  const characterSelect = document.querySelector('#character-select');\n  const characterContainer = document.querySelector('#character-view');\n  const characterView = new CharacterView(characterSelect, characterContainer);\n\n  const characterData = new CharacterData();\n\n  characterSelect.addEventListener('change', (event) => {\n    const characterDiv = document.querySelector('#character-view');\n    const selectedIndex = event.target.value;\n    const selectedCharacter = characterData.data[selectedIndex];\n    characterView.renderDetail(selectedCharacter);\n  });\n\n\n  characterData.getData((data) => {\n    characterView.renderSelect(data);\n  });\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/request.js":
/*!********************************!*\
  !*** ./src/helpers/request.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function(url) {\n  this.url = url;\n};\n\nRequest.prototype.get = function(onComplete) {\n  const request = new XMLHttpRequest();\n  request.open('GET', this.url, this.apiKey);\n  request.addEventListener('load', function() {\n    if(this.status !== 200) {\n      return;\n    }\n\n    const responseBody = JSON.parse(this.responseText);\n    onComplete(responseBody);\n  });\n  request.send();\n};\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./src/helpers/request.js?");

/***/ }),

/***/ "./src/models/character_data.js":
/*!**************************************!*\
  !*** ./src/models/character_data.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Request = __webpack_require__(/*! ../helpers/request.js */ \"./src/helpers/request.js\");\n\nconst CharacterData = function() {\n  this.url ='http://hp-api.herokuapp.com/api/characters';\n  this.data = null;\n\n}\n\nCharacterData.prototype.getData = function (onComplete) {\n  const request = new Request(this.url,);\n  request.get((data) => {\n    this.data = data;\n    onComplete(data);\n    console.log(data);\n  })\n};\n\nmodule.exports = CharacterData;\n\n\n//# sourceURL=webpack:///./src/models/character_data.js?");

/***/ }),

/***/ "./src/views/character_view.js":
/*!*************************************!*\
  !*** ./src/views/character_view.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const CharacterView = function (characterSelect, characterContainer) {\n  this.characterSelect = characterSelect;\n  this.characterContainer = characterContainer;\n}\n\nCharacterView.prototype.renderSelect = function (characterData) {\n  characterData.forEach((character, index) => {\n    const characterOption = document.createElement('option');\n    characterOption.textContent = character.name;\n    characterOption.value = index;\n    this.characterSelect.appendChild(characterOption);\n    \n  });\n\n};\n\nCharacterView.prototype.renderDetail = function (character) {\n  const characterName = document.createElement('p');\n  characterName.textContent = character.name;\n  this.characterContainer.appendChild(characterName);\n\n  const characterImage = document.createElement('img');\n  characterImage.src = character.image;\n  this.characterContainer.appendChild(characterImage);\n};\n\n\nmodule.exports = CharacterView;\n\n\n//# sourceURL=webpack:///./src/views/character_view.js?");

/***/ })

/******/ });