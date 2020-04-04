import React from 'react';
import Form from './form';

function Contact(props) {

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Feel free to contact me</p>
                </div>
                <div className="row">
                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <i className="icofont-google-map"></i>
                                <h4>Location:</h4>
                                <p>Russia, Moscow</p>
                            </div>
                            <div className="email">
                                <i className="icofont-envelope"></i>
                                <h4>Email:</h4>
                                <p>coldsoulrusirk@gmail.com.com</p>
                            </div>
                            <div className="phone">
                                <i className="icofont-phone"></i>
                                <h4>Call:</h4>
                                <p>+7 985-190-90-35</p>
                            </div>
                        </div>
                    </div>
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default Contact;