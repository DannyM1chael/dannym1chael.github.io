import React, { useState, useEffect, useRef } from "react";
import { Navigation } from "./navigation";
import { Profile } from "./profile";
import { ToggleMenu } from "./toggle-menu";
import { useOnClickOutside } from "@/hooks";
import { cn } from "@/lib";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(true);
  const handleMobile = () => {
    setMobile(window.innerWidth > 1199);
  };

  useEffect(() => {
    window.addEventListener("resize", handleMobile);
    handleMobile();
    return () => {
      window.removeEventListener("resize", handleMobile);
    };
  }, []);

  const node = useRef<HTMLElement | null>(null);
  useOnClickOutside(node, () => setOpen(false));

  return (
    <header
      id="header"
      className={cn(
        "fixed top-0 bottom-0 w-[300px] transition-all duration-500 ease-in-out z-50 px-4 bg-sidebar",
        !mobile && !open ? "-left-[300px]" : "left-0",
      )}
      ref={node}
    >
      <div className="flex flex-col">
        <Profile />
        <Navigation open={open} setOpen={setOpen} />
        <ToggleMenu open={open} setOpen={setOpen} />
      </div>
    </header>
  );
};
