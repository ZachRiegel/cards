"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _HexRange = _interopRequireDefault(require("images/icons/HexRange.svg"));

var _tag = _interopRequireDefault(require("images/icons/tag.svg"));

var _cardCopies = _interopRequireDefault(require("images/icons/cardCopies.svg"));

var _lock = _interopRequireDefault(require("images/icons/lock.svg"));

var _fireSkill = _interopRequireDefault(require("images/icons/fireSkill.svg"));

var _fireCard = _interopRequireDefault(require("images/icons/fireCard.svg"));

var _airSkill = _interopRequireDefault(require("images/icons/airSkill.svg"));

var _airCard = _interopRequireDefault(require("images/icons/airCard.svg"));

var _earthSkill = _interopRequireDefault(require("images/icons/earthSkill.svg"));

var _earthCard = _interopRequireDefault(require("images/icons/earthCard.svg"));

var _swashbucklerSkill = _interopRequireDefault(require("images/icons/swashbucklerSkill.svg"));

var _barbarianSkill = _interopRequireDefault(require("images/icons/barbarianSkill.svg"));

var _legionnaireSkill = _interopRequireDefault(require("images/icons/legionnaireSkill.svg"));

var _marksmanSkill = _interopRequireDefault(require("images/icons/marksmanSkill.svg"));

var _waterSkill = _interopRequireDefault(require("images/icons/waterSkill.svg"));

var _waterCard = _interopRequireDefault(require("images/icons/waterCard.svg"));

var _attack = _interopRequireDefault(require("images/icons/attack.svg"));

var _xCard = _interopRequireDefault(require("images/icons/xCard.svg"));

var _oneCard = _interopRequireDefault(require("images/icons/oneCard.svg"));

var _twoCard = _interopRequireDefault(require("images/icons/twoCard.svg"));

var _zeroCard = _interopRequireDefault(require("images/icons/zeroCard.svg"));

var _rangedAttack = _interopRequireDefault(require("images/icons/rangedAttack.svg"));

var _meleeAttack = _interopRequireDefault(require("images/icons/meleeAttack.svg"));

var _child = _interopRequireDefault(require("images/icons/child.svg"));

var _option = _interopRequireDefault(require("images/icons/option.svg"));

var _spellcastingModifier = _interopRequireDefault(require("images/icons/spellcastingModifier.svg"));

var _weaponModifier = _interopRequireDefault(require("images/icons/weaponModifier.svg"));

var _search = _interopRequireDefault(require("images/icons/search.svg"));

var _dragHandle = _interopRequireDefault(require("images/icons/dragHandle.svg"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n    width: 102%;\n    padding-bottom: 102%;\n    background-color: #999;\n    z-index: 3;\n    mix-blend-mode: screen;\n    cursor: pointer;\n    mask-image: url(", ");\n\tmask-size: 100%;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n    width: 102%;\n    padding-bottom: 102%;\n    background-color: white;\n    z-index: 2;\n    mix-blend-mode: color;\n    cursor: pointer;\n    mask-image: url(", ");\n\tmask-size: 100%;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\tborder-color: #5d5d5d;\n\t\t\t"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\tborder: 8px solid black;\n\t\t\t"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\tborder: 2px solid black;\n\t\t\t"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\ttop: 3%;\n\tleft: 3%;\n\tright: 3%;\n\tbottom: 3%;\n\tmargin: 0;\n\tborder-radius: 100%;\n\tborder: 3px solid black;\n\t", "\n\t", "\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 0px;\n\t\t\t\tpadding-bottom: 100%;\n\t\t\t"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\twidth: 256px;\n\t\t\t\theight: 256px;\n\t\t\t"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\twidth: 80px;\n\t\t\t\theight: 80px;\n\t\t\t"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\twidth: 50px;\n\t\t\t\theight: 50px;\n\t\t\t\t", "\n\t\t\t"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\twidth: 30px;\n\t\t\t\theight: 30px;\n\t\t\t"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\twidth: 1.4em;\n\t\t\t\theight: 1.4em;\n\t\t\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: inline-block;\n\tbackground-image: url(", ");\n\tposition:relative;\n\twidth:96px;\n\theight:96px;\n\tbackground-size: cover;\n\tvertical-align: middle;\n\t", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var iconSwitcher = function iconSwitcher(name) {
  switch (name) {
    case 'attack':
      return _attack.default;

    case 'fire':
      return _fireCard.default;

    case 'fireSkill':
      return _fireSkill.default;

    case 'fireToken':
      return _fireSkill.default;

    case 'air':
      return _airCard.default;

    case 'airSkill':
      return _airSkill.default;

    case 'airToken':
      return _airSkill.default;

    case 'earth':
      return _earthCard.default;

    case 'earthSkill':
      return _earthSkill.default;

    case 'earthToken':
      return _earthSkill.default;

    case 'water':
      return _waterCard.default;

    case 'waterSkill':
      return _waterSkill.default;

    case 'waterToken':
      return _waterSkill.default;

    case 'swashbucklerSkill':
      return _swashbucklerSkill.default;

    case 'barbarianSkill':
      return _barbarianSkill.default;

    case 'legionnaireSkill':
      return _legionnaireSkill.default;

    case 'marksmanSkill':
      return _marksmanSkill.default;

    case 'xCard':
      return _xCard.default;

    case 'oneCard':
      return _oneCard.default;

    case 'twoCard':
      return _twoCard.default;

    case 'zeroCard':
      return _zeroCard.default;

    case 'rangedAttack':
      return _rangedAttack.default;

    case 'meleeAttack':
      return _meleeAttack.default;

    case 'lock':
      return _lock.default;

    case 'range':
      return _HexRange.default;

    case 'cardCopies':
      return _cardCopies.default;

    case 'tag':
      return _tag.default;

    case 'child':
      return _child.default;

    case 'option':
      return _option.default;

    case 'spellcastingModifier':
      return _spellcastingModifier.default;

    case 'weaponModifier':
      return _weaponModifier.default;

    case 'search':
      return _search.default;

    case 'dragHandle':
      return _dragHandle.default;

    default:
      {}
  }
};

var ElementIcon = _styledComponents.default.div(_templateObject(), function (props) {
  return iconSwitcher(props.name);
}, function (props) {
  if (props.inline) {
    return (0, _styledComponents.css)(_templateObject2());
  }

  if (props.smaller) {
    return (0, _styledComponents.css)(_templateObject3());
  }

  if (props.small) {
    return (0, _styledComponents.css)(_templateObject4(), props.name === 'child' ? 'margin-left: 24px;' : '');
  }

  if (props.medium) {
    return (0, _styledComponents.css)(_templateObject5());
  }

  if (props.large) {
    return (0, _styledComponents.css)(_templateObject6());
  }

  if (props.full) {
    return (0, _styledComponents.css)(_templateObject7());
  }
});

var Border = _styledComponents.default.div(_templateObject8(), function (props) {
  if (props.small) {
    return (0, _styledComponents.css)(_templateObject9());
  }

  if (props.large) {
    return (0, _styledComponents.css)(_templateObject10());
  }
}, function (props) {
  if (props.greyscale) {
    return (0, _styledComponents.css)(_templateObject11());
  }
});

var borders = {
  waterSkill: true,
  fireSkill: true,
  earthSkill: true,
  airSkill: true,
  barbarianSkill: true,
  legionnaireSkill: true,
  swashbucklerSkill: true,
  marksmanSkill: true,
  fireToken: true,
  waterToken: true,
  airToken: true,
  earthToken: true,
  rangedAttack: true,
  meleeAttack: true
};

var GreyMask = _styledComponents.default.div(_templateObject12(), function (props) {
  return iconSwitcher(props.name);
});

var WashoutMask = _styledComponents.default.div(_templateObject13(), function (props) {
  return iconSwitcher(props.name);
});

var Icon = /*#__PURE__*/_react.default.memo(function (props) {
  return /*#__PURE__*/_react.default.createElement(ElementIcon, props, props.border ? borders[props.name] ? /*#__PURE__*/_react.default.createElement(Border, props) : null : null, props.greyscale ? /*#__PURE__*/_react.default.createElement(WashoutMask, props) : null, props.greyscale ? /*#__PURE__*/_react.default.createElement(GreyMask, props) : null);
});

var _default = Icon;
exports.default = _default;