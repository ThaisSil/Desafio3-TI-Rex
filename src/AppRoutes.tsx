import {Route, Routes} from 'react-router-dom';
import Home from './pages/homePage/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';
import SingleProduct from './pages/SingleProduct';
import Checkout from './pages/Checkout';






function AppRoutes () {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Shop' element={<Shop />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/SingleProduct/:id' element={<SingleProduct/>} />
            <Route path= '/Checkout' element={<Checkout/>} />

        </Routes>
    );
}


export default AppRoutes;