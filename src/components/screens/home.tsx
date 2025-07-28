import { useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import { cn } from "@/lib";

interface HomeProps {
	typedStrings?: string[];
	name?: string;
}

export const Home = ({
	typedStrings = ["Frontend-Developer", "Backend-Developer"],
	name = "Denis Mikhalev",
}: HomeProps) => {
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (sectionRef.current) {
			sectionRef.current.style.setProperty(
				"--bg-image",
				`url(/assets/img/bg.jpg)`,
			);
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
			<div className="absolute inset-0 bg-sidebar/70 z-0" />

			<div className="relative z-10 min-w-[300px]">
				<h1 className="m-0 mb-2.5 text-6xl font-bold leading-[56px] text-white">
					{name}
				</h1>
				<p className="text-white mb-12 text-2xl">
					I&#39;m
					<ReactTyped
						className="ml-2.5 text-primary"
						strings={typedStrings}
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
