/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'section-light': '0px 10px 35px 0px #cbd5e1',
        'section-dark': '0px 10px 35px 0px #64748b'
      }
    },
  },
  plugins: [],
}

