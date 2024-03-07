import Link from "next/link";
import React from "react";

function Newslatter() {
  return (
    <div className="w-full font-Kanit lg:mt-5 font-extralight">
      <div className="w-[70%] mx-auto border-t-[1px] border-b-[1px] border-[#8B6A2F] flex">
        <div className="flex flex-col lg:flex-row w-full h-[360px] lg:h-[200px] ">
          <div className="flex flex-col items-center justify-center border-b-[1px] lg:border-r-[1px] lg:border-b-[0px] border-[#8B6A2F] h-full w-full lg:w-[40%] ">
            <p className=" text-3xl lg:text-4xl italic">ลูกค้าเก่า ลด 10%</p>
            <p className="text-xs lg:text-base mt-3">
              แคปหลักฐานแชร์โพสต์/รีทวิตเป็น Public ลดอีก 5 %
            </p>
          </div>

          <div className="h-full w-[100%] lg:w-[60%] flex flex-col items-center justify-center">
            <p className=" font-domine italic text-xl lg:text-4xl text-center">
              Commission
              <span className="hidden lg:inline"> April - June 24</span>
              <span className="lg:hidden block">April - June 24</span>
            </p>
            <section className="mt-3 flex flex-col lg:flex-row items-center gap-5">
              <p className="font-domine italic text-2xl lg:text-4xl text-[#CBA35A]">
                OPEN
              </p>
              <p className="text-xs lg:text-base">
                ฝากแท็ก : ติดต่อหลังไมค์ หรือ
                <Link
                  href={"https://forms.gle/ETcWifdihykYo46n8"}
                  className="px-3 underline"
                >
                  กรอกฟอร์ม
                </Link>
                ได้เลยจ้า
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newslatter;
