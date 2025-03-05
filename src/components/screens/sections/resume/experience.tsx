import React from "react";

export const Experience = () => (
  <>
    <h3 className="text-2xl font-bold mt-5 mb-5 text-[#050d18]">
      Professional Experience
    </h3>

    <div className="pl-5 pb-5 mt-[-8px] border-l-2 border-[#1f5297] relative">
      <div className="absolute w-4 h-4 rounded-full left-[-9px] top-0 bg-white border-2 border-[#1f5297]"></div>
      <h4 className="leading-[18px] text-lg font-semibold uppercase font-['Poppins',sans-serif] text-[#050d18] mb-2.5">
        Frontend Developer
      </h4>
      <h5 className="text-base bg-[#e4edf9] py-1.5 px-4 inline-block font-semibold mb-2.5">
        2021 - current time
      </h5>
      <p>
        <em>Ministry of Emergency Situations</em>
      </p>
      <ul className="pl-5">
        <li className="pb-2.5 list-disc">
          Developing new task management-system (Vue/Symfony)
        </li>
      </ul>
    </div>

    <div className="pl-5 pb-5 mt-[-8px] border-l-2 border-[#1f5297] relative last:pb-0">
      <div className="absolute w-4 h-4 rounded-full left-[-9px] top-0 bg-white border-2 border-[#1f5297]"></div>
      <h4 className="leading-[18px] text-lg font-semibold uppercase font-['Poppins',sans-serif] text-[#050d18] mb-2.5">
        Junior Full-Stack Developer
      </h4>
      <h5 className="text-base bg-[#e4edf9] py-1.5 px-4 inline-block font-semibold mb-2.5">
        2020 - 2021
      </h5>
      <p>
        <em>innoscripta GmbH</em>
      </p>
      <ul className="pl-5">
        <li className="pb-2.5 list-disc">
          Developed internal CRM-system (React/Redux/Laravel)
        </li>
        <li className="pb-2.5 list-disc">
          Developed Project Management Tool Clusterix (React/Redux)
        </li>
        <li className="pb-2.5 list-disc">
          Developed microservices (Vanilla JS)
        </li>
        <li className="pb-2.5 list-disc">
          Implemented new avatar system for 850 users with future growing to 10k
          (AWS)
        </li>
        <li className="pb-2.5 list-disc">
          Developed architecture and transfer main website to new platform
          (NEXT.js)
        </li>
      </ul>
    </div>
  </>
);
