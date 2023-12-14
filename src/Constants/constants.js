/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faGithub,
	faLinkedin,
	faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
	faBagShopping,
	faBars,
	faDiceD6,
	faEnvelope,
	faWindowRestore,
	faX,
} from "@fortawesome/free-solid-svg-icons";

import {
	avatar,
	cssIcon,
	focusflow,
	Randomquote,
	gitIcon,
	githubIcon,
	htmlIcon,
	jsIcon,
	nodeIcon,
	sassIcon,
	bootstrapIcon,
	psqlIcon,
	reactIcon,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
	htmlIcon,
	cssIcon,
	jsIcon,
	reactIcon,
	sassIcon,
	bootstrapIcon,
	gitIcon,
	githubIcon,
	nodeIcon,
	avatar,
};

const icons = {
	faBars,
	faX,
	faWindowRestore,
	faBagShopping,
	faDiceD6,
	faReact,
	faGithub,
	faLinkedin,
	faEnvelope,
};

const introduction = {
	text: [
		"Hello there! I'm thrilled that you've stopped by!",

		"My name is Mohamed Mouhimine, I'm a student learning web development at OpenClassrooms and really enthusiastic about it.",

		"Beyond my studies, you'll often find me lifting weights or immersed in the world of gaming.",

		"I'm excited to collaborate with those who share my passion for creating exceptional experiences.",
	],
};

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "skills",
		title: "Skills",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const projects = [

{
		name: "Smart-Brain",
		description:
			"Unleash the power of smart image analysis with our cutting-edge app. Whether you're a photography enthusiast or just curious about the faces in your photos, through a high-performance user interface.",
		image: focusflow,
		source_code_link: "https://github.com/Aksachlisimo/smart-brain-v1.git",
		demo_link:
			"https://smart-v1.onrender.com/",
	},


	{
		name: "Random-Quote",
		description:
			"Designing a web application to generate motivational quotes using HTML, CSS, and JavaScript,",
		image: Randomquote,
		source_code_link: "https://github.com/Aksachlisimo/random-quote-app",
		demo_link: "https://aksachlisimo.github.io/random-quote-app/",
	},
	{
		name: "Focus-Timer",
		description:
			"Development of a web application aimed at optimizing time management and enhancing productivity through a high-performance user interface.",
		image: focusflow,
		source_code_link: "https://github.com/Aksachlisimo/FocusFlow",
		demo_link:
			"https://focustimer23.netlify.app/",
	},
	,
];

const memoji = {
	image: [avatar],
};

const skills = [
	{
		id: "html",
		title: "HTML",
		icon: htmlIcon,
		description:
			"I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
	},
	{
		id: "css",
		title: "CSS",
		icon: cssIcon,
		description:
			"I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
	},
	{
		id: "javascript",
		title: "JavaScript",
		icon: jsIcon,
		description:
			"I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
	},
	{
		id: "react",
		title: "React",
		icon: reactIcon,
		description:
			"I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
	},
	{
		id: "git",
		title: "Git",
		icon: gitIcon,
		description:
			"I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
	},
	{
		id: "github",
		title: "GitHub",
		icon: githubIcon,
		description:
			"I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
	},
	{
		id: "psql",
		title: "Postgresql",
		icon: psqlIcon,
		description:
			"I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.",
	},
	{
		id: "node",
		title: "Node",
		icon: nodeIcon,
		description:
			"When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.",
	},
	{
		id: "bootsrap",
		title: "Bootstrap",
		icon: bootstrapIcon,
		description:
			"When crafting web applications, my go-to framework is Bootstrap.",
	},
	{
		id: "sass",
		title: "Sass",
		icon: sassIcon,
		description:
			"In web application development, I opt for Sass as my preferred styling preprocessor.",
	},
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { icons, introduction, markerSvg, media, memoji, projects, skills };
