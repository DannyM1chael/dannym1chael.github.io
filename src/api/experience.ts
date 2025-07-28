export interface ExperienceItem {
	title: string;
	period: string;
	company: string;
	responsibilities: string[];
}

export const experienceItems: ExperienceItem[] = [
	{
		title: "Tech Lead | Senior Software Developer",
		period: "Dec 2022 – Present",
		company: "Promwad",
		responsibilities: [
			"Led development of a real-time audio/video stream management application (up to 4K resolution)",
			"Designed scalable UI components in React using Tailwind CSS and ShadcnUI",
			"Implemented a robust data pipeline with WebSocket and @tanstack/react-query, reducing network overhead by 80%",
			"Pioneered a dynamic audio matrix routing system and cut deployment times by 40% via Gitlab-CI automation",
			"Directed multi-converter and intelligent speed management projects, reducing API calls by 91.67%",
			"Built a secure railway voice notifications app with JWT authentication and RBAC",
		],
	},
	{
		title: "Full Stack Developer",
		period: "Apr 2022 – Dec 2022",
		company: "NutritionPro",
		responsibilities: [
			"Enhanced an internal ERP system by reducing page load times from 2 minutes to 3 seconds",
			"Migrated build system from Webpack to Vite, achieving a 10x improvement in build times",
			"Integrated Stripe to enable secure payment processing",
		],
	},
	{
		title: "Frontend Developer",
		period: "Apr 2021 – Apr 2022",
		company: "SellerExpert",
		responsibilities: [
			"Optimized a data-heavy application, reducing rendering time by 95% using Ag-Grid",
			"Implemented SEO optimization features to boost product visibility in competitive marketplaces",
		],
	},
	{
		title: "Full Stack Developer",
		period: "Aug 2020 – Apr 2021",
		company: "Innoscripta GmbH",
		responsibilities: [
			"Transitioned a monolithic CRM system into microservices, improving scalability by 30%",
			"Redesigned the company website using Next.js, cutting page load times by 50%",
		],
	},
];
