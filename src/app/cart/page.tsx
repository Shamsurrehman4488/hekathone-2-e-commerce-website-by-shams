'use client'
import Image from "next/image";
import React from "react";
import { Trash2, Heart } from "lucide-react";

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: "Library Stool Chair",
      price: 99,
      image: "/images/product3.png",
      size: "L",
      quantity: 1,
    },
    {
      id: 2,
      name: "Library Stool Chair",
      price: 99,
      image: "/images/product6.png",
      size: "L",
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen md:h-[300px]  p-6">
      <div className="max-w-7xl md:w-[980px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold mb-6">Bag</h1>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg mb-4"
            >
              <div className="flex items-center space-x-4">
                <div className="relative h-28 w-24">
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-800">{item.name}</h2>
                  <p className="text-gray-600 text-sm">
                    Ashen Slate/Coat Bliss
                  </p>
                  <p className="text-gray-600 text-sm">Size: {item.size}</p>
                  <p className="text-gray-600 text-sm">
                    Quantity: {item.quantity}
                  </p>

                  <div className="flex space-x-4 mt-2">
                  <button className="text-gray-600 hover:text-red-600">
                    <Trash2 size={20} />
                  </button>
                  <button className="text-gray-600 hover:text-blue-600">
                    <Heart size={20} />
                  </button>
                </div>
                </div>
              </div>
              <div className="text-right mb-24">
                <p className="font-semibold text-gray-800">MRP: ${item.price}</p>
               
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-lg font-bold mb-4">Summary</h2>
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-600">Subtotal</p>
            <p className="font-semibold">${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-600">Estimated Delivery & Handling</p>
            <p className="font-semibold">Free</p>
          </div>
          <div className="border-t border-gray-200 my-4"></div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-bold">Total</p>
            <p className="text-lg font-bold">${subtotal.toFixed(2)}</p>
          </div>
          <button className="w-full bg-teal-500 text-white py-3 rounded-lg shadow hover:bg-teal-600 transition">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
}