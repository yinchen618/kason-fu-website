/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#06110c',
          900: '#0c1f17',
          850: '#10271d',
          800: '#153326',
          700: '#1e4836',
          600: '#2b5f47',
          500: '#3c7e5f',
          400: '#589e7c',
          300: '#83bea1',
        },
        bronze: {
          900: '#382a17',
          800: '#5a4324',
          700: '#7c5d31',
          600: '#9e773e',
          500: '#b88d4d',
          400: '#cfa565',
          300: '#e2bf85',
          200: '#f0d9ab',
          100: '#faedd2',
          50: '#fdf9f1',
        },
        sand: {
          50: '#fbf9f5',
          100: '#f5f1e9',
          200: '#eae2d3',
          300: '#dcceb8',
        }
      },
      fontFamily: {
        serif: ['"Noto Serif TC"', 'Cinzel', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
