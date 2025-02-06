
import Header from '../../components/Header';
import MainSection from './layout/MainSection';
import Footer from '../../components/Footer';
import BrowseSection from './layout/BrowseSection';
import Products from './layout/Products';
import Carousel from './layout/Carousel';
import FurnitureSection from './layout/FurnitureSection';

const Home = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <BrowseSection />
      <Products />
      <Carousel />
      <FurnitureSection />
      <Footer />
      
            
    </div>
  )
}

export default Home
