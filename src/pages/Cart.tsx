import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/Banner";
import BgBanner from "../assets/images/BgBanner.png";
import Warranty from "../components/Warranty";
import Delete from "../assets/images/Delete.png";
import { Product } from "../types/product";

const Cart = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleCheckout = () => {
    navigate("/Checkout");
  };

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
          <table className="table-auto border-collapse">
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
              <tr className="border-b">
                <td className="px-4 py-2 flex items-center">
                  <img
                    src={product?.image}
                    alt={product?.name}
                    className="w-16 h-16 mr-4"
                  />
                  <span className="text-[##9F9F9F]">{product?.name}</span>
                </td>
                <td className="px-4 py-2 text-[##9F9F9F]">
                  {product?.originalPrice}
                </td>
                <td className="px-4 py-2 flex items-center border-2 rounded-xl border-[#9F9F9F] w-[107px]">
                  <button
                    onClick={decrease}
                    className="text-black w-10 h-10 flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="text-xl font-medium mx-2">{quantity}</span>
                  <button
                    onClick={increase}
                    className="text-black w-10 h-10 flex items-center justify-center"
                  >
                    +
                  </button>
                </td>
                <td className="px-4 py-2">R$ 250.000,00</td>
                <td className="px-4 py-2">
                  <img
                    src={Delete}
                    alt="delete"
                    className="w-6 h-6 cursor-pointer"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="bg-[#F9F1E7] w-[393px] p-6">
            <h3 className="text-[32px] mb-[60px] font-semibold text-center">
              Cart Totals
            </h3>
            <div className="mb-4">
              <div className="flex justify-between mb-8">
                <span className="font-bold ">Subtotal</span>
                <span>Rs. 250.000,00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Total</span>
                <span className="text-[#B88E2F]">Rs. 250.000,00</span>
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
