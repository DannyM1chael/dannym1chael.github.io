import Aos from "aos";
import { lazy, Suspense, useEffect } from "react";
import { SkillCategory } from "@/api";

const StackIcon = lazy(() => import("tech-stack-icons"));

interface SkillsProps {
	skills: SkillCategory[];
}

export const Skills = ({ skills }: SkillsProps) => {
	useEffect(() => {
		Aos.init({});
	}, []);

	return (
		<section id="skills" className="bg-gray-50 py-12">
			<div className="container mx-auto">
				<div className="text-center mb-8">
					<h2 className="text-3xl font-bold">Skills</h2>
				</div>
				{skills.map(({ category, skills }, index) => (
					<div key={index} className="mb-2">
						<h3 className="font-semibold mb-2">{category}</h3>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
							{skills.map(({ skill, icon }, idx) => (
								<div
									key={idx}
									className="flex flex-col items-center justify-center p-4 bg-white shadow rounded-lg"
									data-aos="fade-up"
								>
									<Suspense
										fallback={
											<div className="w-12 h-12 bg-gray-200 rounded animate-pulse" />
										}
									>
										<StackIcon name={icon} className="w-12 h-12" />
									</Suspense>
									<span className="mt-2 text-sm font-semibold text-gray-700">
										{skill}
									</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
