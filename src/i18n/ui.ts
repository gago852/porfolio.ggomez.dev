import type { UILocale } from "./types";

export const languages = {
  en: "🇺🇸",
  es: "🇪🇸",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

export const ui = {
  es: {
    "layout.title":
      "Porfolio de Gabriel Gomez - Desarrollador Full stack java con 4 años de experiencia",
    "layout.description":
      "Ingeniero de Software fullstack: aplicaciones Android con Java/Kotlin, servicios backend con Spring Boot y aplicaciones web con React.",
    "nav.home": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "nav.system": "Sistema",
    "nav.light": "Claro",
    "nav.dark": "Oscuro",
    "hero.badge": "Disponible para trabajar",
    "hero.title": "Hey, soy Gabriel",
    "hero.bio":
      "+4 años de experiencia. <strong>Ingeniero de Software</strong> de Colombia 🇨🇴. Especializado en el desarrollo de aplicaciones fullstack únicas.",
    "hero.mail": "Contáctame",
    "hero.linkedin": "LinkedIn",
    "hero.resume": "Resume",
    "hero.resume.spanish": "Español",
    "hero.resume.english": "Inglés",
    "exp.title": "Experiencia laboral",
    "projects.title": "Proyectos",
    "about.title": "Sobre mí",
    "about.bio": `<p>
      Empecé como desarrollador Android hace más de cuatro años,
      especializándome en Java para <strong>empresas de servicios públicos,
      construyendo sistemas de cuadrillas y facturación</strong>.
    </p>

    <p>
      La necesidad de integrar soluciones completas me llevó a aprender
      <strong>Spring Boot y React</strong>, pasando de ser un desarrollador
      mobile a liderar una migración fullstack: diseñando la API, el backend
      y conectándolo a una interfaz web moderna.
    </p>

    <p>
      Esa evolución define mi perfil hoy: un <strong>ingeniero de software
      fullstack</strong> que entiende tanto el ecosistema Android como la
      arquitectura de sistemas web, desde Colombia y en constante aprendizaje.
    </p>`,
    "footer.rights": "Casi todos los derechos reservados",
    "exp.know_more": "Saber más",
    exp: [
      {
        title: "Freelance Software Developer",
        date: "Actualmente...",
        company: "Autónomo",
        description:
          "Trabajo como freelance construyendo aplicaciones móviles Android, backends con Spring Boot y webs con React, entregando soluciones completas de software a medida.",
        bulletPoints: [
          "Migré un web service monolítico en Java a Spring Boot, mejorando la escalabilidad y reduciendo los tiempos de respuesta en un 40%.",
          "Construí un sistema de matriculación de cursos con React (frontend) y Spring Boot (backend), reduciendo el tiempo de matrícula en un 30%.",
          "Implementé la segunda fase de una aplicación móvil para el registro y seguimiento de PQR en una empresa de servicios públicos, optimizando el rendimiento y reduciendo los tiempos de carga en un 15%.",
        ],
      },
      {
        title: "Desarrollador de Software",
        date: "Junio 2024",
        company: "Extreme Technologies S.A.",
        description:
          "Analizo, diseño, desarrollo y doy mantenimiento a soluciones de software para control de cuadrillas de operarios en empresas de servicio publico como agua, luz y gas. Ademas apoye a un equipo de desarrollo para implementar un middleware a un sistema de cobros de un servicio de transporte publico de buses. Se utilizo tecnologías como Java, Android, PostgreSQL, entre otras.",
        link: "https://www.extreme.com.co/extreme/",
        bulletPoints: [
          "Desarrollé sincronización offline en Android (Java) que permitió a más de 40 cuadrillas reportar daños sin conexión, reduciendo los errores de carga de órdenes en un 25%.",
          "Implementé rastreo GPS optimizado en segundo plano, disminuyendo el consumo de batería de la app en ~20% y mejorando la precisión de seguimiento en campo.",
          "Creé un módulo de catalogación de árboles basado en archivos KMZ que eliminó duplicados y redujo el tiempo de registro por sitio en un 50%.",
          "Implementé funciones críticas como el botón de pánico y el monitoreo en tiempo real de autobuses, reduciendo los tiempos de respuesta ante incidentes en un 60%.",
        ],
      },
    ],
    "projects.code": "Código Fuente",
    projects: [
      {
        title: "Weather App",
        description:
          "Aplicación meteorológica de código abierto para Android creada con Kotlin y Jetpack Compose que ofrece previsiones en tiempo real, actualizaciones basadas en la ubicación y una interfaz de usuario moderna y personalizable mediante la API OpenWeather.",
        github: "https://github.com/gago852/WeatherApp",
        link: {
          kind: "googlePlay",
          href: "https://play.google.com/store/apps/details?id=com.gago.weatherapp",
        },
        image: "/projects/weatherappbanner.webp",
        tags: ["ANDROID", "KOTLIN"],
      },
      {
        title: "Resume Builder on LateX",
        description:
          "Un generador de currículos de código abierto que utiliza LaTeX para crear PDF de aspecto profesional y utiliza GitHub Actions para la creación y el despliegue automatizados.",
        github: "https://github.com/gago852/resume-latex",
        image: "/projects/resumelatexbanner.webp",
        tags: ["LATEX", "GITHUB"],
      },
      {
        title: "MatricuApp",
        description:
          "Aplicación web fullstack de matriculación académica. React para el frontend, Spring Boot para el backend, todo en un monorepo con despliegue integrado.",
        github: "https://github.com/gago852/MatricuApp",
        image: "/projects/matricuapp.webp",
        link: {
          kind: "web",
          href: "https://matricuapp.gabogomez.dev",
        },
        tags: ["REACT", "SPRING", "JAVA"],
      },
    ],
  },
  en: {
    "layout.title": `Gabriel Gomez's Portfolio - Android Developer and Programmer with 3 years of experience`,
    "layout.description":
      "Fullstack Software Engineer: Android applications with Java/Kotlin, backend services with Spring Boot and web applications with React.",
    "nav.home": "Experience",
    "nav.projects": "Projects",
    "nav.about": "About me",
    "nav.contact": "Contact",
    "nav.system": "System",
    "nav.light": "Light",
    "nav.dark": "Dark",
    "hero.badge": "Open to work",
    "hero.title": `Hey, I'm Gabriel`,
    "hero.bio":
      "+4 years of experience. <strong>Software Engineer</strong> from Colombia 🇨🇴. Specialized in the development of unique fullstack applications.",
    "hero.mail": "Contact me",
    "hero.linkedin": "LinkedIn",
    "hero.resume": "Resume",
    "hero.resume.spanish": "Spanish",
    "hero.resume.english": "English",
    "exp.title": "Experience",
    "projects.title": "Projects",
    "about.title": "About me",
    "about.bio": `<p>
      I started as an Android developer over four years ago, specializing in Java for <strong>utility companies, building crew and billing systems</strong>.
    </p>

    <p>
      The need to integrate complete solutions led me to learn <strong>Spring Boot and React</strong>, going from being a mobile developer to leading a fullstack migration: designing the API, the backend and connecting it to a modern web interface.
    </p>

    <p>
      That evolution defines my profile today: a <strong>fullstack software engineer</strong> who understands both the Android ecosystem and the architecture of web systems, from Colombia and constantly learning.
    </p>`,
    "footer.rights": "Almost all rights reserved",
    "exp.know_more": "Know more",
    exp: [
      {
        title: "Freelance Software Developer",
        date: "Currently...",
        company: "Self-employed",
        description:
          "I work as a freelancer building Android mobile apps, backends with Spring Boot and webs with React, delivering complete custom software solutions.",
        bulletPoints: [
          "Migrated a monolithic Java web service to Spring Boot, improving scalability and reducing response times by 40%.",
          "Built a course enrollment system with React (frontend) and Spring Boot (backend), reducing enrollment time by 30%.",
          "Implemented the second phase of a mobile application for the registration and tracking of PQR in a public utilities company, optimizing performance and reducing load times by 15%.",
        ],
      },
      {
        title: "Software Developer",
        date: "June 2024",
        company: "Extreme Technologies S.A.",
        description:
          "Analyze, design, develop and maintain software solutions for crew control in public utilities such as water, electricity and gas. I also supported a development team to implement a middleware to a billing system for a public transport bus service. We used technologies such as Java, Android, PostgreSQL, among others.",
        link: "https://www.extreme.com.co/extreme/",
        bulletPoints: [
          "Developed an offline synchronization feature in Android (Java) for over 40 field crews, enabling damage reporting without internet access and reducing upload errors by 25%.",
          "Optimized background GPS tracking to reduce app battery consumption by 20% and improve route accuracy for field teams.",
          "Built a KMZ-based tree cataloging module that eliminated duplicate records and reduced on-site registration time by 50%.",
          "Reduced incident response times by 60% by implementing critical safety features, including a panic button and real-time bus tracking.",
        ],
      },
    ],
    "projects.code": "Code",
    projects: [
      {
        title: "Weather App",
        description:
          "Open source weather app for Android built with Kotlin and Jetpack Compose that offers real-time forecasts, location-based updates and a modern, customizable user interface using the OpenWeather API.",
        github: "https://github.com/gago852/WeatherApp",
        link: {
          kind: "googlePlay",
          href: "https://play.google.com/store/apps/details?id=com.gago.weatherapp",
        },
        image: "/projects/weatherappbanner.webp",
        tags: ["ANDROID", "KOTLIN"],
      },
      {
        title: "Resume Builder on LateX",
        description:
          "An open source resume builder that uses LaTeX to create professional-looking PDFs and uses GitHub Actions for automated creation and deployment.",
        github: "https://github.com/gago852/resume-latex",
        image: "/projects/resumelatexbanner.webp",
        // link: { kind: 'web', href: 'https://legal.gabogomez.dev' },
        tags: ["LATEX", "GITHUB"],
      },
      {
        title: "MatricuApp",
        description:
          "Fullstack web application for academic enrollment. React for the frontend, Spring Boot for the backend, all in a single repository with integrated deployment.",
        github: "https://github.com/gago852/MatricuApp",
        image: "/projects/matricuapp.webp",
        link: {
          kind: "web",
          href: "https://matricuapp.gabogomez.dev",
        },
        tags: ["REACT", "SPRING", "JAVA"],
      },
    ],
  },
} satisfies Record<keyof typeof languages, UILocale>;
