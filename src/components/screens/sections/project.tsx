import React from "react";

export interface ProjectProps {
  name: string;
  page: string;
  img: string;
}

export const Project = ({ name, page, img }: ProjectProps) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="relative overflow-hidden z-10 transition-all duration-300 group">
        <div className="absolute inset-0 bg-white/50 z-20 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100" />
        <img src={img} className="max-w-full h-auto" alt={name} />
        <div className="absolute left-0 right-0 -bottom-16 z-30 flex justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
          <a
            href={page}
            target="_blank"
            rel="noopener noreferrer"
            title="More Details"
            className="w-full text-white text-center text-2xl bg-primary/75 hover:bg-primary/95 transition-all duration-300"
          >
            <i className="bx bx-link py-2 block"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
