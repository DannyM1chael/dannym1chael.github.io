import React, { useState, useEffect, useRef } from 'react';
import { useOnClickOutside } from './hooks';
import Navigation from './nav';
import Profile from './profile';
import ToggleMenu from './menu-toggle';

function Header(props) {
    
    const [open, setOpen] = useState(false);
    const [mobile, setMobile] = useState(true);
    const handleMobile = () => {
        setMobile(window.innerWidth > 1199)
    };

    useEffect(() => {
        window.addEventListener('resize', handleMobile);
        return () => {
            window.removeEventListener('resize',handleMobile)
        }
    },[]);

    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    return(
        <header 
            id="header" 
            style={ !mobile && !open ? {left: "-300px"} : {left: "0px"} }
            ref={ node }
        >
            <div className="d-flex flex-column">
                <Profile />
                <Navigation open={ open } setOpen={ setOpen }/>
                <ToggleMenu open={ open } setOpen={ setOpen } />
            </div>
        </header>
    )
}

export default Header;