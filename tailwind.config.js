/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
module.exports = {
  content: ['index.html', './src/**/*.{html,js,jsx}'], // Include any files that you want to apply the styles to
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
