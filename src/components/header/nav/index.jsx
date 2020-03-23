import React from 'react';
import { Link } from 'react-router-dom';
import NavSections from './nav';
// import { animateScroll as scroll } from 'react-scroll';

function Navigation(props) {

    const renderNavSections = (item, index) => {
        
        return (
            <li key={ index }><Link to= { `/#${item.section}` }>
                    <i className={ `${item.className}` }></i> 
                    <span>{ `${item.spanText}`}</span>
                </Link>
            </li>
        )
    };

    return(
        <nav className="nav-menu">
            <ul>
                {NavSections.map(renderNavSections)}
            </ul>
        </nav>
    )
}

export default Navigation;
