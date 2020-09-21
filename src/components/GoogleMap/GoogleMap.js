import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33,
        },
        zoom: 11,
    };

    render() {
        return (
            <div style={{ height: "80vh", width: "80%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyCJXX9Qm89CvQGljovN1q9kI7Xe8c7u-vg",
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default GoogleMap;
