import BoxText from "../../Helper/BoxText";
import { Jost } from "next/font/google";

// Fonts

const jostMd = Jost({ subsets: ["latin"], weight: "500" });
const jostSm = Jost({ subsets: ["latin"], weight: "300" });

export default function Testimonial() {
  return (
    <div className="flex flex-col w-[90%] justify-center items-center mx-auto mt-30 h-full">
      <div className="text-center md:space-y-3">
        <div className="flex text-center mx-auto">
          <BoxText>Testimonial</BoxText>
        </div>
      </div>
      <h1
        className={`text-white text-3xl sm:text-4xl md:text-[40px] font-semibold  ${jostMd.className}`}
      >
        Trusted by Many
      </h1>
      <p
        className={` text-sm md:text-[16px] text-[#F6E9E9]/60 mt-5 ${jostSm.className}`}
      >
        Turn your visitors into loyal clients with heartfelt testimonials.
      </p>
      <p
        className={` text-sm md:text-[16px] text-[#F6E9E9]/60 ${jostSm.className}`}
      >
        Use{" "}
        <a
          href="https://www.feedspace.io/"
          target="blank"
          className="text-[#1C54E3] "
        >
          Feedspace
        </a>{" "}
        to create a wall of love or testimonial widget for your website.
      </p>
      <div>
        <a
          href="https://www.feedspace.io/"
          className={`w-[326px] h-[47px] bg-[#F6E9E9] rounded-lg mt-10 font-semibold ${jostMd.className} underline underline-offset-2 cursor-pointer flex items-center justify-center`}
        >
          Capture testimonials with Feedspace
        </a>
      </div>
      {/* Grid part  */}
      <div className="grid grid-cols-3 grid-rows-3 gap-5 mt-15">
        <div className="bg-rose-300 w-[345] h-[214]">1</div>
        <div className="bg-white w-[345] h-[288]">2</div>
        <div className="bg-black w-[353] h-[235]">3</div>
        <div className="bg-black w-[345] h-[209]">4</div>
        <div className="bg-black w-[345] h-[260]">5</div>
        <div className="bg-black w-[353] h-[262]">6</div>
        <div className="bg-black w-[345] h-[317]">7</div>
        <div className="bg-black w-[345] h-[230]">8</div>
        <div className="bg-black w-[353] h-[266]">9</div>
      </div>
    </div>
  );
}
