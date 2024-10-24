import React, { useContext, useEffect } from 'react'
import { ApiDataContext } from '../../Context/API Context/ApiContext'


const Modal = () => {
    const {isModal , setIsModal} = useContext(ApiDataContext)
    const {featuredData} = useContext(ApiDataContext)
    const findData = featuredData.find((item)=>{
      return item.id === isModal.id
    }) 
    if(isModal.modalState === true){
      window.scrollTo({top:0 , behavior:'smooth'})
    }
     useEffect(()=>{
      console.log(findData)
    },[isModal])
  return (
   <>
    {
      findData && (
        <>
          <div className='absolute top-1/3 left-[300px] flex items-center border-2 w-1/2 h-80 justify-center mx-auto bg-white'>
            <div>
              <img src={findData?.image} alt="" className='w-80' />
            </div>
             <div>
              <h1 className='text-2xl font-light'>{findData?.title}</h1>
              <h1 className='text-xl pt-6'>Price:$<span className='text-2xl font-light'>{findData?.price}</span></h1>

             </div>
             <div className='absolute top-0 left-[95%]'>
              <button onClick={()=>setIsModal({id:'' , modalState:false})} className='bg-red-600 text-sm font-light rounded-lg hover:bg-white hover:border hover:border-red-600'>
                Close
              </button>
             </div>
          </div>
        </>
      )
    }
   </>
  )
}

export default Modal