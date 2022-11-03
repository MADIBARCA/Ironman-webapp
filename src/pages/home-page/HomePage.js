import Banner from "../../layout/banner/Banner";
import Header from "../../layout/header/Header";
import HeroSection from "./components/hero-section/HeroSection";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homePageWrapper">
      <Banner />
      <Header />
      <HeroSection />
    </div>
  );
};

export default HomePage;
