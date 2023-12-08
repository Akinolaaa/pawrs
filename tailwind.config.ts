import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      nude: '#FDE8B2',
      black1: '#202531',
      grey1: '#7E8494',
      whitish: '#F7F4FB',
      darkBlue: '#202531',
      white: '#FFFFFF',
      purple: '#6F32DF',
    },
    fontFamily: {
      // lato: ['lato', 'sans-serif']
    },
  },
  plugins: [],
}
export default config
