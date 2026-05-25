
// import React from 'react'

function Hamburger({images, toggleMenu}) {
  return (
    <div className="w-10 z-50 hover:bg-blue-300 rounded-full active:bg-gray-100 p-2 cursor-pointer" onClick={toggleMenu} >
        <img src={images.menu} alt="" className=" block w-full md:hidden " />
    </div>
  )
}

export default Hamburger