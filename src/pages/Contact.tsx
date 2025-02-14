import Header from '../components/Header'
import Banner from '../components/Banner'
import Warranty from '../components/Warranty'
import Footer from '../components/Footer'
import ContactLayout from '../layout/ContactLayout'


const Contact = () => {
  return (
    <div>
      <Header />
      <Banner 
      bgImage='https://imagens-jsonserver.s3.us-east-1.amazonaws.com/BgBanner.png'
      title='Contact '
      subtitle= 'Home >'
      paragraph='Contact'/>
      <ContactLayout />
      
    
      <Warranty />
      <Footer />
      
    </div>
  )
}

export default Contact
