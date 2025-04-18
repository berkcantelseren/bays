import Image from "next/image";
import BoxText from "../../Helper/BoxText";
import { Jost } from "next/font/google";

const jostMd = Jost({ subsets: ["latin"], weight: "500" });
const jostSm = Jost({ subsets: ["latin"], weight: "300" });

export default function HowItWorks() {
  return (
    <div className="flex bg-[#1E1E1E] w-[90%] justify-center items-center mx-auto h-full md:h-[542px] rounded-2xl border border-[#3D3D3F] mt-90 md:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
        {/* Grid Item 1 */}
        <div className="w-[460] h-[360] flex flex-col justify-start">
          <BoxText>How It Works Section</BoxText>
          <div className="">
            <h1
              className={`font-semibold text-[44px] text-white text-start  ${jostMd.className}`}
            >
              Simple, Yet Powerful
            </h1>
          </div>
          {/* List items  */}
          <div>
            <ol
              className={`list-decimal pl-5 space-y-2 mt-10 text-[16px] text-[#ADADAD] ${jostMd.className}`}
            >
              <li className="font-semibold mb-3">
                Sign Up:{" "}
                <span className="font-normal">
                  Create an account in just a few clicks.
                </span>
              </li>
              <li className="font-semibold mb-3">
                Customize:{" "}
                <span className="font-normal">
                  Tailor the platform to suit your team’s unique needs.
                </span>
              </li>
              <li className="font-semibold mb-3">
                Collaborate:{" "}
                <span className="font-normal">
                  Start managing tasks, tracking progress, and improving
                  efficiency.
                </span>
              </li>
            </ol>
          </div>
          {/* Button  */}
          <div>
            <button className="bg-[#F6E9E9] w-[145] h-[47] font-semibold text-[16px] rounded-lg mt-7 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
        {/* Grid Item 2 */}
        <div className="bg-[#1F1F1F] gradient-custom w-[516] h-[398] flex justify-center items-center align-center rounded-2xl border border-[#3D3D3F]">
          <Image
            src="images/step.svg"
            alt="step icon"
            width={450}
            height={400}
            className="text-gray-500 font-bold"
          />
        </div>
      </div>
    </div>
  );
}
