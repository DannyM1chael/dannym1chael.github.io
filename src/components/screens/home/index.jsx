import React from 'react';

function Home(props) {

    return(
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>Denis Mikhalev</h1>
                <p>I'm <span className="typed" data-typed-items="Frontend-Developer, Backend-Developer">
                        Frontend-Developer, Backend-Developer
                        </span>
                </p>
            </div>
        </section>
    )
}

export default Home;