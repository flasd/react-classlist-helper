'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = spred;

var _lodash = require('lodash.isobject');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.isstring');

var _lodash4 = _interopRequireDefault(_lodash3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function spred() {
    var classList = [];

    for (var _len = arguments.length, classes = Array(_len), _key = 0; _key < _len; _key++) {
        classes[_key] = arguments[_key];
    }

    classes.forEach(function (className) {
        if ((0, _lodash2.default)(className)) {
            var keys = Object.keys(className);
            keys.forEach(function (key) {
                if (className[key] === true && (0, _lodash4.default)(key)) {
                    classList = [].concat(_toConsumableArray(classList), [key]);
                }
            });
        } else {
            classList = [].concat(_toConsumableArray(classList), [className]);
        }
    });

    return classList.join(' ');
}
