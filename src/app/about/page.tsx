import Image from "next/image";
import { ShoppingBag, Clock, Award, HeadphonesIcon } from "lucide-react";

export default function HomePageSections() {
  const features = [
    {
      icon: <ShoppingBag className="w-6 h-6 text-teal-600" />,
      title: "Next day as standard",
      description: "Order before 3pm and get your order the next day as standard"
    },
    {
      icon: <Clock className="w-6 h-6 text-teal-600" />,
      title: "Made by true artisans",
      description: "Handmade crafted goods made with real passion and craftmanship"
    },
    {
      icon: <Award className="w-6 h-6 text-left text-teal-600" />,
      title: "Unbeatable prices",
      description: "For our materials and quality you won't find better prices anywhere"
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6 text-teal-600" />,
      title: "Recycled packaging",
      description: "We use 100% recycled to ensure our footprint is more manageable"
    }
  ];

  const products = [
    {
      id: 1,
      name: "The elegant subtle sofa",
      price: "$699.00",
      image: "/images/brand1.png",
      isWide: true
    },
    {
      id: 2,
      name: "360 Swivel chair",
      price: "$399.00",
      image: "/images/brand3.png",
      isWide: false
    },
    {
      id: 3,
      name: "The Dandy chair",
      price: "$249.00",
      image: "/images/brand2.png",
      isWide: false
    }
  ];

  return (
    <div className="w-full md:w-[950px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* About Us Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
        <div className="bg-[#007580] p-6 sm:p-8 rounded-lg text-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">About Us - Comforty</h2>
          <p className="text-sm sm:text-base mb-6">
            We believe good design should be available to everyone. We make our furniture with the best materials, work with outstanding designers and make sure everything we produce meets the highest standards.
          </p>
          <button className="bg-[#F9F9F926] w-full sm:w-auto text-white px-4 sm:px-6 py-2 rounded-lg mt-4 md:mt-28 hover:bg-[#F9F9F940] transition-colors">
            Read more
          </button>
        </div>
        <div className="relative h-48 sm:h-64 md:h-[400px] rounded-lg overflow-hidden bg-[#F8F8F8]">
          <Image
            src="/images/product1.png"
            alt="White chair"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* What Makes Our Brand Different */}
      <div className="mb-12 lg:mb-16">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
          What Makes Our Brand Different
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 bg-gray-50 rounded-lg text-center hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-3">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Popular Products */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Our Popular Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`group ${
                product.isWide ? 'sm:col-span-2' : 'sm:col-span-1'
              }`}
            >
              <div 
                className="relative mb-3 sm:mb-4 rounded-lg overflow-hidden bg-[#F8F8F8] h-48 sm:h-64 lg:h-[300px]"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium mb-1 text-sm sm:text-base">{product.name}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}