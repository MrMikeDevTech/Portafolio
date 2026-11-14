export interface Localized {
	en: string;
	es: string;
}

export type IconName =
	| 'github'
	| 'linkedin'
	| 'mail';

export interface SocialLink {
	icon: IconName;
	href: string;
	label: string;
}

export interface Profile {
	name: string;
	role: Localized;
	description: Localized;
	email: string;
	avatar: string;
	logo: string;
	cv: {
		en: string;
		es: string;
	};
	socials: SocialLink[];
}

export interface Service {
	icon: string;
	accent: 'primary' | 'tertiary';
	title: Localized;
	description: Localized;
}

export interface Project {
	id: string;
	title: Localized;
	subtitle: Localized;
	summary: Localized;
	description: Localized;
	image: string;
	images: string[];
	tech: string[];
	github: string;
	demo?: string;
}

export interface TimelineEntry {
	title: Localized;
	institution: string;
	period: Localized;
	description: Localized;
	accent: 'primary' | 'tertiary';
}

export interface StackItem {
	icon: string;
	accent: 'primary' | 'tertiary' | 'secondary' | 'on-surface';
	label: string;
}

export interface StackCategory {
	icon: string;
	accent: 'primary' | 'tertiary' | 'secondary';
	title: Localized;
	items: StackItem[];
}

export const profile: Profile = {
	name: 'Diego Emmanuel Rodriguez Ruvalcaba',
	role: {
		en: 'Frontend Developer',
		es: 'Desarrollador Frontend',
	},
	description: {
		en: 'Crafting precise, user-centric web experiences with modern tools and a design-driven approach. Based in logic, styled with passion.',
		es: 'Creando experiencias web precisas y centradas en el usuario con herramientas modernas y un enfoque orientado al diseño. Basado en lógica, con estilo y pasión.',
	},
	email: 'kalkent987@gmail.com',
	avatar: '/foto.webp',
	logo: '/logo.webp',
	cv: {
		en: '/cv-en.pdf',
		es: '/cv-es.pdf',
	},
	socials: [
		{ icon: 'github', href: 'https://github.com/MrMikeDevTech', label: 'GitHub' },
		{ icon: 'linkedin', href: 'https://www.linkedin.com/in/mrmikedev/', label: 'LinkedIn' },
		{ icon: 'mail', href: 'mailto:diego.rodriguez9332@alumnos.udg.mx', label: 'Email' },
	],
};

export const services: Service[] = [
	{
		icon: 'smart_toy',
		accent: 'primary',
		title: { en: 'Discord Bots', es: 'Bots de Discord' },
		description: {
			en: "Custom bots for moderation, automation, economy systems, and community engagement tailored to your server's needs.",
			es: 'Bots personalizados para moderación, automatización, sistemas de economía e interacción con la comunidad, adaptados a las necesidades de tu servidor.',
		},
	},
	{
		icon: 'language',
		accent: 'tertiary',
		title: { en: 'Web Pages', es: 'Páginas Web' },
		description: {
			en: 'Fast, responsive, and visually polished websites and landing pages built with modern frameworks and best practices.',
			es: 'Sitios web y landing pages rápidos, responsivos y visualmente pulidos, construidos con frameworks modernos y buenas prácticas.',
		},
	},
	{
		icon: 'hub',
		accent: 'primary',
		title: { en: 'Web Systems', es: 'Sistemas Web' },
		description: {
			en: 'Full-stack web platforms with dashboards, authentication, databases, and business logic designed around your workflow.',
			es: 'Plataformas web full-stack con dashboards, autenticación, bases de datos y lógica de negocio diseñada en torno a tu flujo de trabajo.',
		},
	},
	{
		icon: 'desktop_windows',
		accent: 'tertiary',
		title: { en: 'Desktop Apps', es: 'Aplicaciones de Escritorio' },
		description: {
			en: 'Cross-platform desktop applications for Windows, macOS, and Linux, built for performance and a native feel.',
			es: 'Aplicaciones de escritorio multiplataforma para Windows, macOS y Linux, construidas para rendimiento y una experiencia nativa.',
		},
	},
	{
		icon: 'smartphone',
		accent: 'primary',
		title: { en: 'Mobile Apps', es: 'Aplicaciones Móviles' },
		description: {
			en: 'iOS and Android applications with clean UI, smooth performance, and integration with your backend services.',
			es: 'Aplicaciones iOS y Android con interfaz limpia, rendimiento fluido e integración con tus servicios backend.',
		},
	},
];

export const projects: Project[] = [
	{
		id: 'two-guys-burgers',
		title: { en: 'Two Guys Burgers', es: 'Two Guys Burgers' },
		subtitle: { en: 'Database Course — Full-stack Ordering Platform', es: 'Materia de Bases de Datos — Plataforma de Pedidos Full-stack' },
		summary: {
			en: 'A full-stack ordering platform for a burger restaurant, built for the Database Engineering course in the 6th semester of Computer Engineering at Universidad de Guadalajara (CUCosta). Includes user accounts, an ordering flow, and an admin dashboard backed by MongoDB.',
			es: 'Plataforma full-stack de pedidos para una hamburguesería, desarrollada para la materia de Bases de Datos en el sexto semestre de Ingeniería en Computación en la Universidad de Guadalajara (CUCosta). Incluye cuentas de usuario, flujo de pedidos y un panel de administración respaldado por MongoDB.',
		},
		description: {
			en: '<p>A full-stack ordering platform built for the Database Engineering course at Universidad de Guadalajara (CUCosta), designed around a burger restaurant called "Two Guys Burgers." It covers the full customer ordering flow alongside an admin dashboard for managing the menu and orders.</p><p>Built with React, Node.js, and MongoDB, with the frontend deployed via Astro and styled with Tailwind CSS.</p>',
			es: '<p>Plataforma full-stack de pedidos desarrollada para la materia de Bases de Datos en la Universidad de Guadalajara (CUCosta), diseñada en torno a una hamburguesería llamada "Two Guys Burgers". Cubre todo el flujo de pedidos del cliente junto con un panel de administración para gestionar el menú y los pedidos.</p><p>Construida con React, Node.js y MongoDB, con el frontend desplegado mediante Astro y estilizado con Tailwind CSS.</p>',
		},
		image:
			'https://github.com/MrMikeDevTech/TwoGuysBurgers/raw/master/assets/Foto1.png',
		images: [
			'https://github.com/MrMikeDevTech/TwoGuysBurgers/raw/master/assets/Foto1.png',
			'https://github.com/MrMikeDevTech/TwoGuysBurgers/raw/master/assets/Foto2.png',
			'https://github.com/MrMikeDevTech/TwoGuysBurgers/raw/master/assets/Foto3.png',
			'https://github.com/MrMikeDevTech/TwoGuysBurgers/raw/master/assets/Foto4.png',
			'https://github.com/MrMikeDevTech/TwoGuysBurgers/raw/master/assets/Foto5.png'
		],
		tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Astro'],
		github: 'https://github.com/MrMikeDevTech/TwoGuysBurgers',
		demo: 'https://two.guysburger.shop/',
	},
	{
		id: 'estructuras-de-patos',
		title: { en: 'Estructuras de Patos', es: 'Estructuras de Patos' },
		subtitle: { en: 'Data Structures Course — Desktop Task App', es: 'Materia de Estructuras de Datos — App de Tareas de Escritorio' },
		summary: {
			en: 'A desktop task-management app built for the Data Structures course, with a Python backend and a Vite frontend, packaged as a portable executable with PyInstaller. Includes a local API, database handling, and a simple build flow for both frontend and backend.',
			es: 'Una aplicación de tareas de escritorio desarrollada para la materia de Estructuras de Datos, con backend en Python y frontend en Vite, empaquetada como ejecutable portable con PyInstaller. Incluye una API local, manejo de base de datos y un flujo de compilación sencillo para frontend y backend.',
		},
		description: {
			en: '<p>"Estructuras de Patos" (a pun on "Estructuras de Datos," Spanish for Data Structures) is a desktop task-management application built for the Data Structures course. The backend is written in Python and exposes a local API backed by SQLite, while the frontend is built with React and Vite.</p><p>The whole app is packaged into a single portable executable using PyInstaller, so it can run without installing Python or any dependencies.</p>',
			es: '<p>"Estructuras de Patos" es un juego de palabras con "Estructuras de Datos", y es una aplicación de gestión de tareas de escritorio desarrollada para la materia de Estructuras de Datos. El backend está escrito en Python y expone una API local respaldada por SQLite, mientras que el frontend está construido con React y Vite.</p><p>Toda la aplicación se empaqueta en un único ejecutable portable usando PyInstaller, por lo que puede ejecutarse sin instalar Python ni ninguna dependencia.</p>',
		},
		image:
			'https://github.com/MrMikeDevTech/EstructurasDePatos/raw/master/src/assets/Ducky-1.png',
		images: [
			'https://github.com/MrMikeDevTech/EstructurasDePatos/raw/master/src/assets/Ducky-1.png',
			'https://github.com/MrMikeDevTech/EstructurasDePatos/raw/master/src/assets/Ducky-2.png',
			'https://github.com/MrMikeDevTech/EstructurasDePatos/raw/master/src/assets/Ducky-3.png'
		],
		tech: ['Python', 'React', 'Vite', 'Tailwind CSS', 'SQLite'],
		github: 'https://github.com/MrMikeDevTech/EstructurasDePatos',
	},
	{
		id: 'ogerpage',
		title: { en: 'Ogerpage', es: 'Ogerpage' },
		subtitle: { en: 'Internet Programming Course — Pokémon Fan Page', es: 'Materia de Programación para Internet — Página de Fan de Pokémon' },
		summary: {
			en: 'A fan page about my favorite Pokémon, Ogerpon, built for the Internet Programming course.',
			es: 'Esta es una página web sobre mi Pokémon favorito, Ogerpon, hecha para la clase de Programación para Internet.',
		},
		description: {
			en: '<p>A single-page fan site dedicated to Ogerpon, my favorite Pokémon, built as a project for the Internet Programming course.</p><p>Built with Astro, TypeScript, and Tailwind CSS, focusing on clean layout and presentation rather than complex functionality.</p>',
			es: '<p>Un sitio de una sola página dedicado a Ogerpon, mi Pokémon favorito, construido como proyecto para la clase de Programación para Internet.</p><p>Hecho con Astro, TypeScript y Tailwind CSS, con un enfoque en un diseño limpio y en la presentación más que en funcionalidad compleja.</p>',
		},
		image:
			'https://github.com/MrMikeDevTech/Ogerpage/raw/master/public/banners/ogerpon_banner.webp',
		images: [
			'https://github.com/MrMikeDevTech/Ogerpage/raw/master/public/banners/ogerpon_banner.webp',
		],
		tech: ['Astro', 'TypeScript', 'Tailwind CSS'],
		github: 'https://github.com/MrMikeDevTech/Ogerpage',
	},
];

export const timeline: TimelineEntry[] = [
	{
		title: { en: 'High School Diploma — Computing Specialization', es: 'Bachillerato — Especialización en Informática' },
		institution: 'Colegio de Bachilleres del Estado de Jalisco',
		period: { en: '2019 - 2022', es: '2019 - 2022' },
		description: {
			en: 'Completed high school with a small specialization in computing, sparking an early interest in technology.',
			es: 'Completé la preparatoria con una pequeña especialización en informática, lo que despertó un interés temprano por la tecnología.',
		},
		accent: 'tertiary',
	},
	{
		title: { en: 'Computer Engineering', es: 'Ingeniería en Computación' },
		institution: 'Universidad de Guadalajara — CUCosta',
		period: { en: '2023 - Present', es: '2023 - Presente' },
		description: {
			en: 'Studying Computer Engineering with a focus on frontend development, problem solving, and software architecture — currently in the 7th semester.',
			es: 'Estudiando Ingeniería en Computación con enfoque en desarrollo frontend, resolución de problemas y arquitectura de software — actualmente en el 7.º semestre.',
		},
		accent: 'primary',
	},
	{
		title: { en: 'ICPC Regional Final', es: 'Final Regional ICPC' },
		institution: 'EGADE, Tecnológico de Monterrey — Monterrey',
		period: { en: '2024', es: '2024' },
		description: {
			en: 'Competed in the ICPC regional final against teams from across Mexico, ranking 82nd nationally.',
			es: 'Participé en la final regional del ICPC compitiendo contra equipos de todo México, logrando el puesto 82 a nivel nacional.',
		},
		accent: 'tertiary',
	},
	{
		title: { en: 'ICPC Regional Final', es: 'Final Regional ICPC' },
		institution: 'ESCOM, Instituto Politécnico Nacional — CDMX',
		period: { en: '2026', es: '2026' },
		description: {
			en: 'Competed in the ICPC (International Collegiate Programming Contest) regional final against teams from across Mexico, ranking 74th nationally.',
			es: 'Participé en la final regional del ICPC (International Collegiate Programming Contest) compitiendo contra equipos de todo México, logrando el puesto 74 a nivel nacional.',
		},
		accent: 'primary',
	},
	{
		title: { en: 'Service Provider — Computing & Telecom Learning Unit', es: 'Prestador de Servicios — Unidad de Cómputo y Telecomunicaciones' },
		institution: 'CUCosta, Universidad de Guadalajara',
		period: { en: '2026 - Present', es: '2026 - Presente' },
		description: {
			en: 'Serving as a service provider for the Computing and Telecommunications Learning Unit at CUCosta, supporting academic computing initiatives.',
			es: 'Prestador de servicios en la Unidad de Cómputo y Telecomunicaciones para el Aprendizaje en CUCosta, apoyando iniciativas académicas de cómputo.',
		},
		accent: 'tertiary',
	},
];

export const stack: StackCategory[] = [
	{
		icon: 'desktop_windows',
		accent: 'primary',
		title: { en: 'Frontend', es: 'Frontend' },
		items: [
			{ icon: 'html', accent: 'primary', label: 'HTML' },
			{ icon: 'css', accent: 'tertiary', label: 'CSS' },
			{ icon: 'widgets', accent: 'secondary', label: 'React' },
			{ icon: 'javascript', accent: 'on-surface', label: 'JavaScript' },
			{ icon: 'code', accent: 'primary', label: 'TypeScript' },
			{ icon: 'language', accent: 'tertiary', label: 'Next.js' },
			{ icon: 'rocket_launch', accent: 'secondary', label: 'Astro' },
		],
	},
	{
		icon: 'database',
		accent: 'tertiary',
		title: { en: 'Backend', es: 'Backend' },
		items: [
			{ icon: 'terminal', accent: 'primary', label: 'Node.js' },
			{ icon: 'bolt', accent: 'tertiary', label: 'Bun' },
			{ icon: 'speed', accent: 'secondary', label: 'Go' },
			{ icon: 'alt_route', accent: 'on-surface', label: 'Express' },
			{ icon: 'api', accent: 'primary', label: 'REST API' },
			{ icon: 'storage', accent: 'tertiary', label: 'PostgreSQL' },
		],
	},
	{
		icon: 'handyman',
		accent: 'secondary',
		title: { en: 'Tools', es: 'Herramientas' },
		items: [
			{ icon: 'account_tree', accent: 'primary', label: 'Git' },
			{ icon: 'terminal', accent: 'tertiary', label: 'VS Code' },
			{ icon: 'package_2', accent: 'secondary', label: 'Docker' },
			{ icon: 'rocket_launch', accent: 'on-surface', label: 'Vercel' },
			{ icon: 'cloud', accent: 'primary', label: 'AWS' },
		],
	},
];
