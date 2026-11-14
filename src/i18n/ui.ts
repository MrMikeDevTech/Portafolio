export const languages = {
	en: 'EN',
	es: 'ES',
} as const;

export const defaultLang = 'en';

export const ui = {
	en: {
		'nav.about': 'About',
		'nav.services': 'Services',
		'nav.projects': 'Projects',
		'nav.timeline': 'Timeline',
		'nav.stack': 'Stack',
		'nav.contact': 'Contact',
		'hero.cv': 'Download CV',
		'about.title': '01. About Me',
		'about.p1':
			"I'm a 22-year-old Computer Engineering student in my 7th semester at the CUCosta campus of Universidad de Guadalajara. My journey into tech started with a curiosity for how things work on the screen, which quickly evolved into a deep appreciation for building intuitive and aesthetically pleasing user interfaces.",
		'about.p2':
			"I'm passionate about Frontend development and, more broadly, about building applications and client-facing interfaces, while also having hands-on experience with Backend work. I enjoy solving computing problems, from data-analysis algorithms to server infrastructure  which is also what drew me to competitive programming: I've competed in two ICPC (International Collegiate Programming Contest) regional finals, ranking 82nd and 76th nationally.",
		'about.p3':
			"When I'm not coding, I'm usually exploring new design trends, contributing to open-source, or refining my understanding of software architecture.",
		'about.q1': 'What is my primary tech stack?',
		'about.a1':
			'I specialize in React, TypeScript, and Tailwind CSS. I also have solid experience with Next.js for server-side rendering and full-stack capabilities, along with fundamental backend knowledge using Node.js and basic database management.',
		'about.q2': 'Are you currently open to internships or roles?',
		'about.a2':
			'Yes, I am actively seeking internship opportunities or junior frontend developer roles where I can contribute to meaningful projects and continue growing my skillset in a professional environment.',
		'services.title': '02. Services',
		'services.subtitle': "I build and sell custom digital solutions. Here's what I can create for you:",
		'services.cta.title': 'Need something custom?',
		'services.cta.desc': "Let's talk about your project and find the right solution together.",
		'services.cta.button': 'Contact Me',
		'projects.title': '03. Projects',
		'projects.viewDetails': 'View Details',
		'timeline.title': '04. Education',
		'stack.title': '05. Tech Stack',
		'contact.title': '06. Get In Touch',
		'contact.subtitle':
			"I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
		'contact.name': 'Name',
		'contact.email': 'Email',
		'contact.subject': 'Subject',
		'contact.message': 'Message',
		'contact.send': 'Send Message',
		'contact.mailFallbackSubject': 'New message from the portfolio',
		'contact.mailHint': "This opens your email app with the message pre-filled. If nothing happens, email me directly at",
		'modal.repo': 'Repository',
		'modal.techStack': 'Tech Stack Used',
		'footer.tagline': 'Building precise, user-centric web experiences. Open to new projects and collaborations.',
		'footer.nav': 'Navigation',
		'footer.contact': 'Contact',
		'footer.rights': 'All rights reserved.',
		'footer.email': 'Email',
	},
	es: {
		'nav.about': 'Sobre mí',
		'nav.services': 'Servicios',
		'nav.projects': 'Proyectos',
		'nav.timeline': 'Trayectoria',
		'nav.stack': 'Stack',
		'nav.contact': 'Contacto',
		'hero.cv': 'Descargar CV',
		'about.title': '01. Sobre mí',
		'about.p1':
			'Soy un estudiante de Ingeniería en Computación de 22 años, cursando el 7.º semestre en el campus CUCosta de la Universidad de Guadalajara. Mi camino en la tecnología comenzó con curiosidad por cómo funcionan las cosas en pantalla, lo que evolucionó en un profundo aprecio por construir interfaces intuitivas y estéticamente agradables.',
		'about.p2':
			'Soy apasionado por el desarrollo Frontend y, en general, por construir aplicaciones e interfaces para el cliente, aunque también tengo experiencia práctica en Backend. Me gusta resolver problemas informáticos, desde algoritmos de análisis de datos hasta infraestructura de servidores  lo que también me llevó a la programación competitiva: he participado en dos finales regionales del ICPC (International Collegiate Programming Contest), logrando el puesto 82 y 76 a nivel nacional.',
		'about.p3':
			'Cuando no estoy programando, suelo explorar nuevas tendencias de diseño, contribuir a proyectos open-source o profundizar en arquitectura de software.',
		'about.q1': '¿Cuál es mi stack tecnológico principal?',
		'about.a1':
			'Me especializo en React, TypeScript y Tailwind CSS. También tengo sólida experiencia con Next.js para renderizado del lado del servidor y capacidades full-stack, junto con conocimientos básicos de backend usando Node.js y manejo de bases de datos.',
		'about.q2': '¿Estás actualmente abierto a prácticas profesionales o roles?',
		'about.a2':
			'Sí, estoy buscando activamente oportunidades de prácticas o roles de desarrollador frontend junior donde pueda contribuir a proyectos significativos y seguir creciendo profesionalmente.',
		'services.title': '02. Servicios',
		'services.subtitle': 'Construyo y ofrezco soluciones digitales a medida. Esto es lo que puedo crear para ti:',
		'services.cta.title': '¿Necesitas algo a medida?',
		'services.cta.desc': 'Hablemos de tu proyecto y encontremos juntos la solución ideal.',
		'services.cta.button': 'Contáctame',
		'projects.title': '03. Proyectos',
		'projects.viewDetails': 'Ver Detalles',
		'timeline.title': '04. Educación',
		'stack.title': '05. Stack Tecnológico',
		'contact.title': '06. Contáctame',
		'contact.subtitle':
			'Actualmente estoy buscando nuevas oportunidades. Si tienes una pregunta o solo quieres saludar, haré lo posible por responderte.',
		'contact.name': 'Nombre',
		'contact.email': 'Correo',
		'contact.subject': 'Asunto',
		'contact.message': 'Mensaje',
		'contact.send': 'Enviar Mensaje',
		'contact.mailFallbackSubject': 'Nuevo mensaje desde el portfolio',
		'contact.mailHint': 'Esto abrirá tu app de correo con el mensaje prellenado. Si no pasa nada, escríbeme directo a',
		'modal.repo': 'Repositorio',
		'modal.techStack': 'Tecnologías Utilizadas',
		'footer.tagline': 'Construyendo experiencias web precisas y centradas en el usuario. Abierto a nuevos proyectos y colaboraciones.',
		'footer.nav': 'Navegación',
		'footer.contact': 'Contacto',
		'footer.rights': 'Todos los derechos reservados.',
		'footer.email': 'Correo',
	},
} as const;

export type Lang = keyof typeof ui;
export type UiKey = keyof typeof ui.en;
