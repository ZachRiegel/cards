"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CardUtilities = require("components/CardUtilities");

var _Icon = _interopRequireDefault(require("components/Icon"));

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

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    & + .BorderAbove{\n        border-top: 1px solid black;\n        margin-top: -1px;\n    }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    color: black;\n    font-weight: 600;\n    border-bottom: 1px solid black;\n    margin-bottom: -1px;\n    &:first-child {\n        margin-top: -1px;\n        border-top: 1px solid black;\n    }\n    display: flex;\n    direction: row;\n    justify-content: space-between;\n    width: 100%;\n    pointer-events: all;\n    cursor: move;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    flex: 1;\n    min-height: 100%;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: col;\n    position: relative;\n    padding: 0;\n    margin: 0;\n    border: 0;\n    flex: 1;\n    justify-items: stretch;\n    align-items: stretch;\n    border-radius: 0 0 10px 10px;\n    overflow-y: auto;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    resize: none;\n    pointer-events: none;\n    padding: 10px;\n    font-size: 1em;\n    line-height: 1.6em;\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-radius: 0 0 10px 10px;\n    width: 100%;\n    outline: 0;\n    border: 0;\n    background-color: transparent;\n    white-space: pre;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tbackground-color: white;\n\tresize: none;\n\tpadding: 10px;\n\tfont-size: 1em;\n    line-height: 1.6em;\n\tcolor: black;\n\tborder-radius: 0 0 10px 10px;\n\tborder: 0;\n\tflex: 1;\n\toutline: none;\n    font-family: 'B612', serif;\n    min-height: 100%;\n    height: min-content;\n    width: 100%;\n    position: relative;\n    overflow-y: auto;\n    white-space: pre;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tborder-radius: 10px 10px 0 0;\n\tpadding: 10px;\n\tpadding-bottom: 0;\n\tfont-size: 1.25em;\n\tfont-weight: 600;\n\ttext-decoration: underline;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        grid-area: ", ";\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tbackground-color: white;\n\tfont-size: 1.1em;\n\tborder-radius: 10px;\n\tborder: 1px solid black;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-items: stretch;\n\talign-items: stretch;\n\t&:focus-within{\n\t\tborder-color: blue;\n\t}\n    ", "\n    flex-basis: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Zone = _styledComponents.default.div(_templateObject(), function (props) {
  return (0, _styledComponents.css)(_templateObject2(), props.zone);
});

var ZoneHeader = _styledComponents.default.div(_templateObject3());

var ZoneInput = _styledComponents.default.div(_templateObject4());

var ZoneInputReadout = _styledComponents.default.div(_templateObject5());

var ZoneInputWrapper = _styledComponents.default.div(_templateObject6());

var ZoneInputInnerWrapper = _styledComponents.default.div(_templateObject7());

var CardDefinition = _styledComponents.default.div(_templateObject8());

var FillerText = _styledComponents.default.div(_templateObject9());

var key = function () {
  var key = 0;
  return function () {
    return ++key;
  };
}();

var CardZone = function CardZone(props) {
  var inputRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      highlight = _useState4[0],
      setHighlight = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      valueReadout = _useState6[0],
      setValueReadout = _useState6[1];

  var findCardCost = (0, _react.useCallback)(function (name) {
    var _props$cards;

    if (!(props === null || props === void 0 ? void 0 : (_props$cards = props.cards) === null || _props$cards === void 0 ? void 0 : _props$cards[name])) return;
    return (0, _CardUtilities.createCostIcons)(props.cards[name].cost, 'inline');
  }, [props]);
  var updateValue = (0, _react.useCallback)(function (val) {
    var _inputRef$current;

    if (val !== value && (inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.innerText) && inputRef.current.innerText !== val) inputRef.current.innerText = val;
    setValue(val);
  }, [setValue]);
  (0, _react.useEffect)(function () {
    updateValue(props.value);
  }, [props]);
  var removeCopyOf = (0, _react.useCallback)(function (name) {
    var _value$match;

    console.log(name);
    var count = value === null || value === void 0 ? void 0 : (_value$match = value.match(new RegExp("(\\d+)x ".concat(name)))) === null || _value$match === void 0 ? void 0 : _value$match[1];
    updateValue(value === null || value === void 0 ? void 0 : value.replace(new RegExp("\\d+x ".concat(name, ".*\n?")), count - 1 ? "".concat(count - 1, "x ").concat(name, "\n") : ''));
  }, [value, updateValue]);
  var addCopyOf = (0, _react.useCallback)(function (name) {
    var _value$match2;

    var count = Number(value === null || value === void 0 ? void 0 : (_value$match2 = value.match(new RegExp("(\\d+)x (".concat(name, ")")))) === null || _value$match2 === void 0 ? void 0 : _value$match2[1]);
    if (count) updateValue(value === null || value === void 0 ? void 0 : value.replace(new RegExp("".concat(count, "x ").concat(name, ".*\n?")), "".concat(count + 1, "x ").concat(name, "\n")));else updateValue((value.trim() + "\n1x ".concat(name)).trim());
  }, [value, updateValue]);
  (0, _react.useEffect)(function () {
    setValueReadout((value || '').split(/\n{1,2}/g).map(function (line) {
      var _line$match;

      var _ref = (_line$match = line === null || line === void 0 ? void 0 : line.match(/\d+x ([\w\s_:]+)$/), _line$match.map(function (y) {
        return y.trim();
      })),
          _ref2 = _slicedToArray(_ref, 3),
          match = _ref2[0],
          count = _ref2[1],
          name = _ref2[2];

      if (name) return /*#__PURE__*/_react.default.createElement(CardDefinition, {
        className: "BorderAbove",
        key: key(),
        draggable: true,
        onDragStart: function onDragStart(event) {
          event.dataTransfer.setData("name", name);
        },
        onDragEnd: function onDragEnd(event) {
          event.preventDefault();
          if (event.dataTransfer.dropEffect === 'none') return;
          removeCopyOf(name);
        }
      }, /*#__PURE__*/_react.default.createElement("span", null, line), /*#__PURE__*/_react.default.createElement("span", {
        style: {
          height: '0'
        }
      }, findCardCost(name), /*#__PURE__*/_react.default.createElement(_Icon.default, {
        name: "dragHandle",
        inline: true
      })));else return /*#__PURE__*/_react.default.createElement(FillerText, {
        key: key()
      }, " ");
    }));
  }, [value]);
  return /*#__PURE__*/_react.default.createElement(Zone, _extends({}, props, {
    onDragOver: function onDragOver(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    },
    onDrop: function onDrop(event) {
      event.preventDefault();
      addCopyOf(event.dataTransfer.getData("name"));
    }
  }), /*#__PURE__*/_react.default.createElement(ZoneHeader, {
    onClick: function onClick(event) {
      if (inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) inputRef.current.focus();
    }
  }, props.name), /*#__PURE__*/_react.default.createElement(ZoneInputWrapper, null, /*#__PURE__*/_react.default.createElement(ZoneInputInnerWrapper, null, /*#__PURE__*/_react.default.createElement(ZoneInput, {
    ref: inputRef,
    contentEditable: true,
    onFocus: function onFocus(event) {
      return setHighlight(false);
    },
    onBlur: function onBlur(event) {
      return setHighlight(true);
    },
    onKeyUp: function onKeyUp(event) {
      setValue(event.currentTarget.innerText);
    }
  }), highlight ? /*#__PURE__*/_react.default.createElement(ZoneInputReadout, null, valueReadout) : undefined)));
};

var _default = CardZone;
exports.default = _default;