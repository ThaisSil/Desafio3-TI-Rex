import {Route, Routes} from 'react-router-dom';
import Home from './pages/homePage/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';
import SingleProduct from './pages/SingleProduct';
import Checkout from './pages/Checkout';
import PrivateRouter from './components/PrivateRouter';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';




function AppRoutes () {
    return (
        <AuthProvider>
            <CartProvider>       
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Shop' element={<Shop />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/SingleProduct/:id' element={<SingleProduct/>} />
            <Route path="/Checkout" element={<PrivateRouter><Checkout /></PrivateRouter>} />

        </Routes>
        </CartProvider>

        </AuthProvider>
    );
}


export default AppRoutes;