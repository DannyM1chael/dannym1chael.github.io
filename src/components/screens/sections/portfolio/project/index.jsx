import React from 'react';

function Project({ name, page, img }) {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
        <img src={img} className="img-fluid" alt="" />
        <div className="portfolio-links">
          <a href={img} title={name}>
            <i className="bx bx-plus"></i>
          </a>
          <a href={page} target="_blank" rel="noopener noreferrer" title="More Details">
            <i className="bx bx-link"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
