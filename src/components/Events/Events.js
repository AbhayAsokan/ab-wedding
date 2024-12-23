import React from "react";
import bride from "../../images/bride.jpg"; // Ensure correct path
import groom from "../../images/groom.jpg"; // Ensure correct path
import "./Events.css"; // Import custom CSS
import GoogleMapComponent from "../GoogleMap/GoogleMap";

const Events = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
          <h2>Wedding Event Details!</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="single-team-member">
            <div className="family-img">
              <img className="img-fluid" src={groom} alt="Ring Exchange Ceremony" />
            </div>
            <div className="family-info">
              <h3>Wedding</h3>
              <p>
                <strong>Date:</strong> February 08th, 2025
              </p>
              <p>
                <strong>Time:</strong> 10:30 AM
              </p>
              <p>
                <strong>Venue:</strong> Ettumanoor Shri Mahadeva Temple
              </p>
            </div>
          </div>
          <div className="map-container">
            <GoogleMapComponent />
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="single-team-member">
            <div className="family-img">
              <img className="img-fluid" src={bride} alt="Reception" />
            </div>
            <div className="family-info">
              <h3>Reception</h3>
              <p>
                <strong>Date:</strong> February 08th, 2025
              </p>
              <p>
                <strong>Time:</strong> 5:00 PM
              </p>
              <p>
                <strong>Venue:</strong>
                Kuthiathode Town Hall,North Kuthiathode, Kunnukara, Ernakulam
              </p>
            </div>
          </div>
          <div className="map-container">
            <GoogleMapComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
