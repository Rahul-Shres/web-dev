/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        skin:{
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          primaryBlue: 'var(--color-text-blue)',
        },
      },
      backgroundColor:{
        skin:{
          fill: 'var(--color-fill)',
          'button-accent': 'var(--color-text-blue)',
          'button-accent-hover': 'var(--color-text-hover)',
        }
      }
    },
  },
  plugins: [],
}