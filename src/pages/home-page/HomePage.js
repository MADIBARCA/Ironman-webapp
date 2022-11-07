import Banner from "../../layout/banner/Banner";
import Header from "../../layout/header/Header";
import HeroSection from "./sections/hero-section/HeroSection";
import GetFinisherSection from "./sections/get-finisher-section/GetFinisherSection";
import IntroSection from "./sections/intro-section/IntroSection";
import PossibilitiesSection from "./sections/possibilities-section/PossibilitiesSection";
import JoinSection from "./sections/join-section/JoinSection";
import PartnersSection from "./sections/partners-section/PartnersSection";
import BuyNftSection from "./sections/buy-nft-section/BuyNftSection";
import Footer from "../../layout/footer/Footer";

import "./HomePage.css";
import { useRef } from "react";

const HomePage = () => {
  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const contactRef = useRef(null);
  const refs = {
    homeRef,
    featuresRef,
    contactRef,
  }; 

  const scrollHandler = (ref) => {
    const headerHeight = 0;
    let dims = ref.current.getBoundingClientRect();
    window.scrollTo(window.scrollX, dims.top - headerHeight + window.scrollY);
    dims = null;
  };

  return (
    <div className="homePageWrapper">
      <Banner />
      <Header refs={refs} scrollHandler={scrollHandler} />
      <HeroSection homeRef={refs.homeRef} />
      <IntroSection />
      <GetFinisherSection />
      <PossibilitiesSection featuresRef={featuresRef} />
      <BuyNftSection />
      <JoinSection />
      <PartnersSection />
      <Footer contactRef={contactRef} />
    </div>
  );
};

export default HomePage;
