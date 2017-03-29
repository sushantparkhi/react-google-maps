"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.groundOverlayEventPropTypes = exports.groundOverlayDefaultPropTypes = exports.groundOverlayControlledPropTypes = undefined;

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

var _GroundOverlayEventList = require("../eventLists/GroundOverlayEventList");

var _GroundOverlayEventList2 = _interopRequireDefault(_GroundOverlayEventList);

var _eventHandlerCreator2 = require("../utils/eventHandlerCreator");

var _eventHandlerCreator3 = _interopRequireDefault(_eventHandlerCreator2);

var _defaultPropsCreator = require("../utils/defaultPropsCreator");

var _defaultPropsCreator2 = _interopRequireDefault(_defaultPropsCreator);

var _composeOptions = require("../utils/composeOptions");

var _composeOptions2 = _interopRequireDefault(_composeOptions);

var _componentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _componentLifecycleDecorator2 = _interopRequireDefault(_componentLifecycleDecorator);

var _GoogleMapHolder = require("./GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var groundOverlayControlledPropTypes = exports.groundOverlayControlledPropTypes = {
    // NOTICE!!!!!!
    //
    // Only expose those with getters & setters in the table as controlled props.
    //
    // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; })
    //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
    clickable: _react.PropTypes.boolean,
    opacity: _react.PropTypes.number
};
var groundOverlayDefaultPropTypes = exports.groundOverlayDefaultPropTypes = (0, _defaultPropsCreator2.default)(groundOverlayControlledPropTypes);
var groundOverlayUpdaters = {
    clickable: function clickable(_clickable, component) {
        component.getGroundOverlay().setClickable(_clickable);
    },
    opacity: function opacity(_opacity, component) {
        component.getGroundOverlay().setOpacity(_opacity);
    }
};

var _eventHandlerCreator = (0, _eventHandlerCreator3.default)(_GroundOverlayEventList2.default),
    eventPropTypes = _eventHandlerCreator.eventPropTypes,
    registerEvents = _eventHandlerCreator.registerEvents;

var groundOverlayEventPropTypes = exports.groundOverlayEventPropTypes = eventPropTypes;

var GroundOverlayCreator = function (_Component) {
    (0, _inherits3.default)(GroundOverlayCreator, _Component);

    function GroundOverlayCreator() {
        (0, _classCallCheck3.default)(this, GroundOverlayCreator);
        return (0, _possibleConstructorReturn3.default)(this, (GroundOverlayCreator.__proto__ || (0, _getPrototypeOf2.default)(GroundOverlayCreator)).apply(this, arguments));
    }

    (0, _createClass3.default)(GroundOverlayCreator, [{
        key: "getGroundOverlay",
        value: function getGroundOverlay() {
            return this.props.groundOverlay;
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                mapHolderRef = _props.mapHolderRef,
                children = _props.children;


            if (_react.Children.count(children) > 0) {
                return _react2.default.createElement(
                    "div",
                    null,
                    _react.Children.map(children, function (childElement) {
                        return childElement && _react2.default.cloneElement(childElement, {
                            mapHolderRef: mapHolderRef,
                            anchorHolderRef: _this2
                        });
                    })
                );
            } else {
                return _react2.default.createElement("noscript", null);
            }
        }
    }], [{
        key: "_createGroundOverlay",
        value: function _createGroundOverlay(groundOverlayProps) {
            var _heatmapLayerProps = heatmapLayerProps,
                mapHolderRef = _heatmapLayerProps.mapHolderRef,
                bounds = _heatmapLayerProps.bounds,
                url = _heatmapLayerProps.url;


            var groundOverlay = new google.maps.GroundOverlay((0, _composeOptions2.default)(groundOverlayProps, groundOverlayControlledPropTypes));
            groundOverlay.setMap(mapHolderRef.getMap());
            return groundOverlay;
        }
    }]);
    return GroundOverlayCreator;
}(_react.Component);

GroundOverlayCreator.propTypes = {
    mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2.default).isRequired,
    groundOverlay: _react.PropTypes.object.isRequired
};
exports.default = (0, _componentLifecycleDecorator2.default)({
    registerEvents: registerEvents,
    instanceMethodName: "getGroundOverlay",
    updaters: GroundOverlayCreator
})(GroundOverlayCreator);