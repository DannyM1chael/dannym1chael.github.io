import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Aos from "aos";
import axios from "axios";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "Your name is too short" }),
  email: z.string().email({ message: "Please check your email" }),
  subject: z.string().min(4, { message: "Your topic is too short" }),
  message: z.string().min(1, { message: "Please write me something" }),
});

type FormData = z.infer<typeof schema>;

export const Form = () => {
  const [status, setStatus] = useState<string>("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("Progress");
    try {
      await axios.post("https://formspree.io/xrgyjlyy", data);
      setStatus("Success");
      reset();
    } catch (error) {
      console.error(error);
      setStatus("Error");
    }
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out-back",
    });
  }, []);

  return (
    <div
      className="w-full lg:w-7/12 mt-5 lg:mt-0 flex items-stretch"
      data-aos="fade-left"
      data-aos-delay="100"
    >
      <form
        className="w-full p-8 bg-white shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="name" className="block mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-none shadow-none text-sm h-11 p-2 border border-gray-300 focus:border-primary focus:ring-primary outline-none"
              {...register("name")}
            />
            {errors.name && (
              <div className="block text-red-500 text-xs font-normal mt-1">
                {errors.name.message}
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="email" className="block mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-none shadow-none text-sm h-11 p-2 border border-gray-300 focus:border-primary focus:ring-primary outline-none"
              {...register("email")}
            />
            {errors.email && (
              <div className="block text-red-500 text-xs font-normal mt-1">
                {errors.email.message}
              </div>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full rounded-none shadow-none text-sm h-11 p-2 border border-gray-300 focus:border-primary focus:ring-primary outline-none"
            {...register("subject")}
          />
          {errors.subject && (
            <div className="block text-red-500 text-xs font-normal mt-1">
              {errors.subject.message}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea
            id="message"
            className="w-full rounded-none shadow-none text-sm p-3 border border-gray-300 focus:border-primary focus:ring-primary outline-none"
            rows={10}
            {...register("message")}
          ></textarea>
          {errors.message && (
            <div className="block text-red-500 text-xs font-normal mt-1">
              {errors.message.message}
            </div>
          )}
        </div>
        <div className="mb-3">
          {status === "Error" && (
            <div className="block text-white bg-red-600 text-center p-4 font-semibold rounded">
              Oops, there was an error
            </div>
          )}
          {status === "Success" && (
            <div className="block text-white bg-green-500 text-center p-4 font-semibold rounded">
              Your message has been sent. Thank you!
            </div>
          )}
        </div>
        <div className="text-center">
          {status === "Progress" ? (
            <button
              type="button"
              className="bg-primary border-0 py-2.5 px-6 text-white rounded cursor-pointer outline-none hover:bg-primary-dark"
              disabled
            >
              Sending...
            </button>
          ) : (
            <button
              type="submit"
              className="bg-primary border-0 py-2.5 px-6 text-white rounded cursor-pointer outline-none hover:bg-primary-dark"
            >
              Send Message
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
