
// import React from 'react'

function Footer() {


  return (
    <div className=" mt-10 border-t-1 border-gray-300">
    <div className="flex flex-col sm:flex-row gap-6 sm:justify-between sm:mx-15 text-center sm:text-start mt-4">
        <div className="">
            <h3 className="text-blue-600 font-bold text-[25px]">Lanka<span className="text-gray-800">Stay.</span></h3>
            <p className="text-gray-400 sm:text-sm">We kaboom your beauty holiday <br/>instantly and memorable.</p>
        </div>
        <div className=" sm:px-6">
            <p>Become hotel Owner</p>
            <button className="bg-blue-600 px-6 py-2 rounded-lg text-white mt-4 hover:bg-blue-800 active:bg-blue-600 transition duration-200 shadow-lg shadow-blue-500/50 cursor-pointer">Register Now</button>
        </div>
    </div>
    <p className="text-center bg-blue-600 text-white mt-10 py-2 sm:py-1 text-stone-300 text-xs">Copyright@2026. all right reserved. Paschez Nation</p>
    </div>
  )
}

export default Footer