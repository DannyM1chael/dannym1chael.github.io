import React from "react";
import { educationItems } from "@/config";

export const Education = () => {
  const renderEducationItem = (item, index) => (
    <div
      key={index}
      className="pl-5 pb-5 mt-[-8px] border-l-2 border-[#1f5297] relative last:pb-0"
    >
      <div className="absolute w-4 h-4 rounded-full left-[-9px] top-0 bg-white border-2 border-[#1f5297]"></div>

      {item.title && (
        <h4 className="leading-[18px] text-lg font-semibold uppercase font-['Poppins',sans-serif] text-[#050d18] mb-2.5">
          {item.title}
        </h4>
      )}

      <h5 className="text-base bg-[#e4edf9] py-1.5 px-4 inline-block font-semibold mb-2.5">
        {item.period}
      </h5>

      {item.institution && (
        <p>
          <em>{item.institution}</em>
        </p>
      )}
      {item.details && item.details.map((detail, i) => <p key={i}>{detail}</p>)}

      {item.listItems && (
        <ul className="pl-5">
          {item.listItems.map((listItem, i) => (
            <li key={i} className="pb-2.5 list-disc">
              {listItem}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <>
      <h3 className="text-2xl font-bold mt-5 mb-5 text-[#050d18]">Education</h3>
      {educationItems.map(renderEducationItem)}
    </>
  );
};
