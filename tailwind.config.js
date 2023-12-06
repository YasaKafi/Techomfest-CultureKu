/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        basicColor: '#F8F4F1',
        secondaryColor: '#E88A1B',
        premierColor: '#96C67F',
        darkColor: '#171927',
      },
      fontFamily: {
        poppins:['Poppins', 'sans-serif'],
        // Ganti dengan font yang Anda inginkan dan nama yang sesuai
      },
    },
  },
  plugins: [],
}

