import {
    default as React,
    Component,
} from "react";

import {
    default as GroundOverlayCreator,
    groundOverlayDefaultPropTypes,
    groundOverlayControlledPropTypes,
    groundOverlayEventPropTypes,
} from "./creators/GroundOverlayCreator";
export default class GroundOverlay extends Component {
    static propTypes = {
        // Uncontrolled default[props] - used only in componentDidMount
        ...groundOverlayDefaultPropTypes,
        // Controlled [props] - used in componentDidMount/componentDidUpdate
        ...groundOverlayControlledPropTypes,
        // Event [onEventName]
        ...groundOverlayEventPropTypes,
    };
    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#GroundOverlay
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })

    getClickable() {
        return this.state.groundOverlay.getClickable();
    }

    getOpacity() {
        return this.state.groundOverlay.getOpacity();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#GroundOverlay

    state = {};

    componentWillMount() {
        const {mapHolderRef} = this.context;

        if (!canUseDOM) {
            return;
        }
        const groundOverlay = GroundOverlayCreator._createGroundOverlay({
            ...this.props,
            mapHolderRef,
        });

        this.setState({groundOverlay});
    }

    render() {
        const {mapHolderRef} = this.context;
        if (this.state.groundOverlay) {
            return (
                <GroundOverlayCreator mapHolderRef={mapHolderRef}
                                      groundOverlay={this.state.groundOverlay} {...this.props}>
                    {this.props.children}
                </GroundOverlayCreator>
            );
        } else {
            return (<noscript />);
        }
    }
}

