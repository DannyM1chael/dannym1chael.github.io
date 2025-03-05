import React from "react";
import { ReactTyped } from "react-typed";
import SectionImg from "/assets/img/bg.jpg";

export const Home = () => (
  <section
    id="hero"
    className="d-flex flex-column justify-content-center align-items-center"
    style={{
      background: `url(${SectionImg})`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
    }}
  >
    <div className="hero-container">
      <h1>Denis Mikhalev</h1>
      <p>
        I&#39;m
        <ReactTyped
          className="typed"
          strings={["Frontend-Developer", "Backend-Developer"]}
          typeSpeed={100}
          backSpeed={50}
          backDelay={2000}
          loop
        />
      </p>
    </div>
  </section>
);
