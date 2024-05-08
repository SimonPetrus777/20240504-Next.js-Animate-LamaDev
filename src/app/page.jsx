import Image from "next/image";

const Homepage = () => {
  return (
    <div className="flex h-full flex-col">
      {/* Image Container */}
      <div className=" relative h-1/2">
        <Image src="/hero.png" alt="" fill className=" object-contain" />
      </div>
      {/* Text Container */}
      <div className=" h-1/2">Text</div>
    </div>
  );
};

export default Homepage;
