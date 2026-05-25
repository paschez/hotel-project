// import React from 'react'

function Cards({images}) {

    

  return (
    <div className="mt-15">
        <h3 className="mb-4 text-center sm:text-start">Most Picked</h3>
        <div className="grid sm:grid-cols-3 gap-4">
           <div className="group sm:row-span-2 relative ">
            <p className="absolute z-10 top-0 right-0 text-white text-[12px] font-semibold px-4 py-2 bg-blue-600 rounded-bl-xl rounded-tr-xl">$50 <span className="text-xs font-thin">per night</span></p>
            <img src={images.hotelBlue} className="object-cover w-full h-full rounded-xl group-hover:scale-105 transition-all duration-300" />
            <div className="absolute left-0 bottom-0 text-white p-4">
              <h3>Blue Origin Fams</h3>
              <p className="text-sm font-thin">Galle, Sri Lanka</p>
            </div>
           </div>
           <div className=" group relative">
            <p className="absolute z-10 top-0 right-0 text-white text-[12px] font-semibold px-4 py-2 bg-blue-600 rounded-bl-xl rounded-tr-xl">$22 <span className="text-xs font-thin">per night</span></p>
            <img src={images.oceanLand} className="object-cover w-full h-full rounded-xl group-hover:scale-105 transition-all duration-300" />
            <div className="absolute left-0 bottom-0 text-white p-4">
              <h3>Ocean Land</h3>
              <p className="text-sm font-thin">Trincomalee, Sri Lanka</p>
            </div>
           </div>
           <div className="group relative">
            <p className="absolute z-10 top-0 right-0 text-white text-[12px] font-semibold px-4 py-2 bg-blue-600 rounded-bl-xl rounded-tr-xl">$856 <span className="text-xs font-thin">per night</span></p>
            <img src={images.starHouse} className="object-cover w-full h-full rounded-xl group-hover:scale-105 transition-all duration-300" />
            <div className="absolute left-0 bottom-0 text-white p-4">
              <h3>Star house</h3>
              <p className="text-sm font-thin">Dehiwala, Sri Lanka</p>
            </div>
           </div>
           <div className="group relative">
            <p className="absolute z-10 top-0 right-0 text-white text-[12px] font-semibold px-4 py-2 bg-blue-600 rounded-bl-xl rounded-tr-xl">$62 <span className="text-xs font-thin">per night</span></p>
            <img src={images.vinnaVilla} className="object-cover w-full h-full rounded-xl group-hover:scale-105 transition-all duration-300" />
            <div className="absolute left-0 bottom-0 text-white p-4">
              <h3>Vinna Vill</h3>
              <p className="text-sm font-thin">Beruwala, Sri Lanka</p>
            </div>
           </div>
           <div className="group relative">
            <p className="absolute z-10 top-0 right-0 text-white text-[12px] font-semibold px-4 py-2 bg-blue-600 rounded-bl-xl rounded-tr-xl">$72 <span className="text-xs font-thin">per night</span></p>
            <img src={images.bobox} className="object-cover w-full h-full rounded-xl group-hover:scale-105 transition-all duration-300" />
            <div className="absolute left-0 bottom-0 text-white p-4">
              <h3>Bobox</h3>
              <p className="text-sm font-thin">Kandy, Sri Lanka</p>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Cards