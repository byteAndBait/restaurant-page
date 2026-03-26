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

/***/ "./src/assets/images/landing.png"
/*!***************************************!*\
  !*** ./src/assets/images/landing.png ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c69169f5e6380debd138.png";

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tabs_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs/home.js */ \"./src/tabs/home.js\");\n/* harmony import */ var _tabs_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/menu.js */ \"./src/tabs/menu.js\");\n/* harmony import */ var _tabs_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/about.js */ \"./src/tabs/about.js\");\n\n\n\n(0,_tabs_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\nconst navbar = document.querySelector(\"header nav\")\nconst landingContentElement = document.getElementById(\"content\")\nconst tabFunctions ={\n    \"home\" : _tabs_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    \"menu\" : _tabs_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    \"about\" : _tabs_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}\nnavbar.addEventListener(\"click\" , (e)=>{\n    landingContentElement.textContent = '' // Emptying the content \n    if(e.target.dataset.tabName){\n        tabFunctions[e.target.dataset.tabName]()\n    }\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFrQztBQUNBO0FBQ0U7QUFDcEMseURBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFEQUFJO0FBQ2pCLGFBQWEscURBQUk7QUFDakIsY0FBYyxzREFBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzP2VjMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhvbWUgZnJvbSBcIi4vdGFicy9ob21lLmpzXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi90YWJzL21lbnUuanNcIjtcbmltcG9ydCBhYm91dCBmcm9tIFwiLi90YWJzL2Fib3V0LmpzXCI7XG5ob21lKClcbmNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXIgbmF2XCIpXG5jb25zdCBsYW5kaW5nQ29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcbmNvbnN0IHRhYkZ1bmN0aW9ucyA9e1xuICAgIFwiaG9tZVwiIDogaG9tZSxcbiAgICBcIm1lbnVcIiA6IG1lbnUsXG4gICAgXCJhYm91dFwiIDogYWJvdXRcbn1cbm5hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiAsIChlKT0+e1xuICAgIGxhbmRpbmdDb250ZW50RWxlbWVudC50ZXh0Q29udGVudCA9ICcnIC8vIEVtcHR5aW5nIHRoZSBjb250ZW50IFxuICAgIGlmKGUudGFyZ2V0LmRhdGFzZXQudGFiTmFtZSl7XG4gICAgICAgIHRhYkZ1bmN0aW9uc1tlLnRhcmdldC5kYXRhc2V0LnRhYk5hbWVdKClcbiAgICB9XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ },

/***/ "./src/tabs/about.js"
/*!***************************!*\
  !*** ./src/tabs/about.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ about)\n/* harmony export */ });\nfunction about(){\n    console.log(\"About Invoked\")\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGFicy9hYm91dC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3RhYnMvYWJvdXQuanM/M2E3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dCgpe1xuICAgIGNvbnNvbGUubG9nKFwiQWJvdXQgSW52b2tlZFwiKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/tabs/about.js\n\n}");

/***/ },

/***/ "./src/tabs/home.js"
/*!**************************!*\
  !*** ./src/tabs/home.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _assets_images_landing_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/landing.png */ \"./src/assets/images/landing.png\");\n\n\nfunction home(){\nconst landingContentElement = document.querySelector(\"#content\")\n\nconst landingImage = document.createElement(\"img\")\nlandingImage.src = _assets_images_landing_png__WEBPACK_IMPORTED_MODULE_0__;\n\nconst landingText = document.createElement(\"div\")\nlandingText.className = \"text\"\n\nconst landingTextTitle = document.createElement(\"h1\")\nlandingTextTitle.textContent = \"We serve our customer EXCEPTIONAL food\"\nconst landingTextDescription = document.createElement(\"p\")\nlandingTextDescription.textContent = \"Hello! And welcome to the Los Pollos Hermanos family!\"\n\nlandingText.appendChild(landingTextTitle)\nlandingText.appendChild(landingTextDescription)\n\nlandingContentElement.appendChild(landingImage)\nlandingContentElement.appendChild(landingText)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGFicy9ob21lLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJEOztBQUU1QztBQUNmOztBQUVBO0FBQ0EsbUJBQW1CLHVEQUFlOztBQUVsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3RhYnMvaG9tZS5qcz9hZmFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsYW5kaW5nSW1hZ2VTcmMgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvbGFuZGluZy5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpe1xuY29uc3QgbGFuZGluZ0NvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG5cbmNvbnN0IGxhbmRpbmdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbmxhbmRpbmdJbWFnZS5zcmMgPSBsYW5kaW5nSW1hZ2VTcmM7XG5cbmNvbnN0IGxhbmRpbmdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxubGFuZGluZ1RleHQuY2xhc3NOYW1lID0gXCJ0ZXh0XCJcblxuY29uc3QgbGFuZGluZ1RleHRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxubGFuZGluZ1RleHRUaXRsZS50ZXh0Q29udGVudCA9IFwiV2Ugc2VydmUgb3VyIGN1c3RvbWVyIEVYQ0VQVElPTkFMIGZvb2RcIlxuY29uc3QgbGFuZGluZ1RleHREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG5sYW5kaW5nVGV4dERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJIZWxsbyEgQW5kIHdlbGNvbWUgdG8gdGhlIExvcyBQb2xsb3MgSGVybWFub3MgZmFtaWx5IVwiXG5cbmxhbmRpbmdUZXh0LmFwcGVuZENoaWxkKGxhbmRpbmdUZXh0VGl0bGUpXG5sYW5kaW5nVGV4dC5hcHBlbmRDaGlsZChsYW5kaW5nVGV4dERlc2NyaXB0aW9uKVxuXG5sYW5kaW5nQ29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobGFuZGluZ0ltYWdlKVxubGFuZGluZ0NvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGxhbmRpbmdUZXh0KVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/tabs/home.js\n\n}");

/***/ },

/***/ "./src/tabs/menu.js"
/*!**************************!*\
  !*** ./src/tabs/menu.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu(){\n    console.log(\"Menu Invoked\")\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGFicy9tZW51LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZTtBQUNmO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvdGFicy9tZW51LmpzP2U3MjQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpe1xuICAgIGNvbnNvbGUubG9nKFwiTWVudSBJbnZva2VkXCIpXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/tabs/menu.js\n\n}");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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