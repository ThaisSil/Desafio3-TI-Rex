import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import BgBanner from '../assets/images/BgBanner.png'
import Warranty from '../components/Warranty'
import Footer from '../components/Footer'

const Checkout = () => {
  return (
    <div>
      <Header />
      <Banner 
      bgImage={BgBanner}
      title='Chekout '
      subtitle= 'Home >'
      paragraph='Checkout'/>
      <Warranty />
      <Footer />
    </div>
  )
}

export default Checkout
