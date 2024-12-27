import Image from "next/image";

export default function Explore() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-2 mt-32 md:mt-20 p-4 lg:p-8 relative">
      
      {/* Left Text Section */}
      <div className="hidden lg:block absolute left-0 text-xl top-1/2 -translate-y-1/2 -rotate-90 font-semibold text-black">
        <span>EXPLORE NEW AND POPULAR STYLES</span>
      </div>

      {/* Left Image */}
      <div className="w-full h-[300px] lg:w-[470px] lg:h-[390px] lg:ml-4 flex items-center justify-center mb-6 lg:mb-0">
        <div className="relative w-full h-full lg:w-full lg:h-full">
          <Image
            src="/images/exp1.png"
            alt="Orange Chair"
            className="w-full h-full"
          ></Image>
        </div>
      </div>

      {/* Right Images */}
      <div className="w-full md:h-auto lg:w-[500px] lg:h-[400px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:ml-2">
        <div className="flex justify-center items-center">
          <Image
            src="/images/exp2.png"
            alt="Chair 1"
            className="object-cover w-full h-full max-w-full max-h-48"
          ></Image>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/images/exp3.png"
            alt="Chair 2"
            className="object-cover w-full h-full max-w-full max-h-48"
          ></Image>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/images/exp4.png"
            alt="Chair 3"
            className="object-cover w-full h-full max-w-full max-h-48"
          ></Image>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/images/exp3.png"
            alt="Chair 4"
            className="object-cover w-full h-full max-w-full max-h-48"
          ></Image>
        </div>
      </div>
    </div>
  );
}
