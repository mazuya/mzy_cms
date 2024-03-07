import React from "react";
//import Profile from "/profile.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

function Analytics() {
  return (
    <div className="mt-5 lg:mt-[7.5rem] w-full py-16 px-4 flex justify-center items-center font-domine tracking-widest">
      <div className="max-w-[80%] lg:max-w-[60%] mx-auto flex lg:flex-row flex-col items-center justify-center">
        <div className="relative w-[120px] lg:w-[200px] ">
          <Image
            src="/profile.jpg"
            width={130}
            height={130}
            alt="/"
            className="w-full object-cover overflow-hidden rounded-full border-2"
          />
        </div>

        <div className="flex justify-center flex-col lg:ml-10 mt-5 lg:mt-0 text-center lg:text-start">
          <p className="text-xs  ">About me.</p>
          <h1 className="lg:text-4xl sm:text-3xl text-2xl font-domine font-bold">
            Mazuya
          </h1>
          <p className="mt-3 text-[0.6rem] lg:text-[0.83rem]  text-[#BBAB9D]">
            22,Fern TH | EN Feel free to contact me :D
          </p>
          <p className="text-xs lg:text-[0.83rem] text-[#BBAB9D]">
            email : rabbitplatinum1@gmail.com
          </p>
          <section className="flex flex-col gap-2 mt-5 text-xs lg:text-[0.8rem]">
            <Link href="https://www.facebook.com/profile.php?id=100017209328414">
              <p className="flex items-center gap-3 border-[1px] px-5 py-2 rounded-2xl border-[#8B6A2F] hover:cursor-pointer hover:bg-[#EAE4DB] duration-200">
                <FaFacebook /> Thunpitcha Rattanatamjaroen
              </p>
            </Link>

            <Link href="https://twitter.com/mzy_junior">
              <p className="flex items-center gap-3 border-[1px] px-5 py-2 rounded-2xl border-[#8B6A2F] hover:cursor-pointer hover:bg-[#EAE4DB] duration-200">
                <FaXTwitter /> @mzy_junior
              </p>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
