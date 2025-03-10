import { Fragment, useEffect } from "react";
import Aos from "aos";
import { Facts } from "./facts";
import { Skills } from "./skills";
import { facts } from "@/api/facts";
import { skills } from "@/api/skills";
import { personalInfo, contactInfo, PersonalInfoItem } from "@/api";

interface AboutProps {
  personalInfo?: PersonalInfoItem[];
  contactInfo?: PersonalInfoItem[];
}

export const About = ({
  personalInfo: personalInfoProp = personalInfo,
  contactInfo: contactInfoProp = contactInfo,
}: AboutProps) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out-back",
    });
  }, []);

  const renderInfoItem = (item: PersonalInfoItem, index: number) => (
    <li key={index} className="pb-2.5">
      <i className="icofont-rounded-right text-xl pr-0.5 text-primary" />
      <strong>{item.label}:</strong> {item.value}
    </li>
  );

  return (
    <Fragment>
      <section id="about" className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">About</h2>
            <p className="text-base">
              Tech Lead and Senior Software Developer with 5+ years of
              experience building high-performance, scalable web applications.
              Proven leadership in designing and executing large-scale projects
              with complex system architecture, focusing on real-time data
              processing, performance optimization, and user-centric design.
              Adept at managing cross-functional teams and driving impactful
              results through technical innovation.
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
            <div
              className="w-full px-2 lg:w-2/3 pt-4 lg:pt-0"
              data-aos="fade-left"
            >
              <h3 className="font-bold text-2xl text-body mb-4">
                Web Developer
              </h3>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                  <ul className="list-none p-0">
                    {personalInfoProp.map(renderInfoItem)}
                    {contactInfoProp.map(renderInfoItem)}
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
