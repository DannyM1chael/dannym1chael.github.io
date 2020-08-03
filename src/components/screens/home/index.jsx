import React from 'react';
import Typed from 'react-typed';

function Home() {
  const SectionImg = process.env.PUBLIC_URL + '/assets/img/bg.jpg';

  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        background: `url(${SectionImg})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}>
      <div className="hero-container">
        <h1>Denis Mikhalev</h1>
        <p>
          I'm
          <Typed
            className="typed"
            strings={['Frontend-Developer', 'Backend-Developer']}
            typeSpeed={100}
            backSpeed={50}
            backDelay={2000}
            loop
          />
        </p>
      </div>
    </section>
  );
}

export default Home;
