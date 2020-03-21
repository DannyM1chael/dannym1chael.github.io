import React from 'react';
import Facts from './components/facts';
import Skills from './components/skills';

function About(props) {

    const ProfileImg = process.env.PUBLIC_URL + '/assets/img/profile.jpg';

    return (
        <React.Fragment>
            <section id="about" className="about">
                <div className="container">
                    <div className="section-title">
                        <h2>About</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={ProfileImg} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content">
                            <h3>Web Developer</h3>
                            <p className="font-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 9 August 1987</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +7 985 190 90 35</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>City:</strong> Moscow, Russia</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> 32</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Junior</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Email:</strong> coldsoulrusirk@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Facts />
            <Skills />
        </React.Fragment>
    )
}

export default About;