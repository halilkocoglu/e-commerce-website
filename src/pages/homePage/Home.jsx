import React from 'react'
import Header from '../../containers/header/Header'
import Main from '../../containers/main/Main'
import Footer from '../../containers/footer/Footer'
import './home.css'

function Home() {
  return (
    <div className='home-container'>
        <Header />
        <Main />

        <Footer />
    </div>
  )
}

export default Home