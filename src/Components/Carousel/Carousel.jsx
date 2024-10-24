import React, { useContext } from 'react'
import Slider from "react-slick";
import { ApiDataContext } from '../../Context/API Context/ApiContext';

const Carousel = () => {
  const {isModal} = useContext(ApiDataContext)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000

      };
  return (
    <>
        <div className={`w-[90%] mx-auto my-6 ${isModal.modalState === true ? 'blur-sm' : ''}`}>
        <Slider {...settings}>
        <div>
          <img src="/public/Images/banner-4.webp" alt="" />
        </div>
        <div>
        <img src="/public/Images/banner-5.webp" alt="" />
        </div>
        <div>
        <img src="/public/Images/banner-6.webp" alt="" />
        </div>
        
      </Slider>
        </div>
    </>
  )
}

export default Carousel