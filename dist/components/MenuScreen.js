"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _FirebaseContext = _interopRequireDefault(require("contexts/FirebaseContext"));

var _GoogleLoginButton = _interopRequireDefault(require("components/GoogleLoginButton"));

var _LoginIndicator = _interopRequireDefault(require("components/LoginIndicator"));

var _UIOverlay = _interopRequireDefault(require("components/UIOverlay"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: 500;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tpointer-events: auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoginMenu = _styledComponents.default.div(_templateObject());

var MenuContainer = _styledComponents.default.div(_templateObject2());

var MenuText = _styledComponents.default.div(_templateObject3());

var MenuScreen = function MenuScreen() {
  return /*#__PURE__*/_react.default.createElement(_FirebaseContext.default.Consumer, null, function (firebase) {
    if (firebase.loggedIn) {
      // todo add main menu
      return 'logged in';
    } else {
      return /*#__PURE__*/_react.default.createElement(LoginMenu, null, /*#__PURE__*/_react.default.createElement(MenuText, null, "Login with:"), /*#__PURE__*/_react.default.createElement(_GoogleLoginButton.default, null));
    }
  });
};

var _default = MenuScreen;
exports.default = _default;