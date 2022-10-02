import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.md'],
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null,
      trailingSlash: 'always'
    }),
  },
  preprocess: [
    mdsvex({extensions: ['.md', '.svx']}),
    sveltePreprocess({
      postcss: true
    }),
  ]
};

export default config;
