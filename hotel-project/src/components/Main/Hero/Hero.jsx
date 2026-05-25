
// import React from 'react'


function Hero({images,}) {


  return (
    <div className="grid md:grid-cols-2 gap-8 justify-items-center w-full mt-4">
       <div className="flex flex-col gap-4 w-full items-center sm:items-start">
        <h1 className="text-4xl text-center sm:text-start">Forget Busy Work,<br />Start Next Vacation</h1>
        <p className="text-sm text-grey-400 text-center sm:text-start">We provide what you need to enjoy your <br />holiday with family. Time to make another <br />memorable moments</p>
        <button className="bg-blue-600 shadow-lg shadow-blue-600/50 px-2 rounded h-8 w-30 mt-2 text-white cursor-pointer hover:bg-blue-800 active:border active:border-blue-900 active:bg-blue-600 transition duration-200">Show More</button>
        <div className="flex gap-8 mt-6">
          <div>
            <img src={images.icTraveler} className="w-4 mb-2" />
            <p className="text-xs font-semibold">2500 <span className="text-gray-300">users</span></p>
          </div>
          <div>
            <img src={images.icTreasure} className="w-4 mb-2" />
            <p className="text-xs font-semibold">200 <span className="text-gray-300">treasure</span></p>
          </div>
          <div>
            <img src={images.iccities} className="w-4 mb-2"  />
            <p className="text-xs font-semibold">100 <span className="text-gray-300">cities</span></p>
          </div>
        </div>
       </div> 
       <div className="relative w-full h-70 ">
        <img src={images.hotelHero} alt="hotel photo" className="w-full h-full z-50" />
        <div className="absolute bg-white shadow-sm w-96 h-60 -bottom-4 -right-4 rounded-bl-md rounded-br-md rounded-tr-md -z-1"></div>
       </div>
    </div>
  )
}

export default Hero