import Banner from "../../layout/banner/Banner";
import Header from "../../layout/header/Header";
import HeroSection from "./sections/hero-section/HeroSection";
import GetFinisherSection from "./sections/get-finisher/GetFinisherSection";
import IntroSection from "./sections/intro-section/IntroSection";

import "./HomePage.css";
import BuyNftSection from "./sections/buy-nft-section/BuyNftSection";

const HomePage = () => {
  return (
    <div className="homePageWrapper">
      <Banner />
      <Header />
      <HeroSection />
      <IntroSection />
      <GetFinisherSection />
      <BuyNftSection />
    </div>
  );
};

export default HomePage;
