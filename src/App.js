import logo from './logo.svg';
import './App.css';
import SideBar from './components/sidebar';
import Footer from './components/Footer';
import AdvancedSection from './components/AdvancedSection';
import FeatureSection from './components/FeatureSection';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Testimonial from './components/Testimonial';
function App() {
  return (
    <div className="App">
      <>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="shortcut icon"
    type="image/x-icon"
    href="https://image.ibb.co/fOur3b/favicon.png"
  />
  <meta name="theme-color" content="#1885ed" />
  <title>Bricks.io - Homepage</title>
  <SideBar />
  <Navbar />
  <HomePage />
  <AdvancedSection />
  {/* <FeatureSection /> */}
  <Testimonial />
  <div className="sect sect--violet ">
    <img
      src="https://image.ibb.co/fWyVtb/path3762.png"
      className="career-img"
    />
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="career_title">
            Oh! Your have digged our website in search for the new job?
          </h1>
          <h1 className="career_sub">
            We will pleased to have you onboard! Check open positions.
          </h1>
          <a href="#" className="btn btn--white btn--width">
            Careers
          </a>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</>

    </div>
  );
}

export default App;
