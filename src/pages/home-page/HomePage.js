import Banner from "../../layout/banner/Banner";
import Header from "../../layout/header/Header";
import HeroSection from "./sections/hero-section/HeroSection";
import GetFinisherSection from "./sections/get-finisher-section/GetFinisherSection";
import IntroSection from "./sections/intro-section/IntroSection";
import PossibilitiesSection from "./sections/possibilities-section/PossibilitiesSection";

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
<<<<<<< HEAD
      <BuyNftSection />
=======
      <PossibilitiesSection/>
>>>>>>> 75f3ac6d6a888ab70dcd65d0d40db9872838fd4a
    </div>
  );
};

export default HomePage;
