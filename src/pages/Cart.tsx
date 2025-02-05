import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import BgBanner from '../assets/images/BgBanner.png'

const Cart = () => {
  return (
    <div>
      <Header />
      <Banner 
      bgImage={BgBanner}
      title='Cart '
      subtitle= 'Home >'
      paragraph='Cart'/>
      
    </div>
  )
}

export default Cart
