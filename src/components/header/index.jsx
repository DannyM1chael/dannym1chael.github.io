import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    
    return(
        <header id="header">
            <div className="d-flex flex-column">
                <div className="profile">
                    <img src="" alt="" className="img-fluid rounded-circle" />
                    <h1 className="text-light"><Link to="index.html">Denis Mikhalev</Link></h1>
                    <div className="social-links mt-3 text-center">
                        <Link to="#" className="twitter"><i className="bx bxl-twitter"></i></Link>
                        <Link to="#" className="facebook"><i className="bx bxl-facebook"></i></Link>
                        <Link to="#" className="instagram"><i className="bx bxl-instagram"></i></Link>
                        <Link to="#" className="google-plus"><i className="bx bxl-skype"></i></Link>
                        <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;