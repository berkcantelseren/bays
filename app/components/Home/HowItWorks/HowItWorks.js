import Image from "next/image";

export default function HowItWorks() {
  return (
    <div className="flex bg-[#1E1E1E] w-[90%] justify-center items-center mx-auto h-[542px]">
      <div className="grid grid-cols-2 gap-50">
        <div>1</div>
        <div className="bg-[#1F1F1F] gradient-custom w-[516] h-[398] flex justify-center items-center align-center">
          <Image
            src="images/step.svg"
            alt="step icon"
            width={350}
            height={300}
            className="text-gray-500 font-bold"
          />
        </div>
      </div>
    </div>
  );
}
