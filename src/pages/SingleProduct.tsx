import React, { useEffect, useState } from "react";
import CardsProducts from "../components/CardsProducts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "./Product";
import { useParams } from "react-router-dom";
import Stars from "../assets/images/Group 88.png";
import QuantitySelector from "../components/QuantitySelector";
import Sofa from "../assets/images/Sofa.png";
import Diva from "../assets/images/Diva.png";

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

const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <Header />
      <div className="bg-[#F9F1E7] h-[100px] flex flex-row items-center">
        <div className="flex flex-row gap-4 ml-24 mr-6">
          <p className="text-[#9F9F9F] px-5">
            Home <span className="text-black px-5">{">"}</span>
          </p>
          <p className="text-[#9F9F9F] px-5">
            Shop <span className="text-black px-5">{">"}</span>
          </p>
        </div>
        <div className="border-l-2 border-[#9F9F9F] ">
          {product && (
            <p className="text-black w-[237px] h-[37px] p-8 flex items-center">
              {product.name}
            </p>
          )}
        </div>
      </div>

      <div>
        {product && (
          <div className="flex flex-row p-[35px]">
            <div className="flex flex-col gap-8">
              <div className="bg-[#D9D9D9] w-20 h-20 rounded-xl mt-2 flex items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[83px] h-[55px] object-cover"
                />
              </div>
              <div className="bg-[#D9D9D9] w-20 h-20 rounded-xl mt-2 flex items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[83px] h-[55px] object-cover"
                />
              </div>
              <div className="bg-[#D9D9D9] w-20 h-20 rounded-xl mt-2 flex items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[83px] h-[55px] object-cover"
                />
              </div>
              <div className="bg-[#D9D9D9] w-20 h-20 rounded-xl mt-2 flex items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[83px] h-[55px] object-cover"
                />
              </div>
            </div>
            <div className="bg-[#F9F1E7] rounded-xl ml-[31px]">
              <img
                src={product.image}
                alt={product.name}
                className=" w-[431px] mt-[75px] mb-[31px] object-cover "
              />
            </div>
            <div className="gap-8 px-20 w-[606px]">
              <p className="text-[42px]">{product.name}</p>
              <p className="text-[#9F9F9F] text-2xl font-medium py-4">
                {product.originalPrice}
              </p>
              <div className="flex flex-row mb-4">
                <img src={Stars} alt="stars" />
                <p className="text-xs text-[#9F9F9F]">5 Customer Review</p>
              </div>
              <p className="text-xs mb-6">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
              <div>
                <p className="text-[#9F9F9F] py-4">Size</p>
                <div className="flex flex-row">
                  <div className="bg-[#B88E2F] w-[30px] h-[30px] flex items-center justify-center rounded-md mr-4 mb-4">
                    <span className="text-white">L</span>
                  </div>
                  <div className="bg-[#F9F1E7] w-[30px] h-[30px] flex items-center justify-center rounded-md mb-4">
                    <span>XL</span>
                  </div>
                  <div className="bg-[#F9F1E7] w-[30px] h-[30px] flex items-center justify-center rounded-md ml-4 mb-4">
                    <span>XS</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[#9F9F9F] py-4">Color</p>
                <div className="flex flex-row">
                  <div className="bg-[#816DFA] w-[30px] h-[30px] rounded-full mr-4 mb-4"></div>
                  <div className="bg-black w-[30px] h-[30px] rounded-full mb-4"></div>
                  <div className="bg-[#B88E2F] w-[30px] h-[30px] rounded-full ml-4 mb-4"></div>
                </div>
              </div>
            
              <QuantitySelector />
              </div>
          </div>
        )}
      </div>

      <div className="w-[1440px] border-t-2">
                <div className="flex flex-row gap-32 mx-[452px] mt-[49px]">
                  <p className="text-2xl font-medium">Description</p>
                  <p className="text-2xl text-[#9F9F9F]">
                    Additional Information
                  </p>
                </div>
                  
                <div className="text-[#9F9F9F] text-justify mx-[207px] my-[36px]">
                  <p className="mb-[30px]">
                    Embodying the raw, wayward spirit of rock ‘n’ roll, the
                    Kilburn portable active stereo speaker takes the
                    unmistakable look and sound of Marshall, unplugs the chords,
                    and takes the show on the road.
                  </p>
                  <p>
                    Weighing in under 7 pounds, the Kilburn is a lightweight
                    piece of vintage styled engineering. Setting the bar as one
                    of the loudest speakers in its class, the Kilburn is a
                    compact, stout-hearted hero with a well-balanced audio which
                    boasts a clear midrange and extended highs for a sound that
                    is both articulate and pronounced. The analogue knobs allow
                    you to fine tune the controls to your personal preferences
                    while the guitar-influenced leather strap enables easy and
                    stylish travel.
                  </p>
                </div>
                <div className="flex flex-row gap-7 mx-[100px]">
                  <img src={Sofa} alt="sofa" className="w-[605px] h-[348px] bg-[#F9F1E7] rounded-xl" />
                  <img src={Diva} alt="diva" />
                </div>
              </div>

      <div className="flex flex-col items-center justify-center">
        <p className="font-bold text-[40px] text-[#3A3A3A] mt-14 mb-8">
          Related Products
        </p>
      </div>
      <CardsProducts />
      <Footer />
    </div>
  );
};

export default SingleProduct;
