
import Header from '../../components/Header';
import MainSection from './layout/MainSection';
import Footer from '../../components/Footer';
import BrowseSection from './layout/BrowseSection';
import Carousel from './layout/Carousel';
import FurnitureSection from './layout/FurnitureSection';
import CardsProducts from '../../components/CardsProducts';

const Home = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <BrowseSection />
      <div className='flex flex-col items-center justify-center'>
      <p className="font-bold text-[40px] text-[#3A3A3A] mt-14 mb-8">Our Products</p>
      </div>
      <CardsProducts />
      <Carousel />
      <FurnitureSection />
      <Footer />
      
            
    </div>
  )
}

export default Home
