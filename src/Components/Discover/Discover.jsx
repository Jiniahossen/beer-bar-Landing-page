export function Titletext({ title1,title2,subtitle }) {
  return (
    <>
      <h1 className="text-6xl font-extrabold uppercase font-Bungee text-center">
        {title1} <br /> {title2}
      </h1>
      <p className="text-base mt-6 text-center font-cairo">
       {subtitle}
      </p>
    </>
  );
}

function Textbody() {
  return (
    <div className="p-20 bg-[#F9F9F9]">
      <h1 className="text-lg font-Bungee mb-4 font-extrabold">Biergut</h1>
      <h1 className="text-4xl font-Bungee font-extrabold">PREMIUM LIGHT</h1>
      <p className="text-base font-cairo mt-6">
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec
        sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id
        imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.
      </p>
      <div className="grid grid-cols-2 mt-16 gpa-6 ">
        <div className=" items-center mb-10 ps-6">
          <h1 className="text-lg font-Bungee font-extrabold">Extract</h1>
          <h1>11%</h1>
        </div>
        <div className=" items-center mb-10">
          <h1 className="text-lg font-Bungee font-extrabold">Alcohol</h1>
          <h1>4%</h1>
        </div>
        <div className=" items-center ps-6">
          <h1 className="text-lg font-Bungee font-extrabold">Gentain</h1>
          <h1>20IBU</h1>
        </div>
        <div className="f items-center">
          <h1 className="text-lg font-Bungee font-extrabold">Serving Temp</h1>
          <h1>6-9 Degree Celsius</h1>
        </div>
      </div>
    </div>
  );
}

export default function Discover() {
  return (
    <div className="mt-20 max-w-6xl mx-auto">
        <Titletext title1={"Discover Our"} title2={"New Flavors"} subtitle={"Curabitur arcu erat, accumsan id imperdiet et, port titor at sem. Donec sollici tudin molestie malesuada."}/>
      <div className="mt-20 flex  items-center">
        <div className="flex-1">
          <img
            className="h-[500px] pe-10"
            src="https://i.ibb.co/994bJQL/beer-light-1.png"
            alt=""
          />
        </div>
        <div className="flex-1">
          <Textbody />
        </div>
      </div>
      <div className=" flex  items-center">
        <div className="flex-1">
          <Textbody />
        </div>
        <div className="flex-1">
          <img
            className="h-[500px] ps-24"
            src="https://i.ibb.co/cLxtD54/beer-dark-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
