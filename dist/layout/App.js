"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CardSearch = _interopRequireDefault(require("components/CardSearch"));

var _DeckTester = _interopRequireDefault(require("components/DeckTester"));

var _CardLoader = _interopRequireDefault(require("components/CardLoader"));

var _FireBase = _interopRequireDefault(require("components/FireBase.js"));

var _AnimateSwitch = _interopRequireDefault(require("components/AnimateSwitch.js"));

var _framerMotion = require("framer-motion");

var _Page = _interopRequireDefault(require("components/Page"));

var _MenuScreen = _interopRequireDefault(require("components/MenuScreen"));

require("layout/App.css");

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//handles routing and route-change related animations
var App = function App() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      backgroundColor: 'black'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      width: '100vw',
      height: '100vh'
    }
  }, /*#__PURE__*/_react.default.createElement(_FireBase.default, null, /*#__PURE__*/_react.default.createElement(_CardLoader.default, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: ['/cards', '/cards/cards']
  }, /*#__PURE__*/_react.default.createElement(_framerMotion.AnimatePresence, {
    initial: true,
    exitBeforeEnter: true
  }, /*#__PURE__*/_react.default.createElement(_AnimateSwitch.default, null, /*#__PURE__*/_react.default.createElement(_Page.default, null, /*#__PURE__*/_react.default.createElement(_CardSearch.default, null))))), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: ['/decktester', '/cards/decktester']
  }, /*#__PURE__*/_react.default.createElement(_framerMotion.AnimatePresence, {
    initial: true,
    exitBeforeEnter: true
  }, /*#__PURE__*/_react.default.createElement(_AnimateSwitch.default, null, /*#__PURE__*/_react.default.createElement(_Page.default, null, /*#__PURE__*/_react.default.createElement(_DeckTester.default, null)))))))))));
};

var _default = App;
exports.default = _default;