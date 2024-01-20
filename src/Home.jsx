import Discover from "./Components/Discover/Discover";
import Feature from "./Components/Feature/Feature";
import Flavoure from "./Components/Flavoure/Falvoure";
import HeroSection from "./Components/HeroSection/HeroSection";
import YearSection from "./Components/YearSection/YearSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="bg-[#F9F9F9]">
        <YearSection />
      </div>
      <Discover/>
      <Feature/>
      <Flavoure/>
    </div>
  );
};

export default Home;
