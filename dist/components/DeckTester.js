"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CardContext = _interopRequireDefault(require("contexts/CardContext"));

var _CardZone = _interopRequireDefault(require("components/CardZone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\t\tgrid-area: ", ";\n\t"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tbackground-color: rebeccapurple;\n\t", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tpadding: 20px;\n\tdisplay: grid;\n\tgap: 20px;\n\tgrid-template-areas: \n    \"stats deck hand exile\"\n    \"stats misc buff yard\";\n    justify-items: stretch;\n    align-items: stretch;\n    width: 100%;\n    height: 100%;\n    max-height: 100vh;\n    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));\n    grid-template-rows: repeat(auto-fit, minmax(0, 1fr));\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground-color: #ffffff;\n\toverflow: hidden;\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-family: 'B612', serif;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Splash = _styledComponents.default.div(_templateObject());

var ZoneGrid = _styledComponents.default.div(_templateObject2());

var Square = _styledComponents.default.div(_templateObject3(), function (props) {
  return (0, _styledComponents.css)(_templateObject4(), props.area || '');
});

var DeckTester = function DeckTester() {
  var cardDefinitions = (0, _react.useContext)(_CardContext.default);

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      cards = _useState2[0],
      setCards = _useState2[1];

  (0, _react.useEffect)(function () {
    if (!cardDefinitions) return;
    setCards((Object.entries(cardDefinitions) || []).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      return [value.name, value];
    }).reduce(function (acc, _ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          name = _ref4[0],
          val = _ref4[1];

      return Object.assign(acc, _defineProperty({}, name, val));
    }, {}));
  }, [cardDefinitions]);

  var _useState3 = (0, _react.useState)({
    stats: 'words',
    deck: '',
    hand: '',
    exile: '',
    misc: '',
    buff: '',
    yard: ''
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      zones = _useState4[0],
      setZones = _useState4[1];

  return /*#__PURE__*/_react.default.createElement(Splash, null, /*#__PURE__*/_react.default.createElement(ZoneGrid, null, /*#__PURE__*/_react.default.createElement(_CardZone.default, {
    zone: "stats",
    name: "Character Stats",
    value: zones.stats,
    cards: cards
  }), /*#__PURE__*/_react.default.createElement(_CardZone.default, {
    zone: "deck",
    name: "Deck",
    value: zones.deck,
    cards: cards
  }), /*#__PURE__*/_react.default.createElement(_CardZone.default, {
    zone: "hand",
    name: "Hand",
    value: zones.hand,
    cards: cards
  }), /*#__PURE__*/_react.default.createElement(_CardZone.default, {
    zone: "exile",
    name: "Exile",
    value: zones.exile,
    cards: cards
  }), /*#__PURE__*/_react.default.createElement(_CardZone.default, {
    zone: "misc",
    name: "Misc",
    value: zones.misc,
    cards: cards
  }), /*#__PURE__*/_react.default.createElement(_CardZone.default, {
    zone: "buff",
    name: "Buff",
    value: zones.buff,
    cards: cards
  }), /*#__PURE__*/_react.default.createElement(_CardZone.default, {
    zone: "yard",
    name: "Graveyard",
    value: zones.yard,
    cards: cards
  })));
};

var _default = DeckTester;
exports.default = _default;