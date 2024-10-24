import React, { useContext } from 'react'
import { ApiDataContext } from '../../Context/API Context/ApiContext'
import { useNavigate } from 'react-router-dom'
const Cards = ({data}) => {
  const navigate = useNavigate()
  const {isModal,setIsModal} = useContext(ApiDataContext)
  const text  = data?.item?.title ? data.item.title.split(" ").slice(0,6).join(" ") : ''

  return (
    <>
      <div  className={`border-2 w-60 h-96 flex flex-col justify-between items-center  rounded-xl ${isModal.modalState === true ? 'blur-sm' : ''}`}>
         <div className="flex items-center w-full transition-transform hover:scale-110 duration-2000" >
            <img src={data.item.image} alt={data.item.image} className="object-contain w-60 h-60" />
         </div>
         <div >
            <h1 className='text-center font-light text-xl'>{text || data.item.name}</h1>
         </div>
          <div className='flex gap-6'>
            <button onClick={()=>setIsModal({id:data.item.id , modalState:true})} className='bg-blue-300 h-10 text-sm rounded-xl border hover:bg-white hover:text-black hover:border-x-blue-300 hover:border-2'>View Details</button>
            <button onClick={()=>navigate(`/products/${data.item.category || data.item.name}`)}  className='bg-blue-300 h-10 rounded-xl border hover:bg-white hover:text-black hover:border-x-blue-300 hover:border-2'>Buy Now</button>
          </div>
      </div>
  
    </>
  )
}

export default Cards
