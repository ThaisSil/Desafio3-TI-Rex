import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().min(3, { message: "Please enter a valid email address" }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters" }),
  message: z
    .string()
    .min(3, { message: "Message must be at least 3 characters" }),
});

type FormSchema = z.infer<typeof schema>;

const ContactForm: React.FC = () => {
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
    <div >
      <form onSubmit={handleSubmit(onSubmit)} className="mx-[52px] ">
        <div>
          <div className="font-medium">
            <label htmlFor="name">Your Name</label>
          </div>
          <input
            type="text"
            id="name"
            placeholder="Abc"
            {...register("name")}
         className="rounded-lg text-gray-500 w-[528px] h-[75px] border border-gray-500 p-4"
          />
          <p>{errors.name && <small>{errors.name.message}</small>}</p>

          <div className="font-medium">
            <label htmlFor="email">Email Address</label>
          </div>
          <input
            type="email"
            id="email"
            placeholder="abc@def.com"
            {...register("email")}
            className="rounded-lg text-gray-500 w-[528px] h-[75px] border border-gray-500 p-4"
          />
          <p>{errors.email && <small>{errors.email.message}</small>}</p>

          <div className="font-medium">
            <label htmlFor="subject">Subject</label>
          </div>
          <input
            type="text"
            id="subject"
            placeholder="This is on optional"
            {...register("subject")}
           className="rounded-lg text-gray-500 w-[528px] h-[75px] border border-gray-500 p-4"
          />
          <p>{errors.subject && <small>{errors.subject.message}</small>}</p>

          <div className="font-medium">
            <label htmlFor="message">Message</label>
          </div>
          <textarea
            id="message"
            placeholder="Hi! i’d like to ask about"
            {...register("message")}
           className="rounded-lg text-gray-500 w-[528px] h-[75px] border border-gray-500 p-4"
          />
          <p>{errors.message && <small>{errors.message.message}</small>}</p>
        </div>
        <button type="submit" className='font-bold text-white bg-[#B88E2F] w-[222px] h-[74px] gap-[10px] mt-[46px]'>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
