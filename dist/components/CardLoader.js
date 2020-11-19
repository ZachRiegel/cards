"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _CardContext = _interopRequireDefault(require("contexts/CardContext"));

var _FirebaseContext = _interopRequireDefault(require("contexts/FirebaseContext"));

var _CardInterpreter = _interopRequireDefault(require("components/CardInterpreter"));

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

var capitalizeFirst = function capitalizeFirst(s) {
  var newStart = s.match(/([a-zA-Z]+)/);
  if (!newStart) return;
  newStart = newStart[1].charAt(0).toLocaleUpperCase() + newStart[1].slice(1);
  return s.replace(/([a-zA-Z]+)/, newStart).replace(/_/g, ':').replace(/\|/g, ' /');
};

var CardLoader = function CardLoader(props) {
  var firebase = (0, _react.useContext)(_FirebaseContext.default);

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      cards = _useState2[0],
      setCards = _useState2[1];

  (0, _react.useEffect)(function () {
    firebase.database.ref('/Cards/').on('value', function (snapshot) {
      setCards(Object.entries(snapshot.val()).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            card = _ref2[1];

        try {
          card.key = key;
          card.body = (0, _CardInterpreter.default)(card.body);
          card.name = capitalizeFirst(key.split(/(?=[A-Z])/).reduce(function (acc, val) {
            return "".concat(acc, " ").concat(capitalizeFirst(val));
          })).replace();
          card.lookup = "\n              |n:".concat(card.name, "\n              |cost:").concat(function (cost) {
            var abbreviationLookup = {
              legionnaireSkill: 'l',
              swashbucklerSkill: 's',
              barbarianSkill: 'b',
              marksmanSkill: 'm',
              air: 'a',
              water: 'h',
              earth: 'g',
              fire: 'p'
            };
            var result = '';
            if (!cost) cost = {};
            if (cost.any !== undefined) result += "[c:".concat(String(cost.any), "]");
            Object.keys(cost).forEach(function (key, index) {
              if (key === 'any') return;

              if (cost[key]) {
                result += "[c:".concat(abbreviationLookup[key] + String(cost[key]), "]");
              }
            });
            return result;
          }(card.cost), "|\n              |tags:").concat(function (tags) {
            if (!tags) return '';
            var result = '';
            tags.forEach(function (value, index) {
              result += "[t:".concat(tagLookup[value], "]");
            });
            return result;
          }(card.tags), "\n              |body:").concat(card.body.reduce(function (acc, val) {
            return acc + '\n' + val;
          }), "\n            ").replace(/\s/g, '').toLocaleLowerCase();
          return card;
        } catch (e) {
          console.log(card.name);
          return {};
        }
      }).reduce(function (acc, val) {
        return Object.assign(acc, _defineProperty({}, val.key, val));
      }, {}));
    });
  }, [firebase]);
  return /*#__PURE__*/_react.default.createElement(_CardContext.default.Provider, {
    value: cards
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 0,
      height: 0
    }
  }), props.children);
};

var _default = CardLoader;
exports.default = _default;