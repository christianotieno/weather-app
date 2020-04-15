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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom/dom.js":
/*!************************!*\
  !*** ./src/dom/dom.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// VARIABLES\nconst KELVIN = 273;\nconst weatherDataStore = {};\nconst apiKey = '0e2d4c6c91fb01e7514be5f8be6d615b';\nconst submission = document.getElementById('submit');\nconst iconElement = document.querySelector('#weather-icon');\nconst locationElement = document.querySelector('#location p');\nconst tempElement = document.querySelector('#temperature-value p');\nconst descElement = document.querySelector('#temperature-description p');\n\n\n// DISPLAY WEATHER TO UI\nfunction displayWeather() {\n  iconElement.innerHTML = `<img src=\"../src/assets/icons/${weatherDataStore.iconId}.png\"/>`;\n  tempElement.innerHTML = `${weatherDataStore.temperature.value}°<span>C</span>`;\n  descElement.innerHTML = weatherDataStore.description;\n  locationElement.innerHTML = `${weatherDataStore.city}, ${weatherDataStore.country}`;\n}\n\n\n// FETCH WEATHER DATA IN JSON FORMAT\nfunction getWeather() {\n  const city = document.getElementById('city-input').value;\n  fetch(\n    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,\n    { mode: 'cors' },\n  )\n    .then((response) => {\n      const weatherData = response.json();\n      return weatherData;\n    })\n    .then((weatherData) => {\n      weatherDataStore.temperature.value = Math.floor(weatherData.main.temp - KELVIN);\n      weatherDataStore.description = weatherData.weather[0].description;\n      weatherDataStore.iconId = weatherData.weather[0].icon;\n      weatherDataStore.city = weatherData.name;\n      weatherDataStore.country = weatherData.sys.country;\n    })\n    .then(() => {\n      displayWeather();\n    });\n}\n\n\n// BUTTON EVENT LISTENER\nsubmission.onclick = () => getWeather();\n\n\nweatherDataStore.temperature = {\n  unit: 'celsius',\n};\n\n\n// C to F conversion\nfunction celsiusToFahrenheit(temperature) {\n  return (temperature * (9 / 5)) + 32;\n}\n\n\n// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET\ntempElement.onclick = () => {\n  if (weatherDataStore.temperature.value === undefined) return;\n\n  if (weatherDataStore.temperature.unit === 'celsius') {\n    let fahrenheit = celsiusToFahrenheit(weatherDataStore.temperature.value);\n    fahrenheit = Math.floor(fahrenheit);\n\n    tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;\n    weatherDataStore.temperature.unit = 'fahrenheit';\n  } else {\n    tempElement.innerHTML = `${weatherDataStore.temperature.value}°<span>C</span>`;\n    weatherDataStore.temperature.unit = 'celsius';\n  }\n};\n\n\n//# sourceURL=webpack:///./src/dom/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dom_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/dom */ \"./src/dom/dom.js\");\n/* harmony import */ var _dom_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dom_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/main.scss?");

/***/ })

/******/ });