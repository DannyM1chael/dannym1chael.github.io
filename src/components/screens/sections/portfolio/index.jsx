import React from 'react';

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
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-web">Full-Stack</li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
          </div>
        </div>
      </section>
    )
}
