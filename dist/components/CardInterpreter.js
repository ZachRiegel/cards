"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _temp;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//these functions are mostly used in the construction of other lexical functions
var greed = function greed(next) {
  return function (current) {
    return typeof current === 'function' && !current.completed ? function () {
      return greed(next)(current.apply(void 0, arguments));
    } : next(current);
  };
};

var contextual = function contextual(next) {
  return function (context) {
    return context ? greed(function (finishedContext) {
      return next(finishedContext);
    })(context) : greed(function (val) {
      return next(val);
    });
  };
};

var continuable = function continuable(context) {
  return greed(function (content) {
    return function (continuedContent) {
      return greed(function (resolvedContinuedContent) {
        return "".concat(content).concat(resolvedContinuedContent ? " ".concat(resolvedContinuedContent) : '');
      })(typeof continuedContent === 'function' ? continuedContent(pastContext(context)) : continuedContent);
    };
  });
};

var activeContext = function activeContext(context) {
  return context ? _objectSpread(_objectSpread({}, context), {}, {
    target: context.target ? _objectSpread(_objectSpread({}, context.target), {}, {
      preferred: context.target.active,
      preferredPossessive: context.target.possessive
    }) : undefined,
    zone: context.zone ? _objectSpread(_objectSpread({}, context.zone), {}, {
      preferred: context.zone.active
    }) : undefined,
    token: context.token ? _objectSpread(_objectSpread({}, context.token), {}, {
      preferred: context.token.active
    }) : undefined
  }) : undefined;
};

var pastContext = function pastContext(context) {
  if (!context) return;
  return _objectSpread(_objectSpread({}, context), {}, {
    target: context.target ? _objectSpread(_objectSpread({}, context.target), {}, {
      preferred: context.target.historical,
      preferredPossessive: context.target.historicalPossessive
    }) : undefined,
    zone: context.zone ? _objectSpread(_objectSpread({}, context.zone), {}, {
      preferred: context.zone.historical
    }) : undefined,
    token: context.token ? _objectSpread(_objectSpread({}, context.token), {}, {
      preferred: context.token.historical
    }) : undefined
  });
};

var repetitionContext = function repetitionContext(context) {
  if (!context) return;
  return _objectSpread(_objectSpread({}, context), {}, {
    target: context.target ? _objectSpread(_objectSpread({}, context.target), {}, {
      preferred: context.target.repetition,
      preferredPossessive: context.target.repetitionPossessive
    }) : undefined,
    zone: context.zone ? _objectSpread(_objectSpread({}, context.zone), {}, {
      preferred: context.zone.repetition
    }) : undefined,
    token: context.token ? _objectSpread(_objectSpread({}, context.token), {}, {
      preferred: context.token.repetition
    }) : undefined
  });
};

var line = function line() {
  return function (context) {
    return greed(function (line) {
      return function (newLine) {
        return greed(function (resolvedNewLine) {
          return "".concat(line).concat(resolvedNewLine ? "\n".concat(resolvedNewLine) : '');
        })(typeof newLine === 'function' ? newLine(pastContext(context)) : newLine);
      };
    });
  };
};

var capitalizeFirst = function capitalizeFirst(s) {
  var newStart = s.match(/([a-zA-Z]+)/);
  if (!newStart) return;
  newStart = newStart[1].charAt(0).toLocaleUpperCase() + newStart[1].slice(1);
  return s.replace(/([a-zA-Z]+)/, newStart);
};

var lowercaseFirst = function lowercaseFirst(s) {
  var newStart = s.match(/([a-zA-Z]+)/);
  if (!newStart) return;
  newStart = newStart[1].charAt(0).toLocaleLowerCase() + newStart[1].slice(1);
  return s.replace(/([a-zA-Z]+)/, newStart);
};

var inline = function inline() {
  var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return lowercaseFirst(s.replace(/^\n?(@child )/, '').replace(/\.$/, ''));
};

var entityForms = function entityForms(_ref) {
  var noObjects = _ref.noObjects,
      limit = _ref.limit;
  if (noObjects && limit === 1) return {
    singular: 'creature',
    base: 'creature',
    possessive: 'creature\'s',
    type: 'creature'
  };
  if (!noObjects && limit === 1) return {
    singular: 'creature or object',
    base: 'creature or object',
    possessive: 'creature or object\'s',
    type: 'creature or object'
  };
  if (!noObjects && limit !== 1) return {
    singular: 'creature or object',
    base: 'creatures or objects',
    plural: 'creatures or objects',
    possessive: 'creatures or objects\'',
    type: 'creature or object'
  };
  if (noObjects && limit !== 1) return {
    singular: 'creature',
    base: 'creatures',
    plural: 'creatures',
    possessive: 'creatures\'',
    type: 'creature'
  };
};

var targetingForm = function targetingForm(_ref2) {
  var limit = _ref2.limit,
      _ref2$lessThanLimit = _ref2.lessThanLimit,
      lessThanLimit = _ref2$lessThanLimit === void 0 ? true : _ref2$lessThanLimit;
  return limit === 0 ? "any number of target" : limit === 1 ? "target" : "".concat(lessThanLimit ? "up to " : "").concat(limit, " target");
};

var targetingImperative = function targetingImperative(s) {
  return 'target ' + s.replace(/target\s/gi, '');
};

var enumerate = function enumerate(list) {
  var word = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'and';
  return Array.isArray(list) ? list.reduce(function (acc, val, index, array) {
    return "".concat(acc).concat(array.length !== 2 ? ',' : '').concat(index === array.length - 1 ? " ".concat(word) : '', " ").concat(val);
  }) : list;
}; //functions able to be used when creating cards


var lexical = new (_temp = function LexicalFunctions() {
  var _this = this;

  _classCallCheck(this, LexicalFunctions);

  this.targetEntity = function (_ref3) {
    var _ref3$range = _ref3.range,
        range = _ref3$range === void 0 ? 0 : _ref3$range,
        _ref3$limit = _ref3.limit,
        limit = _ref3$limit === void 0 ? 1 : _ref3$limit,
        _ref3$disposition = _ref3.disposition,
        disposition = _ref3$disposition === void 0 ? undefined : _ref3$disposition,
        _ref3$noObjects = _ref3.noObjects,
        noObjects = _ref3$noObjects === void 0 ? false : _ref3$noObjects;
    var entity = entityForms({
      noObjects: noObjects,
      limit: limit
    });
    var target = targetingForm({
      limit: limit
    });
    return activeContext({
      target: {
        active: "".concat(target, " ").concat(disposition ? "".concat(disposition, " ") : '').concat(entity.base),
        historical: "the targeted ".concat(entity.base),
        typeEnforcement: "".concat(entity.type),
        repetition: limit === 1 ? 'it' : 'them',
        possessive: "".concat(target, " ").concat(disposition ? "".concat(disposition, " ") : '').concat(entity.possessive),
        historicalPossessive: "targeted ".concat(entity.possessive),
        repetitionPossessive: 'its',
        is: limit === 1 ? 'is' : 'are',
        has: limit === 1 ? 'has' : 'have',
        verbS: limit === 1 ? 's' : ''
      },
      zone: {
        active: "".concat(target, " ").concat(disposition ? "".concat(disposition, " ") : '').concat(entity.possessive, " zone").concat(limit !== 1 ? 's' : ''),
        historical: "targeted ".concat(entity.possessive, " zone").concat(limit !== 1 ? 's' : ''),
        typeEnforcement: 'zone',
        repetition: limit === 1 ? 'it' : 'them'
      }
    });
  };

  this.attacking = function (_ref4) {
    var attackType = _ref4.attackType,
        defenseType = _ref4.defenseType;
    return greed(function (entity) {
      entity.attack = {
        attackType: attackType,
        defenseType: enumerate(defenseType, 'or')
      };
      return entity;
    });
  };

  this.defending = function (_ref5) {
    var attackType = _ref5.attackType,
        defenseType = _ref5.defenseType;
    return greed(function (entity) {
      entity.defendingFrom = {
        attackType: attackType,
        defenseType: defenseType,
        damageDealt: 'triggering damage'
      };
      return entity;
    });
  };

  this.primed = function (_ref6) {
    var by = _ref6.by;
    return greed(function (entity) {
      entity.target.active = entity.target.active + " primed by \"".concat(by, "\"");
      return activeContext(entity);
    });
  };

  this.moving = function () {
    return greed(function (entity) {
      entity.movementInfo = {};
      return entity;
    });
  };

  this.targetZone = function (_ref7) {
    var _ref7$range = _ref7.range,
        range = _ref7$range === void 0 ? 0 : _ref7$range,
        _ref7$limit = _ref7.limit,
        limit = _ref7$limit === void 0 ? 1 : _ref7$limit;
    var target = targetingForm({
      limit: limit
    });
    return activeContext({
      zone: {
        active: "".concat(target, " zone").concat(limit === 1 ? '' : 's'),
        historical: "the targeted zone".concat(limit === 1 ? '' : 's'),
        typeEnforcement: 'zone',
        repetition: limit === 1 ? 'it' : 'them'
      }
    });
  };

  this.targetContiguousZones = function (_ref8) {
    var _ref8$range = _ref8.range,
        range = _ref8$range === void 0 ? 0 : _ref8$range,
        _ref8$limit = _ref8.limit,
        limit = _ref8$limit === void 0 ? 2 : _ref8$limit;
    if (limit === 1) throw new Error('Contiguous zone targeter cannot target a zone');
    var target = targetingForm({
      limit: limit,
      lessThanLimit: false
    });
    return activeContext({
      zone: {
        active: "".concat(target, " contiguous zone").concat(limit === 1 ? '' : 's'),
        historical: "the targeted zone".concat(limit === 1 ? '' : 's'),
        typeEnforcement: 'zone',
        repetition: limit === 1 ? 'it' : 'them'
      }
    });
  };

  this.targetTriangle = function (_ref9) {
    var _ref9$range = _ref9.range,
        range = _ref9$range === void 0 ? 0 : _ref9$range;
    var target = targetingForm({
      limit: 3,
      lessThanLimit: false
    });
    return activeContext({
      zone: {
        active: "3 target mutually adjacent zones",
        historical: "the targeted zones",
        typeEnforcement: 'zone',
        repetition: 'them'
      }
    });
  };

  this.targetToken = function (_ref10) {
    var _ref10$range = _ref10.range,
        range = _ref10$range === void 0 ? 0 : _ref10$range,
        _ref10$limit = _ref10.limit,
        limit = _ref10$limit === void 0 ? 1 : _ref10$limit,
        type = _ref10.type;
    var target = targetingForm({
      limit: limit
    });
    if (Array.isArray(type)) type = type.map(function (x) {
      return "@".concat(x, "Token");
    });else type = type && "@".concat(type, "Token ");
    return activeContext({
      token: {
        active: "".concat(target, " ").concat(type ? "".concat(enumerate(type, 'or'), " ") : '', "token").concat(limit === 1 ? "" : "s"),
        historical: "the targeted ".concat(type ? "".concat(enumerate(type, 'or'), " ") : '', "token").concat(limit === 1 ? "" : "s"),
        typeEnforcement: "".concat(type ? "".concat(enumerate(type, 'or'), " ") : '', "token"),
        repetiton: limit === 1 ? 'it' : 'them'
      },
      zone: {
        active: "".concat(target, " ").concat(type ? "".concat(enumerate(type, 'or'), " ") : '', "token").concat(limit === 1 ? "'s" : "s", " zone").concat(limit === 1 ? '' : 's'),
        historical: "targeted ".concat(type ? "".concat(enumerate(type, 'or'), " ") : '', "token").concat(limit === 1 ? "'s" : "s'", " zone").concat(limit !== 1 ? 's' : ''),
        typeEnforcement: 'zone',
        repetition: limit === 1 ? 'it' : 'they'
      }
    });
  };

  this.self = function () {
    return activeContext({
      target: {
        active: 'yourself',
        ref: 'you',
        historical: 'yourself',
        repetition: 'you',
        possessive: 'your',
        historicalPossessive: 'your',
        is: 'are',
        has: 'have',
        verbS: ''
      },
      zone: {
        active: 'your zone',
        historical: 'your zone',
        repetiton: 'it'
      }
    });
  };

  this.entityIn = function (_ref11) {
    var _ref11$limit = _ref11.limit,
        limit = _ref11$limit === void 0 ? 1 : _ref11$limit,
        _ref11$noObjects = _ref11.noObjects,
        noObjects = _ref11$noObjects === void 0 ? false : _ref11$noObjects,
        _ref11$other = _ref11.other,
        other = _ref11$other === void 0 ? false : _ref11$other;
    var entity = entityForms({
      noObjects: noObjects,
      limit: limit
    });
    return greed(function (context) {
      return activeContext({
        target: {
          active: limit ? "up to ".concat(limit, " ").concat(other ? 'other ' : '').concat(entity.base, " in ").concat(context.zone.preferred) : "each ".concat(other ? 'other ' : '').concat(entity.singular, " in ").concat(context.zone.preferred),
          historical: "targeted ".concat(entity.base),
          typeEnforcement: "".concat(entity.type),
          repetition: limit === 1 ? 'it' : 'they',
          is: limit === 1 ? 'is' : 'are',
          has: limit === 1 ? 'has' : 'have',
          verbS: limit === 1 ? 's' : ''
        },
        zone: _objectSpread({}, context.zone)
      });
    });
  };

  this.entityInRangeOf = function (_ref12) {
    var _ref12$limit = _ref12.limit,
        limit = _ref12$limit === void 0 ? 1 : _ref12$limit,
        noObjects = _ref12.noObjects,
        _ref12$range = _ref12.range,
        range = _ref12$range === void 0 ? _this.range(0) : _ref12$range,
        _ref12$other = _ref12.other,
        other = _ref12$other === void 0 ? false : _ref12$other;
    var entity = entityForms({
      noObjects: noObjects,
      limit: limit
    });
    return greed(function (context) {
      return activeContext({
        target: {
          active: limit ? "up to ".concat(limit, " ").concat(other ? 'other ' : '').concat(entity.base, " within ").concat(range, " of ").concat(context.target ? context.target.preferred : context.token.preferred) : "each ".concat(other ? 'other ' : '').concat(entity.singular, " within ").concat(range, " of ").concat(context.target ? context.target.preferred : context.token.preferred),
          historical: "targeted ".concat(entity.base),
          typeEnforcement: "".concat(entity.type),
          repetition: limit === 1 ? 'it' : 'they'
        },
        token: _objectSpread({}, context.token),
        zone: _objectSpread({}, context.zone)
      });
    });
  };

  this.equipped = function () {
    return contextual(function (context) {
      return greed(function (item) {
        return "".concat(context.target.ref || context.target.preferred, " ").concat(context.target.has, " an equipped ").concat(item);
      });
    });
  };

  this.noCondition = function () {
    return contextual(function (context) {
      return null;
    });
  };

  this.dualWielding = function () {
    return contextual(function (context) {
      return "".concat(context.target.ref || context.target.preferred, " ").concat(context.target.is, " dual-wielding");
    });
  };

  this.areBuffedBy = function () {
    return contextual(function (context) {
      return greed(function (cardSelector) {
        return "".concat(context.target.ref || context.target.preferred, " ").concat(context.target.is, " under the effects of ").concat(cardSelector);
      });
    });
  };

  this.areAffectedByConditions = function (_ref13) {
    var conditions = _ref13.conditions;
    return contextual(function (context) {
      return "".concat(context.target.ref || context.target.preferred, " ").concat(context.target.is, " ").concat(enumerate(conditions, 'or'));
    });
  };

  this.lucky = function (_ref14) {
    var _ref14$proc = _ref14.proc,
        proc = _ref14$proc === void 0 ? 1 : _ref14$proc,
        _ref14$per = _ref14.per,
        per = _ref14$per === void 0 ? 3 : _ref14$per;
    return function () {
      return "you are __lucky__ (".concat(parseFloat(proc / per * 100).toFixed(), "% chance)");
    };
  };

  this.flourished = function () {
    return contextual(function (context) {
      return "".concat(context.target.ref || context.target.preferred, " flourished");
    });
  };

  this.isInRangeOf = function (_ref15) {
    var range = _ref15.range;
    return contextual(function (original) {
      return contextual(function (secondary) {
        return "".concat(original.target.preferred, " is in ").concat(range, " of ").concat(secondary.target.ref || secondary.target.preferred);
      });
    });
  };

  this.tokenWasOfType = function (_ref16) {
    var type = _ref16.type;
    return contextual(function (context) {
      return "".concat(context.token.preferred, " was a @").concat(type, "Token token");
    });
  };

  this.affect = function () {
    return contextual(function (context) {
      return function (effect) {
        return greed(function (resolvedEffect) {
          return line()(context)(continuable(context)(capitalizeFirst("".concat(resolvedEffect, "."))));
        })(effect(context));
      };
    });
  };

  this.requires = function () {
    return contextual(function (context) {
      return function (check) {
        return greed(function (resolvedCheck) {
          return line()(context)("__Requires__: ".concat(capitalizeFirst(resolvedCheck), "."));
        })(check(context));
      };
    });
  };

  this.reaction = function () {
    return contextual(function (context) {
      return function (check) {
        return greed(function (resolvedCheck) {
          return line()(context)(continuable(context)("__Reaction__: ".concat(resolvedCheck, ".")));
        })(check(context));
      };
    });
  };

  this.followthrough = function (_ref17) {
    var _ref17$hasX = _ref17.hasX,
        hasX = _ref17$hasX === void 0 ? true : _ref17$hasX;
    return contextual(function (context) {
      if (hasX) {
        context.variables = context.variables || {};
        context.variables.x = 'X';
      }

      return function (check) {
        return greed(function (resolvedCheck) {
          return line()(context)(continuable(context)("__Enact__".concat(hasX ? ' @xCard' : '', ": ").concat(resolvedCheck, ".")));
        })(check(context));
      };
    });
  };

  this.enact = this.followthrough;

  this.buff = function (_ref18) {
    var _ref18$duration = _ref18.duration,
        duration = _ref18$duration === void 0 ? 1 : _ref18$duration;
    return contextual(function (context) {
      return "__buff__ ".concat(context.target.preferred, " for ").concat(duration, " turn").concat(duration === 1 ? '' : 's');
    });
  };

  this.debuff = function (_ref19) {
    var _ref19$duration = _ref19.duration,
        duration = _ref19$duration === void 0 ? 1 : _ref19$duration;
    return contextual(function (context) {
      return "__debuff__ ".concat(context.target.preferred, " for ").concat(duration, " turn").concat(duration === 1 ? '' : 's');
    });
  };

  this.whileBuffed = function (_ref20) {
    var and = _ref20.and;
    return contextual(function (context) {
      return function (effect) {
        return greed(function (resolvedEffect) {
          return line()(context)(continuable(context)("While ".concat(context.target.ref || context.target.preferred, " ").concat(context.target.is, " affected by this card").concat(and ? " and ".concat(and) : '', ", ").concat(resolvedEffect, ".")));
        })(effect(context));
      };
    });
  };

  this.whileBuffedAnd = function (args) {
    return contextual(function (context) {
      return function (condition) {
        return greed(function (resolvedCondtion) {
          return _this.whileBuffed(_objectSpread(_objectSpread({}, args), {}, {
            and: resolvedCondtion
          }))(context);
        })(condition(repetitionContext(context)));
      };
    });
  };

  this.makeAttackAgainst = function (_ref21) {
    var type = _ref21.type,
        range = _ref21.range,
        advantage = _ref21.advantage,
        defense = _ref21.defense;
    advantage = Math.abs(advantage) > 0 ? " with ".concat(Math.abs(advantage), " rank").concat(Math.abs(advantage) > 1 ? 's' : '', " of ").concat(advantage > 0 ? 'advantage' : 'disadvantage') : "";
    return contextual(function (context) {
      return line()(context)(continuable(context)("Make a".concat(range ? " ".concat(range) : '').concat(type ? " ".concat(type) : '', " attack").concat(advantage, " against the ").concat(defense, " defense of ").concat(context.target.preferred, ".")));
    });
  };

  this.quiver = function (_ref22) {
    var effectCount = _ref22.effectCount,
        isRecurring = _ref22.isRecurring;
    return greed(function (effect) {
      return !isRecurring ? effectCount === 1 ? "__Quiver__: ".concat(effect) : greed(function (subQuiver) {
        return "__Quiver__: ".concat(effect, " \n@child").concat(subQuiver);
      })(_this.quiver({
        effectCount: effectCount - 1,
        isRecurring: true
      })) : effectCount === 1 ? " ".concat(effect) : greed(function (subQuiver) {
        return "".concat(effect, " \n@child").concat(subQuiver);
      })(_this.quiver({
        effectCount: effectCount - 1,
        isRecurring: true
      }));
    });
  };

  this.flourish = function (_ref23) {
    var cost = _ref23.cost;
    return contextual(function (context) {
      return line()(context)(continuable(context)("__Flourish__".concat(cost !== undefined ? " ".concat(cost) : '', ".")));
    });
  };

  this.exhaust = function () {
    return contextual(function (context) {
      return line()(context)("__Exhaust__.");
    });
  };

  this.defend = function (_ref24) {
    var _ref24$quantity = _ref24.quantity,
        quantity = _ref24$quantity === void 0 ? 1 : _ref24$quantity;
    return contextual(function (context) {
      return context.target.ref ? "__defend__ ".concat(quantity) : "".concat(context.target.preferred, " __defend__ ").concat(quantity);
    });
  };

  this.modifyCard = function () {
    return greed(function (effect) {
      return "".concat(effect, ".");
    });
  };

  this.modifyCards = function () {
    return contextual(function (context) {
      return greed(function (cardType) {
        return greed(function (effect) {
          return "".concat(context.target.possessive, " ").concat(cardType, " gain \u2018").concat(effect, "\u2019");
        });
      });
    });
  };

  this.advantage = function () {
    return "If this card makes an attack, it gains a rank of advantage";
  };

  this.disadvantage = function () {
    return "If this card makes an attack, it gains a rank of disadvantage";
  };

  this.applyEffect = function () {
    return greed(function (effect) {
      return "".concat(capitalizeFirst(inline(effect)));
    });
  };

  this.increaseAttackDamage = function (_ref25) {
    var by = _ref25.by,
        type = _ref25.type;
    return type ? "If this card deals damage, it deals an additional ".concat(by, " ").concat(type, " damage.") : "If this card deals damage, increase one type of damage dealt by ".concat(by, ".");
  };

  this.convertDamage = function (_ref26) {
    var toType = _ref26.toType,
        increaseBy = _ref26.increaseBy;
    return "If this card deals damage, convert all damage dealt to ".concat(toType, " damage").concat(increaseBy ? " and deal an additional ".concat(increaseBy, " ").concat(toType, " damage") : '', ".");
  };

  this.onConditionSet = function (_ref27) {
    var conditions = _ref27.conditions;
    return contextual(function (context) {
      return "After the ".concat(enumerate(conditions, 'or'), " condition is set on ").concat(context.target.ref);
    });
  };

  this.hits = function () {
    return contextual(function (attacker) {
      return contextual(function (recipient) {
        return "Before ".concat(attacker.target.preferred, " would hit ").concat(recipient.target.ref || recipient.target.preferred, " with a ").concat(attacker.attack.attackType ? "".concat(enumerate(attacker.attack.attackType, 'or'), " ") : '', "attack").concat(attacker.attack.defenseType ? " against ".concat(recipient.target.possessive, " ").concat(attacker.attack.defenseType, " defense") : '');
      });
    });
  };

  this.misses = function () {
    return contextual(function (attacker) {
      return contextual(function (recipient) {
        return "When ".concat(attacker.target.preferred, " would miss ").concat(recipient.target.ref || recipient.target.preferred, " with a").concat(attacker.attack.attackType ? '' : 'n', " ").concat(attacker.attack.attackType ? "".concat(enumerate(attacker.attack.attackType, 'or'), " ") : '', "attack").concat(attacker.attack.defenseType ? " against ".concat(recipient.target.possessive, " ").concat(attacker.attack.defenseType, " defense") : '');
      });
    });
  };

  this.provokesOpportunity = function () {
    return contextual(function (movingCreature) {
      return contextual(function (from) {
        return "When ".concat(movingCreature.target.preferred, " ").concat(movingCreature.target.has, " moved out of ").concat(from.zone.preferred);
      });
    });
  };

  this.endOfTurn = function () {
    return contextual(function (context) {
      return "At the end of ".concat(context.target.possessive, " turn");
    });
  };

  this.beforeNextTurn = function () {
    return contextual(function (context) {
      return "Before the start of ".concat(context.target.possessive, " turn");
    });
  };

  this.entersZoneOf = function () {
    return contextual(function (movingCreature) {
      return contextual(function (target) {
        return "After ".concat(movingCreature.target.preferred, " ").concat(movingCreature.target.has, " moved into ").concat(target.zone.preferred);
      });
    });
  };

  this.afterDefenseDieRolled = function (_ref28) {
    var type = _ref28.type;
    return contextual(function (context) {
      return "After ".concat(context.target.ref || context.target.preferred, " ").concat(context.target.has, " rolled a ").concat(type ? type : '', "defense die");
    });
  };

  this.whenDamaged = function (_ref29) {
    var type = _ref29.type;
    return contextual(function (context) {
      return "Before ".concat(context.target.ref || context.target.preferred, " would be dealt ").concat(type ? "".concat(enumerate(type, 'or'), " ") : '', "damage by a").concat(context.defendingFrom.attackType ? " ".concat(context.defendingFrom.attackType) : 'n', " attack").concat(context.defendingFrom.defenseType ? " that targeted ".concat(context.target.possessive, " ").concat(enumerate(context.defendingFrom.defenseType, 'or'), " defense") : '');
    });
  };

  this.onHit = function () {
    return contextual(function (context) {
      var hitContext = pastContext({
        target: {
          historical: "the hit ".concat(context.target.typeEnforcement),
          typeEnforcement: context.target.typeEnforcement,
          repetition: "it"
        }
      });
      return function (effect) {
        return greed(function (resolvedEffect) {
          return continuable(hitContext)("\n@child On hit, ".concat(resolvedEffect, "."));
        })(effect(hitContext));
      };
    });
  };

  this.ifDamaged = function (_ref30) {
    var type = _ref30.type,
        and = _ref30.and;
    return contextual(function (context) {
      var itContext = pastContext({
        target: {
          historical: "it",
          typeEnforcement: context.target.typeEnforcement,
          repetition: "it"
        }
      });
      return function (effect) {
        return greed(function (resolvedEffect) {
          return continuable(itContext)("\n@child If a ".concat(context.target.typeEnforcement, " took ").concat(type ? "".concat(type, " ") : '', "damage from this").concat(and ? " and ".concat(and) : '', ", ").concat(resolvedEffect, "."));
        })(effect(itContext));
      };
    });
  };

  this.ifDamagedAnd = function (args) {
    return contextual(function (context) {
      return function (condition) {
        return greed(function (resolvedCondtion) {
          return _this.ifDamaged(_objectSpread(_objectSpread({}, args), {}, {
            and: resolvedCondtion
          }))(context);
        })(condition(context));
      };
    });
  };

  this.conditional = function (_ref31) {
    var conditionCount = _ref31.conditionCount,
        isRecurring = _ref31.isRecurring;
    return contextual(function (context) {
      return greed(function (conditions) {
        return function (effect) {
          return greed(function (resolvedEffect) {
            return "If ".concat(conditions, ", ").concat(inline(resolvedEffect), ".");
          })(effect(context));
        };
      })(_this.fetchConditons({
        conditionCount: conditionCount
      })(context));
    });
  };

  this.fetchConditons = function (_ref32) {
    var _ref32$conditionCount = _ref32.conditionCount,
        conditionCount = _ref32$conditionCount === void 0 ? 1 : _ref32$conditionCount,
        isRecurring = _ref32.isRecurring,
        _ref32$commas = _ref32.commas,
        commas = _ref32$commas === void 0 ? conditionCount > 2 : _ref32$commas;
    return contextual(function (context) {
      return function (conditionFunction) {
        return greed(function (condition) {
          return !isRecurring ? conditionCount === 1 ? "".concat(condition) : greed(function (subCondition) {
            return "".concat(condition).concat(commas ? ',' : '', " ").concat(subCondition);
          })(_this.fetchConditons({
            conditionCount: conditionCount - 1,
            isRecurring: true,
            commas: commas
          })(context)) : conditionCount === 1 ? "and ".concat(condition) : greed(function (subCondition) {
            return "".concat(condition).concat(commas ? ',' : '', " ").concat(subCondition);
          })(_this.fetchConditons({
            conditionCount: conditionCount - 1,
            isRecurring: true,
            commas: commas
          })(context));
        })(conditionFunction(context));
      };
    });
  };

  this.chooseOne = function () {
    return function (context) {
      return greed(function (path1) {
        return greed(function (path2) {
          return "__Choose__ 1:\n@option ".concat(path1, "\n@option ").concat(path2);
        });
      });
    };
  };

  this.asChild = function () {
    return contextual(function (context) {
      return function (content) {
        return greed(function (resolvedContent) {
          return "\n@child ".concat(resolvedContent);
        })(content(context));
      };
    });
  };

  this.otherwise = function () {
    return contextual(function (context) {
      return function (content) {
        return greed(function (resolvedContent) {
          return "__Otherwise__: ".concat(resolvedContent);
        })(content(context));
      };
    });
  };

  this.changeContext = function () {
    return contextual(function (oldContext) {
      return function (newContext) {
        return function (content) {
          newContext = newContext(oldContext);
          if (newContext) newContext.prevContext = oldContext;
          return content(newContext);
        };
      };
    });
  };

  this.changeTargetTo = function () {
    return contextual(function (oldContext) {
      return greed(function (newContext) {
        return function (content) {
          if (oldContext) oldContext.prevContext = _objectSpread({}, oldContext);
          oldContext.target = newContext.target;
          oldContext.zone = newContext.zone;
          return content(activeContext(oldContext));
        };
      });
    });
  };

  this.lastContext = function () {
    return contextual(function (oldContext) {
      return function (content) {
        return content(oldContext.prevContext);
      };
    });
  };

  this.splitContext = function () {
    return contextual(function (oldContext) {
      return function (newContext1) {
        return function (content1) {
          return greed(function (resolvedContent1) {
            return function (newContext2) {
              return line()(newContext2(oldContext))(resolvedContent1);
            };
          })(content1(newContext1(oldContext)));
        };
      };
    });
  };

  this.none = function () {
    return function () {
      return undefined;
    };
  };

  this.same = function () {
    return function (x) {
      return x;
    };
  };

  this.toSelf = function () {
    return function (_) {
      return _this.self();
    };
  };

  this.eachOf = function () {
    return function (oldContext) {
      return _objectSpread(_objectSpread({}, oldContext), {}, {
        target: oldContext.target ? _objectSpread(_objectSpread({}, oldContext.target), {}, {
          active: 'each of ' + oldContext.target.active,
          historical: 'each of ' + oldContext.target.historical,
          preferred: 'each of ' + oldContext.target.preferred
        }) : undefined,
        zone: oldContext.zone ? _objectSpread(_objectSpread({}, oldContext.zone), {}, {
          active: 'each of ' + oldContext.zone.active,
          historical: 'each of ' + oldContext.zone.historical,
          preferred: 'each of ' + oldContext.zone.preferred
        }) : undefined,
        token: oldContext.token ? _objectSpread(_objectSpread({}, oldContext.token), {}, {
          active: 'each of ' + oldContext.token.active,
          historical: 'each of ' + oldContext.token.historical,
          preferred: 'each of ' + oldContext.token.preferred
        }) : undefined
      });
    };
  };

  this.newContext = function () {
    return contextual(function (oldContext) {
      return _this.changeContext()(oldContext)(_this.none());
    });
  };

  this.forceContext = function () {
    return function () {
      return greed(function (newContext) {
        return newContext;
      });
    };
  };

  this.noContext = function () {
    return undefined;
  };

  this.declareContext = function () {
    return contextual(function (context) {
      var phrase = context.target ? context.target.preferred : context.zone.preferred;
      return line()(pastContext(context))(capitalizeFirst("".concat(targetingImperative(phrase), ".")));
    });
  };

  this.twoEffects = function () {
    return contextual(function (context) {
      return function (effect1) {
        return greed(function (resolvedEffect1) {
          return function (effect2) {
            return greed(function (resolvedEffect2) {
              return "".concat(resolvedEffect1, ". In addition, ").concat(resolvedEffect2);
            })(effect2(context));
          };
        })(effect1(context));
      };
    });
  };

  this.repeatable = function () {
    return contextual(function (context) {
      return function (content) {
        return greed(function (resolvedEffect) {
          return function (repeat) {
            return greed(function (resolvedRepeat) {
              return line()(context)(continuable(context)("".concat(resolvedEffect, "\n").concat(capitalizeFirst(resolvedRepeat), ".")));
            })(repeat(context));
          };
        })(content(context));
      };
    });
  };

  this.repeat = function (_ref33) {
    var _ref33$times = _ref33.times,
        times = _ref33$times === void 0 ? 1 : _ref33$times,
        forced = _ref33.forced;
    return contextual(function (context) {
      return "repeat this process ".concat(forced ? '' : 'up to ').concat(times, " more time").concat(times === 1 ? '' : 's');
    });
  };

  this.additional = function () {
    return contextual(function (context) {
      return function (condition) {
        return greed(function (resolvedCondition) {
          return function (content) {
            return greed(function (resolvedContent) {
              return continuable(context)("In addition,".concat(resolvedCondition ? " if ".concat(resolvedCondition, ",") : '', " ").concat(resolvedContent, "."));
            })(content(context));
          };
        })(condition(context));
      };
    });
  };

  this.instead = function () {
    return contextual(function (context) {
      return function (condition) {
        return greed(function (resolvedCondition) {
          return function (content1) {
            return greed(function (resolvedContent1) {
              return function (content2) {
                return greed(function (resolvedContent2) {
                  return "".concat(inline(resolvedContent1), ". If ").concat(resolvedCondition, ", ").concat(inline(resolvedContent2), " instead");
                })(content2(repetitionContext(context)));
              };
            })(content1(context));
          };
        })(condition(context));
      };
    });
  };

  this.move = function (_ref34) {
    var _ref34$distance = _ref34.distance,
        distance = _ref34$distance === void 0 ? 1 : _ref34$distance,
        forced = _ref34.forced;
    return contextual(function (context) {
      return "move ".concat(context.target ? context.target.preferred : context.token.preferred, " ").concat(forced ? '' : 'up to ').concat(distance, " zone").concat(distance === 1 ? '' : 's');
    });
  };

  this.prime = function () {
    return contextual(function (context) {
      return "__prime__ ".concat(context.target.preferred);
    });
  };

  this.onMiss = function () {
    return contextual(function (context) {
      return function (nextFunction) {
        return greed(function (resolvedFunction) {
          return "\n@child On miss, ".concat(resolvedFunction, ".");
        })(nextFunction(context));
      };
    });
  };

  this.redirect = function () {
    return contextual(function (context) {
      return function (changeContext) {
        return greed(function (resolvedChangedContext) {
          return continuable(resolvedChangedContext)("__redirect__ this attack at ".concat(resolvedChangedContext.target.preferred));
        })(changeContext(context));
      };
    });
  };

  this.shift = function (_ref35) {
    var _ref35$distance = _ref35.distance,
        distance = _ref35$distance === void 0 ? 1 : _ref35$distance,
        forced = _ref35.forced;
    return contextual(function (context) {
      return "shift ".concat(context.target.preferred, " ").concat(forced ? '' : 'up to ').concat(distance, " zone").concat(distance === 1 ? '' : 's');
    });
  };

  this.shiftTo = function (_ref36) {
    var _ref36$distance = _ref36.distance,
        distance = _ref36$distance === void 0 ? 0 : _ref36$distance,
        forced = _ref36.forced;
    return contextual(function (destinationContext) {
      return contextual(function (entityContext) {
        return "shift ".concat(entityContext.target.preferred, " ").concat(forced || !distance ? '' : 'up to ').concat(distance ? "".concat(distance, " zone").concat(distance === 1 ? '' : 's', " ") : '').concat(distance ? 'towards' : 'to', " ").concat(destinationContext.target ? destinationContext.target.preferred : destinationContext.zone.preferred);
      });
    });
  };

  this.deal = function () {
    return contextual(function (context) {
      return function (damage) {
        return greed(function (resolvedDamage) {
          return "deal ".concat(Object.entries(resolvedDamage || {}).map(function (_ref37) {
            var _ref38 = _slicedToArray(_ref37, 2),
                key = _ref38[0],
                value = _ref38[1];

            return "".concat(value, " ").concat(key, " damage");
          }).reduce(function (acc, val, index, array) {
            return "".concat(acc).concat(array.length !== 2 ? ',' : '').concat(index === array.length - 1 ? ' and' : '', " ").concat(val);
          })).concat(context ? " to ".concat(context.target.preferred) : '');
        })(damage(context));
      };
    });
  };

  this.damage = function (damageValues) {
    return contextual(function (context) {
      return damageValues;
    });
  };

  this.restoreHealth = function (_ref39) {
    var quantity = _ref39.quantity,
        isDynamic = _ref39.isDynamic;
    return contextual(function (context) {
      return "restore X health to ".concat(context.target.preferred);
    });
  };

  this.lifesteal = function (_ref40) {
    var type = _ref40.type;
    return contextual(function (context) {
      return function (recipientContext) {
        return _this.dynamic({
          descriptor: "the ".concat(type ? "".concat(type, " ") : '', "damage dealt"),
          quantity: null
        })(recipientContext)(_this.restoreHealth({
          quantity: _this.ref('X')
        }));
      };
    });
  };

  this.dynamic = function (_ref41) {
    var descriptor = _ref41.descriptor,
        quantity = _ref41.quantity;
    return contextual(function (context) {
      return function (dynamicFunction) {
        return greed(function (resolvedDynamicFunction) {
          return "".concat(resolvedDynamicFunction, ", where X is ").concat(descriptor);
        })(dynamicFunction(context));
      };
    });
  };

  this.maxDefense = function (defenses) {
    return contextual(function (context) {
      return "set ".concat(context.target.preferredPossessive, " ").concat(Object.entries(defenses || {}).map(function (_ref42) {
        var _ref43 = _slicedToArray(_ref42, 2),
            key = _ref43[0],
            value = _ref43[1];

        return "".concat(key);
      }).reduce(function (acc, val, index, array) {
        return "".concat(acc).concat(array.length !== 2 ? ',' : '').concat(index === array.length - 1 ? ' and' : '', " ").concat(val);
      }), " defense dice to their maximum value");
    });
  };

  this.setDefenseContextDie = function (_ref44) {
    var defenses = _ref44.defenses,
        to = _ref44.to;
    return contextual(function (context) {
      return "set ".concat(context.target.preferredPossessive, " ").concat(enumerate(defenses), " defense dice to ").concat(to);
    });
  };

  this.set = function (conditions) {
    return contextual(function (context) {
      return "set ".concat(Object.entries(conditions || {}).map(function (_ref45) {
        var _ref46 = _slicedToArray(_ref45, 2),
            key = _ref46[0],
            value = _ref46[1];

        return "".concat(key, " ").concat(value);
      }).reduce(function (acc, val, index, array) {
        return "".concat(acc).concat(array.length !== 2 ? ',' : '').concat(index === array.length - 1 ? ' and' : '', " ").concat(val);
      })).concat(context ? " on ".concat(context.target.preferred) : '');
    });
  };

  this.plan = function (_ref47) {
    var cards = _ref47.cards;
    return contextual(function (context) {
      return "__Plan__: ".concat(enumerate(Array.isArray(cards) ? cards.map(function (x) {
        return "\"".concat(x, "\"");
      }) : "\"".concat(cards, "\"")));
    });
  };

  this.ward = function () {
    return contextual(function (context) {
      return "__Ward__ ".concat(context.target.preferred);
    });
  };

  this.clear = function (conditions) {
    return contextual(function (context) {
      return "clear ".concat(enumerate(Object.entries(conditions || {}).map(function (_ref48) {
        var _ref49 = _slicedToArray(_ref48, 2),
            key = _ref49[0],
            value = _ref49[1];

        return "".concat(key);
      }))).concat(context ? " from ".concat(context.target.preferred) : '');
    });
  };

  this.clearEffects = function (_ref50) {
    var quantity = _ref50.quantity;
    return contextual(function (context) {
      return "remove up to ".concat(quantity, " effect").concat(quantity === 1 ? '' : 's', " from ").concat(context.target.preferred);
    });
  };

  this.draw = function (_ref51) {
    var _ref51$quantity = _ref51.quantity,
        quantity = _ref51$quantity === void 0 ? 1 : _ref51$quantity,
        zone = _ref51.zone;
    return contextual(function (context) {
      return "".concat(context.target.ref ? 'draw' : "".concat(context.target.preferred, " draws"), " ").concat(quantity === 1 ? 'a' : quantity, " card").concat(quantity === 1 ? '' : 's').concat(zone ? " from your ".concat(zone) : '');
    });
  };

  this.discard = function (_ref52) {
    var _ref52$quantity = _ref52.quantity,
        quantity = _ref52$quantity === void 0 ? 1 : _ref52$quantity;
    return contextual(function (context) {
      return "".concat(context.target.preferred, " must discard ").concat(quantity === 1 ? 'a' : quantity, " card").concat(quantity === 1 ? '' : 's');
    });
  };

  this.placeTokens = function (_ref53) {
    var tokenType = _ref53.tokenType,
        _ref53$limit = _ref53.limit,
        limit = _ref53$limit === void 0 ? 1 : _ref53$limit;
    return contextual(function (context) {
      return "place ".concat(limit === 1 ? 'a' : "".concat(limit), " @").concat(tokenType, "Token token").concat(limit === 1 ? '' : 's', " in ").concat(context.zone.preferred);
    });
  };

  this.replaceTokens = function (_ref54) {
    var oldType = _ref54.oldType,
        newType = _ref54.newType,
        _ref54$limit = _ref54.limit,
        limit = _ref54$limit === void 0 ? 1 : _ref54$limit;
    return contextual(function (context) {
      return "replace up to ".concat(limit, " @").concat(oldType, "Token token").concat(limit === 1 ? '' : 's', " in ").concat(context.zone.preferred, " with ").concat(limit == 1 ? "a @".concat(newType, "Token token") : "@".concat(newType, "Token tokens"));
    });
  };

  this.removeToken = function () {
    return contextual(function (context) {
      return "remove ".concat(context.token.preferred);
    });
  };

  this.removeTokens = function (_ref55) {
    var _ref55$limit = _ref55.limit,
        limit = _ref55$limit === void 0 ? 1 : _ref55$limit,
        excludeType = _ref55.excludeType,
        ofType = _ref55.ofType;
    return contextual(function (context) {
      return limit === 0 ? "remove all ".concat(ofType ? "@".concat(ofType, "Token ") : '', "tokens ").concat(excludeType ? "besides @".concat(excludeType, "Token tokens ") : '', "from ").concat(context.zone.preferred) : "remove up to ".concat(limit, " ").concat(ofType ? "@".concat(ofType, "Token ") : '', "token").concat(limit === 1 ? '' : 's', " from ").concat(context.zone.preferred);
    });
  };

  this.perTokenRemoved = function () {
    return contextual(function (context) {
      return function (nextFunction) {
        return _this.dynamic({
          descriptor: "the number of tokens removed",
          quantity: null
        })(context)(nextFunction);
      };
    });
  };

  this.invert = function () {
    return contextual(function (context) {
      return greed(function (cardSelector) {
        return "".concat(context.target.preferred, " must invert ").concat(cardSelector, " if possible");
      });
    });
  };

  this.pull = function (_ref56) {
    var _ref56$distance = _ref56.distance,
        distance = _ref56$distance === void 0 ? 1 : _ref56$distance;
    return contextual(function (context) {
      return contextual(function (towards) {
        return "pull ".concat(context.target.preferred, " up to ").concat(distance, " zone").concat(distance === 1 ? '' : '', " towards ").concat(towards.target.ref || towards.target.preferred);
      });
    });
  };

  this.push = function (_ref57) {
    var _ref57$distance = _ref57.distance,
        distance = _ref57$distance === void 0 ? 1 : _ref57$distance;
    return contextual(function (context) {
      return contextual(function (from) {
        return "push ".concat(context.target.preferred, " up to ").concat(distance, " zone").concat(distance === 1 ? '' : '', " away from ").concat(from.target.ref || from.target.preferred);
      });
    });
  };

  this.increaseResistances = function (_ref58) {
    var resistances = _ref58.resistances,
        quantity = _ref58.quantity;
    return contextual(function (context) {
      return "".concat(context.target.possessive, " ").concat(enumerate(resistances.map(function (x) {
        return "".concat(x, " resistance");
      })), " ").concat(resistances.length === 1 ? 'is' : 'are', " increased by ").concat(quantity);
    });
  };

  this.conditionImmunity = function (_ref59) {
    var conditions = _ref59.conditions;
    return contextual(function (context) {
      return "".concat(context.target.ref || context.target.preferred, " ").concat(context.target.is, " immune to ").concat(enumerate(conditions));
    });
  };

  this.are = function (_ref60) {
    var conditions = _ref60.conditions;
    return contextual(function (context) {
      return "".concat(context.target.ref || context.target.preferred, " ").concat(context.target.is, " ").concat(enumerate(conditions));
    });
  };

  this.defenseBonus = function (_ref61) {
    var against = _ref61.against,
        bonus = _ref61.bonus;
    return contextual(function (context) {
      return "".concat(context.target.ref || context.target.preferred, " ").concat(context.target.has, " a ").concat(bonus > 0 ? '+' : '').concat(bonus, " ").concat(bonus > 0 ? 'bonus' : 'penalty', " to ").concat(context.target.possessive, " defensive context dice for determining if ").concat(against ? "".concat(against, " ") : '', "attacks would hit");
    });
  };

  this.difficultTerrain = function () {
    return contextual(function (context) {
      return "".concat(context.target.ref || context.target.preferred, " move").concat(context.target.verbS, " as if ").concat(context.target.repetition, " ").concat(context.target.is, " in difficult terrain");
    });
  };

  this.spell = function () {
    return "a __spell__";
  };

  this.cardWithTag = function (_ref62) {
    var tags = _ref62.tags,
        _ref62$limit = _ref62.limit,
        limit = _ref62$limit === void 0 ? 1 : _ref62$limit;
    return limit === 1 ? "a ".concat(Array.isArray(tags) ? tags.map(function (tag) {
      return "@".concat(tag);
    }).reduce(function (acc, val) {
      return "".concat(acc, " ").concat(val);
    }) : "@".concat(tags), " card") : "".concat(limit ? "".concat(limit, " ") : '').concat(Array.isArray(tags) ? tags.map(function (tag) {
      return "@".concat(tag);
    }).reduce(function (acc, val) {
      return "".concat(acc, " ").concat(val);
    }) : "@".concat(tags), " cards");
  };

  this.reduceDamageTaken = function (_ref63) {
    var by = _ref63.by;
    return contextual(function (context) {
      return context.target.ref ? "__Block__ ".concat(by, " damage") : "".concat(context.target.preferred, " __blocks__ ").concat(by, " damage");
    });
  };

  this.itemByType = function (_ref64) {
    var type = _ref64.type;
    return "".concat(type);
  };

  this.weaponWithProperties = function (_ref65) {
    var properties = _ref65.properties;
    return "".concat(properties.reduce(function (acc, val) {
      return "".concat(acc, " ").concat(val);
    }), " weapon");
  };

  this.add = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.reduce(function (acc, val) {
      return "".concat(acc, " + ").concat(val);
    });
  };

  this.multiply = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return "(".concat(args.reduce(function (acc, val) {
      return "".concat(acc, " * ").concat(val);
    }), ")");
  };

  this.cardName = function (cardName) {
    return capitalizeFirst(cardName.split(/(?=[A-Z])/).reduce(function (acc, val) {
      return "".concat(acc, " ").concat(capitalizeFirst(val));
    })).replace(/\\/g, '').replace(/_/g, ':').replace(/\|/g, ' /');
  };

  this.range = function (min, max) {
    return "@range ".concat(min).concat(max ? "-".concat(max) : "");
  };

  this.list = function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return [].concat(args);
  };

  this.ref = function (val) {
    return val.length !== 1 ? "@".concat(val) : val;
  };

  this.end = function () {
    return undefined;
  };
}, _temp)();

var interpret = function interpret(text) {
  var result = function result(x) {
    return x;
  };

  while (text.length) {
    var _text = text,
        _text2 = _toArray(_text),
        current = _text2[0],
        remainder = _text2.slice(1);

    text = remainder;
    var currentFunctionName = current.match(/\w+/);
    currentFunctionName = currentFunctionName ? currentFunctionName[0] : undefined;
    var currentInner = current.match(/\(.*\)/);
    currentInner = currentInner ? currentInner[0] : undefined;
    if (currentInner) currentInner = interpretInner(currentInner);
    currentInner = currentInner || {};
    result = result(lexical[currentFunctionName](currentInner));
  }

  return result;
};

var blobify = function blobify(content) {
  var blobs = [];
  var functionArgs = content.match(/\w+\(.*\)/);

  while (functionArgs) {
    var start = content.indexOf('(');
    var current = start + 1;
    var count = 1;
    var end = void 0;

    loop: {
      while (current < content.length) {
        if (content.charAt(current) === '(') count += 1;
        if (content.charAt(current) === ')') count -= 1;

        if (!count) {
          end = current;
          break loop;
        }

        current += 1;
      }

      throw new Error('Unbalanced parentheses');
    }

    var index = blobs.length;
    blobs.push(content.slice(start, end + 1));
    content = content.slice(0, start) + "${".concat(index, "}") + content.slice(end + 1);
    functionArgs = content.match(/\w+\(.*\)/);
  }

  return [content, blobs];
};

var unblobify = function unblobify(_ref66) {
  var content = _ref66.content,
      blobs = _ref66.blobs;
  blobs.forEach(function (val, index) {
    content = content.replace("${".concat(index, "}"), val);
  });
  return content;
}; //todo update to handle nested dictionaries


var interpretInner = function interpretInner(text) {
  if (!text) return;
  if (text.match(/\(\)/)) return;
  var content = text.match(/{(.*)}/);
  content = content ? content[1] : undefined;
  if (!content) return {};
  var blobs;

  var _blobify = blobify(content);

  var _blobify2 = _slicedToArray(_blobify, 2);

  content = _blobify2[0];
  blobs = _blobify2[1];
  content = content.replace(/,/g, '\n');
  content = unblobify({
    content: content,
    blobs: blobs
  });
  var dict = {};
  content = content.split(/\s/g);
  content.forEach(function (val) {
    var _val$split = val.split(/(?<!\\):/),
        _val$split2 = _slicedToArray(_val$split, 2),
        key = _val$split2[0],
        value = _val$split2[1];

    if (!key) return;
    dict[key] = interpretFunctionChain(value);
  });
  return dict;
};

var interpretFunctionChain = function interpretFunctionChain(text) {
  if (!text.match(/^\w+\(.*\)/)) {
    if (!isNaN(Number(text))) return Number(text);
    return text;
  }

  var functionName = text.match(/^(\w+)\(.*\)/)[1];
  var args = text.match(/^\w+\((.*)\)/)[1];
  var blobs;

  var _blobify3 = blobify(args);

  var _blobify4 = _slicedToArray(_blobify3, 2);

  args = _blobify4[0];
  blobs = _blobify4[1];
  args = args.replace(/,/g, '\n');
  args = unblobify({
    content: args,
    blobs: blobs
  });
  args = args.split(/\s/);
  args = args.map(function (val) {
    return interpretFunctionChain(val);
  });
  return lexical[functionName].apply(lexical, _toConsumableArray(args));
};

var _default = function _default(s) {
  if (Array.isArray(s)) return s;
  return interpret(s.replace(/\s/g, '').split(/;/g).filter(function (x) {
    return x;
  })).split(/\n/).filter(function (x) {
    return x;
  });
};

exports.default = _default;