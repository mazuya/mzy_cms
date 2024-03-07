import Head from "next/head";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div className=" flex flex-col justify-center items-center font-domine tracking-widest text-[#8B6A2F] ">
      <Head>
        <title>Mazuya | About</title>
      </Head>
      <div className="mb-10">
        <div className="max-w-[80%] lg:max-w-[60%] mx-auto flex lg:flex-row flex-col items-center justify-center">
          <div className="flex lg:flex-row flex-col gap-5">
            <Image
              src="/rafayel.png"
              width={400}
              height={700}
              alt="rafyel"
              className="object-cover -mt-10 lg:-mt-20"
            />

            <div className="lg:w-[800px] lg:pt-20 lg:mt-0 -mt-10 flex flex-col ">
              <h1 className="text-2xl lg:text-3xl text-center lg:text-start">
                How to order
              </h1>
              <p className="font-Kanit font-extralight">
                สนใจคอมมิชชันจากในกลุ่ม Commission TH , X(Twitter) หรือ
                ติดต่อคอมมิชชันหลังไมค์นอกรอบ{" "}
              </p>
              <ul className="mt-3 font-Kanit font-extralight ">
                <li>
                  <section className="flex gap-3">
                    <div className="p-3 w-[20px] h-[20px] border border-[#8B6A2F] rounded-full flex justify-center items-center">
                      1
                    </div>
                    <p className="font-light">เลือกสเกลที่สนใจ</p>
                  </section>
                  <p>
                    รอบคิวปกติ: พิมพ์ใต้คอมเม้นต์จอง
                    <span className="font-medium">จอง, จ, f</span>
                    <br></br>นอกรอบ: ส่งบรีฟมาประเมินราคา
                  </p>
                </li>

                <li>
                  <section className="flex gap-3 mt-2">
                    <div className=" p-3 w-[20px] h-[20px] border border-[#8B6A2F] rounded-full flex justify-center items-center">
                      2
                    </div>
                    <p className="font-light">
                      โอนเงินเต็มจำนวนหลังจากรับจอง ภายใน 2 วัน
                    </p>
                  </section>
                  <p>
                    <span>
                      {" "}
                      ยอดเยอะกว่า 1000 สามารถผ่อนชำระ/มัดจำ ตามตกลง ถ้าเกิน 2
                      วันขออนุญาตรันไปคิวถัดไปนะคะ
                    </span>
                  </p>
                </li>

                <li>
                  <section className="flex gap-3 mt-2">
                    <div className=" p-3 w-[20px] h-[20px] border border-[#8B6A2F] rounded-full flex justify-center items-center">
                      3
                    </div>
                    <p className="font-light">ส่งบรีฟ/คุยรายละเอียดเพิ่มเติม</p>
                  </section>
                  <span>แนะนำว่าส่งเป็น Google doc link</span>
                </li>

                <li>
                  <section className="flex gap-3 mt-2">
                    <div className=" p-3 w-[20px] h-[20px] border border-[#8B6A2F] rounded-full flex justify-center items-center">
                      4
                    </div>
                    <p className="font-light">นั่งสวยๆ รออัพเดทงาน/รับงาน</p>
                  </section>
                  <p>
                    <span>ส่งรูปเต็มผ่านทาง email/เว็บฝากรูป</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="tracking-[0.2rem] border-t border-[#8B6A2F] w-[90%] lg:w-[ุ80%] mb-20">
        <h1 className="mt-10 text-2xl lg:text-3xl text-center ">Payments</h1>

        <div className="w-[100%] mx-auto border-t-[1px] justify-center flex text-xs lg:text-base">
          <div className="flex flex-col lg:flex-row w-[80%] h-[300px] lg:h-[160px] mt-6 ">
            <div className="pb-10 lg:pb-0 flex flex-col items-center justify-center border-b-[1px] lg:border-r-[1px] lg:border-b-[0px] border-[#8B6A2F] h-full w-full lg:w-[50%] ">
              <section className="flex gap-3">
                <Image
                  src="/scb.png"
                  width={100}
                  height={100}
                  alt="/"
                  className="overflow-hidden "
                />
                <Image
                  src="/kbank.png"
                  width={100}
                  height={100}
                  alt="/"
                  className="overflow-hidden "
                />
              </section>
              <p>Mobile Banking/ QR code</p>
              <p className="font-Kanit font-extralight">
                (โอนแล้วส่งสลิปมาด้วยนะงัฟฟ)
              </p>
            </div>

            <div className="h-full flex flex-col items-center justify-center mt-10 lg:mt-0 lg:w-[400px] gap-5">
              <section>
                <Image
                  src="/true.png"
                  width={100}
                  height={100}
                  alt="/"
                  className="overflow-hidden "
                />
              </section>
              <p>True money (+20)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
