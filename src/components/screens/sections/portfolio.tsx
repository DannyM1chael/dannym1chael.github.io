import React, { useState, useEffect } from "react";
import Aos from "aos";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { projects } from "@/api";
import { Project } from "./project";
import { cn } from "@/lib";

export const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const [state, setState] = useState({
    data: projects,
  });

  const categories = [
    ...["All"],
    ...new Set(state.data.map((c) => c.category)),
  ];

  let data = state.data;
  if (state.category && state.category !== "All") {
    data = data.filter((project) => project.category === state.category);
  }

  const handleCategory = (category) => {
    setState((prev) => ({ ...prev, category }));
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out-back",
    });
  }, []);

  return (
    <section id="portfolio" className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
          <p className="text-base">Some of my projects</p>
        </div>
        <div className="flex flex-wrap" data-aos="fade-up">
          <div className="w-full flex justify-center">
            <ul className="p-0 mx-auto mb-8 list-none text-center bg-white rounded-full px-4 py-0.5">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={cn(
                    "cursor-pointer inline-block px-4 py-2.5 text-sm font-semibold leading-none uppercase mb-1 transition-all duration-300 ease-in-out",
                    activeIndex === index
                      ? "text-[#149ddd]"
                      : "text-[#272829] hover:text-[#149ddd]",
                  )}
                  onClick={() => handleCategory(category)}
                  onMouseDown={() => handleClick(index)}
                  name={index}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <TransitionGroup
          className="flex flex-wrap -mx-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {data.map(({ name, page, img }, index) => (
            <CSSTransition key={index} timeout={500} classNames="item">
              <Project name={name} page={page} img={img} key={index} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </section>
  );
};
