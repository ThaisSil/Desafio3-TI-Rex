import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  firstName: z.string().min(3, { message: "Name must be at least 3 characters" }),
  lastName: z.string().min(3, { message: "Name must be at least 3 characters" }),
  companyName: z.string().optional(),
  zipCode: z.number().min(6, {message: "Zip code is required"}),
  country: z.string().min(1, { message: "Country/Region is required" }),
  streetAddress: z.string().min(1, { message: "Street address is required" }),
  townCity: z.string().min(1, { message: "Town/City is required" }),
  province: z.string().optional(),
  addonAddress: z.string().optional(),
  email: z.string().min(3, { message: "Please enter a valid email address" })
  .regex(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    { message: "Please enter a valid email address with @" }
  ),
});

type FormSchema = z.infer<typeof schema>;

const CheckoutForm: React.FC = () => {
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
        
         <form noValidate onSubmit={handleSubmit(onSubmit)} className="my-14 p-16">
            <h3 className="text-4xl font-semibold">Billing details</h3>
            <div >
              
         <div className="font-medium py-[22px]">
            <label htmlFor="name">First Name</label>
          </div>
          <div className=" flex flex-row gap-3">
          <input
            type="text"
            id="name"
            {...register("firstName")}
         className="rounded-lg text-[#9F9F9F] w-[211px] h-[75px] border border-[#9F9F9F] p-4"
          />
          
       <div className="font-medium py-[22px]">
            <label htmlFor="name">Last Name</label>
          </div>
          
          <input
            type="text"
            id="name"
            {...register("lastName")}
         className="rounded-lg text-[#9F9F9F] w-[211px] h-[75px] border border-[#9F9F9F] p-4"
          />
          
          </div>
          </div>

      <div className="flex flex-col">
        <label className="font-medium py-[22px]">Company Name</label>
        <input {...register('companyName')}  className="rounded-lg text-[#9F9F9F] w-[453px] h-[75px] border border-[#9F9F9F] p-4" />
        {errors.companyName && <p>{errors.companyName.message}</p>}
      

      
        <label className="font-medium py-[22px]">Zip Code</label>
        <input {...register('zipCode')} className="rounded-lg text-[#9F9F9F] w-[453px] h-[75px] border border-[#9F9F9F] p-4"/>
        {errors.zipCode && <p>{errors.zipCode.message}</p>}
      

        <label className="font-medium py-[22px]">Country/Region</label>
        <input {...register('country')} className="rounded-lg text-[#9F9F9F] w-[453px] h-[75px] border border-[#9F9F9F] p-4"/>
        {errors.country && <p>{errors.country.message}</p>}
      
        <label className="font-medium py-[22px]">Street Address</label>
        <input {...register('streetAddress')} className="rounded-lg text-[#9F9F9F] w-[453px] h-[75px] border border-[#9F9F9F] p-4"/>
        {errors.streetAddress && <p>{errors.streetAddress.message}</p>}
      
        <label className="font-medium py-[22px]">Town/City</label>
        <input {...register('townCity')} className="rounded-lg text-[#9F9F9F] w-[453px] h-[75px] border border-[#9F9F9F] p-4" />
        {errors.townCity && <p>{errors.townCity.message}</p>}
      
        <label className="font-medium py-[22px]">Province</label>
        <input {...register('province')} className="rounded-lg text-[#9F9F9F] w-[453px] h-[75px] border border-[#9F9F9F] p-4"/>
        {errors.province && <p>{errors.province.message}</p>}
      
        <label className="font-medium py-[22px]">Add-on Address</label>
        <input {...register('addonAddress')} className="rounded-lg text-[#9F9F9F] w-[453px] h-[75px] border border-[#9F9F9F] p-4"/>
        {errors.addonAddress && <p>{errors.addonAddress.message}</p>}
      
        <label className="font-medium py-[22px]">Email Address</label>
        <input {...register('email')} className="rounded-lg text-[#9F9F9F] w-[453px] h-[75px] border border-[#9F9F9F] p-4"/>
        {errors.email && <p>{errors.email.message}</p>}

        <div className="font-medium py-[44px]">
        <input type="text" placeholder="Additional information" className="rounded-lg text-[#9F9F9F] w-[453px] h-[75px] border border-[#9F9F9F] p-4"/>
        </div>
      
      </div>
    
    </form>
    </div>
    );
};

export default CheckoutForm;