import Image from "next/image";
import React from "react";

const Herosec = () => {
  return (
    <div className="container relative flex justify-center items-center pt-10">
      <Image
        className="w-[30%] h-[20%]"
        src="/banner-img.png"
        width={1500}
        height={900}
        alt="hero"
      />
      {/* <div className="hidden sm:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-transparent w-[250px] h-[200px] space-y-3 lg:h-[270px] lg:space-y-6 xl:w-[400px] xl:h-[300px] p-6 xl:space-y-8">
        <h2 className="text-[22px] lg:text-[30px] xl:text-[40px] leading-tight text-slate-500">New Headphone For You Buy More</h2>
        <p className="text-gray-600 text-[14px] xl:text-[16px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button className="bg-[#333] uppercase text-white text-[12px] lg:text-[16px] py-2 xl:py-4 px-8 rounded-md hover:bg-accent">Shop Now</button>
      </div> */}
{/* 
      <div className="hidden sm:block fixed top-[50%] right-0 translate-y-[-50%] bg-transparent w-[250px] h-[200px] space-y-3 lg:h-[270px] lg:space-y-6 xl:w-[400px] xl:h-[300px] p-6 xl:space-y-8 animate__animated animate__fadeInRight">
        <h2 className="text-[22px] lg:text-[30px] xl:text-[40px] leading-tight text-slate-500">
          New Headphone For You Buy More
        </h2>
        <p className="text-gray-600 text-[14px] xl:text-[16px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <button className="bg-[#333] uppercase text-white text-[12px] lg:text-[16px] py-2 xl:py-4 px-8 rounded-md hover:bg-accent">
          Shop Now
        </button>
      </div> */}
    </div>
  );
};

export default Herosec;
