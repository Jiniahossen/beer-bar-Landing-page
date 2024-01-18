import Discover from "./Components/Discover/Discover";
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
    </div>
  );
};

export default Home;
