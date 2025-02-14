import Header from "../components/Header";
import Banner from "../components/Banner";
import Warranty from "../components/Warranty";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../types/product";
import { useCart } from "../context/CartContext";


const Shop = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filter, setFilter] = useState<string>("all");
  const [itemsPerPage] = useState<number>(16);
  const navigate = useNavigate();
  const [openOption, setOpenOptions] = useState<boolean>(false);
  const { addToCart } = useCart();



  useEffect(() => {
      fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  const handleClick = (id: number) => {
    navigate(`/SingleProduct/${id}`);
  };

  const handleAddToCart = (product: Product) => {
      if (product) {
        addToCart({ ...product, originalPrice: product.originalPrice, quantity:1});
        navigate("/Cart");
      }
    };
  if (!product) return <div>Carregando...</div>;

  const handleFilterToggle = () => {
    setOpenOptions(!openOption);
  };

  const handleCategoryChange = (category: string) => {
    setFilter(category);
  };

  const resetFilter = () => {
    setFilter("");
  };

  const filteredProduct =
    filter === "all"
      ? product
      : product.filter((prod) => prod.category === filter);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProduct.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredProduct.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Header />
      <Banner
        bgImage='https://imagens-jsonserver.s3.us-east-1.amazonaws.com/BgBanner.png'
        title="Shop "
        subtitle="Home >"
        paragraph="Shop"
      />

      <div className="bg-[#F9F1E7] h-[100px] flex flex-row items-center pl-24">
        <div
          className="flex flex-row gap-4 mr-6 cursor-pointer"
          onClick={handleFilterToggle}
        >
          <img src='https://imagens-jsonserver.s3.us-east-1.amazonaws.com/filter.png' alt="Filter" />
          <p className="text-xl">Filter</p>
        </div>
        {openOption && (
          <div className="absolute mt-52 bg-[#F9F1E7] rounded-xl z-10">
            <div>
              <h3 className="font-bold">Filter by Category</h3>
              <ul className="cursor-pointer">
                <li onClick={() => handleCategoryChange("all")}>All</li>
                <li onClick={() => handleCategoryChange("chair")}>Chair</li>
                <li onClick={() => handleCategoryChange("sofa")}>Sofa</li>
                <li onClick={() => handleCategoryChange("table")}>Table</li>
                <li onClick={() => handleCategoryChange("desk")}>Desk</li>
                <li onClick={() => handleCategoryChange("bed")}>Bed</li>
                <li onClick={resetFilter}>Show All Products</li>
              </ul>
            </div>
          </div>
        )}

        <div className="flex flex-row mx-6 gap-4">
          <img src='https://imagens-jsonserver.s3.us-east-1.amazonaws.com/Grid.png' alt="grid" />
          <img src='https://imagens-jsonserver.s3.us-east-1.amazonaws.com/ViewList.png' alt="viewlist" />
        </div>

        <div className="border-l-2 border-[#9F9F9F] mx-[30px]">
          <input
            defaultValue={
              filter
                ? ` Showing ${
                    indexOfFirstProduct + 1
                  }–${indexOfLastProduct} of ${filteredProduct.length} results`
                : `Showing ${
                    indexOfFirstProduct + 1
                  }–${indexOfLastProduct} of ${filteredProduct.length} results`
            }
            className="bg-[#F9F1E7] w-[400px] h-[37px] p-4"
            readOnly
          />
        </div>

        <div className="gap-8 flex flex-row items-center mr-14">
          <p>Show</p>
          <input type="text" className="text-[#9F9F9F] w-[55px] h-[55px]" />
        </div>
        <div className="gap-8 flex flex-row items-center">
          <p>Short by</p>
          <input
            type="text"
            className="text-[#9F9F9F] w-[188px] h-[55px] mr-[100px] pl-2 capitalize"
            defaultValue={filter}
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 my-16">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className=" relative"
          
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-[285px] h-[301px] cursor-pointer"
              onClick={() => handleClick(product.id)}
            />
            {product.discountPercentage &&
              product.discountPrice !== product.originalPrice && (
                <div className="flex items-center justify-center bg-[#E97171] text-white rounded-full w-[48px] h-[48px] absolute top-2 left-2 ">
                  <span className="text-sm">{product.discountPercentage} %</span>
                </div>
              )}
            {product.isNew === true && (
              <div className="flex items-center justify-center bg-[#2EC1AC] text-white rounded-full w-[48px] h-[48px] absolute top-2 left-2">
                <span className="text-sm">New</span>
              </div>
            )}
            <div className="bg-[#F4F5F7] p-4 w-[285px] h-[145px]">
              <p className="text-2xl font-semibold text-[#3A3A3A]">
                {product.name}
              </p>
              <p className="text-[#898989]">{product.description}</p>
              {product.discountPrice !== product.originalPrice && (
                <span className="text-[#B0B0B0] line-through">
                  {product.originalPrice}
                </span>
              )}
              <span className="text-xl font-semibold text-[#3A3A3A]">
                {product.discountPrice || product.originalPrice}
              </span>
            </div>
            <div
              className="absolute inset-0 flex flex-col justify-center items-center transition duration-300 bg-black bg-opacity-0 hover:bg-opacity-50"
              style={{ pointerEvents: "none" }}
            >
              <div
                className="transition duration-300 opacity-0 hover:opacity-100"
                style={{ pointerEvents: "auto" }}
              >
                <button  onClick={() => handleAddToCart(product)}
                className="bg-white text-[#B88E2F] border border-[#B88E2F] font-semibold w-[202px] h-[48px] px-4 py-2 mx-10 ">
                  Add to Cart
                </button>
                <div className="flex items-center justify-around mt-6 mx-4">
                  <img src='https://imagens-jsonserver.s3.us-east-1.amazonaws.com/Share.png' alt="share" />
                  <span className="text-white font-semibold">Share</span>
                  <img src='https://imagens-jsonserver.s3.us-east-1.amazonaws.com/Compare.png' alt="compare" />
                  <span className="text-white font-semibold">Compare</span>
                  <img src='https://imagens-jsonserver.s3.us-east-1.amazonaws.com/Heart.png' alt="like" />
                  <span className="text-white font-semibold">Like</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-8">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-4 py-2 mx-2 ${
              currentPage === number
                ? "bg-[#B88E2F] text-white"
                : "bg-[#F9F1E7]"
            }`}
          >
            {number}
          </button>
        ))}
      </div>

      <Warranty />
      <Footer />
    </div>
  );
};

export default Shop;
