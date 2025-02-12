
import './global.css';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { CartProvider } from './context/CartContext';


function App() {
  

  return (
    <BrowserRouter>
   
      <AppRoutes />
    
    </BrowserRouter>
  )
}

export default App
