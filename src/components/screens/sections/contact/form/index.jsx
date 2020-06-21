import React from 'react';

export default function Form(props) {

    return (
        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="forms/contact.php" method="post" className="php-email-form">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="name" className="form-control" id="name"/>
                        <div className="validate"></div>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Your Email</label>
                        <input type="email" className="form-control" name="email" id="email"/>
                        <div className="validate"></div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Subject</label>
                    <input type="text" className="form-control" name="subject" id="subject"/>
                    <div className="validate"></div>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea className="form-control" name="message" rows="10"></textarea>
                    <div className="validate"></div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
        </div>
    )
}