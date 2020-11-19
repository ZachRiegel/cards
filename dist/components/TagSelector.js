"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icon = _interopRequireDefault(require("components/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n            border-color: transparent !important;\n        "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 3%;\n    left: 3%;\n    right: 3%;\n    bottom: 3%;\n    border-radius: 100%;\n    border: 3px solid transparent;\n    background-color: transparent !important;\n    ", "\n    z-index: 4;\n    cursor: pointer;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n            color: black !important;\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-size: 11px;\n    height: 11px;\n    margin: 2px;\n    position: relative;\n    text-align: center;\n    font-weight: 500;\n    font-family: 'B612', seriff;\n    color: grey;\n     ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    min-width: 40px;\n    max-width: 60px;\n    width: 60px;\n    flex: 1;\n    z-index: 0;\n    padding: 0;\n    margin: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    width: min-content;\n    align-items: center;\n    justify-content: center;\n\n    &:hover > div > span {\n        border-color: #6495ed;\n        background-color: #6495ed;\n    }\n    &:hover > span {\n        color: #6495ed;\n    }\n    user-select: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin: 5px 10px 5px 10px;\n    &:first-child {\n        margin-left: 0;\n    }\n    &:last-child {\n        margin-right: 0;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TagWrapper = _styledComponents.default.div(_templateObject());

var TagContainer = _styledComponents.default.div(_templateObject2());

var TagIcon = _styledComponents.default.div(_templateObject3());

var TagText = _styledComponents.default.span(_templateObject4(), function (props) {
  if (props.selected) return (0, _styledComponents.css)(_templateObject5());
});

var TagRing = _styledComponents.default.span(_templateObject6(), function (props) {
  return props.selected ? (0, _styledComponents.css)(_templateObject7()) : null;
});

var displayNames = {
  waterSkill: 'Hydromancer',
  fireSkill: 'Pyromancer',
  earthSkill: 'Geomancer',
  airSkill: 'Aeromancer',
  barbarianSkill: 'Barbarian',
  legionnaireSkill: 'Legionnaire',
  marksmanSkill: 'Marksman',
  swashbucklerSkill: 'Swashbuckler'
};

var TagSelector = /*#__PURE__*/_react.default.memo(function (props) {
  var iconClicked = (0, _react.useCallback)(function () {
    if (props.onSelect) props.onSelect(props.name);
  }, [props]);
  return /*#__PURE__*/_react.default.createElement(TagWrapper, null, /*#__PURE__*/_react.default.createElement(TagContainer, {
    onClick: iconClicked,
    selected: props.selected[props.name]
  }, /*#__PURE__*/_react.default.createElement(TagIcon, null, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    border: true,
    name: props.name,
    greyscale: !props.selected[props.name],
    full: true
  }), /*#__PURE__*/_react.default.createElement(TagRing, {
    selected: props.selected[props.name]
  })), /*#__PURE__*/_react.default.createElement(TagText, {
    selected: props.selected[props.name]
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translateX(-50%) translateY(-50%)'
    }
  }, displayNames[props.name]))));
});

var _default = TagSelector;
exports.default = _default;