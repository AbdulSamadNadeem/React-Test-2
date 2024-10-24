import React, { useContext, useEffect } from 'react'
import {ApiDataContext} from '../../Context/API Context/ApiContext.jsx'

const FeaturedProducts = () => {
    const {slicedfeaturedData} = useContext(ApiDataContext)
    const {isModal} = useContext(ApiDataContext)
  return (
    <>
        <div>
            <h1 className='text-4xl font-light ml-8'>FeaturedProducts</h1>
        </div>
    <div className={`flex flex-col items-center my-10 ${isModal.modalState === true ? 'blur-sm' : ''}`}>
        <div className='flex flex-wrap justify-center gap-4' >
            {slicedfeaturedData.map((item)=>{
                return(
                    <>
                     <div className='w-80 border-2 rounded-lg transition-transform hover:scale-110 duration-200'>
                        <div>
                            <img src={item.image} alt="" />
                        </div>
                        <div>
                            <h1 className='text-center font-light text-xl'>{item.title}</h1>
                        </div>
                     </div>
                    </>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default FeaturedProducts