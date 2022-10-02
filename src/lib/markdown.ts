import * as path from 'path';
import frontmatter from 'remark-frontmatter';
import gfm from 'remark-gfm';
import highlight from 'rehype-highlight';
import parse from 'remark-parse';
import type { Root } from 'mdast';
import rehypeStringify from 'rehype-stringify';
import remark2rehype from 'remark-rehype';
import { unified } from 'unified';
import vfile from 'to-vfile';
import yaml from 'js-yaml';

export type Markdown = {
	slug: string;
	title: string;
	date: string;
	summary: string;
	image?: string;
	content?: string;
}

const parser = unified()
  .use(parse)
  .use(gfm)
  .use(frontmatter, ['yaml']);

const runner = unified()
  .use(remark2rehype)
  .use(highlight)
  .use(rehypeStringify);

export function process(fileName: string): { metadata: Markdown, content: string } {
	const tree: Root = parser.parse(vfile.readSync(fileName));
	let metadata: Markdown | null = null;
	if (tree.children.length > 0 && tree.children[0].type === 'yaml') {
		metadata = <Markdown>yaml.load(tree.children[0].value);
		tree.children = tree.children.slice(1, tree.children.length);
		metadata.date = metadata.date || fileName.slice(0, 10);
	}
	if (!metadata) {
		const message = 'Missing Frontmatter! Expected at least a title and a date';
		return {
			metadata: <Markdown>{
				slug: path.basename(fileName).slice(0, -3),
				title: 'Error!',
				date: '?',
				summary: message
			},
			content: message
		};
	}
	return {
		metadata,
		content: runner.stringify(runner.runSync(tree))
	};
}
