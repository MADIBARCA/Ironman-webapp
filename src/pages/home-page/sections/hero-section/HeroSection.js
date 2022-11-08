import { useSelector } from "react-redux";
import HeroSectionContent from "./components/HeroSectionContent";
import HeroSectionTitle from "./components/HeroSectionTitle";

import "./HeroSection.css";

const HeroSection = ({ homeRef }) => {
  const bannerVisible = useSelector((state) => state.banner);
  return (
    <div
      className={
        bannerVisible
          ? "heroSectionWrapperBannerVisible"
          : "heroSectionWrapperBannerDisabled"
      }
      ref={homeRef}
    >
      <HeroSectionContent />
      <HeroSectionTitle />
    </div>
  );
};

export default HeroSection;
