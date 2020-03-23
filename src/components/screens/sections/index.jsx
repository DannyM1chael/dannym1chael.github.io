import React from 'react';
import About from '../sections/about';
import Resume from '../sections/resume';
import Portfolio from '../sections/portfolio';
import Contact from '../sections/contact';

export default function Sections(props) {
    
    return(
        <main id="main">
            <About />
            <Resume />
            <Portfolio />
            <Contact />
        </main>
    )
}