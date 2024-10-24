import React, { useContext } from 'react'
import { ApiDataContext } from '../../Context/API Context/ApiContext'

const BannerCards = () => {
   const {isModal} = useContext(ApiDataContext)
  return (
     <>
     <div className={`flex justify-evenly mt-16 ${isModal.modalState === true ? 'blur-sm' : ''}`}>
         
         <div className='w-[500px] h-60 '>
            <img src="/public/Images/banner-4 (1).webp" alt="" className='rounded-xl' />
         </div>
         <div className='w-[500px] '>
            <img src="/public/Images/banner-5 (1).webp" alt="" className='h-60 rounded-xl' />
         </div>

     </div>
     </>
  )
}

export default BannerCards