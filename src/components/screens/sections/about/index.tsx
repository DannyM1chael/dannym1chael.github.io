import React, { Fragment, useEffect } from "react";
import Aos from "aos";
import { Facts } from "./facts";
import { Skills } from "./skills";
import { facts, skills } from "@/api";

export const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out-back",
    });
  }, []);

  return (
    <Fragment>
      <section id="about" className="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">About</h2>
            <p className="text-base">
              I&#39;m a Web developer with a passion for building meaningful
              products. I believe IT is the future, but technologies won&#39;t
              replace people at the end, they have to go forward together side
              by side.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3" data-aos="fade-right">
              <img
                src="/assets/img/profile.jpg"
                className="max-w-full h-auto"
                alt="Denis Mikhalev"
              />
            </div>
            <div className="w-full lg:w-2/3 pt-4 lg:pt-0" data-aos="fade-left">
              <h3 className="font-bold text-2xl text-[#173b6c] mb-4">
                Web Developer
              </h3>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                  <ul className="list-none p-0">
                    <li className="pb-2.5">
                      <i className="icofont-rounded-right text-xl pr-0.5 text-[#149ddd]" />{" "}
                      <strong>Country:</strong> Serbia
                    </li>
                    <li className="pb-2.5">
                      <i className="icofont-rounded-right text-xl pr-0.5 text-[#149ddd]" />{" "}
                      <strong>Hobbies:</strong> Travelling
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2">
                  <ul className="list-none p-0">
                    <li className="pb-2.5">
                      <i className="icofont-rounded-right text-xl pr-0.5 text-[#149ddd]" />{" "}
                      <strong>Degree:</strong> BS
                    </li>
                    <li className="pb-2.5">
                      <i className="icofont-rounded-right text-xl pr-0.5 text-[#149ddd]" />{" "}
                      <strong>Email:</strong> denis.mikhalev.pro@gmail.com
                    </li>
                    <li className="pb-2.5">
                      <i className="icofont-rounded-right text-xl pr-0.5 text-[#149ddd]" />{" "}
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
