
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/NavBar';
import logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    
        <header className='my-[30px] ml-[54px]'>
          <div className="flex items-center justify-between">
            <div className='flex items-center space-x-4'>
            <img className= ' w-[50px] h-8' src= {logo} alt="logo" />
            <h1 className= ' text-black text-[32px] font-bold '>Furniro</h1>
            </div>
            <div>
            <Navbar />
            </div>
            <div className='flex items-center space-x-6 mr-[100px] w-7 h-7'>
           <Link to={'/login'}> 
            <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link to={'/cart'}>
            <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            </div>
            
            </div>    
        </header>
      
  
  )
}

export default Header
