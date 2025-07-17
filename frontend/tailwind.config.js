export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        skin: {
          bg: 'rgb(var(--color-bg) / <alpha-value>)',
          bgSec: 'rgb(var(--color-bg-sec) / <alpha-value>)',
          text: 'rgb(var(--color-text) / <alpha-value>)',
          accent: 'rgb(var(--color-accent) / <alpha-value>)',
          accentSec: 'rgb(var(--color-accent-sec) / <alpha-value>)',
        }
      }
    }
  },
  plugins: []
}
