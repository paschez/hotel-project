
// import React from 'react'

import LoginButton from "./LoginButton"

function NavLinks() {

  return (
    <div className="flex flex-col gap-8 py-6 sm:py-0 bg-blue-600 absolute top-0 right-0 h-screen w-50 sm:w-auto sm:h-auto sm:bg-transparent sm:flex-row sm:flex sm:gap-4 sm:p-0 sm:static ">
        <div className="flex flex-col gap-8 sm:gap-3 text-xl sm:text-[15px] px-4 sm:flex-row text-white sm:text-black">
            <a href="#" className="group text-white sm:text-blue-600">Home
              <div className=" mt-0.1 h-0.5 w-0 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#" className="group">Hotels
              <div className="mt-0.1 h-0.5 w-0 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#" className="group">Rooms
              <div className="mt-0.1 h-0.5 w-0 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#" className="group">About
              <div className="mt-0.1 h-0.5 w-0 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#" className="group">Contact
              <div className="mt-0.1 h-0.5 w-0 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
            </a>
        </div>
        <LoginButton />
    </div>
  )
}

export default NavLinks