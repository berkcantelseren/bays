import Image from "next/image";
import BoxText from "../../Helper/BoxText";
import { Jost } from "next/font/google";
import { useState } from "react";

const jostMd = Jost({ subsets: ["latin"], weight: "500" });

export default function Pricing() {
  const [activePricing, setActivePricing] = useState("Monthly");

  const Pricing = [
    {
      name: "Monthly",
      price: "$18",
      time: "/m",
    },
    {
      name: "Annualy",
      price: "$279",
      time: "/y",
    },
  ];

  return (
    <div className="flex flex-col w-[90%] justify-center items-center mx-auto mt-40 h-full">
      <div className="text-center md:space-y-3">
        <div className="flex text-center mx-auto">
          <BoxText>Pricing</BoxText>
        </div>
      </div>
      <h1
        className={`text-white text-3xl sm:text-4xl md:text-[40px] font-semibold  ${jostMd.className}`}
      >
        Simple and Transparent Pricing
      </h1>
      {/* 3 Grid Items */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mt-10 p-5 rounded-xl">
        {/* Grid 1 */}
        <div className="w-[408] h-[537] bg-[#1E1E1E] rounded-2xl border border-[#3D3D3F] gradient-custom">
          <div className="justify-center text-center mt-10 relative">
            <h1
              className={`font-semibold text-[23px] text-[#ADADAD] ${jostMd.className}`}
            >
              Standard
            </h1>
            <Image
              src="/images/discount20.svg"
              alt="Discount %20"
              width={48}
              height={22}
              className="absolute bottom-3 right-7"
            />
          </div>
          <div className="text-center justify-center mt-15 flex flex-row">
            <h2
              className={`font-semibold text-[44px] text-[#F6E9E9] ${jostMd.className}`}
            >
              $18
            </h2>
            <h5
              className={`font-semibold text-[23px] text-[#F6E9E9] mt-6 ml-1 ${jostMd.className}`}
            >
              .99
            </h5>
            <p
              className={`font-normal text-[16px] text-[#ADADAD] mt-8 ml-1 ${jostMd.className}`}
            >
              /m
            </p>
          </div>
          <div className="w-[264] h-[39] bg-[#101010] rounded-3xl border border-[#2F2F2F] flex justify-evenly items-center mx-auto mt-10">
            <button
              className={`font-semibold text-[#ADADAD]/25 text-[14px] cursor-pointer ${jostMd.className}`}
            >
              Monthly
            </button>
            <button
              className={`font-semibold text-[#F6E9E9] text-[14px] cursor-pointer ${jostMd.className}`}
            >
              Annualy
            </button>
          </div>
        </div>
        {/* Grid 2 */}
        <div className="w-[408] h-[537] bg-[#1E1E1E] rounded-2xl border border-[#3D3D3F] gradient-custom">
          <div className="justify-center text-center mt-10 relative">
            <h1
              className={`font-semibold text-[23px] text-[#ADADAD] ${jostMd.className}`}
            >
              Pro Plan
            </h1>
            <Image
              src="/images/discount15.svg"
              alt="Discount %15"
              width={48}
              height={22}
              className="absolute bottom-3 right-7"
            />
          </div>
          <div className="text-center justify-center mt-15 flex flex-row">
            <h2
              className={`font-semibold text-[44px] text-[#F6E9E9] ${jostMd.className}`}
            >
              $25
            </h2>
            <h5
              className={`font-semibold text-[23px] text-[#F6E9E9] mt-6 ml-1 ${jostMd.className}`}
            >
              .99
            </h5>
            <p
              className={`font-normal text-[16px] text-[#ADADAD] mt-8 ml-1 ${jostMd.className}`}
            >
              /m
            </p>
          </div>
        </div>
        {/* Grid 3 */}
        <div className="w-[408] h-[537] bg-[#1E1E1E] rounded-2xl border border-[#3D3D3F] gradient-custom">
          <div className="justify-center text-center mt-10 relative">
            <h1
              className={`font-semibold text-[23px] text-[#ADADAD] ${jostMd.className}`}
            >
              Enterprise
            </h1>
            <Image
              src="/images/discount30.svg"
              alt="Discount %30"
              width={48}
              height={22}
              className="absolute bottom-3 right-7"
            />
          </div>
          <div className="text-center justify-center mt-15 flex flex-row">
            <h2
              className={`font-semibold text-[44px] text-[#F6E9E9] ${jostMd.className}`}
            >
              $49
            </h2>
            <h5
              className={`font-semibold text-[23px] text-[#F6E9E9] mt-6 ml-1 ${jostMd.className}`}
            >
              .99
            </h5>
            <p
              className={`font-normal text-[16px] text-[#ADADAD] mt-8 ml-1 ${jostMd.className}`}
            >
              /m
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
