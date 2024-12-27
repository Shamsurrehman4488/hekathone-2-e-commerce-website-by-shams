import Image from "next/image";
const HeroSection = () => {
    return (
      <section className="  w-full min-h-screen flex items-center justify-center px-4">
        <div className="flex bg-[#F0F2F3] md:rounded-bl-lg flex-col md:flex-row items-center  w-[850px] h-[900px] md:w-[950px]  md:h-[550px]">
          {/* Text Content */}
          <div className="flex-1 md:ml-10 w-[300px] h-[300px] md:w-[557px] md:h-[337px] text-center md:text-left space-y-14 md:space-y-6">
            <h3 className="font-sans">WElCOME TO CHAIRY</h3>
            <h1 className="text-3xl md:text-5xl md:w-[557px] md:h-[198px] font-bold text-[#272343] leading-tight">
               Best Furniture Collection For Your Interior. 
            </h1>
            <button className="bg-[#029FAE] hover:bg-teal-600 text-white px-6 py-2 md:w-[171px] md:h-[52px] rounded transition duration-300">
              Shop Now →
            </button>
          </div>
  
          {/* Image Section */}
          <div className="flex-1 mt-6 md:mt-0 md:w-[434px] md:h-[550px] justify-center items-center   ">
            <Image
              src="/images/Hero.png" 
              alt="Furniture Hero"
              className="w-[320px] max-w-sm md:mt-14 mx-auto md:max-w-md"
            ></Image>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  