import React from "react";
import bride from "../../images/bride.jpg";
import groom from "../../images/groom.jpg";

const WeddingInvitation = () => {
  return (
    <div id="fh5co-couple">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
            <h2>Hello!</h2>
            <h3>February 08th, 2025</h3>
            <p>We invited you to celebrate our wedding</p>
          </div>
        </div>
        <div className="couple-wrap animate-box">
          <div className="couple-half">
            <div className="groom">
              <img src={groom} alt="groom" className="img-responsive" />
            </div>
            <div className="desc-groom">
              <h3>Abhay Asokan</h3>
              <p>
                <p>
                  Abhay is a skilled software engineer with a Master’s degree in Computer Applications (MCA). He is currently working at
                  Trenser Technologies in Technopark, where he brings passion and innovation to the tech world.
                </p>
              </p>
            </div>
          </div>
          <p className="heart text-center">
            <i className="icon-heart2"></i>
          </p>
          <div className="couple-half">
            <div className="bride">
              <img src={bride} alt="bride" className="img-responsive" />
            </div>
            <div className="desc-bride">
              <h3>Ashika</h3>
              <p>
                Ashika is a talented software engineer with a Master’s degree in Computer Applications (MCA). Currently making her mark at
                Cinch in Technopark, she infuses her work with a vibrant passion for technology and a drive for innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitation;
