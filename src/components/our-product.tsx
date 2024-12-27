import Image from 'next/image';

import React from 'react';
import { TbShoppingCartDiscount } from 'react-icons/tb';

const OurProducts = () => {
  const products =

   [
    {
      id: 1,
      name: 'Library stool chair',
      price: 20,
      image: '/images/product1.png',
      tag: 'New',
    },
    {
      id: 2,
      name: 'Library stool chair',
      price: 20,
      comparativePrice: '$30',
      image: '/images/product2.png',
      tag: 'Sale',
    },
    {
      id: 3,
      name: 'Library stool chair',
      price: 20,
      image: '/images/product3.png',
      tag: null,
    },
    {
      id: 4,
      name: 'Library stool chair',
      price: 20,
      image: '/images/product4.png',
      tag: null,
    },
    {
        id: 5,
        name: 'Library stool chair',
        price: 20,
        image: '/images/product6.png',
        tag: 'New',
      },
      {
        id: 6,
        name: 'Library stool chair',
        price: 20,
        comparativePrice: '$30',
        image: '/images/exp4.png',
        tag: 'Sale',
      },
      {
        id: 7,
        name: 'Library stool chair',
        price: 20,
        image: '/images/product5.png',
        tag: null,
      },
      {
        id: 8,
        name: 'Library stool chair',
        price: 20,
        image: '/images/product1.png',
        tag: null,
      },
  ];

  return (
    <div className=" w-full md:w-[1200px] md:ml-20 px-4 md:px-28 py-6 mx-auto my-14 lg:my-10">
      <h2 className="text-2xl  font-bold text-center  mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white w-full md:w-[220px] h-[280px] md:h-[275px] shadow-md rounded-md overflow-hidden"
          >
            <div className="relative">
              <Image src={product.image} alt={product.name} className="w-full h-52 object-cover" ></Image>
              {product.tag && (
                <div
                  className={`absolute top-2 left-2 px-2 py-1 rounded-md text-white font-medium ${
                    product.tag === 'New' ? 'bg-green-500' : 'bg-orange-500'
                  }`}
                >
                  {product.tag}
                </div>
              )}
            </div>
            <div className="pt-4 flex justify-between items-center">
            <div>
                 <h3 className="text-sm text-gray-500 font-medium mb-2">{product.name}</h3>
                 <div className='flex gap-2'>
                  <p className="text-gray-600 font-bold">${product.price}</p>
                  <p className="text-gray-400 font-medium line-through">{product.comparativePrice}</p>
                  </div>
                  </div>
              <button className="bg-[#F0F2F3] text-[#272343]  hover:bg-[#029FAE] hover:text-white py-2 px-4 rounded flex items-center">
                <TbShoppingCartDiscount className="h-6 w-4 mr-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;