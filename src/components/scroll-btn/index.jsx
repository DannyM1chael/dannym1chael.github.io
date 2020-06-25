import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

function ScrollButton(props) {

    const [isScroll, setIsScroll] = useState(false);
    const handleScroll = () => {
        setIsScroll(window.scrollY > 100)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll',() => handleScroll)
    };
}, []);

    const scrollHandler = () => {
        scroll.scrollToTop()
    };

    return(
        <Link to="#" onClick= { scrollHandler } 
            className="back-to-top"
            style={isScroll? {display: "block"} : {display: "none"}}
        >
            <i className="icofont-simple-up"></i>
        </Link>
    )
}

export default ScrollButton;