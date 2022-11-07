import Banner from "../../layout/banner/Banner";
import Header from "../../layout/header/Header";
import HeroSection from "./sections/hero-section/HeroSection";
import GetFinisherSection from "./sections/get-finisher-section/GetFinisherSection";
import IntroSection from "./sections/intro-section/IntroSection";
import PossibilitiesSection from "./sections/possibilities-section/PossibilitiesSection";
import JoinSection from "./sections/join-section/JoinSection";
import PartnersSection from "./sections/partners-section/PartnersSection";
import BuyNftSection from "./sections/buy-nft-section/BuyNftSection";

import "./HomePage.css";


const HomePage = () => {
  return (
    <div className="homePageWrapper">
      <Banner />
      <Header />
      <HeroSection />
      <IntroSection />
      <GetFinisherSection />
<<<<<<< HEAD
      <PossibilitiesSection />
      <BuyNftSection />
=======
      <PossibilitiesSection/>
      <BuyNftSection />
      <JoinSection/>
      <PartnersSection/>
>>>>>>> 2d77cfa42cda9b9760a1b76e3c099a8ddd7a7953
    </div>
  );
};

export default HomePage;
