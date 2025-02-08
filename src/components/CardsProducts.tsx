import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const CardsProducts = () => {
const [products, setProducts] = useState<Product[]>([]);
const [visibleProducts, setVisibleProducts] = useState(8);
const navigate = useNavigate();
const location = useLocation();


  useEffect(() => {
    fetch(' http://localhost:3000/products')
    .then(response => response.json())
    .then(data => setProducts(data));


  if (location.pathname === "/SingleProduct") {
    setVisibleProducts(4); 
  } else {
    setVisibleProducts(8); 
  }
}, [location.pathname]);



  const handleClick = (id:number) => {
    navigate (`/SingleProduct/${id}`);
  };

  const handleShowMore = () => {
    setVisibleProducts(visibleProducts + 4);
  };


  return (
   
      <div className="grid grid-cols-4 gap-4">
      {products.slice(0, visibleProducts).map((product) => (
                                                                                                                                                                          
          <div key={product.id} className="cursor-pointer" onClick={()=> handleClick(product.id)}>
          <img src={product.image} alt={product.name} className="w-[285px] h-[301px]" />
          <div className="bg-[#F4F5F7] p-4">
          <p className="text-2xl font-semibold text-[#3A3A3A]">{product.name}</p>
          <p className="text-[#898989]">{product.description}</p>
          <p className="text-xl font-semibold text-[#3A3A3A]">Rp {product.price}</p>
          </div>
          </div>
        ))}
       
       <button onClick={handleShowMore} className="text-[#B88E2F] border border-[#B88E2F] w-[245px] h-[48px] mt-8 mb-16 items-center mx-[597px]">Show More</button>
       </div>
  )
}

export default CardsProducts
