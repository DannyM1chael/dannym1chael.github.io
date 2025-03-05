import React from "react";
import { cn } from "@/lib";

export const ToggleMenu = ({ open, setOpen }) => (
  <button
    type="button"
    className="fixed right-4 top-4 z-50 border-0 bg-transparent text-2xl transition-all duration-400
             outline-none focus:outline-none leading-none cursor-pointer text-right xl:hidden"
  >
    <i
      className={cn(
        "text-[#149ddd]",
        open ? "icofont-close" : "icofont-navigation-menu",
      )}
      onClick={() => setOpen(!open)}
    ></i>
  </button>
);
