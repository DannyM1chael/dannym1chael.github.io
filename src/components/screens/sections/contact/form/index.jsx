import React, { useState, useEffect } from 'react';
import Aos from 'aos';
// import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Form(props) {

    const [data, setData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        messageSent: false,
        error: null
    });

    const resetForm = () => {
        setData({
            name:"",
            email: "",
            subject: "",
            message: ""
        })
    };

    // const { register, handleSubmit, errors } = useForm();
    // const onSubmit = data => JSON.stringify(data);
    const url_path = "http://localhost:4000/src/components/screens/sections/contact/form/contact.php";
    const handleSubmit = e => {
        e.preventDefault();
        axios({
            method: "POST",
            url: url_path,
            data: data,
            headers: {"content-type": "application/json"}
        }).then((response) => {
            if(response){
                setData(data.messageSent === true);
                resetForm();
            }
        }).catch((error) => {
            setData(data.error === error);
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
            <form action={ url_path } method="post" className="email-form" onSubmit={ (e) => handleSubmit(e) }>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Your Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            className="form-control" 
                            id="name"
                            value={ data.name }
                            onChange={(e) => setData({ name: e.target.value })}
                            // ref={ register({required: "Please enter your name", minLength: 3}) }
                        />
                        {/* { errors.name && <div className="validate">{ errors.name.message }</div>} */}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Your Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            name="email" 
                            id="email"
                            value={ data.email }
                            onChange={(e) => setData({ email: e.target.value })}
                            // ref={ register({
                            //     required: "Please check your email",
                            //     pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i }
                            // }) }
                        />
                        {/* { errors.email && <div className="validate">Please check your email</div>} */}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="subject" 
                        id="subject"
                        value={ data.subject }
                        onChange={(e) => setData({ subject: e.target.value })}
                        // ref={ register({required: "Please enter name of subject", minLength: 4}) }
                    />
                    {/* { errors.subject && <div className="validate">{ errors.subject.message }</div>} */}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                    className="form-control" 
                    name="message"
                    rows="10"
                    value={ data.message }
                    onChange={(e) => setData({ message: e.target.value })}
                    // ref={ register({required: "Please write me something"}) }
                    >
                    </textarea>
                    {/* { errors.message && <div className="validate">{ errors.message.message }</div>} */}
                </div>
                <div className="mb-3">
                    <div className="sending">Sending</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center">
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </div>
    )
}