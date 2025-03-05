import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Aos from "aos";
import axios from "axios";

export const Form = () => {
  const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setStatus("Progress");
    axios
      .post("https://formspree.io/xrgyjlyy", data)
      .then((res) => {
        setStatus("Success");
        reset();
      })
      .catch((error) => {
        setStatus("Error");
      });
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
        action="https://formspree.io/xrgyjlyy"
        method="POST"
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
              className="w-full rounded-none shadow-none text-sm h-11 p-2 border border-gray-300 focus:border-[#149ddd] focus:ring-[#149ddd] outline-none"
              id="name"
              {...register("name", {
                required: "Please enter your name",
                minLength: { value: 3, message: "Your name is too short" },
              })}
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
              className="w-full rounded-none shadow-none text-sm h-11 p-2 border border-gray-300 focus:border-[#149ddd] focus:ring-[#149ddd] outline-none"
              id="email"
              {...register("email", {
                required: "Please check your email",
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i },
              })}
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
            className="w-full rounded-none shadow-none text-sm h-11 p-2 border border-gray-300 focus:border-[#149ddd] focus:ring-[#149ddd] outline-none"
            id="subject"
            {...register("subject", {
              required: "Please enter name of subject",
              minLength: { value: 4, message: "Your topic is too short" },
            })}
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
            className="w-full rounded-none shadow-none text-sm p-3 border border-gray-300 focus:border-[#149ddd] focus:ring-[#149ddd] outline-none"
            rows="10"
            {...register("message", { required: "Please write me something" })}
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
              className="bg-[#149ddd] border-0 py-2.5 px-6 text-white rounded cursor-pointer outline-none hover:bg-[#37b3ed]"
              type="button"
              disabled
            >
              Sending...
            </button>
          ) : (
            <button
              className="bg-[#149ddd] border-0 py-2.5 px-6 text-white rounded cursor-pointer outline-none hover:bg-[#37b3ed]"
              type="submit"
            >
              Send Message
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
