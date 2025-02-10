import React, { useState } from 'react';

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); 
    }
  };

  return (
    <div className="flex items-center space-x-4 border-2 border-black rounded-2xl w-[123px] h-[64px] mr-4">
          <button
        onClick={decrease}
        className="text-black w-10 h-10 flex items-center justify-center"
      >-</button>
      <span className="text-xl font-medium">{quantity}</span>
      <button
        onClick={increase}
        className="text-black w-10 h-10 flex items-center justify-center"
      >+</button>
      <div>
      <button className='w-[215px] h-[64px] border-2 border-black rounded-2xl ml-4'>Add To Cart</button>
      </div>
    </div>
  );
};

export default QuantitySelector;
