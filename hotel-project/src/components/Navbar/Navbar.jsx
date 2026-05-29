import { useState } from "react"
import images from "../../images"
import Hamburger from "./Hamburger"
import NavLinks from "./NavLinks"
// import React from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  // const [bgScreenIsOpen, setBgScreenIsOpen] = useState(false)


  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <div className="flex w-full h-8 fixed bg-white shadow-sm top-0 items-center px-8 sm:px-20 py-2  z-50 h-15">
      <div className=" flex justify-between w-full">


        <p className="text-xl"><span className="text-blue-600">Lanka</span>Stay.</p>

        <div className="hidden sm:flex">
          <NavLinks />
        </div>

        {isOpen && (
        <div className=" top-0 left-0 flex w-full flex-col bg-white shadow-md lg:hidden">
          <NavLinks />
        </div>)}


      </div>
      <Hamburger images={images} toggleMenu={toggleMenu} isOpen={isOpen} />
    </div>
  )
}

export default Navbar