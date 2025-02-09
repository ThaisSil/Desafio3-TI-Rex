import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  description: string;
  originalPrice: string;
  discountPrice: string;
  discountPercentage: string;
  isNew: string;
  image: string;
}

const CardsProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(" http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));

    if (location.pathname === "/SingleProduct") {
      setVisibleProducts(4);
    } else {
      setVisibleProducts(8);
    }
  }, [location.pathname]);

  const handleClick = (id: number) => {
    navigate(`/SingleProduct/${id}`);
  };

  const handleShowMore = () => {
    setVisibleProducts(visibleProducts + 4);
  };

  return (
    <div className="grid grid-cols-4 gap-4 mx-[100px] my-20">
      {products.slice(0, visibleProducts).map((product) => (
        <div
          key={product.id}
          className="cursor-pointer relative"
          onClick={() => handleClick(product.id)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-[285px] h-[301px]"
          />
          {product.discountPercentage &&
            product.discountPrice !== product.originalPrice && (
              <div className="flex items-center justify-center bg-[#E97171] text-white rounded-full w-[48px] h-[48px] absolute top-2">
                <span className="text-sm">{product.discountPercentage}</span>
              </div>
            )}
          {product.isNew === "true" && (
            <div className="flex items-center justify-center bg-[#2EC1AC] text-white rounded-full w-[48px] h-[48px] absolute top-2">
              <span className="text-sm">New</span>
            </div>
          )}
          <div className="bg-[#F4F5F7] p-4 w-[285px] h-[145px]">
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
        </div>
      ))}

      <button
        onClick={handleShowMore}
        className="text-[#B88E2F] border border-[#B88E2F] w-[245px] h-[48px] mt-8 mb-16 items-center mx-[597px]"
      >
        Show More
      </button>
    </div>
  );
};

export default CardsProducts;
