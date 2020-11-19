"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCostIcons = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("components/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createCostIcons = function createCostIcons(iconDict) {
  var iconSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (!iconDict) iconDict = {};

  var size = _defineProperty({}, iconSize, true);

  var icons = [];

  switch (iconDict.any) {
    case 0:
      {
        icons.push( /*#__PURE__*/_react.default.createElement(_Icon.default, _extends({
          key: "0",
          name: "zeroCard"
        }, size)));
        break;
      }

    case 1:
      {
        icons.push( /*#__PURE__*/_react.default.createElement(_Icon.default, _extends({
          key: "0",
          name: "oneCard"
        }, size)));
        break;
      }

    case 2:
      {
        icons.push( /*#__PURE__*/_react.default.createElement(_Icon.default, _extends({
          key: "0",
          name: "twoCard"
        }, size)));
        break;
      }

    default:
      {}
  }

  ;
  Object.keys(iconDict).forEach(function (key, index) {
    if (key === 'any') return;

    for (var value = iconDict[key]; value > 0; value -= 1) {
      icons.push( /*#__PURE__*/_react.default.createElement(_Icon.default, _extends({
        key: index + 1,
        name: key,
        border: true
      }, size)));
    }
  });
  return icons;
};

exports.createCostIcons = createCostIcons;