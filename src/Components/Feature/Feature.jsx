import { Titletext } from "../Discover/Discover";

function Iconsection({ img, text }) {
  return (
    <div className="flex gap-4 items-center mb-20">
      <img src={img} alt="" className="h-16 w-16" />
      <p>{text}</p>
    </div>
  );
}

function IconLine() {
  return (
    <div className="flex gap-20 mt-24 mb-10">
      <Iconsection
        img={"https://i.ibb.co/4ZBSpV1/ICON-FINDER-1-4.png"}
        text={"Vestibulum ac diam sit amet quam vehicula elementum ."}
      />
      <Iconsection
        img={"https://i.ibb.co/9t45R6R/ICON-FINDER-1-2.png"}
        text={"Vestibulum ac diam sit amet quam vehicula elementum ."}
      />
      <Iconsection
        img={"https://i.ibb.co/MDN5k0R/ICON-FINDER-1-1.png"}
        text={"Vestibulum ac diam sit amet quam vehicula elementum ."}
      />
    </div>
  );
}

export default function Feature() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mt-20 mb-10">
        <Titletext
          title1={"Features &"}
          title2={"Ingredients"}
          subtitle={
            "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada."
          }
        />
      </div>
      <div className="flex items-center justify-between mt-20 mb-20">
        <div className="flex-1">
          <img
            src="https://i.ibb.co/SKgs6Pb/beer-features-1.png"
            alt=""
            className="h-[600px]"
          />
        </div>
        <div className="flex-1">
          <Iconsection
            img={"https://i.ibb.co/kDkbqGP/ICON-FINDER-1-5.png"}
            text={
              "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit."
            }
          />
          <Iconsection
            img={"https://i.ibb.co/991NsFK/ICON-FINDER-1-3.png"}
            text={
              "Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui."
            }
          />
          <Iconsection
            img={"https://i.ibb.co/ZJ0xXbh/iconfinder-Seed-7609583.png"}
            text={
              "Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat."
            }
          />
        </div>
      </div>
      <IconLine />
    </div>
  );
}
