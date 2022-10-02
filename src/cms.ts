import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export const CMS_DIR = path.join(path.resolve('src/cms'));

export type Author = {
	name: string;
	amazon?: string;
};

export type Book = {
	title: string;
	author: Author;
	amazon?: string;
};

export type BookData = {
	authors: Author[];
	books: { [key: string]: Book }
};

export type Experience = {
	title: string;
	company: string;
	date1: number;
	date2: number;
	summary: string;
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
	prof: number;
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
	experience: Experience[];
	pages: Page[];
	projects: Project[];
	skills: Skill[];
	social: Social[];
	page: Page | null | undefined;
};

export const cmpString = (a: string, b: string) => {
	if (a < b) {
		return -1;
	}
	if (a > b) {
		return 1
	}
	return 0;
}

export const load = (url: string): CMSData => {
	const data = <CMSData>(
		Object.fromEntries(
			['experience', 'pages', 'projects', 'skills', 'social'].map((key) => [
				key,
				yaml.load(fs.readFileSync(path.join(CMS_DIR, `${key}.yml`), 'utf8'))
			])
		)
	);
	const books: BookData = <BookData>yaml.load(
		fs.readFileSync(path.join(CMS_DIR, 'books.yml'), 'utf8')
	);
	data.projects.forEach((project) => {
		if (project.book && typeof(project.book) === 'string') {
			project.book = books.books[project.book];
		}
	});
	data.projects.sort((a, b) => -cmpString(a.date, b.date));
	data.page = data.pages.find((page) => url.startsWith(page.url));
	return data;
};
