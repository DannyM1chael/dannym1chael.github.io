import React from 'react';
import { Link } from 'react-router-dom';

function Project({name, page, img}) {

    return (
        <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap">
                <img src={ img } className="img-fluid" alt=""/>
                <div className="portfolio-links">
                    <Link to={ img } title={ name }><i className="bx bx-plus"></i></Link>
                    <a href= { page } target="blank" title="More Details"><i className="bx bx-link"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Project
