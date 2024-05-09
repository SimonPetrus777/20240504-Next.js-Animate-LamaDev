import Image from "next/image";

const Homepage = () => {
  return (
    <div className="flex h-full flex-col px-4 sm:px-8 md:px-12 lg:flex-row lg:px-20 xl:px-48">
      {/* Image Container */}
      <div className=" relative h-1/2 lg:h-full lg:w-1/2">
        <Image src="/hero.png" alt="" fill className=" object-contain" />
      </div>
      {/* Text Container */}
      <div className=" flex h-1/2 flex-col items-center justify-center gap-8 lg:h-full lg:w-1/2">
        {/* Title */}
        <h1 className=" text-4xl font-bold md:text-6xl">
          Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit
        </h1>
        {/* Desc */}
        <p className=" md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
          inventore dolor dolorem itaque accusantium repellendus quidem
          reiciendis fugiat quaerat blanditiis quo nam quos illo expedita a?
          Libero quisquam saepe vel!
        </p>
        <div className=" flex w-full gap-4">
          <button className=" rounded-lg bg-black p-4 text-white ring-1 ring-black">
            View My Work
          </button>
          <button className=" rounded-lg p-4 ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
