import { useState } from "react"
import images from "../../images"
import Hamburger from "./Hamburger"
import NavLinks from "./NavLinks"
// import React from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex w-full h-8 fixed bg-white shadow-sm top-0 items-center px-8 sm:px-20 py-2  z-50 h-15">
    <div className=" flex justify-between w-full">
      
      
        <p className="text-xl"><span className="text-blue-600">Lanka</span>Stay.</p>
        {isOpen &&  <NavLinks />  }
       
       
         
    </div>
    <Hamburger images={images} toggleMenu ={toggleMenu} />
    </div>
  )
}

export default Navbar