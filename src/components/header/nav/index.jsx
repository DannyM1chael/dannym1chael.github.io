import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import * as URL from '../../../router/url';
import { animateScroll as scroll } from 'react-scroll';

function Navigation(props) {

    const scrollHandler = () => {
        scroll.scrollTo(680)
    }
    
    return(
        <nav className="nav-menu">
            <ul>
                <li><Link to= { URL.HOME }><i className="bx bx-home"></i> <span>Home</span></Link></li>
                <li><Link to= { URL.ABOUT } onClick= { scrollHandler }><i className="bx bx-user"></i> <span>About</span></Link></li>
                <li><Link to= { URL.RESUME }><i className="bx bx-file-blank"></i> <span>Resume</span></Link></li>
                <li><Link to= { URL.PORTFOLIO }><i className="bx bx-book-content"></i> Portfolio</Link></li>
                <li><Link to= { URL.CONTACT }><i className="bx bx-envelope"></i> Contact</Link></li>
            </ul>
        </nav>
    )
}

export default withRouter(Navigation)