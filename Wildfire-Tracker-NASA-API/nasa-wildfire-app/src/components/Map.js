import { useState } from "react";
import GoogleMapReact from "google-map-react";

// define constants

const Map = ({ center, zoom }) => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC5GdFk5E1YXRwTxYePttlr27AxWq1HfTk" }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 31.6111,
    lng: 34.7685,
  },
  zoom: 10,
};

export default Map;
