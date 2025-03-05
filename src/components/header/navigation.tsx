import React from "react";
import { Link } from "react-scroll";
import { menu } from "@/config";

export const Navigation = ({ open, setOpen }) => {
  const renderNavSections = (item, index) => {
    return (
      <li key={index}>
        <Link
          to={`${item.section}`}
          smooth={true}
          className="links"
          onClick={() => setOpen(!open)}
        >
          <i className={`${item.className}`}></i>
          <span>{`${item.spanText}`}</span>
        </Link>
      </li>
    );
  };

  return (
    <nav className="nav-menu">
      <ul>{menu.map(renderNavSections)}</ul>
    </nav>
  );
};
