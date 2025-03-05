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
      className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"
      data-aos="fade-left"
      data-aos-delay="100"
    >
      <form
        action="https://formspree.io/xrgyjlyy"
        method="POST"
        className="email-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              {...register("name", {
                required: "Please enter your name",
                minLength: { value: 3, message: "Your name is too short" },
              })}
            />
            {errors.name && (
              <div className="validate">{errors.name.message}</div>
            )}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              {...register("email", {
                required: "Please check your email",
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i },
              })}
            />
            {errors.email && (
              <div className="validate">{errors.email.message}</div>
            )}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            {...register("subject", {
              required: "Please enter name of subject",
              minLength: { value: 4, message: "Your topic is too short" },
            })}
          />
          {errors.subject && (
            <div className="validate">{errors.subject.message}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            rows="10"
            {...register("message", { required: "Please write me something" })}
          ></textarea>
          {errors.message && (
            <div className="validate">{errors.message.message}</div>
          )}
        </div>
        <div className="mb-3">
          {status === "Error" && (
            <div className="error-message">Oops, there was an error</div>
          )}
          {status === "Success" && (
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
          )}
        </div>
        <div className="text-center">
          {status === "Progress" ? (
            <button className="btn btn-primary" type="button" disabled>
              Sending...
            </button>
          ) : (
            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
