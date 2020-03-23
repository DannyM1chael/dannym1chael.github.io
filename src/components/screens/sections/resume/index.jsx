import React from 'react';
import Summary from './summary';
import Education from './education';
import Experience from './xp';

function Resume(props) {

  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
              <Summary />
              <Education />
          </div>
          <div className="col-lg-6">
              <Experience />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume;