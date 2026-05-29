
// import React from 'react'

function Hamburger({images, toggleMenu, isOpen}) {
  return (
    <div className="sm:hidden w-10 z-50 hover:bg-blue-300 rounded-full active:bg-gray-100 p-2 cursor-pointer" onClick={toggleMenu} >
       {isOpen ? <div>x</div>:  <img src={images.menu} alt="" className=" block w-full md:hidden text-white  shadow-4xl" />}
    </div>
  )
}

export default Hamburger