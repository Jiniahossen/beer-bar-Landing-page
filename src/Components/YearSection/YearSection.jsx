import Button from "../Button/Button";

const YearSection = () => {
  return (
    <div className="flex gap-20 px-32 py-20 my-32">
      <div className="flex-1">
        <img className=" bg-[#f3c242]" src="https://i.ibb.co/N18mQNX/brand-history.png" alt="" />
      </div>
      <div className="flex-1">
        <h1 className="text-5xl font-extrabold  font-Bungee text-black uppercase">
          Leading Beer Brewery, Since 1974!
        </h1>
        <p className="text-base mt-6 font-cairo ">
          Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
          Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.
          Mauris blandit aliquet elit, eget tincidunt nibh. <br /> <br /> Sed
          porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
          ullamcorper sit amet ligula. Proin eget tortor.
        </p>
        <div className="mt-10">
          <Button
            text={"Host a party"}
            textColor={"#ffff"}
            bgColor={"#4c4848"}
            hoverColor={"#000000"}
          />
        </div>
      </div>
    </div>
  );
};

export default YearSection;
