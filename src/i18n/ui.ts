export const languages = {
  en: "🇺🇸",
  es: "🇪🇸",
};

export const defaultLang = "en";

export const ui = {
  es: {
    "layout.title":
      "Porfolio de Gabriel Gomez - Desarrollador y Programador Android con 3 años de experiencia",
    "layout.description":
      "Contrata a Gabriel para crear tu aplicación móvil. Desarrollador móvil. Especializado en crear aplicaciones Android únicas.",
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
      "+3 años de experiencia. <strong>Ingeniero de Software</strong> de Colombia 🇨🇴. Especializado en el desarrollo de aplicaciones móviles únicas.",
    "hero.mail": "Contáctame",
    "hero.linkedin": "LinkedIn",
    "hero.resume": "Resume",
    "hero.resume.spanish": "Español",
    "hero.resume.english": "Inglés",
    "exp.title": "Experiencia laboral",
    "projects.title": "Proyectos",
    "about.title": "Sobre mí",
    "about.bio": `<p>
      Comencé hace más de tres años en el desarrollo de aplicaciones Android,
      especializándome en Java y el ecosistema de Android. Durante este tiempo,
      he trabajado para varias <strong
        >empresas de servicios públicos, desarrollando sistemas de control de cuadrillas y facturación</strong
      >, asegurando la implementación y la ejecución eficiente de estas
      aplicaciones.
    </p>

    <p>
      Mi interés por mejorar y optimizar el desarrollo móvil me llevó a aprender
      Kotlin y Jetpack Compose, además de profundizar en pruebas para <strong> 
      la calidad del software.</strong
      >
    </p>

    <p>
      Desde Colombia, me mantengo en constante aprendizaje, explorando <strong>
        tecnologías para el desarrollo móvil multiplataforma, como Flutter y
        React Native</strong
      >, y adoptando mejores prácticas para seguir creciendo como desarrollador.
    </p>`,
    "footer.rights": "Casi todos los derechos reservados",
    "exp.know_more": "Saber más",
    exp: [
      {
        title: "Desarrollador de Software",
        date: "Junio 2024",
        company: "Extreme Technologies S.A.",
        description:
          "Analizo, diseño, desarrollo y doy mantenimiento a soluciones de software para control de cuadrillas de operarios en empresas de servicio publico como agua, luz y gas. Ademas apoye a un equipo de desarrollo para implementar un middleware a un sistema de cobros de un servicio de transporte publico de buses. Se utilizo tecnologías como Java, Android, PostgreSQL, entre otras.",
        link: "https://www.extreme.com.co/extreme/",
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
    ],
  },
  en: {
    "layout.title": `Gabriel Gomez's Portfolio - Android Developer and Programmer with 3 years of experience`,
    "layout.description":
      "Hire Gabriel to build your mobile application. Mobile developer. Specialized in creating unique Android applications.",
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
      "+3 years of experience. <strong>Software Engineer</strong> from Colombia 🇨🇴. Specialized in the development of unique mobile applications.",
    "hero.mail": "Contact me",
    "hero.linkedin": "LinkedIn",
    "hero.resume": "Resume",
    "hero.resume.spanish": "Spanish",
    "hero.resume.english": "English",
    "exp.title": "Experience",
    "projects.title": "Projects",
    "about.title": "About me",
    "about.bio": `<p>      
      I started more than three years ago in Android application development, focusing on Java and the Android ecosystem. During this time, I have worked for <strong>utility companies, specifically developing crew management and billing software</strong>, ensuring the efficient implementation and maintenance of these applications.
    </p>

    <p>
      My interest in improving and optimizing mobile development led me to learn Kotlin and Jetpack Compose, as well as delve into testing for <strong>software quality.</strong>
    </p>

    <p>      
        From Colombia, I am constantly learning, <strong>exploring technologies for cross-platform mobile development, such as Flutter and React Native</strong>, and adopting best practices to keep growing as a developer.
    </p>`,
    "footer.rights": "Almost all rights reserved",
    "exp.know_more": "Know more",
    exp: [
      {
        title: "Software Developer",
        date: "June 2024",
        company: "Extreme Technologies S.A.",
        description:
          "Analyze, design, develop and maintain software solutions for crew control in public utilities such as water, electricity and gas. I also supported a development team to implement a middleware to a billing system for a public transport bus service. We used technologies such as Java, Android, PostgreSQL, among others.",
        link: "https://www.extreme.com.co/extreme/",
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
    ],
  },
} as const;
