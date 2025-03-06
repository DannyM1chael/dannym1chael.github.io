import React, { useState, useEffect, useMemo } from "react";
import Aos from "aos";
import { projects, ProjectItem } from "@/api";
import { Project } from "./project";
import { cn } from "@/lib";

interface PortfolioState {
  data: ProjectItem[];
  category: string;
}

export const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [state, setState] = useState<PortfolioState>({
    data: projects,
    category: "All",
  });
  const [isAnimating, setIsAnimating] = useState(false);

  const categories: string[] = useMemo(() => {
    return [
      "All",
      ...Array.from(
        new Set(state.data.map((c) => c.category ?? "Uncategorized")),
      ),
    ];
  }, [state.data]);

  const filteredData = useMemo(() => {
    if (state.category && state.category !== "All") {
      return state.data.filter(
        (project) => project.category === state.category,
      );
    }
    return state.data;
  }, [state.data, state.category]);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleCategory = (category: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setState((prev) => ({ ...prev, category }));
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);
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
              {categories.map((category: string, index) => (
                <li
                  key={index}
                  className={cn(
                    "cursor-pointer inline-block px-4 py-2.5 text-sm font-semibold leading-none uppercase mb-1 transition-all duration-300 ease-in-out",
                    activeIndex === index
                      ? "text-primary"
                      : "text-muted hover:text-primary",
                  )}
                  onClick={() => handleCategory(category)}
                  onMouseDown={() => handleClick(index)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="flex flex-wrap -mx-4 relative"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            className={cn(
              "flex flex-wrap w-full transition-opacity duration-300",
              isAnimating ? "opacity-0" : "opacity-100",
            )}
          >
            {filteredData.map((project) => (
              <Project
                key={project.name}
                name={project.name}
                page={project.page}
                img={project.img}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
