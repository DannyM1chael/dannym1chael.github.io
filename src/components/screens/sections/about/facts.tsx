import Aos from "aos";
import { useEffect } from "react";
import CountUp from "react-countup";
import { FactItem } from "@/api";
import { cn } from "@/lib";

interface FactsProps {
	facts: FactItem[];
}

export const Facts = ({ facts }: FactsProps) => {
	useEffect(() => {
		Aos.init({});
	}, []);

	const renderFacts = (item: FactItem, index: number) => {
		return (
			<div
				className="w-full md:w-1/2 lg:w-1/4 md:flex md:items-stretch"
				data-aos="fade-up"
				key={index}
			>
				<div className="p-8 w-full">
					<i
						className={cn(
							`${item.className}`,
							"block text-4xl text-primary float-left",
						)}
					/>
					<CountUp start={0} end={item.spanText} duration={10} enableScrollSpy>
						{({ countUpRef }) => (
							<span
								ref={countUpRef}
								className="text-5xl leading-10 block font-bold text-heading ml-16"
							/>
						)}
					</CountUp>
					<p className="pt-4 mb-0 ml-16 font-['Raleway',sans-serif] text-sm text-body">
						<strong>{item.strongText}</strong>
					</p>
				</div>
			</div>
		);
	};

	return (
		<section id="facts" className="pb-8">
			<div className="container mx-auto px-4">
				<div className="text-center mb-8">
					<h2 className="text-3xl font-bold mb-4">Facts</h2>
					<p className="text-base">Some facts about me</p>
				</div>
				<div className="flex flex-wrap -mx-4">{facts.map(renderFacts)}</div>
			</div>
		</section>
	);
};
