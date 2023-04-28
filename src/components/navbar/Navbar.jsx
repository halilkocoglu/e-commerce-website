import React from 'react'
import { Link } from 'react-router-dom'
import hblogo from "../../assets/hblogo.svg"
import "./navbar.css"

function Navbar() {
  return (
      <div className='navbar-container'>
        <div className='navbar-container-logo'>
          <p><Link to={"/"}><img src={hblogo} alt='' /></Link></p>
          <p className='premium-text'> <Link to={"/premium"}><span>Premium'u</span></Link> keşfet</p>
        </div>
        <div className='navbar-search'>
          <input  placeholder='Ürün, kategori veya marka ara' type="text" />
          <button type='button'>Ara</button>
        </div>

        <div className='navbar-right'>
          <div className='navbar-myAccount'>
            <span className='entry'>Giriş Yap</span>
            <span className='or'>veya üye ol</span> 
          </div>
          <div className='navbar-basket'>Sepetim</div>
        </div>  
    </div>
  )
}

export default Navbar