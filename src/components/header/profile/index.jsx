import React from 'react';
import { Link } from 'react-router-dom';
import * as URL from '../../../router/url';

function Profile(props) {

    const ProfileImg = process.env.PUBLIC_URL + '/assets/img/profile.jpg';
    return(
        <div className="profile">
                <img src={ ProfileImg } alt="" className="img-fluid rounded-circle"/>
            <h1 className="text-light"><Link to= { URL.HOME }>Denis Mikhalev</Link></h1>
            <div className="social-links mt-3 text-center">
                <Link to="#" className="github"><i className="bx bxl-github"></i></Link>
                <Link to="#" className="skype"><i className="bx bxl-skype"></i></Link>
                <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
            </div>
        </div>
    )
}

export default Profile;