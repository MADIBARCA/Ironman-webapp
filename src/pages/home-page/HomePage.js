import Banner from "../../layout/banner/Banner";

import GetFinisherSection from "./sections/get-finisher/GetFinisherSection";
import IntroSection from "./sections/intro-section/IntroSection";

import "./HomePage.css";


const HomePage = () => {
  return (
    <div className="homePageWrapper">
      <Banner />
      <IntroSection/>
      <GetFinisherSection />
    </div>
  );
};

export default HomePage;
