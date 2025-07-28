export interface EducationItem {
	title?: string;
	period: string;
	institution?: string;
	details?: string[];
	listItems?: string[];
}

export const educationItems: EducationItem[] = [
	{
		title: "Bachelor of Computer Science",
		period: "2019 - 2024",
		institution: "Moscow Witte University",
		details: [
			"Faculty – Information technology",
			"Specialty – Computer science",
		],
	},
	{
		title: "Application Security Environment",
		period: "2021",
		institution: "HackerU",
		listItems: [
			"Application environment",
			"Docker, Kubernetes",
			"Docker container security",
			"Kubernetes security",
			"Secure Apache Configuration, Nginx",
			"Cloud architecture and cloud security AWS",
			"Securing AWS IAM",
		],
	},
	{
		title: "Full-Stack Web Development",
		period: "2019 - 2020",
		institution: "HackerU",
		listItems: [
			"Understanding of Object Oriented Programming, MVC",
			"Knowledge of Unix-system",
			"HTML, CSS (SASS) and Javascript, jQuery, frameworks - Vanilla JS, React JS",
			"Understanding of UI/UX",
			"Вackend-development, Apache server, PHP and MySQL",
			"Cybersecurity, including OWASP top 10",
		],
	},
	{
		period: "2018",
		details: [
			"Essential Cloud Infrastructure: Foundation by Google Cloud",
			"Essential Cloud Infrastructure: Core Services by Google Cloud",
		],
	},
	{
		period: "2017",
		details: [
			"Programming for Everybody (Getting Started with Python) by University of Michigan",
			"Python Programming: A Concise Introduction by Wesleyan University",
			"Google Cloud Platform Fundamentals: Core Infrastructure by Google Cloud",
		],
	},
	{
		period: "2013",
		details: ["Microsoft Certified Technology Specialist"],
	},
	{
		period: "2004 - 2007",
		institution: "Irkutsk State Railway University",
		details: ["Faculty – Traffic management", "Specialty – Engineer"],
	},
];
