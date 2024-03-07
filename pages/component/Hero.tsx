import React from "react";
//import myLogo from "/mylogo.png";
import Image from "next/image";

function Hero() {
  return (
    <div className="mt-20 md:mt-[7rem] font-domine tracking-widest  ">
      <div className="max-w-[800px] mt-[40px] w-full h-[200px] md:h-[300px] mx-auto text-center flex flex-col justify-center items-center">
        <div className="flex  flex-col items-center justify-center">
          <div className="relative w-[130px] md:w-[200px] z-1">
            <Image
              src="/mylogo.png"
              width={200}
              height={200}
              alt="Logo"
              className="object-cover"
            />
          </div>
          <section className="flex flex-col gap-2 mt-5 text-base md:text-[1.55rem] tracking-[0.4rem] text-center ">
            <p>Commission</p>
            <p className="text-xs text-[#BBAB9D]">Updated 6.3.2024</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Hero;
