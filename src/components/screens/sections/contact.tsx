import { useEffect } from "react";
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
        <div className="flex justify-center">
          <Form />
        </div>
      </div>
    </section>
  );
};
