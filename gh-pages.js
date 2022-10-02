import { publish } from 'gh-pages';

publish(
  'build',
  {
    branch: 'svelte-gh-pages',
    repo: 'https://github.com/swstephe/swstephe.github.io',
    user: {
      name: 'Scott Stephens',
      email: 'zahi.stephens@gmail.com',
    },
    dotfiles: true
  },
  () => {
    console.log("Deploy complete")
  }
)