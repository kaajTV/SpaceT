/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // Home Section
        'home-desktop': "url('/background-home-desktop.jpg')",
        'home-tablet': "url('/background-home-tablet.jpg')",
        'home-mobile': "url('/background-home-mobile.jpg')",

        // Destination Section
        'destination-desktop': "url('/background-destination-desktop.jpg')",
        'destination-tablet': "url('/background-destination-tablet.jpg')",
        'destination-mobile': "url('/background-destination-mobile.jpg')",

        // Crew Section
        'crew-desktop': "url('/background-crew-desktop.jpg')",
        'crew-tablet': "url('/background-crew-tablet.jpg')",
        'crew-mobile': "url('/background-crew-mobile.jpg')",

        // Technology Section
        'technology-desktop': "url('/background-technology-desktop.jpg')",
        'technology-tablet': "url('/background-technology-tablet.jpg')",
        'technology-mobile': "url('/background-technology-mobile.jpg')",
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'barlow-condensed': ['"Barlow Condensed"', 'sans-serif'],
        'bellefair': ['Bellefair', 'serif'],
      },
    },
  },
  plugins: [],
}