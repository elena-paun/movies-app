/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      screens: {
        sm: '476px',
        md: '760px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
