"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Card = _interopRequireDefault(require("components/Card"));

var _Delay = _interopRequireDefault(require("components/Delay"));

var _framerMotion = require("framer-motion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n                min-width: max(400px, 30%);\n            "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n                min-width: 0;\n            "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin: 20px 0 0 20px;\n    padding: 0;\n    border: 0;\n    ", "\n    flex: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: calc(100% + 20px);\n    justify-content: center;\n    margin: 0px 0px 0px -20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardDisplay = (0, _styledComponents.default)(_framerMotion.motion.div)(_templateObject());
var CardEntry = (0, _styledComponents.default)(_framerMotion.motion.div)(_templateObject2(), function (props) {
  if (props.hidden) {
    return (0, _styledComponents.css)(_templateObject3());
  } else {
    return (0, _styledComponents.css)(_templateObject4());
  }
});
var Animator = (0, _styledComponents.default)(_framerMotion.motion.div)(_templateObject5());

var item = function item(x) {
  return {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        delay: .5 * x / Math.pow(x, .5),
        duration: 1
      }
    }
  };
};

var CardRow = function CardRow(props) {
  //resize cards to fill screen correctly
  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      scale = _useState2[0],
      setScale = _useState2[1];

  var _useState3 = (0, _react.useState)(new ResizeObserver(function (entries) {
    entries.forEach(function (entry) {
      setScale(Math.floor(entry.target.offsetWidth / 5) * 5);
    });
  })),
      _useState4 = _slicedToArray(_useState3, 1),
      onCardResizeObserver = _useState4[0]; //card isn't guaranteed to be on dom at first render, using callback instead of ref


  var cardMeasure = (0, _react.useCallback)(function (node) {
    if (!node) return;
    onCardResizeObserver.disconnect();
    onCardResizeObserver.observe(node);
  }, [onCardResizeObserver]);
  var firstNonHidden = props.cards.reduce(function (acc, card, index) {
    return acc || (card.hidden ? 0 : index + 1);
  }, 0) - 1;
  return /*#__PURE__*/_react.default.createElement("div", null, props.cards.length ? /*#__PURE__*/_react.default.createElement(CardDisplay, null, props.cards.map(function (card, index) {
    return /*#__PURE__*/_react.default.createElement(CardEntry, {
      key: card.key,
      initial: "hidden",
      animate: "show",
      hidden: card.hidden,
      variants: item(index)
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: '100%',
        height: '100%'
      },
      ref: index === firstNonHidden ? cardMeasure : null
    }, /*#__PURE__*/_react.default.createElement(_Card.default, _extends({}, card, {
      width: scale
    }))));
  }), /*#__PURE__*/_react.default.createElement(CardEntry, null), /*#__PURE__*/_react.default.createElement(CardEntry, null), /*#__PURE__*/_react.default.createElement(CardEntry, null)) : null);
};

var _default = CardRow;
exports.default = _default;