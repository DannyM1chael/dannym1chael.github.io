import React, { useEffect } from "react";
import Aos from "aos";
import { SkillItem } from "@/api";

interface SkillsProps {
  skills: SkillItem[];
}

export const Skills = ({ skills }: SkillsProps) => {
  useEffect(() => {
    Aos.init({});
  }, []);

  const renderSkills = (item: SkillItem, index: number) => {
    return (
      <div className="block h-[50px] mb-6" key={index}>
        <span className="p-0 mb-1.5 uppercase block font-semibold font-['Poppins',sans-serif] text-heading">
          {item.skill}{" "}
          <i className="float-right font-normal">{`${item.value}%`}</i>
        </span>
        <div className="bg-secondary w-full">
          <div
            className="h-2.5 transition-all duration-900 ease-in-out delay-900 bg-primary"
            style={{ width: `${item.value}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 px-4" data-aos="fade-up">
            {skills.slice(0, skills.length / 2).map(renderSkills)}
          </div>
          <div
            className="w-full lg:w-1/2 px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {skills.slice(skills.length / 2).map(renderSkills)}
          </div>
        </div>
      </div>
    </section>
  );
};
