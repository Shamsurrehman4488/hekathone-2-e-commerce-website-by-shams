'use client'
import Image from "next/image";
import { FaShoppingCart } from 'react-icons/fa';




export default function ProductPage() {
    const products = [
        {
          id: 1,
          name: "Library Stool Chair",
          price: "$99",
          image: "/images/product5.png",
        },
        {
          id: 2,
          name: "Library Stool Chair",
          price: "$99",
          image: "/images/product1.png",
        },
        {
          id: 3,
          name: "Library Stool Chair",
          price: "$99",
          image: "/images/product8.png",
        },
        {
          id: 4,
          name: "Library Stool Chair",
          price: "$99",
          image: "/images/exp1.png",
        },
        {
          id: 5,
          name: "Library Stool Chair",
          price: "$99",
          image: "/images/product6.png",
        },
      ];
  return (
    <div className="min-h-screenbg-white p-4">
      <div className="max-w-7xl bg-white mx-auto">
        {/*  Product Section */}
        <div className="grid md:grid-cols-2 gap-8 ml-0 md:ml-44 md:h-[450px]  md:w-[950px] p-6 rounded-lg">
          <div className="relative h-80 w-full md:h-auto">
            <Image
              src="/images/product2.png"  
              alt="Library Stool Chair"
              layout="fill"
              className="object-cover rounded-lg"
            />
          </div>
          <div className=" md:mt-4 md:ml-7">
            <h1 className="text-3xl md:w-[200px] font-bold text-gray-900">Library Stool Chair</h1>
            <p className="text-white bg-[#029FAE] w-28 h-8 rounded-lg md:mt-4 text-xl font-semibold mt-2">$20.00 USD</p>
            <p className="text-gray-600 text-sm mt-4 md:mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
            <button className="mt-6 px-6 py-3 bg-[#029FAE] flex gap-2  text-white rounded-lg shadow hover:bg-blue-700 transition">
              <FaShoppingCart className="text-white mt-1" /> Add To Cart
            </button>
          </div>
        </div>


     {/* Featured Products */}
        <div className="max-w-7xl  md:w-[950px] md:h-[300px] mt-16 mx-auto md:mb-16 p-4">
      <div className="flex-col md:flex  md:justify-between items-center mb-6 md:mb-10 ">
        <h2 className="text-2xl font-bold ml-6 mb-6 md:mb-0 md:ml-0 text-gray-900">FEATURED PRODUCTS</h2>
        <a href="/product" className="text-black ml-28 md:ml-0 hover:underline">
          View all
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className=" p-4 rounded-lg md:w-[200px]  md:h-[250px] transition"
          >
            <div className="relative h-[130px] w-full">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex justify-between">
            <h3 className="mt-4 text-gray-800 text-xs ">{product.name}</h3>
            <p className="text-gray-600 font-bold mt-2">{product.price}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
            
      </div>
    </div>
  );
}
