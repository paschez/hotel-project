
// import React from 'react'

function ProductCards({images}) {

  return (
    <div className="mt-15 grid sm:grid-cols-4 gap-x-4 gap-y-10">
    <div>
      <div className=" group relative">
        <p className="absolute z-10 top-0 right-0 px-4 py-2 bg-blue-600 text-white text-[12px] font-semibold rounded-bl-xl rounded-tr-xl">Popular <span className="text-[10px] font-thin">Choice</span></p>
      <img src={images.hotelShangra} alt="" className="w-full h-full rounded-xl group-hover:scale-105 transition-all duration-300" />
      </div>
      <h3 className="text-sm mt-2">Shangri-la</h3>
      <p className="text-xs font-thin text-gray-400">Colombo, Sri Lanka</p>
    </div>
    <div>
      <div className="group">
        <img src={images.topView} alt="" className="w-full h-full group-hover:scale-105 transition-all duration-300" />
      </div>
      <h3 className="text-sm mt-2">Top View</h3>
      <p className="text-xs font-thin text-gray-400">Hikkaduwe, Sri Lanka</p>
    </div>
    <div>
      <div className="group">
        <img src={images.greenvilla} alt="" className="w-full h-full rounded-xl group-hover:scale-105 transition-all duration-300" />
      </div>
      <h3 className="text-sm mt-2">Green Villa</h3>
      <p className="text-xs font-thin text-gray-400">Kandy, Sri Lanka</p>
    </div>
    <div>
      <div className="group">
        <img src={images.wodden} alt="" className="w-full h-full rounded-xl group-hover:scale-105 transition-all duration-300" />
      </div>
      <h3 className="text-sm mt-2">Wodden Pit</h3>
      <p className="text-xs font-thin text-gray-400">Ambalangode, Sri Lanka</p>
    </div>
    <div>
      <div className="group">
        <img src={images.boutiqe} alt="" className="w-full h-full rounded-xl group-hover:scale-105 transition-all duration-300" />
      </div>
      <h3 className="text-sm mt-2">Boutiqe</h3>
      <p className="text-xs font-thin text-gray-400">Kandy, Sri Lanka</p>
    </div>
    <div>
      <div className="group">
        <img src={images.modern} alt="" className="w-full h-full rounded-xl group-hover:scale-105 transition-all duration-300" />
      </div>
      <h3 className="text-sm mt-2">Moder</h3>
      <p className="text-xs font-thin text-gray-400">Nuwereliya, Sri Lanka</p>
    </div>
    <div>
      <div className="group">
        <img src={images.silver} alt="" className="w-full h-full rounded-xl group-hover:scale-105 transition-all duration-300" />
      </div>
      <h3 className="text-sm mt-2">Silver Rain</h3>
      <p className="text-xs font-thin text-gray-400">Dehiwala, Sri Lanka</p>
    </div>
    <div>
      <div className="group relative">
        <p className="absolute z-10 top-0 right-0 px-4 py-2 bg-blue-600 text-white text-[12px] font-semibold rounded-bl-xl rounded-tr-xl">Popular <span className="text-[10px] font-thin">Choice</span></p>
        <img src={images.cashville} alt="" className="w-full h-full rounded-xl group-hover:scale-105 transition-all duration-300" />
      </div>
      <h3 className="text-sm mt-2">Cashville</h3>
      <p className="text-xs font-thin text-gray-400">Ampala, Sri Lanka</p>
    </div>
    
    </div>
  )
}

export default ProductCards