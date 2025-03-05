import React from "react";
import { About } from "@/components/screens/sections/about";
import { Resume } from "@/components/screens/sections/resume";
import { Portfolio } from "@/components/screens/sections/portfolio";
import { Contact } from "@/components/screens/sections/contact";

export const Sections = () => (
  <main
    id="main"
    className="transition-all duration-500 ease-in-out pt-6 xl:ml-[300px] overflow-hidden"
  >
    <About />
    <Resume />
    <Portfolio />
    <Contact />
  </main>
);
