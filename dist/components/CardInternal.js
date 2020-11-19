"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ImageLoader = _interopRequireDefault(require("components/ImageLoader"));

var _Icon = _interopRequireDefault(require("components/Icon"));

var _CardUtilities = require("components/CardUtilities");

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

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n\twidth: 12px;\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n\tfont-family: 'B612', serif;\n\tpadding: 8px;\n\tmargin-right: 0px;\n\tflex: 1;\n\ttext-align: center;\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n\t\t", "\n\t"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n\tflex: 1;\n    display: grid;\n    grid-template-columns: minmax(min-content, 1fr) min-content min-content;\n    grid-column-gap: 4px;\n    background-color: #000000;\n    align-items: stretch;\n    width: 100%;\n    position: relative;\n    z-index: 2;\n    border: 4px solid #000000;\n    margin-left: -8px;\n    padding-left: 8px;\n    border-radius: 0 20px 20px 0;\n    ", "\n    overflow: hidden;\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n    width: min-content;\n    padding-left: 20px;\n    padding-right: 20px;\n    height: 136px;\n    border: 4px solid #000000;\n    border-radius: 20px;\n    position: relative;\n    z-index: 5;\n    background-color: #f2f2f2;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n\tfont-family: 'B612', serif;\n\tfont-size: 48px;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n\t\t", "\n\t\tgrid-template-columns: repeat(", ", min-content);\n\t"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n\twidth: min-content;\n\tborder-radius: 20px;\n\tborder: 4px solid #000000;\n\toverflow: hidden;\n\tdisplay: grid;\n\tgrid-column-gap: 4px;\n\tbackground-color: #000000;\n\t", "\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n\twidth: 100%;\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-around;\n\tpadding: 15px;\n\toverflow: hidden;\n\tline-height: 50px;\n\t&:first-child {\n\t\tborder-radius: 10px 10px 0 0;\n\t}\n\t&:nth-child(2n) {\n\t\tbackground-color: rgba(0, 0, 0, .1);\n\t}\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\twidth: 85%;\n\tbottom: 40px;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\ttext-align: wrap;\n\tborder: 4px solid #000000;\n\tborder-bottom: 2px solid #000000;\n\tborder-radius: 20px 20px 0 0;\n\tfont-family: 'B612', serif;\n\tfont-weight: 400;\n\tdisplay:flex;\n\tflex-direction: column;\n\tbackground-color: rgba(255, 255, 255, .96);\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n\theight: 100%;\n\tborder: 4px solid #000000;\n\tborder-radius: 20px;\n\toverflow: hidden;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n\t\tbackground-color: ", ";\n\t"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n\tflex: 1;\n\tpadding: 8px;\n\tpadding-left: 20px;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n\tflex-wrap: none;\n\twhite-space: nowrap;\n\tfont-family: 'B612', serif;\n\tfont-size: 40px;\n\t", "\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n\t\tbackground-color: ", ";\n\t\t", "\n\t"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n\tpadding: 8px;\n\tpadding-right: 12px;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n\tflex-wrap: none;\n\twhite-space: nowrap;\n\tfont-family: 'B612', serif;\n\tfont-weight: 400;\n\tfont-size: 32px;\n\twidth: min-content;\n\t", "\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    overflow: hidden;\n    position: absolute;\n    top: 18px;\n    left: 18px;\n    right: 18px;\n    z-index: 2;\n    display: -ms-flexbox;\n    display: flex;\n    align-items: center;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\ttop: -2px;\n\tleft: -2px;\n\tright: -2px;\n\tbottom: -2px;\n\tz-index: 5;\n\tborder-radius: 20px;\n\tborder: 4px solid #000000;\n\tbackground-color: transparent;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\t\t\tborder-right: 1200px solid ", ";\n\t\t"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\t\tbackground-color: ", ";\n\t"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\tbottom: 0;\n\twidth: 99px;\n\tz-index: -1;\n\tborder-radius: 0 20px 20px 0;\n\t", "\n\t&:after{\n\t\tright: calc(100% - 2px);\n\t    top: 0;\n\t    bottom: 0;\n\t    content: \"\";\n\t    position: absolute;\n\t    border-top: 1000px solid transparent;\n\t\t", "\n\t}\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\t\t\tborder-right: 1200px solid ", ";\n\t\t"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\t\tbackground-color: ", ";\n\t"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\tbottom: 0;\n\twidth: 104px;\n\tz-index: -1;\n\tborder-radius: 0 20px 20px 0;\n\t", "\n\t&:after{\n\t\tright: calc(100% - 1px);\n\t    top: 0;\n\t    bottom: 0;\n\t    content: \"\";\n\t    position: absolute;\n\t    border-top: 1000px solid transparent;\n\t\t", "\n\t}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\t\t\tborder-left: 1200px solid ", ";\n\t\t"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\t\tbackground-color: ", ";\n\t"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tbottom: 0;\n\twidth: 101px;\n\tz-index: -1;\n\tborder-radius: 20px 0 0 20px;\n\t", "\n\t&:after{\n\t\tleft: calc(100% - 2px);\n\t    top: 0;\n\t    bottom: 0;\n\t    content: \"\";\n\t    position: absolute;\n\t    border-bottom: 1000px solid transparent;\n\t\t", "\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tborder-radius: 20px;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translateX(-50%) translateY(-50%);\n\tpadding: 38px;\n\twidth: 1400px;\n\theight: 1000px;\n\tmargin: 0;\n\tbox-shadow: 10px 10px 25px 15px #777;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardContainer = _styledComponents.default.div(_templateObject());

var CardBackgroundLeft = _styledComponents.default.div(_templateObject2(), function (props) {
  return (0, _styledComponents.css)(_templateObject3(), props.backgroundColor1);
}, function (props) {
  return (0, _styledComponents.css)(_templateObject4(), props.backgroundColor1);
});

var CardSeparator = _styledComponents.default.div(_templateObject5(), function (props) {
  return (0, _styledComponents.css)(_templateObject6(), props.backgroundColor1 === props.backgroundColor2 ? props.backgroundColor1 : '#000000');
}, function (props) {
  return (0, _styledComponents.css)(_templateObject7(), props.backgroundColor1 === props.backgroundColor2 ? props.backgroundColor1 : '#000000');
});

var CardBackgroundRight = _styledComponents.default.div(_templateObject8(), function (props) {
  return (0, _styledComponents.css)(_templateObject9(), props.backgroundColor2);
}, function (props) {
  return (0, _styledComponents.css)(_templateObject10(), props.backgroundColor2);
});

var CardBorder = _styledComponents.default.div(_templateObject11());

var CardHeader = _styledComponents.default.div(_templateObject12());

var HeaderEntry = _styledComponents.default.div(_templateObject13(), function (props) {
  return (0, _styledComponents.css)(_templateObject14(), props.textBarColor, props.larger ? 'font-size:40px' : '');
});

var NameHeaderEntry = _styledComponents.default.div(_templateObject15(), function (props) {
  return (0, _styledComponents.css)(_templateObject16(), props.textBarColor);
});

var CardArt = _styledComponents.default.div(_templateObject17());

var CardText = _styledComponents.default.div(_templateObject18());

var CardTextLine = _styledComponents.default.div(_templateObject19());

var CardIconBackdrop = _styledComponents.default.div(_templateObject20(), function (props) {
  return (0, _styledComponents.css)(_templateObject21(), !props.noAbsolute ? "position: absolute; right: 18px; bottom: 18px;" : '', props.columnCount);
});

var CostMarker = _styledComponents.default.div(_templateObject22());

var HeaderRowContainer = _styledComponents.default.div(_templateObject23(), function (props) {
  return (0, _styledComponents.css)(_templateObject24(), props.cost ? "\n\t\t\tborder-radius: 20px 20px 20px 20px;\n\t\t    margin-left: 0;\n\t\t    padding-left: 0;\n\t\t" : 'border-left: 0;');
});

var RangeContainer = _styledComponents.default.div(_templateObject25());

var Spacer = _styledComponents.default.div(_templateObject26());

var getColors = function getColors(name) {
  switch (name) {
    case 'white':
      return {
        backgroundColor1: '#f7f7f7',
        backgroundColor2: '#f7f7f7'
      };

    case 'white/blue':
      return {
        backgroundColor1: '#f7f7f7',
        backgroundColor2: '#4466aa'
      };

    case 'white/red':
      return {
        backgroundColor1: '#f7f7f7',
        backgroundColor2: '#880000'
      };

    case 'white/green':
      return {
        backgroundColor1: '#f7f7f7',
        backgroundColor2: '#0c623f'
      };

    case 'blue':
      return {
        backgroundColor1: '#4466aa',
        backgroundColor2: '#4466aa'
      };

    case 'blue/green':
      return {
        backgroundColor1: '#4466aa',
        backgroundColor2: '#0c623f'
      };

    case 'blue/red':
      return {
        backgroundColor1: '#4466aa',
        backgroundColor2: '#880000'
      };

    case 'red':
      return {
        backgroundColor1: '#880000',
        backgroundColor2: '#880000'
      };

    case 'red/green':
      return {
        backgroundColor1: '#880000',
        backgroundColor2: '#0c623f'
      };

    case 'green':
      return {
        backgroundColor1: '#0c623f',
        backgroundColor2: '#0c623f'
      };

    case 'brown/white':
      return {
        backgroundColor1: '#5e3023',
        backgroundColor2: '#f7f7f7'
      };

    case 'brown/blue':
      return {
        backgroundColor1: '#5e3023',
        backgroundColor2: '#4466aa'
      };

    case 'brown/red':
      return {
        backgroundColor1: '#5e3023',
        backgroundColor2: '#880000'
      };

    case 'brown/green':
      return {
        backgroundColor1: '#5e3023',
        backgroundColor2: '#0c623f'
      };

    default:
      //brown
      return {
        backgroundColor1: '#5e3023',
        backgroundColor2: '#5e3023'
      };
  }
};

var createIcons = function createIcons(iconNames) {
  var icons = [];
  if (!iconNames) return [];
  iconNames.forEach(function (value, index) {
    icons.push( /*#__PURE__*/_react.default.createElement(_Icon.default, {
      medium: true,
      key: index,
      name: value,
      border: true
    }));
  });
  return icons;
};

var getBarColor = function getBarColor(name) {
  switch (name) {
    default:
      return '#f2f2f2';
  }
};

var createLargeIcons = function createLargeIcons(iconNames) {
  var icons = [];
  if (!iconNames) return [];
  iconNames.forEach(function (value, index) {
    icons.push( /*#__PURE__*/_react.default.createElement(_Icon.default, {
      key: index,
      name: value,
      large: true,
      border: true
    }));
  });
  return icons;
};

var createRequirements = function createRequirements(iconNames) {
  var icons = [];
  if (!iconNames) return [];
  Object.keys(iconNames).forEach(function (key, index) {
    icons.push( /*#__PURE__*/_react.default.createElement("span", {
      key: key,
      style: {
        fontSize: '32px',
        marginRight: '-4px'
      }
    }, iconNames[key], "\xA0"), /*#__PURE__*/_react.default.createElement(_Icon.default, {
      key: key + 'Icon',
      small: true,
      name: key,
      border: true
    }));
    if (index !== Object.keys(iconNames).length - 1) icons.push( /*#__PURE__*/_react.default.createElement(Spacer, {
      key: key + 'Spacer'
    }));
  });
  return icons;
};

var generateBody = function generateBody(body) {
  if (!body) return [];
  return body.map(function (row) {
    var newRow = row.split(/(\s?@[a-zA-Z]*\s?)|(__.*?__)|(:)|(‘)|(’)/g).filter(function (entry) {
      return entry;
    }).map(function (entry, index) {
      if (entry.match(/@[a-zA-Z]*/g)) {
        return /*#__PURE__*/_react.default.createElement("span", {
          key: index,
          style: {
            fontSize: '28px'
          }
        }, "\xA0", /*#__PURE__*/_react.default.createElement(_Icon.default, {
          small: true,
          name: entry.replace(/[^\w]/g, ''),
          border: true
        }), "\xA0");
      } else if (entry.match(/:/)) {
        return /*#__PURE__*/_react.default.createElement("span", {
          key: index,
          style: {
            fontSize: '40px'
          }
        }, entry);
      } else if (entry.match(/(‘)|(’)/)) {
        return /*#__PURE__*/_react.default.createElement("span", {
          key: index,
          style: {
            fontSize: '36px',
            fontWeight: '500'
          }
        }, entry);
      } else if (entry.match(/(__.*?__)/g)) {
        return /*#__PURE__*/_react.default.createElement("span", {
          key: index,
          style: {
            fontWeight: '600',
            fontSize: '32px'
          }
        }, entry.replace(/__/g, ''));
      } else {
        return /*#__PURE__*/_react.default.createElement("span", {
          key: index,
          style: {
            fontSize: '28px'
          }
        }, entry);
      }

      ;
    });
    newRow.isChild = row.match(/@child/);
    return newRow;
  });
};

var CardInternal = /*#__PURE__*/_react.default.memo(function (props) {
  var _useState = (0, _react.useState)(getColors(props.color)),
      _useState2 = _slicedToArray(_useState, 1),
      cardColors = _useState2[0];

  cardColors.textBarColor = getBarColor(props.barColor);
  return /*#__PURE__*/_react.default.createElement(CardContainer, cardColors, /*#__PURE__*/_react.default.createElement(CardBackgroundLeft, cardColors), /*#__PURE__*/_react.default.createElement(CardSeparator, cardColors), /*#__PURE__*/_react.default.createElement(CardBackgroundRight, cardColors), /*#__PURE__*/_react.default.createElement(CardBorder, null), /*#__PURE__*/_react.default.createElement(CardArt, cardColors, /*#__PURE__*/_react.default.createElement(_ImageLoader.default, {
    name: props.artName,
    tags: createLargeIcons(props.tags)
  })), /*#__PURE__*/_react.default.createElement(CardHeader, cardColors, props.cost && /*#__PURE__*/_react.default.createElement(CostMarker, null, (0, _CardUtilities.createCostIcons)(props.cost)), /*#__PURE__*/_react.default.createElement(HeaderRowContainer, {
    cost: !props.cost
  }, /*#__PURE__*/_react.default.createElement(NameHeaderEntry, cardColors, props.name || 'Untitled Card'), /*#__PURE__*/_react.default.createElement(HeaderEntry, _extends({
    larger: true
  }, cardColors), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    medium: true,
    name: "range"
  }), /*#__PURE__*/_react.default.createElement(Spacer, null), /*#__PURE__*/_react.default.createElement(RangeContainer, null, props.range)), /*#__PURE__*/_react.default.createElement(HeaderEntry, _extends({
    larger: true
  }, cardColors), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    medium: true,
    name: "tag"
  }), /*#__PURE__*/_react.default.createElement(Spacer, null), createIcons(props.tags)))), /*#__PURE__*/_react.default.createElement(CardText, null, generateBody(props.body).map(function (entry, index) {
    if (index === props.body.length - 1) {
      return /*#__PURE__*/_react.default.createElement(CardTextLine, {
        key: index,
        child: entry.isChild
      }, /*#__PURE__*/_react.default.createElement("div", null, entry.map(function (bit, index) {
        return bit;
      }), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          overflow: 'hidden',
          verticalAlign: 'middle',
          visibility: 'hidden',
          display: 'inline-block',
          height: '1em',
          marginRight: '-102px'
        }
      }, /*#__PURE__*/_react.default.createElement(CardIconBackdrop, _extends({}, cardColors, {
        noAbsolute: true,
        columnCount: props.requirements ? '2' : '1'
      }), props.requirements && /*#__PURE__*/_react.default.createElement(HeaderEntry, cardColors, /*#__PURE__*/_react.default.createElement(_Icon.default, {
        small: true,
        name: "lock"
      }), /*#__PURE__*/_react.default.createElement(Spacer, null), createRequirements(props.requirements)), /*#__PURE__*/_react.default.createElement(HeaderEntry, cardColors, /*#__PURE__*/_react.default.createElement(_Icon.default, {
        small: true,
        name: "cardCopies"
      }), /*#__PURE__*/_react.default.createElement(Spacer, null), props.maxCopies)))));
    } else {
      return /*#__PURE__*/_react.default.createElement(CardTextLine, {
        key: index,
        child: entry.isChild
      }, /*#__PURE__*/_react.default.createElement("div", null, entry.map(function (bit, index) {
        return bit;
      })));
    }
  })), /*#__PURE__*/_react.default.createElement(CardIconBackdrop, _extends({}, cardColors, {
    columnCount: props.requirements ? '2' : '1'
  }), props.requirements && /*#__PURE__*/_react.default.createElement(HeaderEntry, cardColors, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    small: true,
    name: "lock"
  }), /*#__PURE__*/_react.default.createElement(Spacer, null), createRequirements(props.requirements)), /*#__PURE__*/_react.default.createElement(HeaderEntry, cardColors, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    small: true,
    name: "cardCopies"
  }), /*#__PURE__*/_react.default.createElement(Spacer, null), props.maxCopies)));
}, function (prev, next) {
  return JSON.stringify(prev) === JSON.stringify(next);
});

var _default = CardInternal;
exports.default = _default;