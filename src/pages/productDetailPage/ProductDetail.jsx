import React from 'react'
import "../homePage/home.css"
import Header from "../../containers/header/Header"
import Footer from "../../containers/footer/Footer"

import ProductDetailSection from '../../components/productDetailSection/ProductDetailSection'
function ProductDetail() {
  return (
    <div className='home-container'>
      <Header />
      <ProductDetailSection />
      <Footer/>
    </div>
  )
}

export default ProductDetail