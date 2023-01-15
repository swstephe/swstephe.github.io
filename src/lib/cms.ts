export type Author = {
  name: string;
  amazon?: string;
};

export type BlogDocument = {
  article?: string | null;
  image: string | null;
  slug: string;
  summary: string;
  timestamp: string;
  title: string;
};

export type Blurb = {
  name: string;
  content: string;
};

export type Book = {
  _id: string;
  title: string;
  author: Author;
  amazon?: string;
};

export type Location = {
  address: string;
  text: string;
};

export type Experience = {
  title: string;
  consultant: boolean;
  company: string;
  location: Location[];
  logo?: string;
  date1: number;
  date2: number;
  summary: string;
};

export type Info = {
  name: string;
  title: string;
  location: string;
  experience: string;
  availability: string;
};

export type Page = {
  url: string;
  title: string;
  category: string;
};

export type Project = {
  name: string;
  date: string;
  title: string;
  book: string | Book;
  summary: string;
  documentation?: string;
  pypi?: string;
};

export type Skill = {
  skill: string;
  prof: string;
  icon?: string;
  group?: string;
};

export type Social = {
  name: string;
  icon: string;
  link: string;
  text: string;
};

export type CMSData = {
  blog: BlogDocument[];
  blurbs: Record<string, Blurb>;
  books: Record<string, Book>;
  experience: Experience[];
  info: Info;
  pages: Page[];
  projects: Project[];
  skills: Skill[];
  social: Social[];
};

export const load = async (): Promise<CMSData> => {
  const cms: CMSData = await fetch('http://localhost:8000/')
    .then((rsp) => rsp.json());
  return <CMSData>cms;
};

export const loadPost = async (slug: string): Promise<BlogDocument> => {
  return await fetch(`http://localhost:8000/blog/${slug}`)
    .then((rsp) => rsp.json());
}