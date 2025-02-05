import Header from '../components/Header'
import Banner from '../components/Banner'
import BgBanner from '../assets/images/BgBanner.png'

const Shop = () => {
  return (
    <div>
      <Header />
      <Banner 
      bgImage={BgBanner}
      title='Shop '
      subtitle= 'Home >'
      paragraph='Shop'/>
    </div>
  )
}

export default Shop
