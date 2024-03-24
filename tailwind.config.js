/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: '#A60202',
        yellow: '#F9D423',
        customGreen: '#00FF00',
        white: "#fff",
        gray: "#0c0c0c",
        dimgray: "#4d4d4d",
        gainsboro: "#d9d9d9",
      },
      opacity: {
        '15': '0.15',
        '85': '0.85'
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(to right, #A60202, #F9D423)',
      },
      keyframes: {
        animateCircle: {
          '0%': { transform: 'perspective(1000px) rotateY(0deg) rotateX(15deg) translateY(-30px)' },
          '100%': { transform: 'perspective(1000px) rotateY(360deg) rotateX(15deg) translateY(-30px)' },
        },
        distortAndGrow: {
          '0%, 100%': { transform: 'skew(0deg, 0deg)', fontSize: '100%' },
          '25%': { transform: 'skew(5deg, -3deg)', fontSize: '105%' },
          '50%': { transform: 'skew(-3deg, 2deg)', fontSize: '108%' },
          '75%': { transform: 'skew(4deg, -1deg)', fontSize: '110%' },
        },
        fallOff: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: 0 },
        },
        aitf: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        // Add other keyframes here
      },
      variants: {
        extend: {
          opacity: ['group-hover'],
        },
      },
      animation: {
        'rotate-circle': 'animateCircle 40s linear infinite',
        distortAndGrow: 'distortAndGrow 0.5s infinite',
        fallOff: 'fallOff 3s forwards',
        aitf: 'aitf 80s linear infinite',
      },
      spacing: {},
      fontFamily: {
        'astro': ['astro', 'sans-serif'],
        'rhapsody': ['rhapsody', 'sans-serif'],
        "helvetica-neue": "'Helvetica Neue'",
      },
      borderRadius: {
        "3xs": "10px",
        "4xl-3": "23.3px",
        "81xl": "100px",
      },
    },
    fontSize: {
      xl: "100px",
      "5xl": "24px",
      "9xl": "28px",
      "15xl": "34px",
      sm: "14px",
      md: "18px",
      lg: "35px",
      lgx: "43px",
      "51xl": "70px",
      "4xl": "23px",
      "3xl": "21px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
