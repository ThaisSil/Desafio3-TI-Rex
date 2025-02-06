import React, {useState} from 'react'
import CarouselProps from '../../../components/CarouselProps'
import Carrousel1 from '../assets/images/Carrousel1.png'
import Carrousel2 from '../assets/images/Carrousel2.png'
import Living from '../assets/images/Living.png'
import Dining from '../assets/images/Dining.png'
import Bedroom from '../assets/images/Bedroom.png'


const images = [Carrousel1, Carrousel2, Living, Dining, Bedroom]

const Carousel: React.FC =() =>{

  return (
   
        <div className='bg-[#FCF8F3] grid grid-cols-2 gap-4 p-10'>
        <div className='w-[422px] ml-[100px] mt-40 '>
      <p className='text-[#3A3A3A] font-bold text-[40px]'>50+ Beautiful rooms inspiration</p>
      <p className='text-[#616161] font-medium'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
     
      <button className='bg-[#B88E2F] text-white font-semibold w-[176px] h-[48px] mt-7'>Explore More</button>
      </div>
      
      <div>
      <CarouselProps images={images}/>
      </div>
      </div>

  )
}

export default Carousel;
