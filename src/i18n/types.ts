// src/i18n/types.ts

export interface ExperienceItem {
  title: string;
  date: string;
  company: string;
  description: string;
  bulletPoints: string[];
  link?: string;
}

export type LinkKind = "googlePlay" | "web";
export interface ProjectLink {
  kind: LinkKind;
  href: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  github?: string;
  link?: ProjectLink;
  image: string;
  tags: string[];
}

// Claves “planas” con puntos y secciones estructuradas
export interface UILocale {
  "layout.title": string;
  "layout.description": string;

  "nav.home": string;
  "nav.projects": string;
  "nav.about": string;
  "nav.contact": string;
  "nav.system": string;
  "nav.light": string;
  "nav.dark": string;

  "hero.badge": string;
  "hero.title": string;
  "hero.bio": string;
  "hero.mail": string;
  "hero.linkedin": string;
  "hero.resume": string;
  "hero.resume.spanish": string;
  "hero.resume.english": string;

  "exp.title": string;
  "exp.know_more": string;
  exp: ExperienceItem[];

  "projects.title": string;
  "projects.code": string;
  projects: ProjectItem[];

  "about.title": string;
  "about.bio": string;

  "footer.rights": string;
}

export type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];
export type UIStringKey = StringKeys<UILocale>;
