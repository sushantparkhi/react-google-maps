"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _GroundOverlayCreator = require("./creators/GroundOverlayCreator");

var _GroundOverlayCreator2 = _interopRequireDefault(_GroundOverlayCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GroundOverlay = function (_Component) {
    (0, _inherits3.default)(GroundOverlay, _Component);

    function GroundOverlay() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, GroundOverlay);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GroundOverlay.__proto__ || (0, _getPrototypeOf2.default)(GroundOverlay)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(GroundOverlay, [{
        key: "getClickable",

        // Public APIs
        //
        // https://developers.google.com/maps/documentation/javascript/3.exp/reference#GroundOverlay
        //
        // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })

        value: function getClickable() {
            return this.state.groundOverlay.getClickable();
        }
    }, {
        key: "getOpacity",
        value: function getOpacity() {
            return this.state.groundOverlay.getOpacity();
        }

        // END - Public APIs
        //
        // https://developers.google.com/maps/documentation/javascript/3.exp/reference#GroundOverlay

    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            var mapHolderRef = this.context.mapHolderRef;


            if (!canUseDOM) {
                return;
            }
            var groundOverlay = _GroundOverlayCreator2.default._createGroundOverlay((0, _extends3.default)({}, this.props, {
                mapHolderRef: mapHolderRef
            }));

            this.setState({ groundOverlay: groundOverlay });
        }
    }, {
        key: "render",
        value: function render() {
            var mapHolderRef = this.context.mapHolderRef;

            if (this.state.groundOverlay) {
                return _react2.default.createElement(
                    _GroundOverlayCreator2.default,
                    (0, _extends3.default)({ mapHolderRef: mapHolderRef,
                        groundOverlay: this.state.groundOverlay }, this.props),
                    this.props.children
                );
            } else {
                return _react2.default.createElement("noscript", null);
            }
        }
    }]);
    return GroundOverlay;
}(_react.Component);

GroundOverlay.propTypes = (0, _extends3.default)({}, _GroundOverlayCreator.groundOverlayDefaultPropTypes, _GroundOverlayCreator.groundOverlayControlledPropTypes, _GroundOverlayCreator.groundOverlayEventPropTypes);
exports.default = GroundOverlay;