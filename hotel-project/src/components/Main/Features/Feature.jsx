// import React from 'react'

function Feature({images}) {


  return (
    <div className="grid h-96 sm:grid-cols-4 bg-blue-100 sm:rounded-full mt-15 sm:h-25 items-center px-8 gap-8 sm:gap-12">
        <div className="flex gap-10 sm:gap-4 items-center justify-around bg-white p-6 sm:p-3 h-15 sm:h-10 rounded-lg shadow-lg/20 sm:w-30 lg:w-40 transition hover:-translate-y-2 hover:border-blue-600 hover:border active:bg-blue-100 cursor-pointer">
            <img src={images.frame} className=" w-6 h-6 sm:w-3 sm:h-3" />
            <p className="text-xl sm:text-xs flex-1">Check Available</p>
        </div>
        <div  className="flex gap-3 items-center  bg-white rounded-lg p-6 sm:p-3 h-15 sm:h-10 shadow-lg/20 sm:w-33 lg:w-35 transition hover:-translate-y-2 hover:border-blue-600 hover:border active:bg-blue-100 cursor-pointer">
            <img src={images.vector} className="w-6 h-6 sm:w-3 sm:h-3" />
            <div  className="flex gap-4 items-center">
                <p className="text-xl sm:text-xs">Person</p>
                <span className="text-xl sm:text-xs">2</span>
                <img src={images.arrow} className="w-4 h-4 sm:w-2 sm:h-2 active:rotate-180 transition duration-100 cursor-pointer" />
            </div>
        </div>
        <div className="flex sm:gap-4 items-center bg-white rounded-lg p-6 sm:p-3 h-15 sm:h-10 shadow-lg/20 sm:w-30 lg:w-40 transition hover:-translate-y-2 hover:border-blue-600 hover:border active:bg-blue-100 cursor-pointer">
            <img src={images.addlocation} className="w-6 h-6 sm:w-3 sm:h-3"/>
            <p className="text-xl sm:text-xs">Select Location</p>
        </div>
        <div className="p-1 sm:pl-8 flex justify-center sm:justify-start">
        <button className="bg-blue-600 text-white p-2 w-40 sm:w-20 h-10 rounded-lg shadow-lg shadow-blue-500/50  hover:bg-blue-800 active:bg-blue-600 cursor-pointer transition duration-200 active:border active:border-blue-900">Search</button>
        </div>
    </div>
  )
}

export default Feature