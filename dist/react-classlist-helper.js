(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["reactClasslistHelper"] = factory();
	else
		root["reactClasslistHelper"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tC = exports.cL = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.classList = classList;
exports.toggleClass = toggleClass;

var _assertions = __webpack_require__(1);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Spred css class names provided as input
 *
 * @param      {Array}   args  The classe's names.
 * @return     {string}  final className
 */
function classList() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    if (args.length === 0) {
        return '';
    }

    var classBuffer = [];

    var _a = args;

    var _f = function _f(className) {
        if (Array.isArray(className)) {
            classBuffer = [].concat(_toConsumableArray(classBuffer), [className.reduce(function (total, curItem) {
                return total + ' ' + curItem;
            })]);
        } else if ((0, _assertions.isString)(className)) {
            classBuffer = [].concat(_toConsumableArray(classBuffer), [className]);
        } else if ((0, _assertions.isObject)(className)) {
            var keys = Object.keys(className);

            var _a2 = keys;

            var _f2 = function _f2(key) {
                if (className[key] === true) {
                    classBuffer = [].concat(_toConsumableArray(classBuffer), [key]);
                }
            };

            for (var _i2 = 0; _i2 < _a2.length; _i2++) {
                _f2(_a2[_i2], _i2, _a2);
            }

            undefined;
        } else {
            throw new Error('Expected className to be a string but instead got ' + (typeof className === 'undefined' ? 'undefined' : _typeof(className)));
        }
    };

    for (var _i = 0; _i < _a.length; _i++) {
        _f(_a[_i], _i, _a);
    }

    undefined;

    return classBuffer.join(' ').trim();
}

/**
 * Toggle a class based on a condition.
 *
 * @param      {string}   className  The class name
 * @param      {boolean}  condition  The condition
 * @return     {string}   if condition is true, returns the string, if false,
 *                        returns empty string
 */
function toggleClass(className, condition) {
    if ((0, _assertions.isUndefined)(className) || !(0, _assertions.isString)(className)) {
        throw new Error('Expected className to be a string but instead got ' + (typeof className === 'undefined' ? 'undefined' : _typeof(className)));
    }

    if ((0, _assertions.isUndefined)(condition) || !(0, _assertions.isBoolean)(condition)) {
        throw new Error('Expected condition to be a boolean value but instead got ' + (typeof condition === 'undefined' ? 'undefined' : _typeof(condition)));
    }

    var ClassMap = {};
    ClassMap[className] = condition;

    return classList(ClassMap);
}

var cL = exports.cL = classList;
var tC = exports.tC = toggleClass;

var defaultFunc = classList;

exports.default = defaultFunc;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isBoolean = isBoolean;
exports.isObject = isObject;
exports.isString = isString;
exports.isUndefined = isUndefined;
/**
 *
 * @param {*} value Any value
 * @return {boolean} assertion
 */
function isBoolean(value) {
  return typeof value === 'boolean' || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null && typeof value.valueOf() === 'boolean';
}

/**
 *
 * @param {*} value Any value
 * @return {boolean} assertion
 */
function isObject(value) {
  return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
}

/**
 *
 * @param {*} value Any value
 * @return {boolean} assertion
 */
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

/**
 *
 * @param {*} value Any value
 * @return {boolean} assertion
 */
function isUndefined(value) {
  return typeof value === 'undefined';
}

/***/ })
/******/ ]);
});