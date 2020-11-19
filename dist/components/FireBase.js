"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

require("firebase/database");

require("firebase/firestore");

var _FirebaseContext = _interopRequireDefault(require("contexts/FirebaseContext"));

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

var config = {
  apiKey: "AIzaSyBLq4im3fG2B1cSCkwn5mScN_Og7_Sl1ko",
  authDomain: "eldtimes.firebaseapp.com",
  databaseURL: "https://eldtimes.firebaseio.com",
  projectId: "eldtimes",
  storageBucket: "eldtimes.appspot.com",
  messagingSenderId: "652140980056",
  appId: "1:652140980056:web:27e74e6d9237d6e4"
};

var Firebase = /*#__PURE__*/function (_React$Component) {
  _inherits(Firebase, _React$Component);

  var _super = _createSuper(Firebase);

  function Firebase(props) {
    var _this;

    _classCallCheck(this, Firebase);

    _this = _super.call(this, props);

    _this.signInWithPopup = function () {
      var provider = new _this.state.app.auth.GoogleAuthProvider();

      _this.state.app.auth().signInWithPopup(provider).then(function (result) {
        _this.setState({
          user: result.user,
          token: result.credential.accessToken,
          loggedIn: true
        });
      }).catch(function (error) {
        console.log(JSON.stringify(error));
      });
    };

    if (!_app.default.apps.length) _app.default.initializeApp(config);
    _this.state = {
      app: _app.default,
      user: undefined,
      token: undefined,
      database: _app.default.database(),
      loggedIn: false,
      signInWithPopup: _this.signInWithPopup
    };
    return _this;
  }

  _createClass(Firebase, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_FirebaseContext.default.Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return Firebase;
}(_react.default.Component);

var _default = Firebase;
exports.default = _default;