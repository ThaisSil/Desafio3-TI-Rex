import React from 'react'
import CardsProducts from '../components/CardsProducts';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SingleProduct = () => {

  return (
    <div>
      <Header/>
      <div className="bg-[#F9F1E7] h-[100px] flex flex-row items-center justify-between">
          <div  className='flex flex-row gap-4 ml-24 mr-6'>
          <p className='text-[#9F9F9F]'>Home </p>
          <p className='text-[#9F9F9F]'>Shop </p>
        </div>
                  <div className='border-l-2 border-[#9F9F9F] mr-[349px] ml-[30px] '>         
             <input placeholder ='Asgaard Sofa'className='bg-[#F9F1E7] w-[237px] h-[37px] p-8' />
             </div>
             </div>
   


      <div className='flex flex-col items-center justify-center'>
      <p className="font-bold text-[40px] text-[#3A3A3A] mt-14 mb-8">Related Products</p>
      </div>
      <CardsProducts/>
      <Footer/>
      </div>
   
  )
}

export default SingleProduct;
