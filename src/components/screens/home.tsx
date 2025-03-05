import React, { useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import SectionImg from "/assets/img/bg.jpg";
import { cn } from "@/lib";

export const Home = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.setProperty("--bg-image", `url(${SectionImg})`);
    }
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className={cn(
        "relative flex flex-col justify-center items-center w-full h-dvh",
        "bg-[image:var(--bg-image)] bg-cover bg-fixed bg-no-repeat",
      )}
    >
      <div className="absolute inset-0 bg-[rgba(5,13,24,0.7)] z-0"></div>

      <div className="relative z-10 min-w-[300px]">
        <h1 className="m-0 mb-2.5 text-6xl font-bold leading-[56px] text-white">
          Denis Mikhalev
        </h1>
        <p className="text-white mb-12 text-2xl">
          I&#39;m
          <ReactTyped
            className="ml-2.5 text-[#149ddd]"
            strings={["Frontend-Developer", "Backend-Developer"]}
            typeSpeed={100}
            backSpeed={50}
            backDelay={2000}
            loop
          />
        </p>
      </div>
    </section>
  );
};
