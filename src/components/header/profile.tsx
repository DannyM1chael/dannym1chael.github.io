import React from "react";
import { Link } from "react-router-dom";
import { social } from "@/config";
import ProfileImg from "/assets/img/profile.jpg";
import { cn } from "@/lib";

export const Profile = () => {
  const renderLinks = ({ name, page }) => (
    <a
      href={page}
      target="_blank"
      rel="noopener noreferrer"
      key={name}
      className={cn(
        "inline-block bg-[#212431] text-white leading-none p-1 mr-1 rounded-full text-center w-9 h-9 text-lg",
        "hover:bg-[#149ddd] hover:text-white hover:no-underline",
        name,
      )}
    >
      <i className={`bx bxl-${name}`}></i>
    </a>
  );

  return (
    <div className="profile">
      <img
        src={ProfileImg}
        alt="Denis Mikhalev"
        className="my-4 mx-auto block w-[120px] border-8 border-[#2c2f3f]"
      />
      <h1 className="text-2xl m-0 p-0 font-semibold text-center">
        <Link
          to="/"
          className="text-white no-underline hover:text-white hover:no-underline"
        >
          Denis Mikhalev
        </Link>
      </h1>
      <div className="text-center">{social.map(renderLinks)}</div>
    </div>
  );
};
