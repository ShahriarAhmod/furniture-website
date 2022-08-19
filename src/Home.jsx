import React from 'react'
import Blog from './components/Blog'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Offer from './components/Offer'
import Product from './components/Product'

const Home = ({product,slide}) => {
  // console.log(product);
  return (
    <>
    <Navbar/>
    <Header slide={slide}/>
    <Categories/>
    <Product product={product}/>
    <Offer/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default Home