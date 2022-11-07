import HeroSectionContent from "./components/HeroSectionContent";
import HeroSectionTitle from "./components/HeroSectionTitle";

import "./HeroSection.css";

const HeroSection = ({ homeRef }) => {
  return (
    <div className="heroSectionWrapper" ref={homeRef}>
      <HeroSectionContent /> 
      <HeroSectionTitle />
    </div>
  );
};

export default HeroSection;
