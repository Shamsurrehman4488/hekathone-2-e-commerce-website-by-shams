import Image from 'next/image';
import React from 'react';

const TopCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Wing Chair',
      image: '/images/top1.png',
      products: '3,584',
    },
    {
      id: 2,
      name: 'Wooden Chair',
      image: '/images/top2.png',
      products: 157,
    },
    {
      id: 3,
      name: 'Desk Chair',
      image: '/images/top3.png',
      products: 154,
    },
  ];

  return (
    <div className="container w-full md:w-[980px] ml-0 md:ml-[182px] md:h-[450px] justify-center items-center  md:mx-40 my-10 mx-auto ">
      <h2 className="text-2xl text-center md:text-left font-bold mb-8">Top Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-gray-950 bg-opacity-[70%] text-[#FFFFFF] shadow-md w-full md:w-[300px]  h-[460px] md:h-[360px]  justify-between items-center rounded-md overflow-hidden"
          >
            <Image
              src={category.image}
              alt={category.name}
              className="w-full h-96 md:h-72  object-cover"
            ></Image>
            <div className="p-2">
              <h3 className="text-lg  font-medium mb-2">{category.name}</h3>
              <p className="text-gray-400 ">{category.products} products</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;