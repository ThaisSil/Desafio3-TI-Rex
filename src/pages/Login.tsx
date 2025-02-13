import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import BgBanner from "../assets/images/BgBanner.png";
import Dining from '../assets/images/Dining.png'
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormSchema) => {
    console.log(data);
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
       <div className="grid grid-cols-2">
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="mx-[52px] mt-16"
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
            className="rounded-lg text-gray-500 w-[528px] h-[75px] border border-gray-500 p-4"
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
            className="rounded-lg text-gray-500 w-[528px] h-[75px] border border-gray-500 p-4"
          />
          <p>
            {errors.email && (
              <small className="text-red-600">{errors.email.message}</small>
            )}
          </p>
        </div>
        <button
          type="submit"
          className="text-white bg-[#B88E2F] w-[237px] h-[55px] gap-[10px] mt-[46px] rounded-md"
        >
          Submit
        </button>
      </form>
     
        <img src={Dining} alt="Dining" />
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;
