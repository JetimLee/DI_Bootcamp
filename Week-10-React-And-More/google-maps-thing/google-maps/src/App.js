import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 31.6111,
      lng: 34.7685,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `AIzaSyA9UQM8tPuxGz49-K6ctjaBalc9YCsQowk` }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={31.6111} lng={34.7685} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
