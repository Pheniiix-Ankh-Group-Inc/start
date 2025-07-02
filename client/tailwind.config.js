// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg-main)',
        carte: 'var(--color-alt)',
        primary: 'var(--color-primary)',
        darkText: 'var(--color-text-dark)',
        mutedText: 'var(--color-text-muted)',
      },
    },
  },
  plugins: [require('daisyui')],
};
