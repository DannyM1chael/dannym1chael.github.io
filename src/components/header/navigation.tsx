import React from "react";
import { Link } from "react-scroll";
import { menu } from "@/config";
import { cn } from "@/lib";

export const Navigation = ({ open, setOpen }) => {
  const renderNavSections = (item, index) => {
    return (
      <li key={index} className="relative whitespace-nowrap text-white">
        <Link
          to={`${item.section}`}
          smooth={true}
          className={cn(
            "flex items-center text-[#a8a9b4] py-3 px-4 mb-2 text-base cursor-pointer",
            "hover:text-[#149ddd] hover:no-underline",
          )}
          onClick={() => setOpen(!open)}
        >
          <i
            className={cn(`${item.className}`, "text-2xl pr-2 text-[#149ddd]")}
          ></i>
          <span>{`${item.spanText}`}</span>
        </Link>
      </li>
    );
  };

  return (
    <nav className="pt-8 pl-8">
      <ul>{menu.map(renderNavSections)}</ul>
    </nav>
  );
};
