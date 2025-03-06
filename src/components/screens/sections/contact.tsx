import React, { useEffect } from "react";
import Aos from "aos";
import { Form } from "./form";

export const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out-back",
    });
  }, []);

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-base">Feel free to contact me</p>
        </div>
        <div className="flex flex-wrap">
          <div
            className="w-full lg:w-5/12 flex items-stretch"
            data-aos="fade-right"
          >
            <div className="p-8 bg-white w-full shadow-lg">
              <div className="mb-5">
                <i className="icofont-google-map text-xl text-primary float-left w-11 h-11 bg-primary-light flex justify-center items-center rounded-full hover:bg-primary hover:text-white"></i>
                <h4 className="pl-16 text-2xl font-semibold mb-1 text-heading">
                  Location:
                </h4>
                <p className="pl-16 mb-5 text-sm text-body">Serbia</p>
              </div>
              <div className="group">
                <i className="icofont-envelope text-xl text-text-primary float-left w-11 h-11 bg-primary-light flex justify-center items-center rounded-full group-hover:bg-primary group-hover:text-white"></i>
                <h4 className="pl-16 text-2xl font-semibold mb-1 text-heading">
                  Email:
                </h4>
                <p className="pl-16 mb-5 text-sm text-body pt-1">
                  denis.mikhalev.pro@gmail.com
                </p>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};
