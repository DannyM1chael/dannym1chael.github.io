import React from 'react';
import { Link } from 'react-router-dom';
import socialLinks from './social_links';

export default function Profile(props) {

    const ProfileImg = process.env.PUBLIC_URL + '/assets/img/profile.jpg';

    const renderLinks = ({name, page}) =>{
        return (
            <a href= { page }  key={ name } className={`${ name }`}><i className={`bx bxl-${name}`}></i></a>
        )
    };

    return(
        <div className="profile">
            <img src={ ProfileImg } alt=""/>
            <h1 className="text-light"><Link to= '/'>Denis Mikhalev</Link></h1>
            <div className="social-links mt-3 text-center">
                {socialLinks.map(renderLinks) }
            </div>
        </div>
    )
};