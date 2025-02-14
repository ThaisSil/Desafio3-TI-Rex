import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useParams, useNavigate } from "react-router-dom";
import { Product } from "../types/product";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, originalPrice: product.originalPrice, quantity });

      navigate("/Cart");
    }
  };

  if (!product) return <div>Carregando...</div>;

  return (
    <div>
      <div className="flex flex-row">
        <div className="flex items-center justify-between space-x-4 border-2 border-black rounded-2xl w-[123px] h-[64px] mr-4">
          <button
            onClick={decrease}
            className="text-black w-10 h-10 flex items-center justify-center"
          >
            -
          </button>
          <span className="text-xl font-medium">{quantity}</span>
          <button
            onClick={increase}
            className="text-black w-10 h-10 flex items-center justify-center"
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={handleAddToCart}
            className="w-[215px] h-[64px] border-2 border-black rounded-2xl"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="w-[600px] border-t-2 border-[#D9D9D9] mt-[60px]"></div>
      <div className="flex flex-row gap-4 mt-10">
        <div className="flex flex-col gap-3">
          <div className="text-[#9F9F9F]">SKU</div>
          <div className="text-[#9F9F9F]">Category</div>
          <div className="text-[#9F9F9F]">Tags</div>
          <div className="text-[#9F9F9F]">Share</div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="text-[#9F9F9F]">
            : <span>SS001</span>
          </div>
          <div className="text-[#9F9F9F]">
            : <span>Sofas</span>
          </div>
          <div className="text-[#9F9F9F]">
            : <span>Sofa, Chair, Home, Shop</span>
          </div>
          <div className="flex flex-row gap-6">
            <div className="text-[#9F9F9F]">
              :{" "}
              <span className="text-black">
                <FontAwesomeIcon icon={faFacebook} />
              </span>
            </div>
            <span className="text-black">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span className="text-black">
              <FontAwesomeIcon icon={faTwitter} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
