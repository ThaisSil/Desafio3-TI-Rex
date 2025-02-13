import React from 'react';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  product: {
    id: number;
    name: string;
    originalPrice: number;
    quantity: number;
    image: string;
  };
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const subtotal = product.originalPrice * product.quantity;

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200">
      <div>
        <h3 className="font-bold">{product.name}</h3>
        <p>R${product.originalPrice.toFixed(2)}</p>
      </div>
      <div className="flex items-center">
        <button
          className="bg-gray-200 p-2 rounded"
          onClick={() => decreaseQuantity(product.id)}
        >
          -
        </button>
        <span className="mx-2">{product.quantity}</span>
        <button
          className="bg-gray-200 p-2 rounded"
          onClick={() => increaseQuantity(product.id)}
        >
          +
        </button>
      </div>
      <div>
        <p className="font-semibold">R${subtotal.toFixed(2)}</p>
        <button
          className="text-red-500"
          onClick={() => removeFromCart(product.id)}
        >
          Remover
        </button>
      </div>
    </div>
  );
};

export default CartItem;
