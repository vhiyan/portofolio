/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Bright Aerospace Palette
        aerospace: {
          sky: '#E0F2FE',     // Ultra light sky (backgrounds)
          cloud: '#F0F9FF',   // Cloud white
          accent: '#0EA5E9',  // Sky Blue 500 (buttons/highlights)
          // Text Colors
          navy: '#0C4A6E',    // Sky 900 (Headings)
          text: '#334155',    // Slate 700 (Body text)
        }
      },
      backgroundImage: {
        'aerospace-gradient': 'linear-gradient(to bottom, #E0F2FE 0%, #FFFFFF 100%)', // Sky to White
        'glass-card': 'linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)',
      }
    },
  },
  plugins: [],
}
