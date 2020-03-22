import React from 'react';
import Navigation from './nav';
import Profile from './profile';
import ToggleMenu from './menu-toggle';

function Header(props) {
    
    return(
        <header id="header">
            <div className="d-flex flex-column">
                <Profile />
                <Navigation />
                <ToggleMenu />
            </div>
        </header>
    )
}

export default Header;