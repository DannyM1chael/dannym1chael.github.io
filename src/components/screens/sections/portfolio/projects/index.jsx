import React from 'react';
import { Link } from 'react-router-dom';

function Project({projectImg, projectName}) {

    return (
        <div className="col-lg-4 col-md-6 portfolio-item">
            <div class="portfolio-wrap">
                <img src= { projectImg } class="img-fluid" alt=""/>
                <div class="portfolio-links">
                    <Link to="#" title={ projectName }><i class="bx bx-plus"></i></Link>
                    <Link to="#" title="More Details"><i class="bx bx-link"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default Project
