import React from 'react';
import { Link } from 'react-router-dom';

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
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link to="#" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></Link>
                  <Link to="#" title="More Details"><i className="bx bx-link"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link to="#" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></Link>
                  <Link to="#" title="More Details"><i className="bx bx-link"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link to="#" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="bx bx-plus"></i></Link>
                  <Link to="#" title="More Details"><i className="bx bx-link"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link to="#" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="bx bx-plus"></i></Link>
                  <Link to="#" title="More Details"><i className="bx bx-link"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link to="#" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="bx bx-plus"></i></Link>
                  <Link to="#" title="More Details"><i className="bx bx-link"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link to="#" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="bx bx-plus"></i></Link>
                  <Link to="#" title="More Details"><i className="bx bx-link"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link to="#" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="bx bx-plus"></i></Link>
                  <Link to="#" title="More Details"><i className="bx bx-link"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link to="#" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="bx bx-plus"></i></Link>
                  <Link to="#" title="More Details"><i className="bx bx-link"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link to="#" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></Link>
                  <Link to="#" title="More Details"><i className="bx bx-link"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
