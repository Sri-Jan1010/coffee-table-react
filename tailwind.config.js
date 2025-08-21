/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: '#5D4037',
          orange: '#FB8C00',
          teal: '#00ACC1',
          yellow: '#FDD835',
          charcoal: '#2E2E2E'
        }
      },
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui'],
        body: ['ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}
