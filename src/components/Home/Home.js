import backgroundImage from "../../images/img_bg_2.jpg"; // Adjust path as needed
// import "../../css/style.css";
import WeddingCountdown from "../WeddingCountdown/WeddingCountdown";

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`
  };

  return (
    <header id="fh5co-header" class="fh5co-cover" role="banner" style={backgroundStyle} data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 text-center">
            <div class="display-t">
              <div class="display-tc animate-box" data-animate-effect="fadeIn">
                <h1>Abhay &amp; Ashika</h1>
                <h2>We Are Getting Married</h2>
                <WeddingCountdown />
                <p>
                  <a href="#" class="btn btn-default btn-sm">
                    Save the date
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
