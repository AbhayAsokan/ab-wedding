import React from "react";
// import "./Gallery.css"; // Import custom CSS for styling
import gallery1 from "../../images/gallery-1.jpg";
import gallery2 from "../../images/gallery-2.jpg";
import gallery3 from "../../images/gallery-3.jpg";
import gallery4 from "../../images/gallery-4.jpg";
import gallery5 from "../../images/gallery-5.jpg";
import gallery6 from "../../images/gallery-6.jpg";

const Gallery = () => {
  const galleryItems = [
    { image: gallery1, title: "Two Glasses of Juice", photos: "14 Photos" },
    { image: gallery2, title: "Timer Starts Now!", photos: "30 Photos" },
    { image: gallery3, title: "Beautiful Sunset", photos: "90 Photos" },
    { image: gallery4, title: "Company's Conference Room", photos: "12 Photos" },
    { image: gallery5, title: "Useful Baskets", photos: "50 Photos" },
    { image: gallery6, title: "Skater Man in the Road", photos: "45 Photos" }
  ];

  return (
    <div id="fh5co-gallery" className="fh5co-section-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
            <span>Our Memories</span>
            <h2>Gallery</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
        <div className="row row-bottom-padded-md">
          <div className="col-md-12">
            <ul id="fh5co-gallery-list">
              {galleryItems.map((item, index) => (
                <li
                  key={index}
                  className="one-third animate-box"
                  data-animate-effect="fadeIn"
                  style={{ backgroundImage: `url(${item.image})` }}>
                  <a href={item.image}>
                    <div className="case-studies-summary">
                      <span>{item.photos}</span>
                      <h2>{item.title}</h2>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
