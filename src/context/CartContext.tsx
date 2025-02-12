import React, { createContext, useContext, useState, useEffect } from 'react';


interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }
  

interface CartContextType {
  cart: Product[];
  products: Product[]; 
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  clearCart: () => void;
  fetchProducts: () => void;
}


const CartContext = createContext<CartContextType | undefined>(undefined);


interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]); 

  
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');
      
      if (!response.ok) {
        throw new Error('Erro ao buscar produtos');
      }
       const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };



  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        products,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        fetchProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
