import Header from '../components/Header'
import Banner from '../components/Banner'
import BgBanner from '../assets/images/BgBanner.png'
import Warranty from '../components/Warranty'
import Footer from '../components/Footer'

const Shop = () => {
  return (
    <div>
      <Header />
      <Banner 
      bgImage={BgBanner}
      title='Shop '
      subtitle= 'Home >'
      paragraph='Shop'/>
      <Warranty />
      <Footer />
    </div>
  )
}

export default Shop
