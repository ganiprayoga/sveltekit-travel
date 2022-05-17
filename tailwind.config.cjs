module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,css}'],
  theme: {
    fontFamily: {
      sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif']
    },
    extend: {
      aspectRatio: {
        '2/1': '2 / 1',
        '3/1': '3 / 1',
        '5/2': '5 / 2'
      },
    }
  },
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#E0A82E",
        "secondary": "#F9D72F",
        "accent": "#18182F",
        "neutral": "#18182F",
        "base-100": "#f3f3f3",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      },
    }],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ]
};