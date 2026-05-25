
// import React from 'react'

import Hero from "./Hero/Hero";
import images from "../../images";
import Feature from "./Features/Feature";
import Cards from "../cards/Cards";
import ProductCards from "../cards/ProductCards";

function Main() {


  return (
    <div className="w-full px-4 sm:px-15 py-10 mt-10 h-full">
        <Hero images = {images} />
        <Feature images = {images}  />
        <Cards images = {images} />
        <ProductCards  images = {images}/>
    </div>
  )
}

export default Main