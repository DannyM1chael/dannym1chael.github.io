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
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Feel free to contact me</p>
        </div>
        <div className="row">
          <div
            className="col-lg-5 d-flex align-items-stretch"
            data-aos="fade-right"
          >
            <div className="info">
              <div className="address">
                <i className="icofont-google-map"></i>
                <h4>Location:</h4>
                <p>Serbia</p>
              </div>
              <div className="email">
                <i className="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>denis.mikhalev.pro@gmail.com.com</p>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};
