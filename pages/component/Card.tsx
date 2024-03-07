import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card() {
  return (
    <div className="w-full mt-[3rem] px-4 font-Kanit text-center flex flex-col items-center ">
      <Head>
        <title>Mazuya</title>
      </Head>

      <div className="w-[75%] mx-auto grid lg:grid-cols-3 gap-4">
        <Link href="/about">
          <div className="w-full cursor-pointer   flex flex-col p-4 my-4 hover:scale-105 duration-300 border-[1px] text-white bg-[#8B6A2F] border-[#8B6A2F]">
            วิธีสั่งคอมมิชชัน/ช่องทางการชำระเงิน
          </div>
        </Link>

        <Link href="/policy">
          <div className="w-full cursor-pointer   flex flex-col p-4 my-4  hover:scale-105 duration-300 border-[1px] border-[#8B6A2F]">
            ข้อตกลง
          </div>
        </Link>

        <Link href="https://docs.google.com/spreadsheets/d/1mkQnTM88CZNUxoG7dYwrt045nu4ZsT2Xu02SMts_jPc/edit?usp=sharing">
          <div className="w-full cursor-pointer   flex flex-col p-4 my-4  hover:scale-105 duration-300 border-[1px] border-[#8B6A2F]">
            คิว
          </div>
        </Link>
      </div>

      <div className="w-[75%] flex flex-col items-center">
        <p className="w-[70%] font-extralight mt-5 lg:text-base text-xs">
          สำคัญ : ใช้วิธีโอนเงินเต็มจำนวนถึงจะรับจองคิวค่ะ หากยอดเกิน 1000
          สามารถแบ่งจ่ายเป็นมัดจำได้ตามตกลง
          นอกจากนี้ขอความกรุณาอ่านรายละเอียดวิธีการสั่งคอมมิชชันได้ครบถ้วน
          ส่วนตัวเป็นคนทำงานค่อนข้างช้า(แก้ได้เรื่อยๆ+อัพเดทตลอด)
          ถ้ารอไม่ไหวสามารถคืนเงินเต็มจำนวนได้ค่ะ
        </p>
        <div className="w-full flex lg:flex-row flex-col">
          <Image
            src="/cmsHeadshot.png"
            width={500}
            height={500}
            alt="/"
            className="overflow-hidden "
          />
          <section className=" flex flex-col items-center lg:items-start justify-center lg:justify-start font-domine lg:mt-20 ">
            <h2 className="uppercase text-2xl lg:text-3xl tracking-widest ">
              Bustshot
            </h2>
            <section className="flex -mt-3">
              <p className="lg:text-base text-xs mt-3 lg:mt-5">Donate</p>
              <span className="text-[2.5rem] lg:text-[4rem] italic text-[#CBA35A]">
                699+
              </span>
            </section>

            <ul className="font-Kanit text-start font-extralight lg:text-base text-xs">
              <li>- สเกลหัวถึงไหปาร้า</li>
              <li>- แถมพื้นหลังเป็นดอกไม้ (หรืออื่นๆที่เข้ากับตัวละคร)</li>
              <li>- รีเควสพื้นหลังเฉพาะเจาะจงหรือเพิ่มรายละเอียด/พร๊อพ +100</li>
              <li className="font-light mt-3">
                โดนเนทเกิน 1100+ ปลดเป็นสเกลภาพ HalfBody
                <br></br>(รีเควสพื้นหลังเฉพาะเจาะจงเพิ่ม +200)
              </li>
              <li className="text-red-600">*เชิงพาณิชย์ ราคา *2</li>
              <p className="mt-10 mb-5">ตัวอย่างผลงานเพิ่มเติม :</p>
            </ul>
          </section>
        </div>
        <div className="flex lg:flex-row flex-col -mt-5 items-center justify-center border-b-[1px] border-[#8B6A2F] pb-10">
          <Image
            src="/cms2_1.png"
            width={500}
            height={500}
            alt="/"
            className="overflow-hidden "
          />
          <Image
            src="/cms3_1.png"
            width={500}
            height={500}
            alt="/"
            className="overflow-hidden -ml-5"
          />
          <Image
            src="/cms4_1.png"
            width={500}
            height={500}
            alt="/"
            className="overflow-hidden -ml-5 "
          />
        </div>

        {/* Adopt */}

        <div className="mt-10 w-full flex lg:flex-row flex-col mb-10 border-b-[1px] border-[#8B6A2F]  pb-10">
          <Image
            src="/cms5.png"
            width={500}
            height={1000}
            alt="/"
            className="overflow-hidden "
          />
          <section className=" flex flex-col items-center lg:items-start justify-center lg:justify-start font-domine lg:mt-20 ">
            <h2 className="uppercase text-2xl lg:text-3xl tracking-widest ">
              Custom Adoptable
            </h2>
            <section className="flex -mt-3">
              <p className="lg:text-base text-xs mt-3 lg:mt-5">Donate</p>
              <span className="text-[2.5rem] lg:text-[4rem] italic text-[#CBA35A]">
                1999+
              </span>
            </section>

            <ul className="font-Kanit text-start font-extralight lg:text-base text-xs">
              <li>- ดีไซน์เต็มตัวละครจากบรีฟ</li>
              <li>- แถมพื้นหลังอย่างง่าย (เช่น แพลตฟอร์ม อาวุธขนาดเล็ก)</li>
              <li>
                - รีเควสพื้นหลังเฉพาะเจาะจงหรือเพิ่มรายละเอียด/พร๊อพใหญ่
                แบบรูปตัวอย่าง +1000
              </li>
              <li>- รับ Character sheet เพิ่ม +1000</li>
              <li className="font-light mt-3">
                โดนเนทเกิน 3000+ แถมภาพ Bustshot
              </li>
              <li className="font-light">
                โดนเนทเกิน 4200+ แถม skin (ตัวละครเดิม ดีไซน์ชุดใหม่)
              </li>
              <li className="text-red-600">
                *รับผ่อนชำระ/มัดจำ ใช้เวลา 1-2 เดือน+/ตัว
              </li>
              <li className="text-red-600">
                **อ่านเงื่อนไข Adoptable ที่หน้า ข้อตกลง/Policy
              </li>
            </ul>
          </section>
        </div>

        <div className="w-[full] lg:w-[75%] text-xs md:text-base">
          {/* <table className="w-full text-start font-extralight border-collapse  border border-[#8B6A2F]">
            <tr className="font-light text-center bg-[#8B6A2F] text-white">
              <td>แนวที่รับ</td>
              <td>แนวที่ไม่รับ</td>
            </tr>
            <tr>
              <td className="border border-[#8B6A2F] py-1 px-2">
                - ออกแบบตัวละคร ช/ญ
              </td>
              <td className="border border-[#8B6A2F] py-1 px-2">
                - Furry/ หุ่นยนต์/ NSFW (Soon)/ เลือดสาด
              </td>
            </tr>
            <tr>
              <td className="border border-[#8B6A2F] py-1 px-2">
                - Personal use/ commercial use
              </td>
              <td className="border border-[#8B6A2F] py-1 px-2">
                - งานปกนิยาย (Soon)
              </td>
            </tr>
            <tr>
              <td className="border border-[#8B6A2F] py-1 px-2">
                - งานสเกลอื่นๆ เช่น Chibi, Full cg (ยังไม่มีตัวอย่าง)
              </td>
              <td className="border border-[#8B6A2F] py-1 px-2">
                - งานพื้นหลังรายละเอียดจำนวนมาก
              </td>
            </tr>
            <tr>
              <td className="border border-[#8B6A2F] py-1 px-2">
                - Comic (ยังไม่มีตัวอย่าง)
              </td>
              <td className="border border-[#8B6A2F] py-1 px-2">
                - อนิเมชัน, งานแยกส่วนVtuber (Soon)
              </td>
            </tr>
          </table> */}

          <div className="w-full">
            <div className="w-full flex justify-around font-light text-center bg-[#8B6A2F] text-white py-1">
              <p className="py-1 px-2">แนวที่รับ</p>
              <p className="py-1 px-2">แนวที่ไม่รับ</p>
            </div>
            <div className="border border-[#8B6A2F] text-start lg:px-5 font-extralight">
              <div className="flex">
                <div className="w-1/2 border-r border-[#8B6A2F] py-1 px-2">
                  - ออกแบบตัวละคร
                </div>
                <div className="w-1/2 py-1 px-2">
                  - Furry/ หุ่นยนต์/ NSFW (Soon)/ เลือดสาด
                </div>
              </div>
              <div className="flex">
                <div className="w-1/2 border-r border-[#8B6A2F] py-1 px-2">
                  - Personal use/ commercial use
                </div>
                <div className="w-1/2 py-1 px-2">- งานปกนิยาย (Soon)</div>
              </div>
              <div className="flex">
                <div className="w-1/2 border-r border-[#8B6A2F] py-1 px-2">
                  - งานสเกลอื่นๆ เช่น Chibi, Full cg (ยังไม่มีตัวอย่าง)
                </div>
                <div className="w-1/2 py-1 px-2">
                  - งานพื้นหลังรายละเอียดจำนวนมาก
                </div>
              </div>
              <div className="flex">
                <div className="w-1/2 border-r border-[#8B6A2F] py-1 px-2">
                  - Comic (ยังไม่มีตัวอย่าง)
                </div>
                <div className="w-1/2 py-1 px-2">
                  - อนิเมชัน, งานแยกส่วนVtuber (Soon)
                </div>
              </div>
            </div>
          </div>

          <p className="text-start font-light mt-5 lg:text-base text-xs mb-10">
            แนวที่ถนัด : วาดได้ทั้งผู้หญิงและผู้ชาย, แฟนตาซี, ราชวงศ์,
            ตัวละครรายละเอียดเยอะ, งานภาพสีสด
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
