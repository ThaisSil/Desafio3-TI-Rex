import Header from '../components/Header'
import Banner from '../components/Banner'
import BgBanner from '../assets/images/BgBanner.png'

const Contact = () => {
  return (
    <div>
      <Header />
      <Banner 
      bgImage={BgBanner}
      title='Contact '
      subtitle= 'Home >'
      paragraph='Contact'/>
    </div>
  )
}

export default Contact
