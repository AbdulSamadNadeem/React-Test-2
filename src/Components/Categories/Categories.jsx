import React, { useContext } from 'react'
import {ApiDataContext} from '../../Context/API Context/ApiContext.jsx'
import Slider from "react-slick";
import Cards from '../Cards/Cards.jsx';
const Categories = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        
        
      };
    const {category} = useContext(ApiDataContext)
  return (
    <>
    <div className='my-10'>
        <div><h1 className='text-4xl font-light ml-8'>Featured Categories</h1></div>
        <div className='overflow-hidden ml-8 mt-10'>

        <Slider {...settings}>
        {category.map((item,index)=>{
                return(
                    <>
                     <Cards  data={{item}}/>
                    </>
                )
            })}
        
      </Slider>
          
        </div>
    </div>
    </>
  )
}

export default Categories