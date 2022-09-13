/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 20s linear infinite',
        marqueeTexture: 'marqueeTexture 20s linear infinite',
        marqueeLine: 'marqueeLine 15s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        cloudMove: 'cloudMove 6s ease infinite',
        burst: 'burst 1s steps(2) infinite',
        'burst-marquee': 'burst 1s steps(2) infinite, marqueeBird 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeBird: {
          '0%': { right: '0' },
          '100%': { right: '1920px' },
        },
        marqueeTexture: {
          '0%': { transform: 'translateX(0%) translateY(0%)' },
          '100%': { transform: 'translateX(-30%) translateY(-20%)' },
        },
        marqueeLine: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-40%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        cloudMove: {
          '50%': { transform: 'translateY(10%)' },
        },
        burst: {
            'from': { backgroundPosition: '0 0' },
            'to': { backgroundPosition: '200% 0' },
        }
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000000",
        "primary-black": "#535353",
        "primary-white": "#F7F7F7",
      },
      fontFamily: {
        sans: ["PressStart2P", "sans-serif"],
      },
    },
  },
  plugins: [],
}
