import React, { useState } from "react";

const NavBar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <nav className="fh5co-nav" role="navigation">
        <div className="container">
          <div className="row">
            <div className="col-xs-2">
              <div id="fh5co-logo">
                <a href="#home" onClick={() => scrollToSection("home")}>
                  Wedding<strong>.</strong>
                </a>
              </div>
            </div>
            <div className={`col-xs-10 text-right menu-1 ${isOpen ? "open" : ""}`}>
              <ul>
                <li className="active">
                  <a href="#home" onClick={() => scrollToSection("home")}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#wedding-invitation" onClick={() => scrollToSection("wedding-invitation")}>
                    Invitation
                  </a>
                </li>
                <li>
                  <a href="#events" onClick={() => scrollToSection("events")}>
                    Events
                  </a>
                </li>
                <li>
                  <a href="#gallery" onClick={() => scrollToSection("gallery")}>
                    Gallery
                  </a>
                </li>
                {/* Other links can be added here */}
              </ul>
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </div>

        {/* Optional backdrop when the menu is open */}
        {isOpen && <div className="backdrop" onClick={toggleMenu}></div>}
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
