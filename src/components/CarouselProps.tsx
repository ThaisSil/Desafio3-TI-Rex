import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

interface CarouselProps {
    images: string[];
  }
  
  const CarouselProps: React.FC<CarouselProps> = ({images}) => {
      return (
        <div>
          <Splide
            options={{
              type: 'loop',
              perPage: 2.5, 
              perMove: 1,
              autoplay: true,
              focus: 'left',
              gap: '1rem',              
              arrows: true, 
              pagination: true, 
              speed: 400, 
              
            }}
          >
            {images.map((image, index) => (
              <SplideSlide key={index}>
                <img
                  src={image}
                  alt="carousel"
                    
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      );
    };

  export default CarouselProps;