import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {ApiDataContext} from '../../Context/API Context/ApiContext.jsx'

const Header = () => {
  const [search, setSearch] = useState('')
  const [originalData, setOriginalData] = useState([])
  const { featuredData, setfeaturedData } = useContext(ApiDataContext)
  
  
  useEffect(() => {
   if(featuredData.length > 0 && originalData.length === 0 ){
    setOriginalData(featuredData)
   } 
  }, [featuredData])
  
  const handleSearch = () => {
    if (search.length === 0) {
      setfeaturedData(originalData) 
    } else {
      const filteredSearch = originalData.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
      setfeaturedData(filteredSearch)
      console.log(filteredSearch)
    }
  }
  
  useEffect(() => {
    handleSearch()
    

    
  }, [search]) 
  
  return (
    <>
    <div className='flex justify-around items-center h-16 border-b-2 '>
        <div className='transition hover:scale-110 duration-200'>
            <img src="/public/Images/logo.svg" alt="" />
        </div>
        <div>
            <ul className='flex  gap-10 '>
                <li className='transition hover:scale-110 duration-200'><NavLink to='/home'>Home</NavLink> </li>
                <li className='transition hover:scale-110 duration-200'> <NavLink to='/contact'>Contact</NavLink> </li>
                <li className='transition hover:scale-110 duration-200'> <NavLink to='/products'>Products</NavLink></li>
            </ul>
        </div>
        <div>
          <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search items' type="text" className='w-60 border border-black rounded-lg pl-4 ' />
        </div>
    </div>
    </>
  )
}

export default Header