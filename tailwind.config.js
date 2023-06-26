/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            h1: {
              color: '#1f2937',
            },
            h2: {
              color: '#1f2937',
            },
            h3: {
              color: '#1f2937',
            },


          },
        },
      },
      zIndex: {
        '100': '100',
      }
    },
    color: {
      Yellow: '50'
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

// 
// className="main-introname tracking-normal leading-normal font-sans text-4xl sm:text-6xl mr-2"