import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

function ScrollButton(props) {

    const scrollHandler = () => {
        scroll.scrollToTop()
    };

    return(
        <Link to="#" onClick= { scrollHandler } className="back-to-top"><i className="icofont-simple-up"></i></Link>
    )
}

export default ScrollButton;