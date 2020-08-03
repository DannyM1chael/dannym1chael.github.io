import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import { useForm } from 'react-hook-form';

export default function Form(props) {
  const [status, setStatus] = useState('');
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const formData = JSON.stringify(data);
    const xhr = new XMLHttpRequest();
    xhr.open(formData.method, formData.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.upload.onprogress) {
        setStatus({ status: 'Sending' });
      }
      if (xhr.status === 200) {
        setStatus({ status: 'Success' });
      } else {
        setStatus({ status: 'Error' });
      }
    };
    xhr.send(formData);
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out-back',
    });
  }, []);

  return (
    <div
      className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"
      data-aos="fade-left"
      data-aos-delay="100">
      <form
        action="https://formspree.io/xrgyjlyy"
        method="POST"
        className="email-form"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              ref={register({
                required: 'Please enter your name',
                minLength: { value: 3, message: 'Your name is too short' },
              })}
            />
            {errors.name && <div className="validate">{errors.name.message}</div>}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              ref={register({
                required: 'Please check your email',
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i },
              })}
            />
            {errors.email && <div className="validate">{errors.email.message}</div>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject"
            ref={register({ required: 'Please enter name of subject', minLength: 4 })}
          />
          {errors.subject && <div className="validate">{errors.subject.message}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            name="message"
            rows="10"
            ref={register({ required: 'Please write me something' })}></textarea>
          {errors.message && <div className="validate">{errors.message.message}</div>}
        </div>
        <div className="mb-3 text-center">
          {status === 'Sending' && <div className="sending">Sending</div>}
          {status === 'Error' && <div className="error-message">Oops, there was an error</div>}
          {status === 'Success' ? (
            <div className="sent-message">Your message has been sent. Thank you!</div>
          ) : (
            <button type="submit">Send Message</button>
          )}
        </div>
      </form>
    </div>
  );
}
