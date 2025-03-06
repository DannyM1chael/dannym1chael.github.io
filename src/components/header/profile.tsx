import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib";
import { profile, ProfileLink } from "@/api";

interface ProfileProps {
  links?: ProfileLink[];
}

export const Profile = ({ links = profile }: ProfileProps) => {
  const renderLinks = ({ name, page }: ProfileLink) => (
    <a
      href={page}
      target="_blank"
      rel="noopener noreferrer"
      key={name}
      className={cn(
        "inline-block bg-sidebar-accent text-white leading-none p-1 mr-1 rounded-full text-center w-9 h-9 text-lg",
        "hover:bg-primary hover:text-white hover:no-underline",
        name,
      )}
    >
      <i className={`bx bxl-${name}`}></i>
    </a>
  );

  return (
    <div className="flex flex-col items-center px-4 py-6">
      <img
        src="/assets/img/profile.jpg"
        alt="Denis Mikhalev"
        className="my-4 mx-auto block w-[120px] border-8 border-sidebar-border"
      />
      <h1 className="text-2xl m-0 p-0 font-semibold text-center">
        <Link
          to="/"
          className="text-white no-underline hover:text-white hover:no-underline"
        >
          Denis Mikhalev
        </Link>
      </h1>
      <div className="mt-3 text-center">{links.map(renderLinks)}</div>
    </div>
  );
};
