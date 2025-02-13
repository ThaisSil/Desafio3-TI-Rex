import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/Banner";
import BgBanner from "../assets/images/BgBanner.png";
import Warranty from "../components/Warranty";
import Delete from "../assets/images/Delete.png";
import { Product } from "../types/product";
import { useCart } from "../context/CartContext";



const Cart = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { cart } = useCart();
  const navigate = useNavigate();
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  
  

  useEffect(() => {
    fetch(`http://localhost:3000/products/`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);


  const handleCheckout = () => {
    navigate("/Checkout");
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const itemSubtotal = (product?.originalPrice ?? 0) * (product?.quantity ?? 0);
      return total + itemSubtotal;
    }, 0);
  };

  const total = calculateTotal();




  return (
    <div>
      <Header />
      <Banner
        bgImage={BgBanner}
        title="Cart "
        subtitle="Home >"
        paragraph="Cart"
      />
      <div className="container mx-auto p-4">
        <div className="flex flex-row justify-between mt-20">
          <table className=" w-full h-auto table-auto border-collapse">
            <thead>
              <tr className="font-medium border-b bg-[#F9F1E7] ">
                <th className="px-4 py-2 text-left">Product</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Quantity</th>
                <th className="px-4 py-2 text-left">Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (                
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2 flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 mr-4"
                  />
                  <span className="text-[##9F9F9F]">{item.name}</span>
                </td>
                <td className="px-4 py-2 text-[##9F9F9F]">
                  {item.originalprice}
                </td>
                <td className="px-4 py-2 flex items-center border-2 rounded-xl border-[#9F9F9F] w-[107px]">
                  <button
                     onClick={() => decreaseQuantity(item.id)}
                    className="text-black w-10 h-10 flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="text-xl font-medium mx-2">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="text-black w-10 h-10 flex items-center justify-center"
                  >
                    +
                  </button>
                </td>
                <td className="px-4 py-2"> {(item.originalprice * item.quantity).toFixed(2)}</td>
                <td className="px-4 py-2">
                  <img
                    src={Delete}
                    alt="delete"
                    className="cursor-pointer"
                    data-id={item.id}
                    onClick={() => removeFromCart(item.id)}
                
                  />
                </td>
              </tr>
                    ))}
            </tbody>
          </table>

          <div className="bg-[#F9F1E7] w-[393px] p-6">
            <h3 className="text-[32px] mb-[60px] font-semibold text-center">
              Cart Totals
            </h3>
            <div className="mb-4">
              <div className="flex justify-between mb-8">
                <span className="font-bold ">Subtotal</span>
                <span>{(product?.originalPrice ?? 0) * (product?.quantity ?? 0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Total</span>
                <span className="text-[#B88E2F]">{total.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="text-xl border-2 border-black rounded-2xl w-[222px] h-[59px] mt-10 mx-auto block"
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>

      <Warranty />
    </div>
  );
};

export default Cart;
