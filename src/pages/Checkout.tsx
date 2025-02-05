import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import BgBanner from '../assets/images/BgBanner.png'

const Checkout = () => {
  return (
    <div>
      <Header />
      <Banner 
      bgImage={BgBanner}
      title='Chekout '
      subtitle= 'Home >'
      paragraph='Checkout'/>
    </div>
  )
}

export default Checkout
