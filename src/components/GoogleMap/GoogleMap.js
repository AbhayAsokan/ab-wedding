import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "300px" // Set the height of the map
};

// Specify the center of the map (latitude and longitude)
const center = {
  lat: 37.7749, // Example latitude (San Francisco)
  lng: -122.4194 // Example longitude (San Francisco)
};

const markerPosition = {
  lat: 37.7749, // Same as center for marker
  lng: -122.4194 // Same as center for marker
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      {/* Replace with your API key */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10} // Adjust zoom level as needed
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
