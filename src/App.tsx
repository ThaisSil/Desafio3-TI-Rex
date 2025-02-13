
import './global.css';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';



function App() {
  

  return (
    <BrowserRouter>
    <AuthProvider>
    <CartProvider>
      <AppRoutes />
    </CartProvider>
    </AuthProvider>
    
    </BrowserRouter>
  )
}

export default App
