import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const CardsProducts = () => {
  const [product, setProducts] = useState<Product[]>([]);
 

  useEffect(() => {
    fetch(" http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mx-[100px] my-20">
        {product.map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="w-[285px] h-[301px]"
            />
            <div className="bg-[#F4F5F7] p-4">
              <p className="text-2xl font-semibold text-[#3A3A3A]">
                {item.name}
              </p>
              <p className="text-[#898989]">{item.description}</p>
              <p className="text-xl font-semibold text-[#3A3A3A]">
                Rp {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default CardsProducts;
