module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    "node_modules/flowbite-svelte/**/*.{js,ts,svelte}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};