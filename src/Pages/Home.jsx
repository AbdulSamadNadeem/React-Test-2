import React from 'react'
import Header from '../Components/Header/Header'
import Carousel from '../Components/Carousel/Carousel'
import BannerCards from '../Components/BannerCards/BannerCards'
import Categories from '../Components/Categories/Categories'
import FeaturedProducts from '../Components/FeaturedProducts/FeaturedProducts'
import FlashSale from '../Components/FleshSale/FleshSale'
import NewArrivals from '../Components/NewArrivals/NewArrivals'
import Modal from '../Components/Modal/Modal'

const Home = () => {
  return (
    <>
    <Header/>
    <Carousel/>
    <BannerCards/>
    <Categories/>
    <FeaturedProducts/>
    <FlashSale/>
    <NewArrivals/>
    <Modal/>
   
    </>
  )
}

export default Home