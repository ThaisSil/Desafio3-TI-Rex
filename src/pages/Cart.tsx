import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import BgBanner from '../assets/images/BgBanner.png'
import Warranty from '../components/Warranty'

const Cart = () => {
  return (
    <div>
      <Header />
      <Banner 
      bgImage={BgBanner}
      title='Cart '
      subtitle= 'Home >'
      paragraph='Cart'/>
      <Warranty />
      
    </div>
  )
}

export default Cart
