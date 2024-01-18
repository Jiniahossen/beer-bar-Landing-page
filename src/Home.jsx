import Discover from "./Components/Discover/Discover";
import Feature from "./Components/Feature/Feature";
import HeroSection from "./Components/HeroSection/HeroSection";
import YearSection from "./Components/YearSection/YearSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="bg-[#FBFBFB]">
        <YearSection />
      </div>
      <Discover/>
      <Feature/>
    </div>
  );
};

export default Home;
