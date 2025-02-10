import Header from '../components/Header'
import Banner from '../components/Banner'
import BgBanner from '../assets/images/BgBanner.png'
import Warranty from '../components/Warranty'
import Footer from '../components/Footer'
import Filter from '../assets/images/filter.png'
import Grid from '../assets/images/Grid.png'
import ViewList from '../assets/images/ViewList.png'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Share from '../assets/images/Share.png';
import Compare from '../assets/images/Compare.png';
import Heart from '../assets/images/Heart.png';


interface Product {
  id: number;
  name: string;
  description: string;
  originalPrice: string;
  discountPrice: string;
  discountPercentage: string;
  isNew: string;
  image: string;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
 

  useEffect(() => {
    fetch(" http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
 
  const handleClick = (id:number) => {
    navigate(`/SingleProduct/${id}`);
  };
  
  
  return (
    <div>
      <Header />
      <Banner 
      bgImage={BgBanner}
      title='Shop '
      subtitle= 'Home >'
      paragraph='Shop'/>
        <div className="bg-[#F9F1E7] h-[100px] flex flex-row items-center justify-between">
          <div  className='flex flex-row gap-4 ml-24 mr-6'>
        <img src={Filter} alt="Filter" />
        <p className='text-xl'>Filter</p>
        </div>
        <div className='flex flex-row gap-6'>
          <img src={Grid} alt="grid" />
          <img src={ViewList} alt="viewlist" />
          </div>
          <div className='border-l-2 border-[#9F9F9F] mr-[349px] ml-[30px] '>         
             <input placeholder ='Showing 1–16 of 32 results'className='bg-[#F9F1E7] text-[#9F9F9F] w-[237px] h-[37px] p-8' />
             </div>

          <div className='gap-8 flex flex-row items-center'>
          <p>Show</p>
          <input type="text" className='text-[#9F9F9F] w-[55px] h-[55px]' />
          </div>
          <div className='gap-8 flex flex-row items-center'>
          <p>Short by</p>
          <input type="text" className='text-[#9F9F9F] w-[188px] h-[55px] mr-[100px]' />
          </div>
          </div>

      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="cursor-pointer relative" onClick={() => handleClick(product.id)}>
            <img
              src={product.image}
              alt={product.name}
              className="w-[285px] h-[301px]"
            />
            {product.discountPercentage &&
            product.discountPrice !== product.originalPrice && (
              <div className="flex items-center justify-center bg-[#E97171] text-white rounded-full w-[48px] h-[48px] absolute top-2 left-2 ">
                <span className="text-sm">{product.discountPercentage}</span>
              </div>
            )}
              {product.isNew === "true" && (
            <div className="flex items-center justify-center bg-[#2EC1AC] text-white rounded-full w-[48px] h-[48px] absolute top-2 left-2">
              <span className="text-sm">New</span>
            </div>
          )}
            <div className="bg-[#F4F5F7] p-4 w-[285px] h-[145px]">
              <p className="text-2xl font-semibold text-[#3A3A3A]">
                {product.name}
              </p>
              <p className="text-[#898989]">{product.description}</p>
              {product.discountPrice !== product.originalPrice && (
                <span className="text-[#B0B0B0] line-through">
                  {product.originalPrice}
                </span>
              )}
               <span className="text-xl font-semibold text-[#3A3A3A]">
              {product.discountPrice || product.originalPrice}
              </span>
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center transition duration-300 bg-black bg-opacity-0 hover:bg-opacity-50"
            style={{ pointerEvents: 'none' }}> 
            <div className="transition duration-300 opacity-0 hover:opacity-100"
              style={{ pointerEvents: 'auto' }}> 
            <button className="bg-white text-[#B88E2F] border border-[#B88E2F] font-semibold w-[202px] h-[48px] px-4 py-2 mx-10 ">
                Add to Cart
              </button>
              <div className="flex items-center justify-around mt-6 mx-4">
                <img src={Share} alt="share" /><span className="text-white font-semibold">Share</span>
                <img src={Compare} alt="share" /><span className="text-white font-semibold">Compare</span>
                <img src={Heart} alt="share" /><span className="text-white font-semibold">Like</span>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
     
     
    

      <Warranty />
      <Footer />
    </div>
  )
}

export default Shop
