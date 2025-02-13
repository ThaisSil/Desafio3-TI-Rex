import {Route, Routes} from 'react-router-dom';
import Home from './pages/homePage/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';
import SingleProduct from './pages/SingleProduct';
import Checkout from './pages/Checkout';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';




function AppRoutes () {
    return (
        <AuthProvider>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Shop' element={<Shop />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/SingleProduct/:id' element={<SingleProduct/>} />
            <Route path="/Checkout" element={<PrivateRoute element={<Checkout />} path="/Checkout" />} />

        </Routes>
        </AuthProvider>
    );
}


export default AppRoutes;