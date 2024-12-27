import Image from "next/image";

const LogoHeroSection = () => {
  return (
    <section className="w-full ">
      <div className="bg-white md:w-[1321px]  md:h-[149px] flex flex-wrap justify-center items-center gap-8 md:gap-12 py-6">
        {/* Logos */}
        <Image src="/images/logo.png" alt="Zapier"width={85} height={87} ></Image>
        <Image
          src="/images/logo1.png"
          alt="Pipedrive"
          width={107} height={109}
        ></Image>
        <Image
          src="/images/logo2.png"
          alt="CIB Bank"
          width={135} height={149}
        ></Image>
        <Image
          src="/images/logo3.png"
          alt="Z Logo"
          width={63} height={65}
        ></Image>
        <Image
          src="/images/logo4.png"
          alt="Burnt Toast"
          width={98} height={101}
        ></Image>
        <Image
          src="/images/logo5.png"
          alt="PandaDoc"
          width={113} height={115}
        ></Image>
        <Image
          src="/images/logo6.png"
          alt="Moz"
          width={84} height={87}
        ></Image>
      </div>
    </section>
  );
};

export default LogoHeroSection;
