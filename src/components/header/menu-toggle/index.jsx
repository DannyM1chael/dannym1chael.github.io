import React from 'react';

function ToggleMenu({ open, setOpen }) {
    
    return(
        <button type="button" className="mobile-nav-toggle d-xl-none">
            <i className={ open ? "icofont-close" : "icofont-navigation-menu"} onClick={ () => setOpen(!open) }></i>
        </button>
    )
}

export default ToggleMenu;