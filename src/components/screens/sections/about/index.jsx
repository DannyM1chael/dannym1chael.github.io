import React,{ useEffect } from 'react';
import Aos from 'aos';
import Facts from './components/facts';
import Skills from './components/skills';
import someSkills from '../../../api/skills';
import SomeFacts from '../../../api/facts';

function About(props) {

    useEffect(() => {
        Aos.init({
          duration: 1000,
          easing: "ease-in-out-back"
        });
      }, []);

    const ProfileImg = process.env.PUBLIC_URL + '/assets/img/profile.jpg';

    return (
        <React.Fragment>
            <section id="about" className="about">
                <div className="container">
                    <div className="section-title">
                        <h2>About</h2>
                        <p> 
                            I'm a Web developer with a passion for building meaningful products. 
                            I believe IT is the future, but technologies won't replace people at the end, 
                            they have to go forward together side by side.
                        </p>
                    </div>
                    <div className="row">
                            <div className="col-lg-4" data-aos="fade-right">
                                <img src={ProfileImg} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>Web Developer</h3>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 09 August 1987</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +7 985-190-90-35</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>City:</strong> Moscow, Russia</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Hobbies:</strong> Skydiving, Travelling</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> 32</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Junior</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Email:</strong> coldsoulrusirk@gmail.com</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Telegram:</strong> @DannyM1chael</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Facts facts={ SomeFacts }/>
            <Skills skills={ someSkills }/>
        </React.Fragment>
    )
}

export default About;