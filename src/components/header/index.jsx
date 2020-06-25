import React, { useState } from 'react';
import Navigation from './nav';
import Profile from './profile';
import ToggleMenu from './menu-toggle';

function Header(props) {
    
    const [open, setOpen] = useState(false);

    return(
        <header id="header">
            <div className="d-flex flex-column">
                <Profile />
                <Navigation open={ open }/>
                <ToggleMenu open={ open } setOpen={ setOpen } />
            </div>
        </header>
    )
}

export default Header;