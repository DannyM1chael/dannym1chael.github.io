import React from 'react';
import Project from '../portfolio/projects';

export default function Portfolio(props) {
    
    return(
        <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>Some my projects</p>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-frontend">Frontend</li>
                <li data-filter=".filter-fullstack">Full-Stack</li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            <Project projectName={'Vegefoods'} />
          </div>
        </div>
      </section>
    )
}
