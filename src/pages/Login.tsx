import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import BgBanner from "../assets/images/BgBanner.png";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z
    .string()
    .min(3, { message: "Please enter a valid email address" })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: "Please enter a valid email address with @",
    }),
});

type FormSchema = z.infer<typeof schema>;

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormSchema) => {
      const userData = { name: data.name, email: data.email };
        localStorage.setItem("user", JSON.stringify(userData));
        navigate ('/Checkout')
  };

  const logout = () => {
      localStorage.removeItem("user");
      navigate ('/Login'); 
  };
  
  

  return (
    <div>
      <Header />
      <Banner
        bgImage={BgBanner}
        title="Login"
        subtitle="Home >"
        paragraph="Login"
      />
      <div className="flex flex-col items-center mt-4">
        <h1 className="font-semibold text-2xl">Sign in to your account</h1>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        
      >
        <div>
          <div className="font-medium py-[22px]">
            <label htmlFor="name">Your Name</label>
          </div>
          <input
            type="text"
            id="name"
            placeholder="Abc"
            {...register("name")}
            className="rounded-2xl text-gray-500 w-[340px] h-[44px] border border-gray-500 p-3"
          />
          <p>
            {errors.name && (
              <small className="text-red-600">{errors.name.message}</small>
            )}
          </p>

          <div className="font-medium py-[22px]">
            <label htmlFor="email">Email Address</label>
          </div>
          <input
            type="email"
            id="email"
            placeholder="abc@def.com"
            {...register("email")}
            className="rounded-2xl text-gray-500 w-[340px] h-[44px] border border-gray-500 p-3"
          />
          <p>
            {errors.email && (
              <small className="text-red-600">{errors.email.message}</small>
            )}
          </p>
        </div>
        <button
          type="submit"
          className="text-white bg-[#B88E2F] w-[340px] h-[44px] gap-[10px] mt-[46px] rounded-2xl"
        >
          Access account
        </button>
      </form>
      <p className="font-medium m-4">Or sign in with</p>
    <div className="flex flex-row gap-6">
    <button type="submit" className="w-32 h-12 gap-10 rounded-2xl border border-gray-500">Google</button>
    <button type="submit" className="w-32 h-12 gap-10 rounded-2xl border border-gray-500">Facebook</button>
    </div>
    </div>

     <Footer />
    </div>
  );
};

export default LoginPage;
