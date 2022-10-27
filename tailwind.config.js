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
      'purple':'7761C9'
    },
    fontFamily: {
      'MICEGothc': ['MICEGothic', 'serif'],
      'roboto': ['roboto', 'serif'],
    },
    extend: {
      borderRadius: {
        '4xl': '3.125rem' /* 50px */
      }
    },
  },
  plugins: [],
}
