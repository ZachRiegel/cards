"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CardContext = _interopRequireDefault(require("contexts/CardContext"));

var _AnimationContext = _interopRequireDefault(require("contexts/AnimationContext"));

var _TagSelector = _interopRequireDefault(require("components/TagSelector"));

var _CardRow = _interopRequireDefault(require("components/CardRow"));

var _CardLoader = _interopRequireDefault(require("components/CardLoader"));

var _ScrollableSection = _interopRequireDefault(require("components/ScrollableSection"));

var _Icon = _interopRequireDefault(require("components/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\tflex: 1;\n\tbackground-color: #f2f2f2;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\tflex: 1;\n\tbackground-color: #e2e6ea;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tpadding: 10px;\n\tborder-bottom: 3px solid #00b4d8;\n\tflex: 1;\n\tbackground-color: black;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    flex: 1;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tborder: 0;\n\toutline: 0;\n\tmargin-left: 5px;\n\tpadding: 5px;\n\tcolor: white;\n\tbackground-color: transparent;\n\tfont-size: 20px;\n\n\t&::placeholder {\n\t\tcolor: #e5e5e5;\n\t}\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\t\t\t box-shadow: 0px 0px 10px 5px #333;\n\t\t"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\twidth: 100%;\n\tbackground-color: #f5f5f5;\n\tborder-bottom: 1px solid #b3b3b3;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tposition: sticky;\n\ttop: 0;\n\tz-index: 4;\n\t", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tmax-width: min(1600px, 90%);\n\twidth: 100%;\n\tflex: 1;\n\tmargin: 0 auto;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\theight: 0px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground-color: #e5e7e9;\n\toverflow: hidden;\n\tdisplay: flex;\n\tflex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Splash = _styledComponents.default.div(_templateObject());

var Cover = _styledComponents.default.div(_templateObject2());

var WidthLimiter = _styledComponents.default.div(_templateObject3());

var HeaderBar = _styledComponents.default.div(_templateObject4(), function (props) {
  if (props.hasShadow) return (0, _styledComponents.css)(_templateObject5());
});

var InputBar = _styledComponents.default.input(_templateObject6());

var TagRow = _styledComponents.default.div(_templateObject7());

var CardFilterRow = _styledComponents.default.div(_templateObject8());

var CardDisplayRow = _styledComponents.default.div(_templateObject9());

var IconFilterRow = _styledComponents.default.div(_templateObject10());

var CardContextWrapper = function CardContextWrapper(Comp) {
  return function (props) {
    return /*#__PURE__*/_react.default.createElement(_CardLoader.default, null, /*#__PURE__*/_react.default.createElement(Comp, props));
  };
};

var tagLookup = {
  waterSkill: 'hydromancer',
  airSkill: 'aeromancer',
  earthSkill: 'geomancer',
  fireSkill: 'pyromancer',
  barbarianSkill: 'barbarian',
  legionnaireSkill: 'legionnaire',
  swashbucklerSkill: 'swashbuckler',
  marksmanSkill: 'marksman',
  meleeAttack: 'melee',
  rangedAttack: 'ranged'
};

var CardSearch = function CardSearch() {
  var cardDefinitions = (0, _react.useContext)(_CardContext.default);

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      cards = _useState2[0],
      setCards = _useState2[1];

  (0, _react.useEffect)(function () {
    setCards(Object.values(cardDefinitions));
  }, [cardDefinitions]);
  var animation = (0, _react.useContext)(_AnimationContext.default);

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      filteredCards = _useState4[0],
      setFilteredCards = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedTags = _useState6[0],
      setSelectedTags = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      filterText = _useState8[0],
      setFilterText = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      hasShadow = _useState10[0],
      setHasShadow = _useState10[1]; //filter cards


  (0, _react.useEffect)(function () {
    if (!cards) return;
    if (!animation || !animation.completed) return;
    var newCards = JSON.parse(JSON.stringify(cards));
    newCards.forEach(function (card) {
      return card.hidden = false;
    });
    var filters = [];

    if (filterText) {
      filters.push.apply(filters, _toConsumableArray(filterText.toLocaleLowerCase().split(/\s/g).map(function (val) {
        try {
          return new RegExp(val);
        } catch (e) {
          return val;
        }
      })));
    }

    filters.push.apply(filters, _toConsumableArray(Object.keys(selectedTags).filter(function (key) {
      return selectedTags[key];
    }).map(function (key) {
      return "t:".concat(tagLookup[key]);
    })));
    filters.forEach(function (filter) {
      newCards.forEach(function (card) {
        try {
          card.hidden = !card.lookup.match(filter) || card.hidden;
        } catch (e) {
          card.hidden = false;
        }
      });
    });
    setFilteredCards(newCards);
  }, [cards, selectedTags, filterText, animation]); //determine if shadow should be added to header bar

  var _useState11 = (0, _react.useState)(new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var coverBounds = entry.boundingClientRect;
      var viewportBounds = entry.rootBounds;
      if (!coverBounds || !viewportBounds) return;
      if (coverBounds.bottom >= viewportBounds.top) setHasShadow(false);
      if (coverBounds.top < viewportBounds.top && coverBounds.bottom < viewportBounds.bottom) setHasShadow(true);
    });
  }, {
    threshold: 1
  })),
      _useState12 = _slicedToArray(_useState11, 1),
      shadowIntersectionObserver = _useState12[0];

  var coverRef = (0, _react.useCallback)(function (node) {
    if (!node) return;
    shadowIntersectionObserver.disconnect();
    shadowIntersectionObserver.observe(node);
  }, [shadowIntersectionObserver]);
  var selectTag = (0, _react.useCallback)(function (tag) {
    var newTags = _objectSpread({}, selectedTags);

    Object.keys(newTags).forEach(function (key) {
      if (key !== tag) newTags[key] = false;
    });
    newTags[tag] = !newTags[tag];
    setSelectedTags(_objectSpread({}, newTags));
  }, [selectedTags]);
  return /*#__PURE__*/_react.default.createElement(Splash, null, /*#__PURE__*/_react.default.createElement(_ScrollableSection.default, null, /*#__PURE__*/_react.default.createElement(Cover, {
    ref: coverRef
  }), /*#__PURE__*/_react.default.createElement(HeaderBar, {
    hasShadow: hasShadow
  }, /*#__PURE__*/_react.default.createElement(CardFilterRow, null, /*#__PURE__*/_react.default.createElement(WidthLimiter, null, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "search",
    smaller: true
  }), /*#__PURE__*/_react.default.createElement(InputBar, {
    type: "text",
    placeholder: "Search Cards",
    value: filterText,
    onChange: function onChange(event) {
      setFilterText(event.target.value);
    }
  }))), /*#__PURE__*/_react.default.createElement(IconFilterRow, null, /*#__PURE__*/_react.default.createElement(WidthLimiter, null, /*#__PURE__*/_react.default.createElement(TagRow, null, /*#__PURE__*/_react.default.createElement(_TagSelector.default, {
    name: "legionnaireSkill",
    onSelect: selectTag,
    selected: selectedTags
  }), /*#__PURE__*/_react.default.createElement(_TagSelector.default, {
    name: "swashbucklerSkill",
    onSelect: selectTag,
    selected: selectedTags
  }), /*#__PURE__*/_react.default.createElement(_TagSelector.default, {
    name: "barbarianSkill",
    onSelect: selectTag,
    selected: selectedTags
  }), /*#__PURE__*/_react.default.createElement(_TagSelector.default, {
    name: "marksmanSkill",
    onSelect: selectTag,
    selected: selectedTags
  }), /*#__PURE__*/_react.default.createElement(_TagSelector.default, {
    name: "airSkill",
    onSelect: selectTag,
    selected: selectedTags
  }), /*#__PURE__*/_react.default.createElement(_TagSelector.default, {
    name: "waterSkill",
    onSelect: selectTag,
    selected: selectedTags
  }), /*#__PURE__*/_react.default.createElement(_TagSelector.default, {
    name: "fireSkill",
    onSelect: selectTag,
    selected: selectedTags
  }), /*#__PURE__*/_react.default.createElement(_TagSelector.default, {
    name: "earthSkill",
    onSelect: selectTag,
    selected: selectedTags
  }))))), /*#__PURE__*/_react.default.createElement(CardDisplayRow, null, /*#__PURE__*/_react.default.createElement(WidthLimiter, null, /*#__PURE__*/_react.default.createElement(_CardRow.default, {
    cards: filteredCards
  })))));
};

var _default = CardSearch;
exports.default = _default;