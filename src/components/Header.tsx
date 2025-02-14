import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/NavBar";
import logo from "../assets/images/Logo.png";
import CloseCart from "../assets/images/CloseCart.png"
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const navigate = useNavigate();
  const [openOption, setOpenOptions] = useState<boolean>(false);
  const { cart,removeFromCart} = useCart();

  const handleCartToggle = () => {
    setOpenOptions(!openOption);
  };

  const handleGoToCart = () => {
    navigate("/Cart");
  };
  const handleGoToCheckout = () => {
    navigate("/Checkout");
  }
  

  return (
    <header className="my-6 ml-8 sm:ml-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img className=" w-[50px] h-8" src={logo} alt="logo" />
          <h1 className=" text-black text-[32px] font-bold ">Furniro</h1>
        </div>
        <div>
          <Navbar />
        </div>
        <div className="flex items-center space-x-6 mr-[100px] w-7 h-7">
          <Link to={"/login"}>
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <div className="relative">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="cursor-pointer"
              onClick={handleCartToggle}
            />
          </div>
          {openOption && (
            <div className="absolute bg-slate-50 w-[417px] h-[743px] top-0 right-0">
              <div className="flex flex-row my-7 mx-7 justify-between">
              <p className="font-semibold text-2xl ">
                Shopping Cart
              </p>
           <img src={CloseCart} alt="closecart" className="w-4 h-5 cursor-pointer" onClick={handleCartToggle} />
           </div>
              <hr className="w-[287px] text-[#D9D9D9]  mx-[75px]" />
              <div>
                {cart.map((item) => (
                  <div key={item.id}>
                    <div className="border-b">
                      <div className="px-4 py-2 flex flex-row items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-[105px] h-[105px] mr-4 bg-[#D9D9D9]"
                        />
                       <div className=" flex flex-col">
                        <p>{item.name}</p>             
                        
                        <span>{item.quantity} x</span><span className="text-[##B88E2F] pr-[100px]">{(item.originalPrice * item.quantity).toFixed(2)}</span>
                      </div>
                     <div className="px-4 py-2">
                        <button
                          className=" w-5 h-5 rounded-full bg-[#9F9F9F] text-white cursor-pointer"
                          data-id={item.id}
                          onClick={() => removeFromCart(item.id)}
                        >
                          X
                        </button>
                        </div>
                      </div>
                    </div>
                    
                    </div>
                ))}

                <div className="mt-[250px]">
                  <span className="px-4 mr-40">Subtotal</span>
                  <span className="text-[#B88E2F] font-semibold"> R$ 
                    {cart.reduce((total, item) => total + (item.originalPrice * item.quantity), 0).toFixed(2)}
                  </span>
                </div>
                
                <div className="">
                  <button
                    className="w-[87px] h-[30px] border border-black rounded-3xl gap-3 mx-4 text-center"
                    onClick={handleGoToCart}
                  >
                    Cart
                  </button>
                  <button className="w-[118px] h-[30px] border border-black rounded-3xl gap-3 text-center"
                  onClick={handleGoToCheckout}>
                    Checkout
                  </button>
                  <button className="w-[135px] h-[30px] border border-black rounded-3xl gap-3 mx-4 text-center">
                    Comparison
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};


export default Header;
