import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./header.css"
import Categories from '../../components/categories/Categories'

function Header() {
  return (
    <div className='header-container'>
        <Navbar />
        <div className='header-bar'>
            <div className='header-bar-1'></div>
            <div className='header-bar-2'></div>
            <div className='header-bar-3'></div>
            <div className='header-bar-4'></div>
            <div className='header-bar-5'></div>
        </div>
        <Categories />
    </div>
  )
}

export default Header