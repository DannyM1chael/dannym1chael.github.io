import React from 'react';
// import Odometer from 'react-odometerjs';

function Facts(props) {

    return (
        <section id="facts" className="facts">
            <div className="container">
                <div className="section-title">
                    <h2>Facts</h2>
                    <p>Some facts about me</p>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <i className="icofont-simple-smile"></i>
                                <span>15</span>
                            <p><strong>Happy Clients</strong></p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <i className="icofont-document-folder"></i>
                            <span>30</span>
                            <p><strong>Projects</strong></p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <i className="icofont-certificate-alt-1"></i>
                            <span>2340</span>
                            <p><strong>Hours Of Learning</strong></p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <i className="icofont-read-book"></i>
                            <span>10</span>
                            <p><strong>Years of XP</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Facts;