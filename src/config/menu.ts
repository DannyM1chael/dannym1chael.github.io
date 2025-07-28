export interface MenuItem {
	section: string;
	className: string;
	spanText: string;
}

export const menu: MenuItem[] = [
	{
		section: "hero",
		className: "bx bx-home",
		spanText: "Home",
	},
	{
		section: "about",
		className: "bx bx-user",
		spanText: "About",
	},
	{
		section: "facts",
		className: "bx bx-briefcase-alt",
		spanText: "Facts",
	},
	{
		section: "resume",
		className: "bx bx-file-blank",
		spanText: "Resume",
	},
	// {
	//   section: "portfolio",
	//   className: "bx bx-book-content",
	//   spanText: "Portfolio",
	// },
	{
		section: "contact",
		className: "bx bx-envelope",
		spanText: "Contact",
	},
];
