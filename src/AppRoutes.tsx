import {Route, Routes} from 'react-router-dom';
import Home from './pages/homePage/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from './pages/Product';
import SingleProduct from './pages/SingleProduct';






function AppRoutes () {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Shop' element={<Shop />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Product' element={<Product />} />
            <Route path='/SingleProduct/:id' element={<SingleProduct />} />

        </Routes>
    );
}


export default AppRoutes;