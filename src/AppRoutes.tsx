import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from './pages/Product';






function AppRoutes () {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Shop' element={<Shop />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Product' element={<Product />} />

        </Routes>
    );
}


export default AppRoutes;