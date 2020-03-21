import React from 'react';
import Navigation from './nav';
import Profile from './profile';

function Header(props) {
    
    return(
        <header id="header">
            <div className="d-flex flex-column">
                <Profile />
                <Navigation />
            </div>
        </header>
    )
}

export default Header;