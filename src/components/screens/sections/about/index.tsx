import { Fragment, useEffect } from "react";
import Aos from "aos";
import { Facts } from "./facts";
import { Skills } from "./skills";
import { facts, skills } from "@/api";
import ProfileImg from "/assets/img/profile.jpg";

export const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out-back",
    });
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <Fragment>
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>
              I'm a Web developer with a passion for building meaningful
              products. I believe IT is the future, but technologies won't
              replace people at the end, they have to go forward together side
              by side.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src={ProfileImg} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Web Developer</h3>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Birthday:</strong> 09 August 1987
                    </li>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Phone:</strong> +7 985-190-90-35
                    </li>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>City:</strong> Moscow, Russia
                    </li>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Hobbies:</strong> Skydiving, Travelling
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Age:</strong> {currentYear - 1987}
                    </li>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Degree:</strong> BS
                    </li>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Email:</strong> coldsoulrusirk@gmail.com
                    </li>
                    <li>
                      <i className="icofont-rounded-right" />{" "}
                      <strong>Telegram:</strong> @DannyM1chael
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Facts facts={facts} />
      <Skills skills={skills} />
    </Fragment>
  );
};
