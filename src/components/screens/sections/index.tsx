import { About } from "@/components/screens/sections/about";
// import { Portfolio } from "@/components/screens/sections/portfolio";
import { Contact } from "@/components/screens/sections/contact";
import { Resume } from "@/components/screens/sections/resume";

export const Sections = () => (
	<main
		id="main"
		className="transition-all duration-500 ease-in-out pt-6 xl:ml-[300px] overflow-hidden"
	>
		<About />
		<Resume />
		{/*<Portfolio />*/}
		<Contact />
	</main>
);
