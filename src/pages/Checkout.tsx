import React, { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import BgBanner from "../assets/images/BgBanner.png";
import Warranty from "../components/Warranty";
import Footer from "../components/Footer";
import CheckoutForm from "../components/CheckoutForm";
import { useCart } from "../context/CartContext";





const Checkout = () => {
  console.log ("chekout components");
   const { cart } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + item.originalPrice * item.quantity, 0);
  const total = subtotal


  
  return (
    <div>
      <Header />
      <Banner
        bgImage='https://imagens-jsonserver.s3.us-east-1.amazonaws.com/BgBanner.png'
        title="Checkout "
        subtitle="Home >"
        paragraph="Checkout"
      />
      <div className="grid grid-cols-2">
        <CheckoutForm />
        <div>
        <div className="grid grid-cols-2">
          <div className="my-14 p-9">
            <p className="font-medium text-2xl py-5">Product</p>
           { cart.map((item) => (
              <p className="text-[#9F9F9F] py-4" key={item.id}> <span className=" pr-2">{item.name}</span>
              <span className="text-xs text-black">x {item.quantity}</span>
             </p>

           ))}
            
            <p className="py-4"> Subtotal</p>
            <p className="py-4">Total</p>
          </div>
          <div className="my-14 p-16">
            <p className="font-medium text-2xl">Subtotal</p>
            <p className="py-4"> {`R$ ${subtotal.toFixed(2)}`} </p>
            <p className="py-4"> {`R$ ${subtotal.toFixed(2)}`}</p>
            <p className="font-bold text-2xl text-[#B88E2F] py-4">
            {`R$ ${total.toFixed(2)}`}
            </p>
          </div>
          </div>
          <div className="grid grid-cols-1 p-9">
          <p className="py-4">Direct Bank Transfer</p>
          <p className="text-[#9F9F9F] text-justify text font-light py-4">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
          <p className="text-[#9F9F9F] text font-medium py-4">
            Direct Bank Transfer
          </p>
          <p className="text-[#9F9F9F] text font-medium py-4">Cash On Delivery</p>
          <p className="font-light text-justify py-4">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <span className="font-semibold">privacy policy.</span>
          </p>
          <button className=" text-xl w-[318px] h-[64px] border border-black rounded-2xl mx-36 my-9">Place order</button>
        </div>
       </div>
      </div>
      

      <Warranty />
      <Footer />
    </div>
  );
};

export default Checkout;
