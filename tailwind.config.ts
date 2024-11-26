import type { Config } from 'tailwindcss'

export default {
  darkMode: 'media',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f4f4f4',
        primary: '#0154AA',
        primaryText: '#585D6E',
        secondaryText: '#333333',
        menuText: '#737A91',
      },
      fontSize: {
        subheading: '16px',
        heading: '22px',
        body: '14px',
      },
      fontWeight: {
        primary: '500',
        subHeading: '600',
      },
    },
  },
  plugins: [],
} satisfies Config
