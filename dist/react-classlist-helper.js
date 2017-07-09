'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = classList;
exports.toggleClass = toggleClass;

var _lodash = require('lodash.isboolean');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.isobjectlike');

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = require('lodash.isstring');

var _lodash6 = _interopRequireDefault(_lodash5);

var _lodash7 = require('lodash.isundefined');

var _lodash8 = _interopRequireDefault(_lodash7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function classList() {
    for (var _len = arguments.length, classes = Array(_len), _key = 0; _key < _len; _key++) {
        classes[_key] = arguments[_key];
    }

    if (classes.length === 0) {
        return '';
    }

    var classBuffer = [];

    classes.forEach(function (className) {
        if (Array.isArray(className)) {
            classBuffer = [].concat(_toConsumableArray(classBuffer), [className.reduce(function (total, classItem) {
                return total + ' ' + classItem;
            })]);
        } else if ((0, _lodash6.default)(className)) {
            classBuffer = [].concat(_toConsumableArray(classBuffer), [className]);
        } else if ((0, _lodash4.default)(className)) {
            var keys = Object.keys(className);

            keys.forEach(function (key) {
                if (className[key] === true) {
                    classBuffer = [].concat(_toConsumableArray(classBuffer), [key]);
                }
            });
        } else {
            throw new Error('Expected className to be a string but instead got ' + (typeof className === 'undefined' ? 'undefined' : _typeof(className)));
        }
    });

    return classBuffer.join(' ');
}

function toggleClass(className, condition) {
    if ((0, _lodash8.default)(className) || !(0, _lodash6.default)(className)) {
        throw new Error('Expected className to be a string but instead got ' + (typeof className === 'undefined' ? 'undefined' : _typeof(className)));
    }

    if ((0, _lodash8.default)(condition) || !(0, _lodash2.default)(condition)) {
        throw new Error('Expected condition to be a boolean value but instead got ' + (typeof condition === 'undefined' ? 'undefined' : _typeof(condition)));
    }

    var ClassMap = {};
    ClassMap[className] = condition;

    return classList(ClassMap);
}
