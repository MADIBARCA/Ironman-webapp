import HeroSectionContent from "./components/HeroSectionContent";
import HeroSectionTitle from "./components/HeroSectionTitle";

import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="heroSectionWrapper">
      <HeroSectionContent />
      <HeroSectionTitle />
    </div>
  );
};

export default HeroSection;
