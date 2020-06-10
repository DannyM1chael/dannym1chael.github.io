import React from 'react';
import { Link } from 'react-router-dom';

function Project({projectImg, projectName, projectPage}) {

    return (
        <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap">
                <img src= { projectImg } className="img-fluid" alt=""/>
                <div className="portfolio-links">
                    <Link to="#" title={ projectName }><i className="bx bx-plus"></i></Link>
                    <Link to="#" title="More Details"><i className="bx bx-link"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default Project
