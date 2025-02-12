import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types/product';


interface CartSummaryProps{
  cart: Product[];
}

const CartSummary: React.FC<CartSummaryProps> = ({cart}) => {
  const navigate = useNavigate();
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const total = subtotal; 

  const handleCheckout = () => {
    // Aqui você pode verificar se o usuário está logado
    // Caso não esteja logado, redirecionar para a página de login
    navigate('/checkout'); // Exemplo de redirecionamento
  };

  const { clearCart } = useCart();

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Resumo do Carrinho</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>R${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span>Total</span>
        <span>R${total.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <button
          className="bg-red-500 text-white p-2 rounded"
          onClick={clearCart}
        >
          Limpar Carrinho
        </button>
        <button
          className="bg-green-500 text-white p-2 rounded"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
