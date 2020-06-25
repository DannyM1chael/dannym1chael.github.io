import React, { useEffect } from 'react';
import Aos from 'aos';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Form(props) {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => JSON.stringify(data);
    const url_path = "src/components/screens/sections/contact/form/contact.php";
    const handleClick = () => {
        axios({
            method: "POST",
            url: url_path,
            data: onSubmit,
            headers: {"content-type": "application/json"}
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    };

    useEffect(() => {
        Aos.init({
          duration: 1000,
          easing: "ease-in-out-back"
        });
      }, []);

    return (
        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-left" data-aos-delay="100">
            <form action={ url_path } method="post" className="email-form" onSubmit={ handleSubmit(onSubmit) }>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Your Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            className="form-control" 
                            id="name"
                            ref={ register({required: "Please enter your name", minLength: 3}) }
                        />
                        { errors.name && <div className="validate">{ errors.name.message }</div>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Your Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            name="email" 
                            id="email"
                            ref={ register({
                                required: "Please check your email",
                                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i }
                            }) }
                        />
                        { errors.email && <div className="validate">Please check your email</div>}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="subject" 
                        id="subject"
                        ref={ register({required: "Please enter name of subject", minLength: 4}) }
                    />
                    { errors.subject && <div className="validate">{ errors.subject.message }</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                    className="form-control" 
                    name="message"
                    rows="10"
                    ref={ register({required: "Please write me something"}) }>
                    </textarea>
                    { errors.message && <div className="validate">{ errors.message.message }</div>}
                </div>
                <div className="mb-3">
                    <div className="sending">Sending</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center">
                    <button type="submit" onClick={(e) => handleClick(e)}>Send Message</button>
                </div>
            </form>
        </div>
    )
}