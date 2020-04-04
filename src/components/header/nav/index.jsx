import React from 'react';
import { Link } from 'react-scroll';
import NavSections from './nav';

function Navigation(props) {

    const renderNavSections = (item, index) => {
        return (
            <li key={ index }>
                <Link to= { `${item.section}` } smooth={ true } className='links'>
                    <i className={ `${item.className}` }></i> 
                    <span>
                        { `${item.spanText}`}
                    </span>
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
