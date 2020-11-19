"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _FirebaseContext = _interopRequireDefault(require("contexts/FirebaseContext"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _btn_google_signin_light_normal_web2x = _interopRequireDefault(require("images/branding/btn_google_signin_light_normal_web@2x.png"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n\tbackground-image: url(", ");\n\twidth: 100%;\n\theight: 0;\n\tpadding-top: 24%;\n\tmask-image: url(", ");\n\tmask-mode: alpha;\n\tmask-size: contain;\n\tmask-repeat: no-repeat;\n\t&:hover {\n\t\tbackground-color: #ddd;\n\t\tbackground-blend-mode: multiply;\n\t}\n\t&:active {\n\t\tbackground-color: #999;\n\t\tbackground-blend-mode: multiply;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GoogleButton = _styledComponents.default.div(_templateObject(), function () {
  return _btn_google_signin_light_normal_web2x.default;
}, function () {
  return _btn_google_signin_light_normal_web2x.default;
});

var GoogleLoginButton = /*#__PURE__*/function (_React$Component) {
  _inherits(GoogleLoginButton, _React$Component);

  var _super = _createSuper(GoogleLoginButton);

  function GoogleLoginButton(props) {
    var _this;

    _classCallCheck(this, GoogleLoginButton);

    _this = _super.call(this, props);

    _this.setBurn = function (burn) {
      if (!burn || _this.state.burn < burn) _this.setState({
        burn: burn
      });
    };

    _this.state = {
      burn: 0
    };
    return _this;
  }

  _createClass(GoogleLoginButton, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(GoogleButton, {
        src: _btn_google_signin_light_normal_web2x.default,
        onMouseDown: this.context.signInWithPopup
      });
    }
  }]);

  return GoogleLoginButton;
}(_react.default.Component);

GoogleLoginButton.contextType = _FirebaseContext.default;
var _default = GoogleLoginButton;
exports.default = _default;