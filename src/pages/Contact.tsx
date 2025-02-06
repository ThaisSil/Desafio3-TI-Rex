import Header from '../components/Header'
import Banner from '../components/Banner'
import BgBanner from '../assets/images/BgBanner.png'
import Warranty from '../components/Warranty'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Header />
      <Banner 
      bgImage={BgBanner}
      title='Contact '
      subtitle= 'Home >'
      paragraph='Contact'/>
      <Warranty />
      <Footer />
      
    </div>
  )
}

export default Contact
