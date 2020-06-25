import React, { useEffect } from 'react';
import Aos from 'aos';
import Summary from './summary';
import Education from './education';
import Experience from './xp';

function Resume(props) {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out-back"
    });
  }, []);

  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
              <Summary />
              <Education />
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <Experience />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume;