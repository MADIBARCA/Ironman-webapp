import Banner from "../../layout/banner/Banner";
import Header from "../../layout/header/Header";
import HeroSection from "./sections/hero-section/HeroSection";
import GetFinisherSection from "./sections/get-finisher-section/GetFinisherSection";
import IntroSection from "./sections/intro-section/IntroSection";
import PossibilitiesSection from "./sections/possibilities-section/PossibilitiesSection";

import "./HomePage.css";
import JoinSection from "./sections/join-section/JoinSection";
import PartnersSection from "./sections/partners-section/PartnersSection";


const HomePage = () => {
  return (
    <div className="homePageWrapper">
      <Banner />
      <Header />
      <HeroSection />
      <IntroSection />
      <GetFinisherSection />
      <PossibilitiesSection/>
      <JoinSection/>
      <PartnersSection/>
    </div>
  );
};

export default HomePage;
