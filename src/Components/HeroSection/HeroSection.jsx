import Button from "../Button/Button";

const HeroSection = () => {
  return (
    <div className="flex items-center px-32 py-14 bg-[#f3c242]">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mt-4 font-Bungee text-black uppercase">
          Beirgut premium beer
        </h1>
        <h1 className="text-7xl font-extrabold mt-4 font-Bungee text-black uppercase">
          introducing <br />
          new premium flavours
        </h1>
        <p className="font-cairo text-base mt-6">
          Beer is one of the oldest alcoholic drinks in the world, the most
          widely consumed, and the third most popular drink after water and tea.
        </p>
        <div className="flex gap-4 items-center mt-14 ">
          <Button
            text={"Host a party"}
            textColor={"#ffff"}
            bgColor={"#4c4848"}
            hoverColor={"#000000"}
          />
          <Button
            text={"restock your pub"}
            textColor={"#000000"}
            bgColor={"#ffff"}
            hoverColor={"#000000"}
          />
        </div>
      </div>
      <div className="flex-1">
        <img
          className="h-[550px] ps-32"
          src="https://i.ibb.co/BCbdYVX/hero-beer-bottles-3.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
