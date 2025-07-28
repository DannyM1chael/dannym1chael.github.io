export interface ProjectItem {
	name: string;
	page: string;
	img: string;
	category?: string;
}

export const projects: ProjectItem[] = [
	{
		name: "Innoscripta",
		page: "https://www.innoscripta.com/",
		img: "/assets/img/projects/innoscripta.png",
		category: "Frontend",
	},
	{
		name: "SFF Innoscripta",
		page: "https://sff.innoscripta.com/",
		img: "/assets/img/projects/sff.png",
		category: "Frontend",
	},
	{
		name: "Vegefoods",
		page: "https://github.com/DannyM1chael/HackerU/tree/master/7_Frontend/project/vegefoods",
		img: "/assets/img/projects/Vegefoods.png",
		category: "Frontend",
	},
	{
		name: "Get/Check passes",
		page: "https://github.com/skinnerdany/gov",
		img: "/assets/img/projects/Pass.png",
		category: "Fullstack",
	},
	{
		name: "COVID-19-Tracker",
		page: "https://covid19trackerapp2020.netlify.app/",
		img: "/assets/img/projects/COVID.png",
		category: "Frontend",
	},
	{
		name: "Realtime-chat (MERN + Docker)",
		page: "https://github.com/DannyM1chael/mern-docker",
		img: "/assets/img/projects/MERN.png",
		category: "Fullstack",
	},
	{
		name: "Recipe-app",
		page: "https://recipeapp2020.netlify.app/",
		img: "/assets/img/projects/Recipe.png",
		category: "Frontend",
	},
	{
		name: "Pizza-delivery-app",
		page: "https://pizzadeliveryapp2020.herokuapp.com/",
		img: "/assets/img/projects/PizzaDelivery.png",
		category: "Fullstack",
	},
	{
		name: "Meditation-app",
		page: "https://github.com/DannyM1chael/Meditation-app",
		img: "/assets/img/projects/Meditation.png",
		category: "Frontend",
	},
	{
		name: "Advice-app",
		page: "https://adviceapp2020.netlify.app/",
		img: "/assets/img/projects/Advice.png",
		category: "Frontend",
	},
];
