/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        darkGray: 'hsl(0, 0%, 55%)', // Add a comma here
        veryDarkGray: 'hsl(0, 0%, 41%)', // Add a comma here
      },
      fontFamily: {
        body: ['"Poppins"', 'sans-serif', 'Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
