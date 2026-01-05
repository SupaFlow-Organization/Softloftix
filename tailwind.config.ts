import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'slideInBlur': 'slideInBlur 0.8s ease-out 1.2s forwards',
        'fadeSlideIn': 'fadeSlideIn 1s ease-out forwards',
        'marquee': 'marquee 60s linear infinite',
      },
      keyframes: {
        fadeSlideIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)', filter: 'blur(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slideInBlur: {
          'from': { opacity: '0', transform: 'translateY(10px)', filter: 'blur(5px)' },
          'to': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;