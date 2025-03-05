import React from "react";

export const Summary = () => (
  <>
    <h3 className="text-2xl font-bold mt-5 mb-5 text-[#050d18]">Summary</h3>
    <div className="pl-5 pb-0 mt-[-8px] border-l-2 border-[#1f5297] relative">
      <div className="absolute w-4 h-4 rounded-full left-[-9px] top-0 bg-white border-2 border-[#1f5297]"></div>
      <h4 className="leading-[18px] text-lg font-semibold uppercase font-['Poppins',sans-serif] text-[#050d18] mb-2.5">
        Denis Mikhalev
      </h4>
      <p>
        <em>
          Innovative and deadline-driven Web Developer with passion of
          developing web products from initial concept to final, polished
          deliverable.
        </em>
      </p>
    </div>
  </>
);
