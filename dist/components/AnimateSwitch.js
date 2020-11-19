"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AnimatedSwitch = void 0;

var _react = _interopRequireWildcard(require("react"));

var _framerMotion = require("framer-motion");

var _Animation = _interopRequireDefault(require("components/Animation"));

var _AnimationContext = _interopRequireDefault(require("contexts/AnimationContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var variants = {
  enter: {
    opacity: 0
  },
  center: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
};

var AnimationContextWrapper = function AnimationContextWrapper(Comp) {
  return function (props) {
    return /*#__PURE__*/_react.default.createElement(_Animation.default, null, /*#__PURE__*/_react.default.createElement(Comp, props));
  };
};

var AnimatedSwitch = /*#__PURE__*/_react.default.memo(AnimationContextWrapper(function (props) {
  var animation = (0, _react.useContext)(_AnimationContext.default);
  return /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    variants: variants,
    initial: "enter",
    animate: "center",
    exit: "exit",
    transition: {
      duration: .7
    },
    onAnimationComplete: function onAnimationComplete() {
      animation.setCompleted(true);
    }
  }, props.children);
}));

exports.AnimatedSwitch = AnimatedSwitch;
var _default = AnimatedSwitch;
exports.default = _default;