import { MapPin, Phone, Clock, Trophy, Shield, HeadphonesIcon } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto  px-4 py-8 md:py-12">
      {/* Header */}
      <div className="text-center  md:ml-24 md:max-w-4xl  mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">Get In Touch With Us</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
        For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      {/* Main Content */}
      <div className="grid   md:h-[700px] md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-12 md:mt-10 md:h-[400px]">
          {/* Address */}
          <div className="flex items-start md:h-24 space-x-3">
            <MapPin className="w-6 h-6 text-black mt-1" />
            <div className='md:mt-6  md:w-[200px]'>
              <h3 className="font-bold mb-1">Address</h3>
              <p className="text-[#000000]">236 5th SE Avenue, New </p>
              <p className="text-[#000000]">York NY10000, United States</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-3">
            <Phone className="w-6 h-6 text-gray-600 mt-1" />
            <div>
              <h3 className="font-bold mb-1">Phone</h3>
              <p className="text-[#000000]">Mobile: +(84) 546-6789 </p>
              <p className="text-[#000000]">Hotline: +(84) 456-6789</p>
            </div>
          </div>

          {/* Working Time */}
          <div className="flex items-start space-x-3">
            <Clock className="w-6 h-6 text-gray-600 mt-1" />
            <div>
              <h3 className="font-bold mb-1">Working Time</h3>
              <p className="text-[#000000] md:w-[180px]">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-[#000000]  md:w-[180px]">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form className="space-y-4 md:h-[600px]   md:mt-10">
            <div className='space-y-8'>
                <label htmlFor="name" className='font-semibold '>Your name</label>
              <input
                type="text"
                placeholder="Abc"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className='space-y-8'>
            <label htmlFor="email" className='font-semibold '>Email address</label>
              <input
                type="email"
                placeholder="Abc@def.com"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className='space-y-8'>
            <label htmlFor="subject" className='font-semibold '>Subject</label>
              <input
                type="text"
                placeholder="This is an optional"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className='space-y-8'>
            <label htmlFor="text" className='font-semibold '>Message</label>
              <textarea
                placeholder="Hi! i’d like to ask about"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#029FAE] md:w-[200px]  text-white py-2 px-6 rounded hover:bg-teal-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:h-[200px] gap-6 mt-12 bg-gray-100 p-6 rounded-lg">
        <div className="flex items-center space-x-3">
          <Trophy className="w-8 h-8 text-black" />
          <div>
            <h3 className="font-semibold">High Quality</h3>
            <p className="text-sm text-gray-600">Crafted from top materials</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Shield className="w-8 h-8 text-black" />
          <div>
            <h3 className="font-semibold">Warranty Protection</h3>
            <p className="text-sm text-gray-600">Over 2 years</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <HeadphonesIcon className="w-8 h-8 text-black" />
          <div>
            <h3 className="font-semibold">24/7 Support</h3>
            <p className="text-sm text-gray-600">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}