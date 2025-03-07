import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { cn } from "@/lib";

export const ScrollButton = () => {
  const [isScroll, setIsScroll] = useState(false);
  const handleScroll = () => {
    setIsScroll(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollHandler = () => {
    scroll.scrollToTop();
  };

  return (
    <Link
      to="#"
      onClick={scrollHandler}
      className={cn(
        "fixed w-10 h-10 rounded-full right-4 bottom-4 bg-blue-500 text-white z-50 hover:bg-blue-400",
        isScroll ? "block" : "hidden",
      )}
    >
      <i className="absolute text-2xl top-2 left-2 icofont-simple-up"></i>
    </Link>
  );
};
