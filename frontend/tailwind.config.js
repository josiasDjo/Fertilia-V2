export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        skin: {
          bg: 'var(--color-bg)',
          bgSec: 'var(--color-bg-sec)',
          text: 'var(--color-text)',
          accent: 'var(--color-accent)',
          accentSec: 'var(--color-accent-sec)',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
