import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ApiDataContext } from '../Context/API Context/ApiContext'
import Header from '../Components/Header/Header'
import Cards from '../Components/Cards/Cards'
import FeaturedProducts from '../Components/FeaturedProducts/FeaturedProducts'
import FlashSale from '../Components/FleshSale/FleshSale'
import NewArrivals from '../Components/NewArrivals/NewArrivals'

const Products = () => {
  const {featuredData , category} = useContext(ApiDataContext)
  const {id} = useParams()
  const findData = featuredData.filter((item)=>{
    return item.category === id?.toLowerCase()
  } )
  return (
    <>
    <Header/>
     <h1 className='text-4xl text-center font-light'>Products</h1>
    <div className='flex flex-wrap gap-6 justify-center'>
    { findData && findData.map((item)=>{
      return(
        <>
          <Cards data={{item}}/>
        </>
      )
     })

     }

    </div>
       <FeaturedProducts/>
       <FlashSale/>
       <NewArrivals/>
    </>
  )
}

export default Products