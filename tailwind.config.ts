import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    extend: {
      backgroundColor: {
        'layer-00': 'var(--bg-layer-00)',
        'layer-01': 'var(--bg-layer-01)',
        'layer-02': 'var(--bg-layer-02)',
        'layer-03': 'var(--bg-layer-03)',
        pill: 'var(--pill-bg)',
        'pill-active': 'var(--active-pill-bg)',
        'pill-active-hover': 'var(--active-pill-hovered-bg)',
        'pill-hover': 'var(--pill-hovered-bg)',
      },
      colors: {
        'gray-00': 'var(--gray-00)',
        'gray-01': 'var(--gray-01)',
        'green-00': 'var(--green-00)',
        'green-01': 'var(--green-01)',
        'orange-00': 'var(--orange-00)',
        'orange-01': 'var(--orange-01)',
        'pink-00': 'var(--pink-00)',
        'pink-01': 'var(--pink-01)',
        'purple-00': 'var(--purple-00)',
        'purple-01': 'var(--purple-01)',
      },
      textColor: {
        primary: 'var(--text-00)',
        secondary: 'var(--text-01)',
        tertiary: 'var(--text-02)',
      },
    },
  },
};
export default config;
