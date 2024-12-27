'use client';
import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IoAlertCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full md:max-w-[1,920px]  md:h-[203px]">
     <div className="bg-[#272343] w-full h-auto md:w-[1,920px] md:h-[45px] text-white text-xs md:text-sm py-2 md:px-[200px] flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 md:gap-0">
  {/* Left Section */}
  <div className='w-full h-auto md:max-[255px] md:max-h-16 gap-8 opacity-[70%]'>
  <p className="flex items-center opacity-70 gap-2 text-center">
    <Image src="/icons/check 1.png" alt="check" width={16} height={16} ></Image>
    Free Shipping On All Orders Over $50
  </p>
  </div>
  
  
  {/* larger screens */}
  <div className="hidden md:flex max-w-[202px] md:max-h-[17px] gap-4 opacity-[70%] items-center">
    <a href="#" className="hover:text-gray-300 flex items-center">
      Eng <FiChevronDown className="inline ml-1" />
    </a>
    <a href="/faq" >
      FAQs
    </a>
    <a href="#" className='md:w-[87px] justify-center gap-1 items-center flex'>
    <IoAlertCircleOutline />
      Need Help
    </a>
  </div>
</div>


      {/* Main Navbar */}
      <div className="bg-[#F0F2F3] w-full md:w-[1,920px] md:max-h-[84px]  py-4 px-4 md:px-[200px] flex justify-between items-center">
        {/* Logo */}
        <div className="flex justify-between md:max-w-[166px] md:max-h-40 gap-4  items-center">
          <Image src="/icons/logo.png" alt="Logo" className="h-[23.33px] w-[26.67px]" ></Image>
          <span className="text-2xl md:w-[188px] md:h-[31px] font-bold">Comforty</span>
          </div>

          <div>
           {/* Cart Button */}
        <button className="hidden md:flex items-center gap-2 bg-white shadow p-2 rounded">
          
          <a href="/cart"><FaShoppingCart className="text-[#272343]" /></a>
          <a href="/cart" className='text-[#272343]'>Cart</a>  
          <Image src={"/icons/No.png"} alt='no' width={20} height={20}></Image>
        </button>
        </div>
 
        </div>
  <div className='hidden md:flex justify-between md:px-[200px] bg-white'>
        {/* Desktop Navigation */}
        <div className='flex justify-between gap-6'>
          <a
            href="/"
            className="text-[#007580] hover:text-[#00A6A6] border-b-2 border-transparent hover:border-[#00A6A6] pb-1"
          >
            Home
          </a>
          <a
            href="/shop"
            className="text-[#636270] hover:text-[#00A6A6] border-b-2 border-transparent hover:border-[#00A6A6] pb-1"
          >
            Shop
          </a>
          <a
            href="/product"
            className="text-[#636270] hover:text-[#00A6A6] border-b-2 border-transparent hover:border-[#00A6A6] pb-1"
          >
            Product
          </a>
          <a
            href="/product"
            className="text-[#636270] hover:text-[#00A6A6] border-b-2 border-transparent hover:border-[#00A6A6] pb-1"
          >
            Pages
          </a>
          <a
            href="/about"
            className="text-[#636270] hover:text-[#00A6A6] border-b-2 border-transparent hover:border-[#00A6A6] pb-1"
          >
            About
          </a>
</div>

          <div>
          <p className="text-gray-600 pt-2">
            <a href="/contact"> Contact:</a>  <span className="font-bold text-[#636270] opacity[70%]">(800) 555-0111</span>
            </p>
            
          </div>
          
        </div>
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
     
       

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a
              href="/"
              className="text-gray-600 hover:text-[#00A6A6] border-b border-gray-200 pb-2"
            >
              Home
            </a>
            <a
              href="/shop"
              className="text-gray-600 hover:text-[#00A6A6] border-b border-gray-200 pb-2"
            >
              Shop
            </a>
            <a
              href="/product"
              className="text-gray-600 hover:text-[#00A6A6] border-b border-gray-200 pb-2"
            >
              Product
            </a>
            <a
              href="/product"
              className="text-gray-600 hover:text-[#00A6A6] border-b border-gray-200 pb-2"
            >
              Pages
            </a>
            <a
              href="/about"
              className="text-gray-600 hover:text-[#00A6A6] border-b border-gray-200 pb-2"
            >
              About
            </a>
            <div className="flex items-center  gap-2 pt-2">
              
              <a href="/cart"><FaShoppingCart className="text-[#00A6A6]" /></a>
              <a href="/cart">Cart</a>
              
            </div>
            <p className="text-gray-600 pt-2">
            <a href="/contact"> Contact:</a>  <span className="font-bold text-gray-900">(800) 555-0111</span>
            </p>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
