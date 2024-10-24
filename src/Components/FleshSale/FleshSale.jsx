import React, { useContext } from 'react'
import {ApiDataContext} from '../../Context/API Context/ApiContext.jsx'
import Slider from "react-slick";
import Cards from '../Cards/Cards.jsx';
const FlashSale = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay:true,
        autoplaySpeed:2000,
        
        
      };
    const {featuredData} = useContext(ApiDataContext)

  
  return (
    <>
    <div className='my-10'>
        <div><h1 className='text-4xl font-light ml-8'>Flash Sale</h1></div>
        <div className='overflow-hidden ml-8 mt-10'>

        <Slider {...settings}>
        {featuredData.map((item) => {
        return (
        <>
         <Cards data={{item}}/>
        </>
  );
})}
        
      </Slider>
          
        </div>
    </div>
    </>
  )
}

export default FlashSale