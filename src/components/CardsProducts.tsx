import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Product } from "../types/product";
import { useCart } from "../context/CartContext";



const CardsProducts = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const navigate = useNavigate();
  const location = useLocation();
   const { addToCart } = useCart();

  useEffect(() => {
    fetch(" http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProduct(data));

    if (location.pathname === "/SingleProduct/:id") {
      setVisibleProducts(4);
    } else {
      setVisibleProducts(8);
    }
  }, [location.pathname]);

  const handleClick = (id: number) => {
    navigate(`/SingleProduct/${id}`);
  };

  const handleAddToCart = (product: Product) => {
    if (product) {
      addToCart({ ...product, quantity:1});
      navigate("/Cart");
    }
  };
if (!product) return <div>Carregando...</div>;

  const handleShowMore = () => {
    setVisibleProducts(visibleProducts + 4);
  };


  return (
    <div className="grid grid-cols-4 gap-4 mx-[100px] my-20">
      {product.slice(0, visibleProducts).map((product) => (
        <div
          key={product.id}
          className="cursor-pointer relative"
         
        >
           <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              onClick={() => handleClick(product.id)}
              className="w-[285px] h-[301px] object-cover transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition duration-300"
              style={{ pointerEvents: 'none' }}>
            </div>
          </div>
          {product.discountPercentage &&
            product.discountPrice !== product.originalPrice && (
              <div className="flex items-center justify-center bg-[#E97171] text-white rounded-full w-[48px] h-[48px] absolute top-2 left-2">
                <span className="text-sm">{product.discountPercentage} % </span>
              </div>
            )}
          {product.isNew === true && (
            <div className="flex items-center justify-center bg-[#2EC1AC] text-white rounded-full w-[48px] h-[48px] absolute top-2 left-2">
              <span className="text-sm">New</span>
            </div>
          )}
          <div className="bg-[#F4F5F7] p-4 w-[285px] h-[145px] transition duration-300">
            <p className="text-2xl font-semibold text-[#3A3A3A]">
              {product.name}
            </p>
            <p className="text-[#898989]">{product.description}</p>
            <div>
              {product.discountPrice !== product.originalPrice && (
                <span className="text-[#B0B0B0] line-through">
                  {product.originalPrice}
                </span>
              )}
              <span className="text-xl font-semibold text-[#3A3A3A]">
                {product.discountPrice || product.originalPrice}
              </span>
            </div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center transition duration-300 bg-black bg-opacity-0 hover:bg-opacity-50"
            style={{ pointerEvents: 'none' }}> 
            <div className="transition duration-300 opacity-0 hover:opacity-100"
              style={{ pointerEvents: 'auto' }}> 
            <button onClick={() => handleAddToCart(product)}
            className="bg-white text-[#B88E2F] border border-[#B88E2F] font-semibold w-[202px] h-[48px] px-4 py-2 mx-10 ">
                Add to Cart
              </button>
              <div className="flex items-center justify-around mt-6 mx-4">
                <img src='https://imagens-jsonserver.s3.us-east-1.amazonaws.com/Share.png' alt="share" /><span className="text-white font-semibold">Share</span>
                <img src='https://imagens-jsonserver.s3.us-east-1.amazonaws.com/Compare.png' alt="compare" /><span className="text-white font-semibold">Compare</span>
                <img src='https://imagens-jsonserver.s3.us-east-1.amazonaws.com/Heart.png'alt="heart" /><span className="text-white font-semibold">Like</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={handleShowMore}
        className="text-[#B88E2F] border border-[#B88E2F] w-[245px] h-[48px] mt-8 mx-[428px]"
      >
        Show More
      </button>
    </div>
  );
};

export default CardsProducts;
