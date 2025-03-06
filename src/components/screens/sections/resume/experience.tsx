import React from "react";
import { ExperienceItem, experienceItems } from "@/api";

interface ExperienceProps {
  items?: ExperienceItem[];
}

export const Experience = ({ items = experienceItems }: ExperienceProps) => {
  const renderExperienceItem = (item: ExperienceItem, index: number) => (
    <div
      key={index}
      className="pl-5 pb-5 mt-[-8px] border-l-2 border-primary-dark relative last:pb-0"
    >
      <div className="absolute w-4 h-4 rounded-full left-[-9px] top-0 bg-white border-2 border-primary-dark"></div>
      <h4 className="leading-[18px] text-lg font-semibold uppercase font-['Poppins',sans-serif] text-heading mb-2.5">
        {item.title}
      </h4>
      <h5 className="text-base bg-secondary py-1.5 px-4 inline-block font-semibold mb-2.5">
        {item.period}
      </h5>
      <p>
        <em>{item.company}</em>
      </p>
      <ul className="pl-5">
        {item.responsibilities.map((responsibility, i) => (
          <li key={i} className="pb-2.5 list-disc">
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <h3 className="text-2xl font-bold mt-5 mb-5 text-heading">
        Professional Experience
      </h3>
      {items.map(renderExperienceItem)}
    </>
  );
};
