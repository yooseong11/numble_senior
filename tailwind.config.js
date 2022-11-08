/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx,ts}'],
  theme: {
    colors: {
      'yellow-500': '#EEB83E',
      'yellow-400': '#F4C044',
      'yellow-300': '#F9DB5A',
      'yellow-200': '#FAE37E',
      'yellow-100': '#FDF6D7',
      'brown-500': '#5C504D',
      'brown-400': '#5C504D',
      'brown-300': '#7A7367',
      'brown-200': '#A79582',
      'brown-100': '#DAD4CD',
      'gray-800': '#26282B',
      'gray-700': '#373738',
      'gray-600': '#413F3F',
      'gray-500': '#5A5D63',
      'gray-400': '#8D939D',
      'gray-350': '#DEE1E4',
      'gray-300': '#EBEEF0',
      'gray-200': '#F6F7F8',
      'gray-100': '#F8F8F9',
      'orange-400': '#FF6F1D',
      'orange-300': '#EE8447',
      'orange-200': '#F3C7B0',
      'orange-100': '#F8EFDB',
      'green-400': '#3E7E6A',
      'green-300': '#51A289',
      'green-200': '#66BEAD',
      'green-100': '#CFFDB0',
      'blue-300': '#427CF6',
      'blue-200': '#6BB4E7',
      'blue-100': '#B1E7EB',
      white: '#ffffff',
      purple: '7761C9',
    },
    fontFamily: {
      MICEGothc: ['MICEGothic', 'serif'],
      NotoSans: ['Noto Sans KR', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      borderRadius: {
        '4xl': '3.125rem' /* 50px */,
      },
      dropShadow: {
        card: '0px 0px 16px rgba(92, 80, 77, 0.16)',
      },
      animation: {
        blink: 'blink 1.5s 2.5s ease infinite',
        darker: 'darker 1s 1s ease both',
        hidden: 'hidden 1s .5s ease forwards',
        slideUp: 'slideUp 1s 1s ease both',
        scaleDown: 'scaleDown 2s .5s ease both',
        scaleUp: 'scaleUp 1s 1s ease both',
        'scaleUp-delay2s': 'scaleUp 1s 2s ease both',
        popUp: 'visible .5s ease both',
        'popUp-delay0.5s': 'visible .5s .5s ease both',
        'popUp-delay1s': 'visible .5s 1s ease both',
        slideRight: 'slideRight 1s ease both',
        'slideRight-delay1s': 'slideRight 1s 1s ease both',
        'slideLeft-delay0.5s': 'slideLeft 1s .5s ease both',
        carouselSlideLeft: 'CarouselSlideLeft  2s .5s ease both',
        moveRight: 'moveRight 1s 1s ease both',
      },
      keyframes: {
        darker: {
          '100%': { filter: 'brightness(0.5)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(30%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: 0, transform: 'translateX(30%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: 0, transform: 'translateX(-30%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        scaleDown: {
          '100%': { transform: 'scale(1)' },
        },
        scaleUp: {
          '100%': {
            transform: 'scale(1.1) translateY(-10%)',
            filter: 'drop-shadow(3px 4px 11px #B1ACA3)',
          },
        },
        hidden: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        visible: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        blink: {
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        Carousel: {
          '0%': { opacity: 1, transform: 'translateX(100%)' },
          '100%': { opacity: 0, transform: 'translateX(-100%)' },
        },
        CarouselSlideLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-60%)' },
        },
        moveRight: {
          '100%': { transform: 'translateX(150%)' },
        },
      },
    },
  },
  plugins: [],
}
