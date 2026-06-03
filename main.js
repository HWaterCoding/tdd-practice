/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/caesar-cypher/caesar-cypher.js"
/*!********************************************!*\
  !*** ./src/caesar-cypher/caesar-cypher.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ encode)\n/* harmony export */ });\nfunction encode(string, amount){\n\n    if(typeof string !== \"string\" || string === \"\"){\n        throw new Error(\"Please enter a string\")\n    }\n    \n    const convertedAmount = ((amount % 26) + 26) % 26;\n\n    const letters = string.split(\"\");\n    console.log(letters);\n\n    return letters.map(letter =>{\n        const code = letter.charCodeAt(0);\n        if(code < 65 || code > 90 && code < 96 || code > 122) {\n            return letter;  \n        };\n\n        let letterValue = letter.charCodeAt(0) + convertedAmount;\n        console.log(letterValue)\n        if(letterValue > 90 && letterValue < 97 || letterValue > 122){\n            letterValue = letterValue - 26\n        }\n        const encodedLetter = String.fromCharCode(letterValue);\n        return encodedLetter;\n    }).join(\"\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2Flc2FyLWN5cGhlci9jYWVzYXItY3lwaGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3RkZC1wcmFjdGljZS8uL3NyYy9jYWVzYXItY3lwaGVyL2NhZXNhci1jeXBoZXIuanM/OTc5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmNvZGUoc3RyaW5nLCBhbW91bnQpe1xuXG4gICAgaWYodHlwZW9mIHN0cmluZyAhPT0gXCJzdHJpbmdcIiB8fCBzdHJpbmcgPT09IFwiXCIpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgZW50ZXIgYSBzdHJpbmdcIilcbiAgICB9XG4gICAgXG4gICAgY29uc3QgY29udmVydGVkQW1vdW50ID0gKChhbW91bnQgJSAyNikgKyAyNikgJSAyNjtcblxuICAgIGNvbnN0IGxldHRlcnMgPSBzdHJpbmcuc3BsaXQoXCJcIik7XG4gICAgY29uc29sZS5sb2cobGV0dGVycyk7XG5cbiAgICByZXR1cm4gbGV0dGVycy5tYXAobGV0dGVyID0+e1xuICAgICAgICBjb25zdCBjb2RlID0gbGV0dGVyLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIGlmKGNvZGUgPCA2NSB8fCBjb2RlID4gOTAgJiYgY29kZSA8IDk2IHx8IGNvZGUgPiAxMjIpIHtcbiAgICAgICAgICAgIHJldHVybiBsZXR0ZXI7ICBcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgbGV0dGVyVmFsdWUgPSBsZXR0ZXIuY2hhckNvZGVBdCgwKSArIGNvbnZlcnRlZEFtb3VudDtcbiAgICAgICAgY29uc29sZS5sb2cobGV0dGVyVmFsdWUpXG4gICAgICAgIGlmKGxldHRlclZhbHVlID4gOTAgJiYgbGV0dGVyVmFsdWUgPCA5NyB8fCBsZXR0ZXJWYWx1ZSA+IDEyMil7XG4gICAgICAgICAgICBsZXR0ZXJWYWx1ZSA9IGxldHRlclZhbHVlIC0gMjZcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbmNvZGVkTGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShsZXR0ZXJWYWx1ZSk7XG4gICAgICAgIHJldHVybiBlbmNvZGVkTGV0dGVyO1xuICAgIH0pLmpvaW4oXCJcIik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/caesar-cypher/caesar-cypher.js\n\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _caesar_cypher_caesar_cypher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caesar-cypher/caesar-cypher.js */ \"./src/caesar-cypher/caesar-cypher.js\");\n\n\n(0,_caesar_cypher_caesar_cypher_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"abc\", 3);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBc0Q7O0FBRXRELDJFQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGRkLXByYWN0aWNlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVuY29kZSBmcm9tIFwiLi9jYWVzYXItY3lwaGVyL2NhZXNhci1jeXBoZXIuanNcIjtcblxuZW5jb2RlKFwiYWJjXCIsIDMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;