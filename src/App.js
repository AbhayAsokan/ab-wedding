import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/animate.css";
import "./css/icomoon.css";
import "./css/magnific-popup.css";
// import "./css/owl.carousel.min.css";
// import "./css/owl.theme.default.min.css";
import "./css/style.css";
import "./css/bootstrap.css";

import WeddingInvitation from "./components/WeddingInvitation/WeddingInvitation";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Events from "./components/Events/Events";
import Gallery from "./components/Gallery/Gallery";

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="page">
      <NavBar scrollToSection={scrollToSection} />
      <div id="home">
        <Home />
      </div>
      <div id="wedding-invitation" style={{ padding: "50px 0" }}>
        <WeddingInvitation />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
    </div>
  );
}

export default App;
