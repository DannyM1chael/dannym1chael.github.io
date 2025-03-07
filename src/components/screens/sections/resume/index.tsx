import { useEffect } from "react";
import Aos from "aos";
import { Summary } from "./summary";
import { Education } from "./education";
import { Experience } from "./experience";

export const Resume = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out-back",
    });
  }, []);

  return (
    <section id="resume" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Resume</h2>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 px-4" data-aos="fade-up">
            <Summary />
            <Education />
          </div>
          <div
            className="w-full lg:w-1/2 px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Experience />
          </div>
        </div>
      </div>
    </section>
  );
};
